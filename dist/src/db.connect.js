"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseInitial = void 0;
const prisma_instance_1 = require("./utils/prisma.instance");
const DatabaseInitial = async () => {
    await (0, prisma_instance_1.PrismaInstance)()
        .$connect()
        .then(async () => {
        await (0, prisma_instance_1.PrismaInstance)().$disconnect();
    })
        .catch(async (e) => {
        if (e) {
            await (0, prisma_instance_1.PrismaInstance)().$disconnect();
            process.exit(1);
        }
    });
};
exports.DatabaseInitial = DatabaseInitial;
//# sourceMappingURL=db.connect.js.map