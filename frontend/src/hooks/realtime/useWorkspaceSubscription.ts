import { useEffect } from "react";
import { useWebsocket } from "@/contexts/WebsocketProvider/WebsocketProvider";

export function useWorkspaceSubscription(workspaceId?: string) {
	const ws = useWebsocket();

	useEffect(() => {
		if (!ws || !workspaceId) return;

		ws.send(
			JSON.stringify({
				type: "subscribe.workspace",
				workspaceId,
			}),
		);
	}, [ws, workspaceId]);
}
