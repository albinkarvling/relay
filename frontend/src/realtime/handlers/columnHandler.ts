import { getBoardLayoutQueryOptions } from "@/hooks/boards/useGetBoardLayout";
import type { BoardLayout } from "@/types/board";
import type { Column } from "@/types/column";
import type { QueryClient } from "@tanstack/react-query";

export function handleColumnCreated(column: Column, queryClient: QueryClient) {
	queryClient.setQueryData<BoardLayout>(
		getBoardLayoutQueryOptions(column.boardId).queryKey,
		(old) => {
			if (!old) return old;

			return {
				...old,
				columns: [...old.columns, { ...column, tasks: [] }],
			};
		},
	);
}
