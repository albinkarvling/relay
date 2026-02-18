import type { FastifyInstance } from "fastify";
import { requireUser } from "@/plugins/requireUser.js";
import { requireMember } from "@/features/members/requireMember.js";
import { handleCreateBoard, handleGetBoards } from "./boardController.js";

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
