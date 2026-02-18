import { requireMember } from "@/features/members/requireMember.js";
import { requireUser } from "@/plugins/requireUser.js";
import { FastifyInstance } from "fastify";
import { handleCreateChannel, handleGetChannels } from "./channelController.js";
import { CreateChannelBody } from "./channelTypes.js";

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
