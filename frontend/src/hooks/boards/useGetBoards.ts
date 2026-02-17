import { getBoards } from "@/api/boards/getBoards";
import type { Board } from "@/types/board";
import { useQuery, type UseQueryOptions } from "@tanstack/react-query";

export const getBoardsQueryOptions = (workspaceId: string): UseQueryOptions<Board[]> => ({
	queryKey: ["getBoards"],
	queryFn: () => getBoards(workspaceId),
});

export const useGetBoards = (workspaceId: string) => useQuery(getBoardsQueryOptions(workspaceId));
