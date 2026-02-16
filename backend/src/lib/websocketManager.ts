import type { WebSocket } from "@fastify/websocket";

const channelConnections = new Map<string, Set<WebSocket>>();

export function addConnection(channelId: string, ws: WebSocket) {
	if (!channelConnections.has(channelId)) {
		channelConnections.set(channelId, new Set());
	}

	channelConnections.get(channelId)!.add(ws);

	ws.on("close", () => {
		channelConnections.get(channelId)?.delete(ws);
	});
}

export function broadcastToChannel(channelId: string, message: unknown) {
	const connections = channelConnections.get(channelId);

	if (!connections) return;

	for (const ws of connections) {
		ws.send(JSON.stringify(message));
	}
}
