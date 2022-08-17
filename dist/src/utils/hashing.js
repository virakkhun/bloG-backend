"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareHash = exports.createHashPassword = exports.generateSalt = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const generateSalt = () => {
    return bcrypt_1.default.genSaltSync(10);
};
exports.generateSalt = generateSalt;
const createHashPassword = (password) => {
    return bcrypt_1.default.hashSync(password, (0, exports.generateSalt)());
};
exports.createHashPassword = createHashPassword;
const compareHash = (password, hashPassword) => {
    return bcrypt_1.default.compareSync(password, hashPassword);
};
exports.compareHash = compareHash;
//# sourceMappingURL=hashing.js.map