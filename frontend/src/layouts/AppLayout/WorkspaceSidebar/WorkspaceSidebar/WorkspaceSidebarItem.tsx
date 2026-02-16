import type { Workspace } from "@/types/workspace";
import { Link } from "react-router-dom";

type Props = {
	workspace: Workspace;
	isSelected: boolean;
};

export function WorkspaceSidebarItem({ isSelected, workspace: { id, name } }: Props) {
	const displayName = name
		.split(" ")
		.map((word) => word[0])
		.join("");

	return (
		<li>
			<Link
				to={`/workspaces/${id}`}
				style={{
					display: "grid",
					placeItems: "center",
					width: "50px",
					aspectRatio: 1,
					backgroundColor: !isSelected ? "#1f1f1f" : "#4b0096",
				}}
			>
				<span>{displayName}</span>
			</Link>
		</li>
	);
}
