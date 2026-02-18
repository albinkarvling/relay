import type { RealtimeEvent } from "@/types/realtime";
import { handleMessageCreated } from "./handlers/messageHandler";
import type { QueryClient } from "@tanstack/react-query";
import { handleBoardCreated } from "./handlers/boardHandler";

export function handleRealtimeEvent(event: RealtimeEvent, queryClient: QueryClient) {
	switch (event.type) {
		case "message.created":
			handleMessageCreated(event.payload, queryClient);
			break;
		case "board.created":
			handleBoardCreated(event.payload, queryClient);
			break;
	}
}
