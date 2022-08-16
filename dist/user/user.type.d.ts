export interface ICreateUser {
    email: string;
    password: string;
    image: string;
    name: string;
}
export declare type ILoginUser = Partial<ICreateUser>;
