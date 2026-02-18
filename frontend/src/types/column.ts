export type CreateColumnPayload = {
	name: string;
	// this should absolutely not be chosen by the client, but it is for now until we implement a way to calculate it on the backend
	position: number;
};

export type Column = {
	id: string;
	boardId: string;
	name: string;
	position: number;
	createdAt: string;
};
