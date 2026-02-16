import type { FastifyReply, FastifyRequest } from "fastify";

export async function requireAuth(request: FastifyRequest, reply: FastifyReply) {
	const signedCookie = request.cookies.userId;

	if (!signedCookie) {
		return reply.status(401).send({
			message: "Unauthorized",
		});
	}

	const { value, valid } = request.unsignCookie(signedCookie);

	if (!valid) {
		return reply.status(401).send({
			message: "Invalid cookie",
		});
	}

	request.userId = value;
}
