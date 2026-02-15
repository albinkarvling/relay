import { randomUUID } from "crypto";
import { sql } from "../lib/db.js";

export async function createMessage(channelId: string, userId: string, content: string) {
	const id = randomUUID();

	const rows = await sql`
        INSERT INTO messages (
            id,
            channel_id,
            user_id,
            content
        )
        VALUES (
            ${id},
            ${channelId},
            ${userId},
            ${content}
        )
        RETURNING *
    `;

	return rows[0];
}

export async function getMessages(channelId: string) {
	return sql`
        SELECT
            m.id,
            m.content,
            m.created_at,
            u.id as user_id,
            u.username
        FROM messages m
        JOIN users u ON u.id = m.user_id
        WHERE m.channel_id = ${channelId}
        ORDER BY m.created_at
        LIMIT 50
    `;
}
