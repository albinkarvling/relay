import { FastifyInstance } from "fastify";
import { handleCreateWorkspace, handleGetWorkspaces } from "../controllers/workspaceController.js";

export async function workspaceRoutes(app: FastifyInstance) {
	app.get("/", handleGetWorkspaces);
	app.post("/", handleCreateWorkspace);
}
