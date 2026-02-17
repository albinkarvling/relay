import type { Board } from "@/types/board";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

type Props = {
	isSelected: boolean;
	board: Board;
};

export function BoardSidebarItem({ isSelected, board: { id, name, workspaceId } }: Props) {
	return (
		<li className="w-full">
			<Link
				to={`/workspaces/${workspaceId}/boards/${id}`}
				className={twMerge(
					"relative p-2 block w-full rounded-md",
					isSelected && "bg-primary",
					!isSelected && "hover:bg-primary-accent",
				)}
			>
				{name}
			</Link>
		</li>
	);
}
