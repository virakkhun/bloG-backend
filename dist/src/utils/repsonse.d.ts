import { CommonMessage } from "./message";
import { StatusCode } from "./statusCode";
export declare const CommonResponse: <DataResponseType = {}>({ code, msg, data, }: {
    code: StatusCode;
    msg: CommonMessage;
    data: DataResponseType;
}) => {
    statusCode: StatusCode;
    message: CommonMessage;
    data: DataResponseType;
};
