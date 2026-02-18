import Fastify from "fastify";
import cors from "@fastify/cors";
import cookie from "@fastify/cookie";
import websocket from "@fastify/websocket";
import { websocketRoutes } from "./lib/websocket/websocketRoutes.js";
import { boardRoutes } from "./features/boards/boardRoutes.js";
import { workspaceRoutes } from "./features/workspaces/workspaceRoutes.js";
import { channelRoutes } from "./features/channels/channelRoutes.js";
import { messageRoutes } from "./features/messages/messageRoutes.js";
import { userRoutes } from "./features/users/userRoutes.js";
import { memberRoutes } from "./features/members/memberRoutes.js";
import { columnRoutes } from "./features/columns/columnRoutes.js";

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
