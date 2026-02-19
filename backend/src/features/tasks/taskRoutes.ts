import { requireUser } from "@/plugins/requireUser.js";
import type { FastifyInstance } from "fastify";
import { handleCreateTask, handleGetTasks } from "./taskController.js";
import { CreateTaskBody } from "./taskTypes.js";

type ColumnParams = {
	columnId: string;
};

export async function taskRoutes(app: FastifyInstance) {
	app.get<{
		Params: ColumnParams;
	}>(
		"/",
		{
			preHandler: requireUser,
		},
		handleGetTasks,
	);

	app.post<{
		Params: ColumnParams;
		Body: CreateTaskBody;
	}>(
		"/",
		{
			preHandler: requireUser,
		},
		handleCreateTask,
	);
}
