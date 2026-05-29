import { Request, Response } from 'express';
import { prisma } from '../lib/prisma';
import { deleteVideoFromCloudinary } from '../lib/cloudinary';

export const deleteLecture = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const lecture = await prisma.lecture.findUnique({
            where: { id: String(id) }
        });
        if (!lecture) {
            return res.status(404).json({ success: false, message: 'Lecture not found' });
        }
        await deleteVideoFromCloudinary(lecture.videoUrl);
        const deletedLecture = await prisma.lecture.delete({
            where: { id: String(id) }
        });
        return res.status(200).json({
            success: true,
            message: 'Lecture deleted successfully!',
            data: deletedLecture
        });
    } catch (error: any) {
        console.error('Delete Lecture Controller Error:', error);
        return res.status(500).json({ success: false, message: error.message || 'Internal Server Error' });
    }
};