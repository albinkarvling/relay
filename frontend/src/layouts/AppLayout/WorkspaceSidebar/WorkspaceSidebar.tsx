import { WorkspaceSidebarSelector } from "./WorkspaceSidebarSelector/WorkspaceSidebarItem";
import { WorkspaceSidebarViewSelector } from "./WorkspaceSidebarViewSelector/WorkspaceSidebarViewSelector";

export function WorkspaceSidebar() {
	return (
		<div className="p-3 bg-primary">
			<WorkspaceSidebarSelector />
			<WorkspaceSidebarViewSelector />
		</div>
	);
}
