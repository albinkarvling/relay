import { useEffect } from "react";
import { useGetBoards } from "@/hooks/boards/useGetBoards";
import { BoardSidebarItem } from "./BoardSidebarItem/BoardSidebarItem";
import { useNavigate, useParams } from "react-router-dom";
import { CreateBoardButton } from "./CreateBoardButton/CreateBoardButton";

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
		<nav className="min-w-(--sidebar-width) p-4 bg-secondary">
			<ul>
				{boards?.map((board) => (
					<BoardSidebarItem
						key={board.id}
						board={board}
						isSelected={board.id === boardId}
					/>
				))}
			</ul>
			<CreateBoardButton />
		</nav>
	);
}
