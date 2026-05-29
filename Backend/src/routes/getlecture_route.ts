import { Router } from 'express';
import { getLectures } from '../controllers/getlecture';

const router = Router();

router.get('/lectures', getLectures);

export default router;