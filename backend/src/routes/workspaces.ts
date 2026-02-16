import { FastifyInstance } from "fastify";
import { handleCreateWorkspace, handleGetWorkspaces } from "../controllers/workspaceController.js";
import { requireUser } from "../plugins/requireUser.js";
import { CreateWorkspaceBody } from "../types/workspace.js";

export async function workspaceRoutes(app: FastifyInstance) {
	app.get("/", { preHandler: requireUser }, handleGetWorkspaces);

	app.post<{ Body: CreateWorkspaceBody }>(
		"/",
		{ preHandler: requireUser },
		handleCreateWorkspace,
	);
}
