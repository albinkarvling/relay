import type { Channel } from "@/types/channel";
import { Link } from "react-router-dom";

type Props = {
	isSelected: boolean;
	channel: Channel;
};

export function ChannelSidebarItem({ isSelected, channel: { id, name, workspace_id } }: Props) {
	return (
		<li>
			<Link
				to={`/workspaces/${workspace_id}/channels/${id}`}
				style={{ backgroundColor: !isSelected ? "transparent" : "#4b0096" }}
			>
				{name}
			</Link>
		</li>
	);
}
