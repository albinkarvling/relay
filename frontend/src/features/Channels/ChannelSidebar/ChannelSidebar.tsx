import { useGetChannels } from "@/hooks/channels/useGetChannels";
import { ChannelSidebarItem } from "./ChannelSidebarItem/ChannelSidebarItem";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { CreateChannelButton } from "./CreateChannelButton/CreateChannelButton";

export function ChannelSidebar() {
	const navigate = useNavigate();

	const { workspaceId, channelId } = useParams();

	const { data: channels, isPending } = useGetChannels(workspaceId!);

	useEffect(() => {
		if (channelId) return;
		if (channels?.length) {
			navigate(`/workspaces/${workspaceId}/channels/${channels[0].id}`);
		}
	}, [navigate, workspaceId, channelId, channels]);

	return (
		<nav className="min-w-(--sidebar-width) p-4 bg-secondary">
			<ul>
				{channels?.map((channel) => (
					<ChannelSidebarItem
						key={channel.id}
						channel={channel}
						isSelected={channel.id === channelId}
					/>
				))}
			</ul>
			<CreateChannelButton />
		</nav>
	);
}
