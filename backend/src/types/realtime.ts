import type { Message } from "./message.js";

export type MessageCreatedEvent = {
	type: "message.created";
	payload: Message;
};

export type ChannelSubscribedEvent = {
	type: "channel.subscribed";
	payload: {
		channelId: string;
	};
};

export type RealtimeEvent = MessageCreatedEvent | ChannelSubscribedEvent;
