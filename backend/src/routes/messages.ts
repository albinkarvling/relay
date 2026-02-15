import { FastifyInstance } from "fastify";
import { requireUser } from "../plugins/requireUser.js";
import { handleCreateMessage, handleGetMessages } from "../controllers/messageController.js";
import { CreateMessageBody } from "../types/message.js";
import { requireChannelMember } from "../plugins/requireChannelMember.js";

type MessageParams = {
	channelId: string;
};

export async function messageRoutes(app: FastifyInstance) {
	app.get<{ Params: MessageParams }>(
		"/",
		{
			preHandler: [requireUser, requireChannelMember],
		},
		handleGetMessages,
	);

	app.post<{
		Params: MessageParams;
		Body: CreateMessageBody;
	}>(
		"/",
		{
			preHandler: [requireUser, requireChannelMember],
		},
		handleCreateMessage,
	);
}
