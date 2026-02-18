import { broadcastToWorkspace } from "@/lib/websocket/websocketManager.js";
import { Board } from "./boardTypes.js";

export function emitBoardCreated(board: Board) {
	broadcastToWorkspace(board.workspaceId, {
		type: "board.created",
		payload: board,
	});
}
