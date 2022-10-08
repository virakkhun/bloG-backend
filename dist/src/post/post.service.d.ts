import { Post, User } from "@prisma/client";
import { ICreatePost, IUpdatePost } from "./post.types";
export declare function getAllPostService(): Promise<{
    statusCode: import("../utils/statusCode").StatusCode;
    message: import("../utils/message").CommonMessage;
    data: null;
} | {
    statusCode: import("../utils/statusCode").StatusCode;
    message: import("../utils/message").CommonMessage;
    data: Partial<Post & User>[];
}>;
export declare function createOnePostService(payload: ICreatePost): Promise<{
    statusCode: import("../utils/statusCode").StatusCode;
    message: import("../utils/message").CommonMessage;
    data: null;
} | {
    statusCode: import("../utils/statusCode").StatusCode;
    message: import("../utils/message").CommonMessage;
    data: Post;
}>;
export declare function deletePostService(id: string): Promise<{
    statusCode: import("../utils/statusCode").StatusCode;
    message: import("../utils/message").CommonMessage;
    data: null;
} | {
    statusCode: import("../utils/statusCode").StatusCode;
    message: import("../utils/message").CommonMessage;
    data: Post;
}>;
export declare function updatePostService(id: string, payload: IUpdatePost): Promise<{
    statusCode: import("../utils/statusCode").StatusCode;
    message: import("../utils/message").CommonMessage;
    data: null;
} | {
    statusCode: import("../utils/statusCode").StatusCode;
    message: import("../utils/message").CommonMessage;
    data: Post;
}>;
export declare function getPostService(id: string): Promise<{
    statusCode: import("../utils/statusCode").StatusCode;
    message: import("../utils/message").CommonMessage;
    data: null;
} | {
    statusCode: import("../utils/statusCode").StatusCode;
    message: import("../utils/message").CommonMessage;
    data: Post & {
        comment: import(".prisma/client").Comment[];
        author: User;
    };
}>;
