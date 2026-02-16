import { useGetWorkspaces } from "@/hooks/workspaces/useGetWorkspaces";
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export function WorkspaceSidebarSelector() {
	const navigate = useNavigate();
	const { workspaceId } = useParams();

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
				const isSelected = id === workspaceId;
				const displayName = name
					.split(" ")
					.map((word) => word[0])
					.join("");

				return (
					<li>
						<Link
							to={`/workspaces/${id}`}
							className="w-12 aspect-square grid place-items-center"
						>
							<span>{displayName}</span>
						</Link>
					</li>
				);
			})}
		</ul>
	);
}
