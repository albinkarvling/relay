import { randomUUID } from "crypto";
import { sql } from "../lib/db.js";
import type { Workspace } from "../types/workspace.js";

export async function createWorkspace(name: string, ownerId: string) {
	const id = randomUUID();

	const rows = await sql`
        INSERT INTO workspaces (id, name, owner_id)
        VALUES (${id}, ${name}, ${ownerId})
        RETURNING id, name, owner_id, created_at
    `;

	return rows[0];
}

export async function getWorkspaces(): Promise<Workspace[]> {
	const rows = await sql`
        SELECT id, name, created_at, owner_id
        FROM workspaces
        ORDER BY created_at DESC
    `;

	console.log(rows);

	return rows.map((row) => ({
		id: row.id,
		name: row.name,
		createdAt: row.created_at,
		ownerId: row.owner_id,
	}));
}
