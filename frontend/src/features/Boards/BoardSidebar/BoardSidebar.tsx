import { useGetBoards } from "@/hooks/boards/useGetBoards";
import { BoardSidebarItem } from "./BoardSidebarItem/BoardSidebarItem";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

export function BoardSidebar() {
	const navigate = useNavigate();

	const { workspaceId, boardId } = useParams();

	const { data: boards, isPending } = useGetBoards(workspaceId!);

	useEffect(() => {
		if (boardId) return;
		if (boards?.length) {
			navigate(`/workspaces/${workspaceId}/boards/${boards[0].id}`);
		}
	}, [navigate, workspaceId, boardId, boards]);

	return (
		<ul className="min-w-(--sidebar-width) p-4 bg-secondary">
			{boards?.map((board) => (
				<BoardSidebarItem key={board.id} board={board} isSelected={board.id === boardId} />
			))}
		</ul>
	);
}
