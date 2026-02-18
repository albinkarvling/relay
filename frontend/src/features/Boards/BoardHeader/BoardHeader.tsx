import { useGetBoardById } from "@/hooks/boards/useGetBoardById";
import { useParams } from "react-router-dom";
import { CreateColumnButton } from "./CreateColumnButton/CreateColumnButton";

export function BoardHeader() {
	const { boardId } = useParams();
	const { board } = useGetBoardById(boardId!);

	return (
		<div className="px-5 py-3.5 flex justify-between bg-foreground border-b-2 border-foreground-tertiary">
			<div>{board?.name}</div>
			<CreateColumnButton />
		</div>
	);
}
