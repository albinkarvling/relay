import { requireUser } from "@/plugins/requireUser.js";
import { FastifyInstance } from "fastify";
import { handleCreateWorkspace, handleGetWorkspaces } from "./workspaceController.js";
import { CreateWorkspaceBody } from "./workspaceTypes.js";

export async function workspaceRoutes(app: FastifyInstance) {
	app.get("/", { preHandler: requireUser }, handleGetWorkspaces);

	app.post<{ Body: CreateWorkspaceBody }>(
		"/",
		{ preHandler: requireUser },
		handleCreateWorkspace,
	);
}
