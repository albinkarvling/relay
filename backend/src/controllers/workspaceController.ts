import type { FastifyReply, FastifyRequest } from "fastify";

import { createWorkspace, getWorkspaces } from "../repositories/workspaceRepository.js";
import { addMember } from "../repositories/memberRepository.js";

export async function handleGetWorkspaces(request: FastifyRequest) {
	return getWorkspaces(request.userId);
}

type CreateWorkspaceBody = {
	name: string;
};
export async function handleCreateWorkspace(
	request: FastifyRequest<{
		Body: CreateWorkspaceBody;
	}>,
	reply: FastifyReply,
) {
	const { name } = request.body;
	const userId = request.userId;

	const workspace = await createWorkspace(name, userId);

	await addMember(workspace.id, userId, "owner");

	return workspace;
}
