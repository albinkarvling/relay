import type { User } from "./user";

export type CreateMessagePayload = {
	content: string;
};

export type Message = {
	id: string;
	content: string;
	createdAt: string;
	author: User;
};
