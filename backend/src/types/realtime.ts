import { Board } from "./board.js";
import type { Message } from "./message.js";

// channel events
export type MessageCreatedEvent = {
	type: "message.created";
	payload: Message;
};

// board events
export type BoardCreatedEvent = {
	type: "board.created";
	payload: Board;
};

export type ChannelSubscribedEvent = {
	type: "channel.subscribed";
	payload: {
		channelId: string;
	};
};

export type RealtimeEvent = MessageCreatedEvent | BoardCreatedEvent | ChannelSubscribedEvent;
