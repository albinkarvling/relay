import { randomUUID } from "crypto";
import { sql } from "../lib/db.js";
import type { Workspace } from "../types/workspace.js";

export async function createWorkspace(name: string): Promise<Workspace> {
	const id = randomUUID();

	const result = await sql`
        INSERT INTO workspaces (id, name)
        VALUES (${id}, ${name})
        RETURNING id, name, created_at
    `;

	const row = result[0];

	return {
		id: row.id,
		name: row.name,
		createdAt: row.created_at,
	};
}

export async function getWorkspaces(): Promise<Workspace[]> {
	const rows = await sql`
        SELECT id, name, created_at
        FROM workspaces
        ORDER BY created_at DESC
    `;

	return rows.map((row) => ({
		id: row.id,
		name: row.name,
		createdAt: row.created_at,
	}));
}
