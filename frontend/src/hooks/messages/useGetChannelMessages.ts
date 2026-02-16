import { getChannelMessages } from "@/api/messages/getChannelMessages";
import type { Message } from "@/types/message";
import { useQuery, type UseQueryOptions } from "@tanstack/react-query";

export const useGetChannelMessagesQueryOptions = (
	channelId: string,
): UseQueryOptions<Message[]> => ({
	queryKey: ["getChannelMessages", channelId],
	queryFn: () => getChannelMessages(channelId),
});

export const useGetChannelMessages = (channelId: string) =>
	useQuery(useGetChannelMessagesQueryOptions(channelId));
