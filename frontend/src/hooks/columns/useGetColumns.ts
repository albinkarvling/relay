import { useQuery } from "@tanstack/react-query";
import { getBoardLayoutQueryOptions } from "../boards/useGetBoardLayout";

export const useGetColumns = (boardId?: string) => {
	return useQuery({
		...getBoardLayoutQueryOptions(boardId),
		select: (data) => data.columns,
	});
};
