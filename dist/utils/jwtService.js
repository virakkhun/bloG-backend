"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const SECRET_KEY = process.env.SECRET_KEY;
const generateToken = async (payload) => {
    return jsonwebtoken_1.default.sign(payload, SECRET_KEY, {
        expiresIn: 60 * 60 * 24 * 7,
    });
};
exports.generateToken = generateToken;
const verifyToken = async (token) => {
    return jsonwebtoken_1.default.verify(token, SECRET_KEY);
};
exports.verifyToken = verifyToken;
//# sourceMappingURL=jwtService.js.map