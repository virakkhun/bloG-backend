import { ICreatePost, IUpdatePost } from "./post.types";
export declare function getAllPostWithCommentService(): Promise<(import(".prisma/client").Post & {
    author: import(".prisma/client").User;
})[]>;
export declare function createOnePostService(payload: ICreatePost): Promise<import(".prisma/client").Post>;
export declare function deletePostService(id: string): Promise<import(".prisma/client").Post>;
export declare function updatePostService(id: string, payload: IUpdatePost): Promise<import(".prisma/client").Post>;
export declare function getPostWithCommentService(id: string): Promise<import(".prisma/client").Post | null>;
