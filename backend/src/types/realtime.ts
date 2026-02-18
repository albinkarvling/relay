import { Board } from "@/features/boards/boardTypes.js";
import { Column } from "@/features/columns/columnTypes.js";
import { Message } from "@/features/messages/messageTypes.js";

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
