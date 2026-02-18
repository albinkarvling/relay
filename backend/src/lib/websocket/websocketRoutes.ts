import { FastifyInstance } from "fastify";
import { addUserConnection } from "./websocketManager.js";
import { getUserIdFromWebSocket } from "./websocketAuth.js";
import { subscribeToChannel } from "@/features/channels/realtime/subscribeToChannel.js";
import { subscribeToWorkspace } from "@/features/workspaces/realtime/subscribeToWorkspace.js";

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
