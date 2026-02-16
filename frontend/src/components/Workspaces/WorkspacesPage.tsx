import {
	useGetChannelMessages,
	getChannelMessagesQueryOptions,
} from "@/hooks/messages/useGetChannelMessages";
import { useParams } from "react-router-dom";
import { MessageInput } from "./MessageInput/MessageInput";
import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import type { Message } from "@/types/message";

export function WorkspacesPage() {
	const { channelId } = useParams();

	const queryClient = useQueryClient();

	const { data: messages } = useGetChannelMessages(channelId!);

	useEffect(() => {
		const ws = new WebSocket(`${import.meta.env.VITE_WS_URL}/ws/channels/${channelId}`);

		ws.onmessage = (event) => {
			console.log(event);
			const data = JSON.parse(event.data);

			if (data.type === "message.created") {
				queryClient.setQueryData(
					getChannelMessagesQueryOptions(channelId!).queryKey,
					(old: Message[]) => [...(old ?? []), data.payload],
				);
			}
		};

		return () => ws.close();
	}, [queryClient, channelId]);

	return (
		<ul>
			{messages?.map((message) => (
				<li key={message.id}>{message.content}</li>
			))}
			<MessageInput />
		</ul>
	);
}
