import type { preHandlerHookHandler } from "fastify";
import { sql } from "../lib/db.js";
import { isMember } from "../repositories/memberRepository.js";

type ChannelParams = {
	channelId: string;
};

export const requireChannelMember: preHandlerHookHandler = async (request, reply) => {
	const { channelId } = request.params as ChannelParams;

	const rows = await sql`
            SELECT workspace_id
            FROM channels
            WHERE id = ${channelId}
        `;

	const workspaceId = rows[0]?.workspace_id;

	if (!workspaceId) {
		reply.status(404).send({
			error: "Channel not found",
		});
		return;
	}

	const member = await isMember(workspaceId, request.userId);

	if (!member) {
		reply.status(403).send({
			error: "Unauthorized access",
		});
		return;
	}
};
