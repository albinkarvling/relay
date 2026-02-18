import { requireUser } from "@/plugins/requireUser.js";
import type { FastifyInstance } from "fastify";
import { handleCreateColumn, handleGetColumns } from "./columnController.js";
import { CreateColumnBody } from "./columnTypes.js";

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
