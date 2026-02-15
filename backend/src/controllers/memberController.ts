import type { FastifyRequest, FastifyReply } from "fastify";
import { getMembers } from "../repositories/memberRepository.js";

export async function handleGetMembers(
	request: FastifyRequest<{
		Params: { workspaceId: string };
	}>,
	reply: FastifyReply,
) {
	const { workspaceId } = request.params;

	return getMembers(workspaceId);
}
