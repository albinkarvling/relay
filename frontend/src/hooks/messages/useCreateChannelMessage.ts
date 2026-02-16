import { createChannelMessage } from "@/api/messages/createChannelMessage";
import type { CreateMessagePayload, Message } from "@/types/message";
import { useMutation, type UseMutationOptions } from "@tanstack/react-query";

export const useCreateChannelMessageMutationOptions = (
	channelId: string,
): UseMutationOptions<Message, Error, CreateMessagePayload> => ({
	mutationKey: ["createChannelMessage"],
	mutationFn: (payload) => createChannelMessage({ channelId, payload }),
});

export const useCreateChannelMessage = (channelId: string) =>
	useMutation(useCreateChannelMessageMutationOptions(channelId));
