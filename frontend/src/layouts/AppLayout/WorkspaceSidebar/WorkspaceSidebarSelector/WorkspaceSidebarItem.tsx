import { useNavigationMemory } from "@/contexts/NavigationMemoryProvider/NavigationMemoryProvider";
import { useGetWorkspaces } from "@/hooks/workspaces/useGetWorkspaces";
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { twMerge } from "tailwind-merge";

export function WorkspaceSidebarSelector() {
	const navigate = useNavigate();
	const { workspaceId } = useParams();

	const { getLastChannelId } = useNavigationMemory();

	const { data: workspaces, isPending } = useGetWorkspaces();

	useEffect(() => {
		if (workspaceId) return;
		if (workspaces?.length) {
			navigate(`/workspaces/${workspaces[0].id}`);
		}
	}, [navigate, workspaceId, workspaces]);

	return (
		<ul>
			{workspaces?.map(({ id, name }) => {
				const lastChannelId = getLastChannelId(id);
				const isSelected = id === workspaceId;
				const displayName = name
					.split(" ")
					.map((word) => word[0])
					.join("");

				return (
					<li>
						<Link
							to={`/workspaces/${id}/channels/${lastChannelId ?? ""}`}
							className={twMerge(
								"w-12 aspect-square grid place-items-center",
								isSelected ? "bg-secondary" : "transform",
							)}
						>
							<span>{displayName}</span>
						</Link>
					</li>
				);
			})}
		</ul>
	);
}
