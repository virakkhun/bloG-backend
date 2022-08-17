import { ICreateComment } from "./comment.type";
export declare function PostCommentService(payload: ICreateComment): Promise<import(".prisma/client").Comment>;
export declare function GetAllCommentInOnePostService(postId: string): Promise<import(".prisma/client").Comment[]>;
