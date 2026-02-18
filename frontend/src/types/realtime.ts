import type { Board } from "./board";
import type { Message } from "./message";

export type BoardCreatedEvent = {
	type: "board.created";
	payload: Board;
};

export type MessageCreatedEvent = {
	type: "message.created";
	payload: Message;
};

export type RealtimeEvent = MessageCreatedEvent | BoardCreatedEvent;
