import { v2 as cloudinary } from 'cloudinary'

// cloudinary config

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

// Video upload helper function
export const uploadVideoToCloudinary = (fileBuffer: Buffer): Promise<string> => {
    return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
            {
                resource_type: 'video', // Taaki Cloudinary ise video treat kare
                folder: 'growzzy_lectures', // Cloudinary folder name
            },
            (error, result) => {
                if (error) {
                    return reject(error);
                }
                resolve(result?.secure_url || '');
            }
        );

        uploadStream.end(fileBuffer);
    });
};  