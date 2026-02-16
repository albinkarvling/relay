import { Outlet } from "react-router-dom";
import { WorkspaceSidebar } from "./WorkspaceSidebar/WorkspaceSidebar";

export function AppLayout() {
	return (
		<div style={{ display: "flex", height: "100vh" }}>
			<WorkspaceSidebar />

			<main style={{ flex: 1 }}>
				<Outlet />
			</main>
		</div>
	);
}
