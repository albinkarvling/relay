import { canAccessChannel } from "@/features/channels/channelAuth.js";
import { subscribeSocketToChannel } from "@/lib/websocket/websocketManager.js";
import type { WebSocket } from "@fastify/websocket";

export async function subscribeToChannel(userId: string, channelId: string, socket: WebSocket) {
	const allowed = await canAccessChannel(userId, channelId);

	if (!allowed) {
		socket.close(1008);
		return;
	}

	subscribeSocketToChannel(channelId, socket);
}
