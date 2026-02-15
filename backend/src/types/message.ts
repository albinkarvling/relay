export type CreateMessageBody = {
	content: string;
};

export type Message = {
	id: string;
	channelId: string;
	userId: string;
	content: string;
	createdAt: string;
};
