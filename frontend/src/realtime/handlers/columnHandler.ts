import { getColumnsQueryOptions } from "@/hooks/columns/useGetColumns";
import type { Column } from "@/types/column";
import type { QueryClient } from "@tanstack/react-query";

export function handleColumnCreated(column: Column, queryClient: QueryClient) {
	queryClient.setQueryData<Column[]>(
		getColumnsQueryOptions(column.boardId).queryKey,
		(old = []) => [...old, column],
	);
}
