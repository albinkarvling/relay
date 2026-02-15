import type { preHandlerHookHandler } from "fastify";

export const requireUser: preHandlerHookHandler = async (request, reply) => {
	const cookie = request.cookies.userId;

	if (!cookie) {
		reply.status(401).send({
			error: "Not logged in",
		});
		return;
	}

	const { value, valid } = request.unsignCookie(cookie);

	if (!valid) {
		reply.status(401).send({
			error: "Invalid cookie",
		});
		return;
	}

	request.userId = value;
};
