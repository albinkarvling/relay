import { useNavigationMemory } from "@/contexts/NavigationMemoryProvider/NavigationMemoryProvider";
import { Link, useParams } from "react-router-dom";

export function WorkspaceSidebarViewSelector() {
	const { workspaceId } = useParams();
	const { getLastChannelId, getLastBoardId } = useNavigationMemory();

	return (
		<ul>
			<li>
				<Link to={`/workspaces/${workspaceId}/channels/${getLastChannelId(workspaceId)}`}>
					Channels
				</Link>
			</li>
			<li>
				<Link to={`/workspaces/${workspaceId}/boards/${getLastBoardId(workspaceId)}`}>
					Boards
				</Link>
			</li>
		</ul>
	);
}
