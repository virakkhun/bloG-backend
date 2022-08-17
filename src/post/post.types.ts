export interface ICreatePost {
  slug: string
  title: string
  body: string
  authorId: string
}

export interface IUpdatePost extends Partial<ICreatePost> {}
