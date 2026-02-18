import { getChannelMessagesQueryOptions } from "@/hooks/messages/useGetChannelMessages";
import type { Message } from "@/types/message";
import type { QueryClient } from "@tanstack/react-query";

export function handleMessageCreated(message: Message, queryClient: QueryClient) {
	queryClient.setQueryData(
		getChannelMessagesQueryOptions(message.channelId).queryKey,
		(old: Message[] = []) => [...(old ?? []), message],
	);
}
