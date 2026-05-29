import {Router} from 'express';
import { deleteLecture } from '../controllers/deletelecture';

const router = Router();
router.delete('/lectures/:id', deleteLecture);

export default router;