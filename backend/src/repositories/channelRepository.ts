import { randomUUID } from "crypto";
import { sql } from "../lib/db.js";

export async function createChannel(
	workspaceId: string,
	name: string,
	description: string | undefined,
	createdBy: string,
) {
	const id = randomUUID();

	const rows = await sql`
        INSERT INTO channels (
            id,
            workspace_id,
            name,
            description,
            created_by
        )
        VALUES (
            ${id},
            ${workspaceId},
            ${name},
            ${description ?? null},
            ${createdBy}
        )
        RETURNING *
    `;

	return rows[0];
}

export async function getChannels(workspaceId: string) {
	return sql`
        SELECT *
        FROM channels
        WHERE workspace_id = ${workspaceId}
        ORDER BY created_at
    `;
}
