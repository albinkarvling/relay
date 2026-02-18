import { Outlet, useParams } from "react-router-dom";
import { WorkspaceSidebar } from "./WorkspaceSidebar/WorkspaceSidebar";
import { useWorkspaceSubscription } from "@/hooks/realtime/useWorkspaceSubscription";

export function AppLayout() {
	const { workspaceId } = useParams();
	useWorkspaceSubscription(workspaceId);

	return (
		<div style={{ display: "flex", height: "100vh" }}>
			<WorkspaceSidebar />

			<main style={{ flex: 1 }}>
				<Outlet />
			</main>
		</div>
	);
}
