import { sql } from "@/lib/db.js";
import { randomUUID } from "crypto";
import { Task } from "./taskTypes.js";

export async function createTask(
	columnId: string,
	title: string,
	description: string | null,
	position: number,
	createdBy: string,
): Promise<Task> {
	const id = randomUUID();

	const rows = await sql`
		INSERT INTO tasks (id, column_id, title, description, position, created_by)
		VALUES (${id}, ${columnId}, ${title}, ${description}, ${position}, ${createdBy})
		RETURNING
			id,
			column_id AS "columnId",
			title,
			position,
            created_by AS "createdBy",
			created_at AS "createdAt"
	`;

	const task = rows[0];

	if (!task) {
		throw new Error("Task creation failed");
	}

	return task as Task;
}

export async function getTasks(columnId: string): Promise<Task[]> {
	const rows = await sql`
		SELECT
			id,
			column_id AS "columnId",
			title,
			position,
            created_by as "createdBy", 
			created_at AS "createdAt"
		FROM tasks
		WHERE column_id = ${columnId}
		ORDER BY position ASC
	`;

	return rows as Task[];
}
