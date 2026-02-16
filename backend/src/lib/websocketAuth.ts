import type { FastifyRequest } from "fastify";

export function getUserIdFromWebSocket(request: FastifyRequest): string | null {
	const cookie = request.cookies.userId;

	if (!cookie) return null;

	const { value, valid } = request.unsignCookie(cookie);

	if (!valid) return null;

	return value;
}
