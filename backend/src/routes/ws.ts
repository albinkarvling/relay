import { FastifyInstance } from "fastify";
import { getUserIdFromWebSocket } from "../lib/websocket/websocketAuth.js";
import { addUserConnection } from "../lib/websocket/websocketManager.js";
import { subscribeToChannel } from "../realtime/subscriptions/subscribeToChannel.js";
import { subscribeToWorkspace } from "../realtime/subscriptions/subscribeToWorkspace.js";

export async function websocketRoutes(app: FastifyInstance) {
	app.get("/ws", { websocket: true }, async (socket, request) => {
		const userId = getUserIdFromWebSocket(request);

		if (!userId) {
			socket.close(1008);
			return;
		}

		addUserConnection(userId, socket);

		socket.on("message", async (raw: any) => {
			const msg = JSON.parse(raw.toString());

			console.log("DSFFDSFDSFDSFDSFDSFDS message receieved", msg);
			switch (msg.type) {
				case "subscribe.channel":
					await subscribeToChannel(userId, msg.channelId, socket);
					break;
				case "subscribe.workspace":
					await subscribeToWorkspace(userId, msg.workspaceId, socket);
					break;
			}
		});
	});
}
