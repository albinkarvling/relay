import { randomUUID } from "crypto";
import { sql } from "@/lib/db.js";
import { Workspace } from "./workspaceTypes.js";

export async function createWorkspace(name: string, ownerId: string) {
	const id = randomUUID();

	const rows = await sql`
        INSERT INTO workspaces (id, name, owner_id)
        VALUES (${id}, ${name}, ${ownerId})
        RETURNING id, name, owner_id, created_at
    `;

	return rows[0];
}

export async function getWorkspaces(userId: string): Promise<Workspace[]> {
	const rows = await sql`
		SELECT w.*
		FROM workspaces w
		JOIN members m
			ON m.workspace_id = w.id
		WHERE m.user_id = ${userId}
	`;

	return rows.map((row) => ({
		id: row.id,
		name: row.name,
		createdAt: row.created_at,
		ownerId: row.owner_id,
	}));
}
