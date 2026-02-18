import type { FastifyRequest, FastifyReply } from "fastify";

import { getBoards, createBoard } from "../repositories/boardRepository.js";
import { emitBoardCreated } from "../realtime/events/boardEvents.js";

type WorkspaceParams = {
	workspaceId: string;
};

type CreateBoardBody = {
	name: string;
};

export async function handleGetBoards(
	request: FastifyRequest<{
		Params: WorkspaceParams;
	}>,
) {
	const { workspaceId } = request.params;

	return getBoards(workspaceId);
}

export async function handleCreateBoard(
	request: FastifyRequest<{
		Params: WorkspaceParams;
		Body: CreateBoardBody;
	}>,
	reply: FastifyReply,
) {
	const { workspaceId } = request.params;

	const { name } = request.body;

	if (!name || name.trim() === "") {
		return reply.status(400).send({
			message: "Board name is required",
		});
	}

	const board = await createBoard(workspaceId, request.userId, name);

	emitBoardCreated(board);

	return board;
}
