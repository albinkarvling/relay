import { useQuery } from "@tanstack/react-query";
import { getBoardLayoutQueryOptions } from "../boards/useGetBoardLayout";

export const useGetTasks = (boardId?: string, columnId?: string) =>
	useQuery({
		...getBoardLayoutQueryOptions(boardId),
		select: (data) => data.columns.find((column) => column.id === columnId)?.tasks,
	});
