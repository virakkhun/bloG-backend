import { ICreateComment } from "./comment.type";
export declare function PostCommentService(payload: ICreateComment): Promise<{
    statusCode: import("../utils/statusCode").StatusCode;
    message: import("../utils/message").CommonMessage;
    data: null;
} | {
    statusCode: import("../utils/statusCode").StatusCode;
    message: import("../utils/message").CommonMessage;
    data: import(".prisma/client").Comment;
}>;
export declare function GetAllCommentInOnePostService(postId: string): Promise<{
    statusCode: import("../utils/statusCode").StatusCode;
    message: import("../utils/message").CommonMessage;
    data: null;
} | {
    statusCode: import("../utils/statusCode").StatusCode;
    message: import("../utils/message").CommonMessage;
    data: import(".prisma/client").Comment[];
}>;
