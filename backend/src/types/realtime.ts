import { Board } from "./board.js";
import { Column } from "./column.js";
import type { Message } from "./message.js";

// subscription events
export type ChannelSubscribedEvent = {
	type: "channel.subscribed";
	payload: {
		channelId: string;
	};
};

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
export type ColumnCreatedEvent = {
	type: "column.created";
	payload: Column;
};

type SubscriptionEvents = ChannelSubscribedEvent;
type ChannelEvents = MessageCreatedEvent;
type BoardEvents = BoardCreatedEvent | ColumnCreatedEvent;

export type RealtimeEvent = SubscriptionEvents | ChannelEvents | BoardEvents;
