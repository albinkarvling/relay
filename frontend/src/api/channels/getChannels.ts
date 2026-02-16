import type { Channel } from "@/types/channel";
import { baseFetch } from "../baseFetch";

export const getChannels = async (workspaceId: string) =>
	baseFetch<Channel[]>(`/workspaces/${workspaceId}/channels`);
