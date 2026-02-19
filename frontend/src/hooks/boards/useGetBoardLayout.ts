import { getBoardLayout } from "@/api/boards/getBoardLayout";
import type { BoardLayout } from "@/types/board";
import { useQuery, type UseQueryOptions } from "@tanstack/react-query";

export const getBoardLayoutQueryOptions = (boardId?: string): UseQueryOptions<BoardLayout> => ({
	queryKey: ["getBoardLayout", boardId],
	queryFn: () => getBoardLayout(boardId!),
	enabled: !!boardId,
});

export const useGetBoardLayout = (boardId?: string) =>
	useQuery(getBoardLayoutQueryOptions(boardId));
