import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth';
import uploadRoutes from './routes/upload_route';
import getLectureRoutes from './routes/getlecture_route';
import deleteLectureRoutes from './routes/deletelecture_route';

const app = express();
console.log("Cloud Name:", process.env.CLOUDINARY_CLOUD_NAME);
console.log("API Key:", process.env.CLOUDINARY_API_KEY);
console.log("API Secret:", process.env.CLOUDINARY_API_SECRET);

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api', uploadRoutes);  // taaki ye '/api/upload' route ban sake
app.use('/api', getLectureRoutes);  //get requeses ke liye '/api/lectures' route ban sake 
app.use('/api', deleteLectureRoutes);  // delete requeses ke liye '/api/lectures/:id' route ban sake  

app.get('/', (req, res) => {
  res.send('Grozzy Backend is running!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
