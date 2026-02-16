export type CreateMessagePayload = {
	content: string;
};

export type Message = {
	id: string;
	channel_id: string;
	user_id: string;
	content: string;
	created_at: string;
};
