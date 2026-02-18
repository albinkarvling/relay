import type { WebSocket } from "@fastify/websocket";
import { isMember } from "@/features/members/memberRepository.js";
import { subscribeSocketToWorkspace } from "@/lib/websocket/websocketManager.js";

export async function subscribeToWorkspace(userId: string, workspaceId: string, socket: WebSocket) {
	const allowed = await isMember(workspaceId, userId);

	if (!allowed) {
		socket.close(1008);
		return;
	}

	subscribeSocketToWorkspace(workspaceId, socket);
}
