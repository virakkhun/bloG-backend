"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadServiceToS3Storage = void 0;
const s3_1 = __importDefault(require("aws-sdk/clients/s3"));
const fs_1 = __importDefault(require("fs"));
const bucket = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;
const S3 = new s3_1.default({
    accessKeyId,
    secretAccessKey,
    region,
});
async function UploadServiceToS3Storage(file) {
    console.log(file.filename);
    const fileStream = fs_1.default.createReadStream(file.path);
    const uploadParams = {
        Bucket: bucket,
        Body: fileStream,
        Key: file.filename,
    };
    return S3.upload(uploadParams).promise();
}
exports.UploadServiceToS3Storage = UploadServiceToS3Storage;
//# sourceMappingURL=s3.service.js.map