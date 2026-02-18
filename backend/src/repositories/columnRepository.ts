import { randomUUID } from "crypto";
import { sql } from "../lib/db.js";
import type { Column } from "../types/column.js";

export async function createColumn(
	boardId: string,
	name: string,
	position: number,
): Promise<Column> {
	const id = randomUUID();

	const rows = await sql`
		INSERT INTO columns (id, board_id, name, position)
		VALUES (${id}, ${boardId}, ${name}, ${position})
		RETURNING
			id,
			board_id AS "boardId",
			name,
			position,
			created_at AS "createdAt"
	`;

	const column = rows[0];

	if (!column) {
		throw new Error("Column creation failed");
	}

	return column as Column;
}

export async function getColumns(boardId: string): Promise<Column[]> {
	const rows = await sql`
		SELECT
			id,
			board_id AS "boardId",
			name,
			position,
			created_at AS "createdAt"
		FROM columns
		WHERE board_id = ${boardId}
		ORDER BY position ASC
	`;

	return rows as Column[];
}
