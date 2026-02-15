import type { preHandlerHookHandler } from "fastify";
import { isMember } from "../repositories/memberRepository.js";

type WorkspaceParams = {
	workspaceId: string;
};

export const requireMember: preHandlerHookHandler = async (request, reply) => {
	const { workspaceId } = request.params as WorkspaceParams;

	const userId = request.userId;

	const member = await isMember(workspaceId, userId);

	if (!member) {
		reply.status(403).send({
			error: "Unauthorized access",
		});
		return;
	}
};
