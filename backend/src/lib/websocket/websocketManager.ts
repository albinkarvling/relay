import type { WebSocket } from "@fastify/websocket";
import { RealtimeEvent } from "../../types/realtime.js";

export const userConnections = new Map<string, Set<WebSocket>>();

const workspaceSubscriptions = new Map<string, Set<WebSocket>>();
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

export function subscribeSocketToWorkspace(workspaceId: string, socket: WebSocket) {
	if (!workspaceSubscriptions.has(workspaceId)) {
		workspaceSubscriptions.set(workspaceId, new Set());
	}

	const sockets = workspaceSubscriptions.get(workspaceId)!;

	sockets.add(socket);

	socket.on("close", () => {
		sockets.delete(socket);

		if (sockets.size === 0) {
			workspaceSubscriptions.delete(workspaceId);
		}
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

export function broadcastToWorkspace(workspaceId: string, event: RealtimeEvent) {
	const sockets = workspaceSubscriptions.get(workspaceId);

	if (!sockets) return;

	const payload = JSON.stringify(event);

	for (const socket of sockets) {
		socket.send(payload);
	}
}
