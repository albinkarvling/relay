import type { Message } from "@/types/message";
import { baseFetch } from "../baseFetch";

export const getChannelMessages = (channelId: string) =>
	baseFetch<Message[]>(`/channels/${channelId}/messages`);
