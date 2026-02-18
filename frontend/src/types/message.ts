import type { User } from "./user";

export type CreateMessagePayload = {
	content: string;
};

export type Message = {
	id: string;
	content: string;
	channelId: string;
	createdAt: string;
	author: User;
};
