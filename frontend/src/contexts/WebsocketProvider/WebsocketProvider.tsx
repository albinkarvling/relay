import React, { useEffect, useState } from "react";

import { useQueryClient } from "@tanstack/react-query";

import { handleRealtimeEvent } from "@/realtime/handleRealtimeEvent";
import type { RealtimeEvent } from "@/types/realtime";

type WebsocketContextType = WebSocket | null | undefined;

const WebsocketContext = React.createContext<WebsocketContextType | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useWebsocket = () => {
	const context = React.useContext(WebsocketContext);
	if (context === null) {
		throw new Error("useWebsocket must be used within a WebSocketProvider");
	}
	return context;
};

export function WebSocketProvider({ children }: { children: React.ReactNode }) {
	const [websocket, setWebsocket] = useState<WebSocket | null | undefined>();

	const queryClient = useQueryClient();

	useEffect(() => {
		const ws = new WebSocket(`${import.meta.env.VITE_WS_URL}/ws`);

		ws.onopen = () => setWebsocket(ws);

		ws.onmessage = (event) => {
			const data: RealtimeEvent = JSON.parse(event.data);

			handleRealtimeEvent(data, queryClient);
		};

		return () => ws.close();
	}, [queryClient]);

	return <WebsocketContext.Provider value={websocket}>{children}</WebsocketContext.Provider>;
}
