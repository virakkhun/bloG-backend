export declare const generateSalt: () => string;
export declare const createHashPassword: (password: string) => string;
export declare const compareHash: (password: string, hashPassword: string) => boolean;
