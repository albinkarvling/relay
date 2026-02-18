import type { QueryClient } from "@tanstack/react-query";
import type { Board } from "@/types/board";
import { getBoardsQueryOptions } from "@/hooks/boards/useGetBoards";

export function handleBoardCreated(board: Board, queryClient: QueryClient) {
	queryClient.setQueryData<Board[]>(
		getBoardsQueryOptions(board.workspaceId).queryKey,
		(old = []) => [...old, board],
	);
}
