import type { FastifyReply, FastifyRequest } from "fastify";

import { createWorkspace, getWorkspaces } from "../repositories/workspaceRepository.js";

export async function handleGetWorkspaces() {
	return getWorkspaces();
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

	if (!name || !name?.trim()) {
		return reply.status(400).send({
			error: "Workspace name is required",
		});
	}

	const workspace = await createWorkspace(name);

	return reply.status(201).send(workspace);
}
