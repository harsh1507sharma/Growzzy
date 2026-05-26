import { Request, Response } from 'express';
import { prisma } from '../lib/prisma';
import { uploadVideoToCloudinary } from '../lib/cloudinary';

export const uploadLecture = async (req: Request, res: Response) => {
    try {
        const { title, description, educatorId } = req.body;
        const file = req.file; // Multer is file ko yahan laakar dega

        // Validation Check
        if (!file) {
            return res.status(400).json({ success: false, message: 'Please upload a video file' });
        }
        if (!title || !educatorId) {
            return res.status(400).json({ success: false, message: 'Title and Educator ID are required' });
        }

        // 1. Upload video to Cloudinary using your helper

        const videoUrl = await uploadVideoToCloudinary(file.buffer);

        // 2. Save the URL and details into NeonDB via Prisma
        const newLecture = await prisma.lecture.create({
            data: {
                title,
                description,
                videoUrl,
                educatorId
            }
        });

        return res.status(201).json({
            success: true,
            message: 'Lecture uploaded successfully!',
            data: newLecture
        });

    } catch (error: any) {
        console.error('Upload Controller Error:', error);
        return res.status(500).json({ success: false, message: error.message || 'Internal Server Error' });
    }
};