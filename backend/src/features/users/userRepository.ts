import { sql } from "@/lib/db.js";
import { randomUUID } from "crypto";

export async function createUser(username: string, passwordHash: string, email?: string) {
	const id = randomUUID();

	const rows = await sql`
        INSERT INTO users (id, username, password, email)
        VALUES (${id}, ${username}, ${passwordHash}, ${email ?? null})
        RETURNING id, username, email, created_at
    `;

	return rows[0];
}

export async function getUserByUsername(username: string) {
	const rows = await sql`
        SELECT id, username, password, email, created_at
        FROM users
        WHERE username = ${username}
        LIMIT 1
    `;

	return rows[0] ?? null;
}

export async function getUserById(id: string) {
	const rows = await sql`
        SELECT id, username, email, created_at
        FROM users
        WHERE id = ${id}
        LIMIT 1
    `;

	return rows[0] ?? null;
}
