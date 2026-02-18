import type { FastifyInstance } from "fastify";

import { handleCreateColumn, handleGetColumns } from "../controllers/columnController.js";

import { requireUser } from "../plugins/requireUser.js";

import type { CreateColumnBody } from "../types/column.js";

type BoardParams = {
	boardId: string;
};

export async function columnRoutes(app: FastifyInstance) {
	app.get<{
		Params: BoardParams;
	}>(
		"/",
		{
			preHandler: requireUser,
		},
		handleGetColumns,
	);

	app.post<{
		Params: BoardParams;
		Body: CreateColumnBody;
	}>(
		"/",
		{
			preHandler: requireUser,
		},
		handleCreateColumn,
	);
}
