import type { FastifyRequest } from "fastify";
import { addMember, getMembers } from "./memberRepository.js";

export async function handleGetMembers(
	request: FastifyRequest<{
		Params: { workspaceId: string };
	}>,
) {
	const { workspaceId } = request.params;

	return getMembers(workspaceId);
}

export async function handleAddMember(
	request: FastifyRequest<{
		Params: { workspaceId: string; userId: string };
	}>,
) {
	const { workspaceId, userId } = request.params;
	return addMember(workspaceId, userId, "member");
}
