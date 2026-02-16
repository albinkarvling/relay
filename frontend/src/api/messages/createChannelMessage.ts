import type { Message, CreateMessagePayload } from "@/types/message";
import { baseFetch } from "../baseFetch";

type Params = {
	channelId: string;
	payload: CreateMessagePayload;
};

export const createChannelMessage = ({ channelId, payload }: Params) =>
	baseFetch<Message>(`/channels/${channelId}/messages`, {
		method: "POST",
		body: JSON.stringify(payload),
	});
