import type { WebSocket } from "@fastify/websocket";
import { RealtimeEvent } from "../../types/realtime.js";

export const userConnections = new Map<string, Set<WebSocket>>();

export const channelSubscriptions = new Map<string, Set<WebSocket>>();

export function addUserConnection(userId: string, socket: WebSocket) {
	if (!userConnections.has(userId)) {
		userConnections.set(userId, new Set());
	}

	userConnections.get(userId)!.add(socket);

	socket.on("close", () => {
		userConnections.get(userId)?.delete(socket);
	});
}

export function subscribeSocketToChannel(channelId: string, socket: WebSocket) {
	if (!channelSubscriptions.has(channelId)) {
		channelSubscriptions.set(channelId, new Set());
	}

	channelSubscriptions.get(channelId)!.add(socket);
}

export function broadcastToChannel(channelId: string, event: RealtimeEvent) {
	const sockets = channelSubscriptions.get(channelId);

	if (!sockets) return;

	for (const socket of sockets) {
		socket.send(JSON.stringify(event));
	}
}
