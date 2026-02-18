import type { Board } from "./board";
import type { Column } from "./column";
import type { Message } from "./message";

export type BoardCreatedEvent = {
	type: "board.created";
	payload: Board;
};

export type ColumnCreatedEvent = {
	type: "column.created";
	payload: Column;
};

export type MessageCreatedEvent = {
	type: "message.created";
	payload: Message;
};

export type RealtimeEvent = MessageCreatedEvent | BoardCreatedEvent | ColumnCreatedEvent;
