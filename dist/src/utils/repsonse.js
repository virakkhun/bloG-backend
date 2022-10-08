"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonResponse = void 0;
const CommonResponse = ({ code, msg, data, }) => {
    return {
        statusCode: code,
        message: msg,
        data: data,
    };
};
exports.CommonResponse = CommonResponse;
//# sourceMappingURL=repsonse.js.map