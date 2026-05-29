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

//video delete helper function
export const deleteVideoFromCloudinary = async (videoUrl: string): Promise<void> => {
    // Extracts "growzzy_lectures/abc123" from full Cloudinary URL
    const uploadIndex = videoUrl.indexOf('/upload/');
    const afterUpload = videoUrl.substring(uploadIndex + 8); // "v123456/growzzy_lectures/abc123.mp4"

    // Remove version segment (v + numbers)
    const withoutVersion = afterUpload.replace(/^v\d+\//, ''); // "growzzy_lectures/abc123.mp4"

    // Remove file extension
    const publicId = withoutVersion.replace(/\.[^/.]+$/, ''); // "growzzy_lectures/abc123"

    console.log('Deleting publicId:', publicId); // should print: growzzy_lectures/abc123

    const result = await cloudinary.uploader.destroy(publicId, { resource_type: 'video' });
    console.log('Cloudinary delete result:', result); // should print: { result: 'ok' }
};