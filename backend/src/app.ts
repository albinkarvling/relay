import Fastify from "fastify";
import cookie from "@fastify/cookie";
import { workspaceRoutes } from "./routes/workspaces.js";
import { userRoutes } from "./routes/users.js";
import { memberRoutes } from "./routes/members.js";

export function buildApp() {
	const app = Fastify({
		logger: true,
	});

	app.register(cookie, {
		secret: process.env.COOKIE_SECRET!,
	});

	app.register(workspaceRoutes, {
		prefix: "/workspaces",
	});

	app.register(userRoutes, {
		prefix: "/users",
	});

	app.register(memberRoutes, {
		prefix: "/workspaces/:workspaceId/members",
	});

	return app;
}
