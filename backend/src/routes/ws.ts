import { getUserIdFromWebSocket } from "../lib/websocketAuth.js";
import { canAccessChannel } from "../lib/channelAuth.js";
import { addConnection } from "../lib/websocketManager.js";
import { FastifyInstance } from "fastify";

type ChannelParams = {
	channelId: string;
};

export async function websocketRoutes(app: FastifyInstance) {
	app.get<{ Params: ChannelParams }>(
		"/ws/channels/:channelId",
		{ websocket: true },
		async (socket, request) => {
			const userId = getUserIdFromWebSocket(request);

			if (!userId) {
				socket.close(1008);
				return;
			}

			const { channelId } = request.params;

			const allowed = await canAccessChannel(userId, channelId);

			if (!allowed) {
				socket.close(1008);
				return;
			}

			addConnection(channelId, socket);
		},
	);
}
