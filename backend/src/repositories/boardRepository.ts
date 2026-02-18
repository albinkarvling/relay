import { randomUUID } from "crypto";
import { sql } from "../lib/db.js";
import { Board } from "../types/board.js";

export async function getBoards(workspaceId: string) {
	return sql`
        SELECT
            id,
            workspace_id AS "workspaceId",
            name,
            created_by AS "createdBy",
            created_at AS "createdAt"
        FROM boards
        WHERE workspace_id = ${workspaceId}
        ORDER BY created_at
    `;
}

export async function createBoard(workspaceId: string, userId: string, name: string) {
	const id = randomUUID();

	const rows = await sql`
        INSERT INTO boards (
            id,
            workspace_id,
            name,
            created_by
        )
        VALUES (
            ${id},
            ${workspaceId},
            ${name},
            ${userId}
        )
        RETURNING
            id,
            workspace_id AS "workspaceId",
            name,
            created_by AS "createdBy",
            created_at AS "createdAt"
    `;

	const board = rows[0];
	if (!board) {
		throw new Error("Failed to create board");
	}

	return board as Board;
}
