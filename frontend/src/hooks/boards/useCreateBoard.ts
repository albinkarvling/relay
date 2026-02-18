import { createBoard } from "@/api/boards/createBoard";
import type { Board, CreateBoardPayload } from "@/types/board";
import { useMutation, type UseMutationOptions } from "@tanstack/react-query";

export const createBoardMutationOptions = (
	workspaceId: string,
): UseMutationOptions<Board, Error, CreateBoardPayload> => ({
	mutationKey: ["createBoard"],
	mutationFn: (payload) => createBoard({ workspaceId, payload }),
});

export const useCreateBoard = (workspaceId: string) =>
	useMutation(createBoardMutationOptions(workspaceId));
