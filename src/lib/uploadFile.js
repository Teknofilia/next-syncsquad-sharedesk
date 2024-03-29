import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
  region: "ap-southeast-1",
  credentials: {
    accessKeyId: process.env.AWSS3_ACCESS_KEY,
    secretAccessKey: process.env.AWSS3_SECRET_KEY,
  },
});

export async function uploadFile({ Body, Key, ContentType, Dir }) {
  const bytes = await Body.arrayBuffer(); // File -> ArrayBuffer -> Buffer.from(ArrayBuffer)
  const buffer = Buffer.from(bytes);

  const command = new PutObjectCommand({
    Bucket: "sharedesk",
    Body: buffer,
    Key: `${Dir}/${Key}`,
    ContentType,
  });

  try {
    const res = await s3Client.send(command);
  } catch (error) {
    console.log(error);
  }
}
