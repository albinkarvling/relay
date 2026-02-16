import { Outlet } from "react-router-dom";
import { WorkspaceSidebar } from "./WorkspaceSidebar/WorkspaceSidebar";
import { ChannelSidebar } from "./ChannelSidebar/ChannelSidebar";

export function AppLayout() {
	return (
		<div style={{ display: "flex", height: "100vh" }}>
			<WorkspaceSidebar />
			<ChannelSidebar />

			<main style={{ flex: 1 }}>
				<Outlet />
			</main>
		</div>
	);
}
