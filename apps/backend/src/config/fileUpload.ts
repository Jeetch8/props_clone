import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
  region: "your-region", // Specify your AWS region
  credentials: {
    accessKeyId: "your-access-key-id", // Specify your AWS access key ID
    secretAccessKey: "your-secret-access-key", // Specify your AWS secret access key
  },
});

export const uploadFile = async (file: Express.Multer.File) => {
  const params = {
    Bucket: "your-bucket-name",
    Key: file.originalname, // Set desired filename on S3
    Body: file.buffer,
  };

  try {
    await s3Client.send(new PutObjectCommand(params));
    console.log("File uploaded successfully!");
  } catch (error) {
    console.error("Error uploading file:", error);
  }
};
