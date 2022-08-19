import s3 from "aws-sdk/clients/s3";
export declare function UploadServiceToS3Storage(file: any): Promise<s3.ManagedUpload.SendData>;
