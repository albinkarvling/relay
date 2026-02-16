import { FastifyInstance } from "fastify";
import {
	registerUser,
	loginUser,
	getCurrentUser,
	logoutUser,
} from "../controllers/userController.js";
import { requireUser } from "../plugins/requireUser.js";
import { handleAddMember, handleGetMembers } from "../controllers/memberController.js";
import { requireMember } from "../plugins/requireMember.js";

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
