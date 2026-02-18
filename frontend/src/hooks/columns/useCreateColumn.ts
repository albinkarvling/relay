import { createColumn } from "@/api/columns/createColumn";
import type { Column, CreateColumnPayload } from "@/types/column";
import { useMutation, type UseMutationOptions } from "@tanstack/react-query";

export const createColumnMutationOptions = (
	boardId: string,
): UseMutationOptions<Column, Error, CreateColumnPayload> => ({
	mutationKey: ["createColumn"],
	mutationFn: (payload) => createColumn({ boardId, payload }),
});

export const useCreateColumn = (boardId: string) =>
	useMutation(createColumnMutationOptions(boardId));
