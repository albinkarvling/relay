import { sql } from "../lib/db.js";

export async function addMember(
	workspaceId: string,
	userId: string,
	role: "owner" | "admin" | "member" = "member",
) {
	await sql`
        INSERT INTO members (workspace_id, user_id, role)
        VALUES (${workspaceId}, ${userId}, ${role})
    `;
}

export async function getMembers(workspaceId: string) {
	return sql`
        SELECT
            u.id,
            u.username,
            m.role,
            m.created_at
        FROM members m
        JOIN users u ON u.id = m.user_id
        WHERE m.workspace_id = ${workspaceId}
        ORDER BY m.created_at
    `;
}

export async function isMember(workspaceId: string, userId: string) {
	const rows = await sql`
        SELECT 1
        FROM members
        WHERE workspace_id = ${workspaceId}
        AND user_id = ${userId}
        LIMIT 1
    `;

	return rows.length > 0;
}
