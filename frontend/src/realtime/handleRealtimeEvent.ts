import type { RealtimeEvent } from "@/types/realtime";
import { handleMessageCreated } from "./handlers/messageHandler";
import type { QueryClient } from "@tanstack/react-query";

export function handleRealtimeEvent(event: RealtimeEvent, queryClient: QueryClient) {
	switch (event.type) {
		case "message.created":
			handleMessageCreated(event.payload, queryClient);
			break;
	}
}
