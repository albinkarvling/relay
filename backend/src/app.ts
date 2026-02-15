import Fastify from "fastify";
import { workspaceRoutes } from "./routes/workspaces.js";

export function buildApp() {
	const app = Fastify({
		logger: true,
	});

	app.register(workspaceRoutes, {
		prefix: "/workspaces",
	});

	return app;
}
