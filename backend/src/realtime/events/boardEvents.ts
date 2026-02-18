import { broadcastToWorkspace } from "../../lib/websocket/websocketManager.js";
import type { Board } from "../../types/board.js";

export function emitBoardCreated(board: Board) {
	broadcastToWorkspace(board.workspaceId, {
		type: "board.created",
		payload: board,
	});
}
