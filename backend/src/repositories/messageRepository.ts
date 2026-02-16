import { randomUUID } from "crypto";
import { sql } from "../lib/db.js";

export async function createMessage(channelId: string, userId: string, content: string) {
	const id = randomUUID();

	const rows = await sql`
        WITH inserted AS (
            INSERT INTO messages (id, channel_id, user_id, content)
            VALUES (${id}, ${channelId}, ${userId}, ${content})
            RETURNING id, channel_id, user_id, content, created_at
        )
        SELECT
            i.id,
            i.channel_id AS "channelId",
            i.content,
            i.created_at AS "createdAt",
            json_build_object(
                'id', u.id,
                'username', u.username
            ) AS author
        FROM inserted i
        JOIN users u ON u.id = i.user_id
    `;

	return rows[0];
}

export async function getMessages(channelId: string) {
	return sql`
        SELECT
            m.id,
            m.content,
            m.created_at AS "createdAt",

            json_build_object(
                'id', u.id,
                'username', u.username
            ) AS author

        FROM messages m

        JOIN users u
            ON u.id = m.user_id

        WHERE m.channel_id = ${channelId}

        ORDER BY m.created_at

        LIMIT 50
    `;
}
