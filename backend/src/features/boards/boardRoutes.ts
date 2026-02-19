import type { FastifyInstance } from "fastify";
import { requireUser } from "@/plugins/requireUser.js";
import { requireMember } from "@/features/members/requireMember.js";
import { handleCreateBoard, handleGetBoards } from "./boardController.js";
import { getBoardLayout } from "./boardRepository.js";

type WorkspaceParams = {
	workspaceId: string;
};

export async function boardRoutes(app: FastifyInstance) {
	app.get<{
		Params: WorkspaceParams;
	}>(
		"/workspaces/:workspaceId/boards",
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
		"/workspaces/:workspaceId/boards",
		{
			preHandler: [requireUser, requireMember],
		},
		handleCreateBoard,
	);

	app.get<{
		Params: {
			boardId: string;
		};
	}>(
		"/boards/:boardId/layout",
		{
			preHandler: [requireUser],
		},
		async (request, reply) => {
			const { boardId } = request.params;

			const board = await getBoardLayout(boardId);

			if (!board) {
				return reply.status(404).send({
					message: "Board not found",
				});
			}

			return board;
		},
	);
}
