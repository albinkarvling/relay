import { broadcastToChannel } from "@/lib/websocket/websocketManager.js";
import { Message } from "./messageTypes.js";

export function emitMessageCreated(channelId: string, message: Message) {
	broadcastToChannel(channelId, {
		type: "message.created",
		payload: message,
	});
}
