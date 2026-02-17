import type { Channel, CreateChannelPayload } from "@/types/channel";
import { baseFetch } from "../baseFetch";

type Params = {
	workspaceId: string;
	payload: CreateChannelPayload;
};

export const createChannel = ({ workspaceId, payload }: Params) =>
	baseFetch<Channel>(`/workspaces/${workspaceId}/channels`, {
		method: "POST",
		body: JSON.stringify(payload),
	});
