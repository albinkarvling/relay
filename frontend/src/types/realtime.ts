import type { Message } from "./message";

export type MessageCreatedEvent = {
	type: "message.created";
	payload: Message;
};

export type RealtimeEvent = MessageCreatedEvent;
