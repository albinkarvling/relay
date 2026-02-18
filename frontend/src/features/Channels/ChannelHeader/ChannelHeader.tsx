import { useGetChannelById } from "@/hooks/channels/useGetChannelById";
import { useParams } from "react-router-dom";

export function ChannelHeader() {
	const { channelId } = useParams();
	const { channel } = useGetChannelById(channelId!);

	return (
		<div className="px-5 py-3.5 sticky top-0 bg-foreground border-b-2 border-foreground-tertiary">
			{channel?.name}
		</div>
	);
}
