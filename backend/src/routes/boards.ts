import type { FastifyInstance } from "fastify";

import { handleGetBoards, handleCreateBoard } from "../controllers/boardController.js";

import { requireUser } from "../plugins/requireUser.js";
import { requireMember } from "../plugins/requireMember.js";

type WorkspaceParams = {
	workspaceId: string;
};

export async function boardRoutes(app: FastifyInstance) {
	app.get<{
		Params: WorkspaceParams;
	}>(
		"/",
		{
			preHandler: [requireUser, requireMember],
		},
		handleGetBoards,
	);

	app.post<{
		Params: WorkspaceParams;
		Body: {
			name: string;
		};
	}>(
		"/",
		{
			preHandler: [requireUser, requireMember],
		},
		handleCreateBoard,
	);
}
