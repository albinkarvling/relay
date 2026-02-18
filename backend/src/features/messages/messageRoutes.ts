import { FastifyInstance } from "fastify";
import { requireChannelMember } from "@/features/channels/requireChannelMember.js";
import { requireUser } from "@/plugins/requireUser.js";
import { handleCreateMessage, handleGetMessages } from "./messageController.js";
import { CreateMessageBody } from "./messageTypes.js";

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
