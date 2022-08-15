"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_instance_1 = require("../../utils/prisma.instance");
async function users(fastify, options) {
    fastify.get("/all-users", async (request, reply) => {
        const users = await (0, prisma_instance_1.PrismaInstance)().user.findMany({
            include: {
                posts: true,
            },
        });
        return users;
    });
}
exports.default = users;
//# sourceMappingURL=create-user.route.js.map