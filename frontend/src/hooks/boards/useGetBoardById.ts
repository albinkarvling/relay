import { useParams } from "react-router-dom";
import { useGetBoards } from "./useGetBoards";

export const useGetBoardById = (boardId?: string) => {
	const { workspaceId } = useParams();

	const query = useGetBoards(workspaceId);

	return {
		board: query.data?.find((board) => board.id === boardId),
		...query,
	};
};
