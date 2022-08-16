import { ICreatePost } from "./post.types";
export declare function getAllPostWithComement(): Promise<(import(".prisma/client").Post & {
    comment: import(".prisma/client").Comment[];
})[]>;
export declare function createOnePost(payload: ICreatePost): Promise<import(".prisma/client").Post>;
