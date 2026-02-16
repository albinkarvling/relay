import { useGetWorkspaces } from "@/hooks/workspaces/useGetWorkspaces";
import { WorkspaceSidebarItem } from "./WorkspaceSidebar/WorkspaceSidebarItem";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

export function WorkspaceSidebar() {
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
			{workspaces?.map((workspace) => (
				<WorkspaceSidebarItem
					isSelected={workspace.id === workspaceId}
					workspace={workspace}
					key={workspace.id}
				/>
			))}
		</ul>
	);
}
