import type { FastifyRequest, FastifyReply } from "fastify";
import { createTask, getTasks } from "./taskRepository.js";
import { Task, CreateTaskBody } from "./taskTypes.js";

type TaskParams = {
	columnId: string;
};

export async function handleGetTasks(
	request: FastifyRequest<{
		Params: TaskParams;
	}>,
	reply: FastifyReply,
): Promise<Task[]> {
	const { columnId } = request.params;

	return getTasks(columnId);
}

export async function handleCreateTask(
	request: FastifyRequest<{
		Params: TaskParams;
		Body: CreateTaskBody;
	}>,
	reply: FastifyReply,
): Promise<Task> {
	const { columnId } = request.params;
	const { title, description = null, position } = request.body;

	if (!title || !title.trim()) {
		return reply.status(400).send({
			message: "Task title is required",
		});
	}
	if (position === undefined || position < 0) {
		return reply.status(400).send({
			message: "Task position is required and must be a non-negative integer",
		});
	}

	const createdBy = request.userId;

	const task = await createTask(columnId, title, description, position, createdBy);

	return task;
}
