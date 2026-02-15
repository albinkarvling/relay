import { FastifyInstance } from "fastify";
import {
	registerUser,
	loginUser,
	getCurrentUser,
	logoutUser,
} from "../controllers/userController.js";
import { requireUser } from "../plugins/requireUser.js";
import { handleGetMembers } from "../controllers/memberController.js";
import { requireMember } from "../plugins/requireMember.js";

type WorkspaceParams = {
	workspaceId: string;
};

export async function memberRoutes(app: FastifyInstance) {
	app.get<{ Params: WorkspaceParams }>(
		"/",
		{
			preHandler: [requireUser, requireMember],
		},
		handleGetMembers,
	);
}
