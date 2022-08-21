export interface ICreatePost {
    slug: string;
    title: string;
    body: string;
    authorId: string;
    images: string;
}
export interface IUpdatePost extends Partial<ICreatePost> {
}
