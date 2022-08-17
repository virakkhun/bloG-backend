export declare const CommonResponse: <DataResponseType = {}>(code: number, msg: string, data: DataResponseType) => {
    statusCode: number;
    message: string;
    data: DataResponseType;
};
