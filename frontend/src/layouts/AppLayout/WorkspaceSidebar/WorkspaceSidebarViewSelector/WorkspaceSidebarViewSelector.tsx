import { usePreviousRoutes } from "@/contexts/PreviousRoutesProvider/PreviousNavigationProvider";
import { Link } from "react-router-dom";

export function WorkspaceSidebarViewSelector() {
	const {} = usePreviousRoutes();

	return (
		<ul>
			<li>
				<Link to={}>Channels</Link>
			</li>
			<li>
				<Link>Boards</Link>
			</li>
		</ul>
	);
}
