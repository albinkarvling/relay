import type { Channel } from "@/types/channel";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

type Props = {
	isSelected: boolean;
	channel: Channel;
};

export function ChannelSidebarItem({ isSelected, channel: { id, name, workspace_id } }: Props) {
	return (
		<li className="w-full">
			<Link
				to={`/workspaces/${workspace_id}/channels/${id}`}
				className={twMerge(
					"relative p-2 block w-full rounded-md",
					isSelected && "bg-primary",
					!isSelected && "hover:bg-primary-accent",
				)}
			>
				{name}
			</Link>
		</li>
	);
}
