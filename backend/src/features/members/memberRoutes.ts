import { requireMember } from "@/features/members/requireMember.js";
import { requireUser } from "@/plugins/requireUser.js";
import { FastifyInstance } from "fastify";
import { handleAddMember, handleGetMembers } from "./memberController.js";

type WorkspaceParams = {
	workspaceId: string;
};
type AddMemberParams = {
	workspaceId: string;
	userId: string;
};

export async function memberRoutes(app: FastifyInstance) {
	app.get<{ Params: WorkspaceParams }>(
		"/",
		{
			preHandler: [requireUser, requireMember],
		},
		handleGetMembers,
	);

	app.put<{ Params: AddMemberParams }>(
		"/:userId",
		{
			preHandler: [requireUser, requireMember],
		},
		handleAddMember,
	);
}
