import { getColumns } from "@/api/columns/getColumns";
import type { Column } from "@/types/column";
import { useQuery, type UseQueryOptions } from "@tanstack/react-query";

export const getColumnsQueryOptions = (boardId?: string): UseQueryOptions<Column[]> => ({
	queryKey: ["getColumns", boardId],
	queryFn: () => getColumns(boardId!),
	enabled: !!boardId,
});

export const useGetColumns = (boardId?: string) => useQuery(getColumnsQueryOptions(boardId));
