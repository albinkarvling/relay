import { useGetColumns } from "@/hooks/columns/useGetColumns";
import { useParams } from "react-router-dom";
import { BoardColumn } from "./BoardColumn/BoardColumn";

export function BoardColumns() {
	const { boardId } = useParams();
	const { data: columns } = useGetColumns(boardId);

	return (
		<div className="p-5 flex">
			{columns?.map((column) => (
				<BoardColumn column={column} key={column.id} />
			))}
		</div>
	);
}
