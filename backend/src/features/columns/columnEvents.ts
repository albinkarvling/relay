import { broadcastToWorkspace } from "@/lib/websocket/websocketManager.js";
import { sql } from "@/lib/db.js";
import { Column } from "./columnTypes.js";

async function getWorkspaceId(boardId: string): Promise<string | null> {
	const rows = await sql`
		SELECT workspace_id
		FROM boards
		WHERE id = ${boardId}
	`;

	return rows[0]?.workspace_id ?? null;
}

export async function emitColumnCreated(column: Column) {
	const workspaceId = await getWorkspaceId(column.boardId);

	if (!workspaceId) return;

	broadcastToWorkspace(workspaceId, {
		type: "column.created",
		payload: column,
	});
}
