import type { FastifyReply, FastifyRequest } from "fastify";
import { CreateChannelBody } from "./channelTypes.js";
import { createChannel, getChannels } from "./channelRepository.js";

type WorkspaceParams = {
	workspaceId: string;
};

export async function handleCreateChannel(
	request: FastifyRequest<{
		Params: WorkspaceParams;
		Body: CreateChannelBody;
	}>,
	reply: FastifyReply,
) {
	const { workspaceId } = request.params;
	const { name, description } = request.body;

	if (!name || name.trim() === "") {
		reply.status(400).send({
			message: "Channel name is required",
		});
		return;
	}

	const userId = request.userId;

	const channel = await createChannel(workspaceId, name, description, userId);

	return channel;
}

export async function handleGetChannels(
	request: FastifyRequest<{
		Params: WorkspaceParams;
	}>,
	reply: FastifyReply,
) {
	const { workspaceId } = request.params;

	return getChannels(workspaceId);
}
