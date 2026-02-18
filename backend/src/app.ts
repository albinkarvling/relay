import Fastify from "fastify";
import cors from "@fastify/cors";
import cookie from "@fastify/cookie";
import websocket from "@fastify/websocket";
import { workspaceRoutes } from "./routes/workspaces.js";
import { userRoutes } from "./routes/users.js";
import { memberRoutes } from "./routes/members.js";
import { channelRoutes } from "./routes/channels.js";
import { messageRoutes } from "./routes/messages.js";
import { websocketRoutes } from "./routes/ws.js";
import { boardRoutes } from "./routes/boards.js";
import { columnRoutes } from "./routes/columns.js";

export function buildApp() {
	const app = Fastify({
		logger: true,
	});

	app.register(cors, {
		origin: process.env.FRONTEND_URL,
		credentials: true,
	});

	app.register(cookie, {
		secret: process.env.COOKIE_SECRET!,
	});

	app.register(websocket);

	app.register(workspaceRoutes, {
		prefix: "/workspaces",
	});

	app.register(channelRoutes, {
		prefix: "/workspaces/:workspaceId/channels",
	});

	app.register(messageRoutes, {
		prefix: "/channels/:channelId/messages",
	});

	app.register(userRoutes, {
		prefix: "/users",
	});

	app.register(memberRoutes, {
		prefix: "/workspaces/:workspaceId/members",
	});

	app.register(boardRoutes, {
		prefix: "/workspaces/:workspaceId/boards",
	});

	app.register(columnRoutes, {
		prefix: "/boards/:boardId/columns",
	});

	app.register(websocketRoutes);

	return app;
}
