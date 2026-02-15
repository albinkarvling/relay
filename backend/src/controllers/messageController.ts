import type { FastifyReply, FastifyRequest } from "fastify";

import { createMessage, getMessages } from "../repositories/messageRepository.js";

import type { CreateMessageBody } from "../types/message.js";

type MessageParams = {
	channelId: string;
};

export async function handleCreateMessage(
	request: FastifyRequest<{
		Params: MessageParams;
		Body: CreateMessageBody;
	}>,
	reply: FastifyReply,
) {
	const { channelId } = request.params;

	const { content } = request.body;

	if (!content || content.trim() === "") {
		reply.status(400).send({
			error: "Message content is required",
		});
		return;
	}

	const userId = request.userId;

	const message = await createMessage(channelId, userId, content);

	return message;
}

export async function handleGetMessages(
	request: FastifyRequest<{
		Params: MessageParams;
	}>,
	reply: FastifyReply,
) {
	const { channelId } = request.params;

	return getMessages(channelId);
}
