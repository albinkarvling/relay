import { getChannels } from "@/api/channels/getChannels";
import type { Channel } from "@/types/channel";
import { useQuery, type UseQueryOptions } from "@tanstack/react-query";

export const useGetChannelsQueryOptions = (
	workspaceId: string,
): UseQueryOptions<Channel[], Error> => ({
	queryKey: ["getChannels", workspaceId],
	queryFn: () => getChannels(workspaceId),
});

export const useGetChannels = (workspaceId: string) =>
	useQuery(useGetChannelsQueryOptions(workspaceId));
