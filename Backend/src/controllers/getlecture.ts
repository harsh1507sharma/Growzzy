import { Request, Response } from 'express';
import { prisma } from '../lib/prisma';

export const getLectures = async (req: Request, res: Response) => {
    try {
        const educatorId = req.query.educatorId as string | undefined;  // Optional query parameter to filter by educator ID
        const lectures = await prisma.lecture.findMany({    // getting all lectures from the database
            where: {
                educatorId: educatorId
            }
        });
        return res.status(200).json({       // returning the lectures in the response
            success: true,
            data: lectures
        });
    } catch (error: any) {
        console.error('Get Lectures Controller Error:', error);
        return res.status(500).json({ success: false, message: error.message || 'Internal Server Error' });
    }
};