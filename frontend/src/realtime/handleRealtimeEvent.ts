import type { RealtimeEvent } from "@/types/realtime";
import { handleMessageCreated } from "./handlers/messageHandler";
import type { QueryClient } from "@tanstack/react-query";
import { handleBoardCreated } from "./handlers/boardHandler";
import { handleColumnCreated } from "./handlers/columnHandler";

export function handleRealtimeEvent(event: RealtimeEvent, queryClient: QueryClient) {
	switch (event.type) {
		case "message.created":
			handleMessageCreated(event.payload, queryClient);
			break;
		case "board.created":
			handleBoardCreated(event.payload, queryClient);
			break;
		case "column.created":
			handleColumnCreated(event.payload, queryClient);
			break;
	}
}
