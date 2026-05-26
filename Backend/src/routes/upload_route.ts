import { Router } from 'express';
import multer from 'multer';
import { uploadLecture } from '../controllers/upload';

const router = Router();

// Multer memory storage configuration
const storage = multer.memoryStorage();
const upload = multer({
    storage,
    limits: { fileSize: 100 * 1024 * 1024 } // 100MB limit max for videos
});

// POST route for video upload (Single file with field name 'video')
router.post('/upload', upload.single('video'), uploadLecture);

export default router;