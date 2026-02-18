import { useGetColumns } from "@/hooks/columns/useGetColumns";
import { useParams } from "react-router-dom";

export function BoardColumns() {
	const { boardId } = useParams();
	const { data: columns } = useGetColumns(boardId);

	return (
		<div>
			{columns?.map((column) => (
				<div key={column.id}>{column.name}</div>
			))}
		</div>
	);
}
