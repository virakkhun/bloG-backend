import jwt from "jsonwebtoken";
export declare const generateToken: <Type>(payload: Type extends {} ? Type : string) => Promise<string>;
export declare const verifyToken: (token: string) => Promise<string | jwt.JwtPayload>;
