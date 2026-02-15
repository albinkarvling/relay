import { FastifyInstance } from "fastify";
import { requireUser } from "../plugins/requireUser.js";
import { requireMember } from "../plugins/requireMember.js";
import { handleCreateChannel, handleGetChannels } from "../controllers/channelController.js";
import { CreateChannelBody } from "../types/channel.js";

type WorkspaceParams = {
	workspaceId: string;
};

export async function channelRoutes(app: FastifyInstance) {
	app.get<{ Params: WorkspaceParams }>(
		"/",
		{
			preHandler: [requireUser, requireMember],
		},
		handleGetChannels,
	);

	app.post<{
		Params: WorkspaceParams;
		Body: CreateChannelBody;
	}>(
		"/",
		{
			preHandler: [requireUser, requireMember],
		},
		handleCreateChannel,
	);
}
