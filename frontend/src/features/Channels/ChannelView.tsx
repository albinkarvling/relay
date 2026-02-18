import { useParams } from "react-router-dom";
import { MessageInput } from "./MessageInput/MessageInput";
import { ChannelSidebar } from "./ChannelSidebar/ChannelSidebar";
import { useChannelSubscription } from "@/hooks/realtime/useChannelSubscription";
import { ChannelHeader } from "./ChannelHeader/ChannelHeader";
import { ChannelMessages } from "./ChannelMessages/ChannelMessages";

export function ChannelView() {
	const { channelId } = useParams();

	useChannelSubscription(channelId!);

	return (
		<main className="flex h-full">
			<ChannelSidebar />
			<div className="flex-1 flex flex-col min-h-0 bg-foreground">
				<ChannelHeader />
				<ChannelMessages />
				<MessageInput />
			</div>
		</main>
	);
}
