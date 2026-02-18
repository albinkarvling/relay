import { useGetChannelMessages } from "@/hooks/messages/useGetChannelMessages";
import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { ChannelMessage } from "./ChannelMessage/ChannelMessagae";

export function ChannelMessages() {
	const { channelId } = useParams();
	const { data: messages } = useGetChannelMessages(channelId!);

	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!containerRef.current) return;
		containerRef.current.scrollTo(0, containerRef.current.scrollHeight);
	}, [channelId, messages?.length]);

	return (
		<div ref={containerRef} className="p-5 flex-1 min-h-0 overflow-y-auto">
			<ul className="flex flex-col justify-end min-h-full">
				{messages?.map((message, index) => (
					<li className="w-full" key={message.id}>
						<ChannelMessage message={message} previousMessage={messages[index - 1]} />
					</li>
				))}
			</ul>
		</div>
	);
}
