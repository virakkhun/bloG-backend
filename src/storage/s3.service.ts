import s3 from "aws-sdk/clients/s3"
import fs from "fs"

const bucket = process.env.AWS_BUCKET_NAME
const region = process.env.AWS_REGION
const accessKeyId = process.env.AWS_ACCESS_KEY
const secretAccessKey = process.env.AWS_SECRET_KEY

const S3 = new s3({
  accessKeyId,
  secretAccessKey,
  region,
})

export async function UploadServiceToS3Storage(file: any) {
  const fileStream = fs.createReadStream(file.path)
  const uploadParams: any = {
    Bucket: bucket,
    Body: fileStream,
    Key: file.filename,
  }

  return S3.upload(uploadParams).promise()
}
