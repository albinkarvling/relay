import { createChannel } from "@/api/channels/createChannel";
import type { Channel, CreateChannelPayload } from "@/types/channel";
import {
	QueryClient,
	useMutation,
	useQueryClient,
	type UseMutationOptions,
} from "@tanstack/react-query";
import { getChannelsQueryOptions } from "./useGetChannels";

export const createChannelMutationOptions = (
	queryClient: QueryClient,
	workspaceId: string,
): UseMutationOptions<Channel, Error, CreateChannelPayload> => ({
	mutationKey: ["createChannel"],
	mutationFn: (payload: CreateChannelPayload) => createChannel({ workspaceId, payload }),
	onSuccess: () =>
		queryClient.invalidateQueries({
			queryKey: getChannelsQueryOptions(workspaceId).queryKey,
		}),
});

export const useCreateChannel = (workspaceId: string) => {
	const queryClient = useQueryClient();
	return useMutation(createChannelMutationOptions(queryClient, workspaceId));
};
