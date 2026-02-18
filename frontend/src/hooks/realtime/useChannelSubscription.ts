import { useEffect } from "react";

import { useWebsocket } from "@/contexts/WebsocketProvider/WebsocketProvider";

export function useChannelSubscription(channelId: string) {
	const ws = useWebsocket();

	useEffect(() => {
		if (!ws) return;

		ws.send(
			JSON.stringify({
				type: "subscribe.channel",
				channelId,
			}),
		);
	}, [ws, channelId]);
}
