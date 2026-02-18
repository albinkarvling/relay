import { useGetBoardById } from "@/hooks/boards/useGetBoardById";
import { useParams } from "react-router-dom";

export function BoardHeader() {
	const { boardId } = useParams();
	const { board } = useGetBoardById(boardId!);

	return (
		<div className="px-5 py-3.5 sticky top-0 bg-foreground border-b-2 border-foreground-tertiary">
			{board?.name}
		</div>
	);
}
