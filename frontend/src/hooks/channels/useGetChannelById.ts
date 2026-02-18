import { useParams } from "react-router-dom";
import { useGetChannels } from "./useGetChannels";

export function useGetChannelById(channelId: string) {
	const { workspaceId } = useParams();

	const query = useGetChannels(workspaceId!);

	return {
		channel: query.data?.find((c) => c.id === channelId),
		...query,
	};
}
