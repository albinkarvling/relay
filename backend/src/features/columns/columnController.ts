import type { FastifyRequest, FastifyReply } from "fastify";
import { createColumn, getColumns } from "./columnRepository.js";
import { emitColumnCreated } from "./columnEvents.js";
import { Column, CreateColumnBody } from "./columnTypes.js";

type BoardParams = {
	boardId: string;
};

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
