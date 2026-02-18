import type { FastifyRequest, FastifyReply } from "fastify";

import type { CreateColumnBody, Column } from "../types/column.js";

type BoardParams = {
	boardId: string;
};

import { createColumn, getColumns } from "../repositories/columnRepository.js";
import { emitColumnCreated } from "../realtime/events/columnEvents.js";

export async function handleGetColumns(
	request: FastifyRequest<{
		Params: BoardParams;
	}>,
	reply: FastifyReply,
): Promise<Column[]> {
	const { boardId } = request.params;

	return getColumns(boardId);
}

export async function handleCreateColumn(
	request: FastifyRequest<{
		Params: BoardParams;
		Body: CreateColumnBody;
	}>,
	reply: FastifyReply,
): Promise<Column> {
	const { boardId } = request.params;
	const { name, position } = request.body;

	if (!name || !name.trim()) {
		return reply.status(400).send({
			message: "Column name is required",
		});
	}
	if (position === undefined || position < 0) {
		return reply.status(400).send({
			message: "Column position is required and must be a non-negative integer",
		});
	}

	const column = await createColumn(boardId, name, position);

	await emitColumnCreated(column);

	return column;
}
