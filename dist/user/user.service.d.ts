export declare function fineOneByEmail(email: string): Promise<import(".prisma/client").User | null>;
export declare function createOneUser(email: string, password: string): Promise<import(".prisma/client").User>;
export declare function deleteOneUser(id: string): Promise<import(".prisma/client").User>;
