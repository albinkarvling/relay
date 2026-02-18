export type Column = {
	id: string;
	boardId: string;
	name: string;
	position: number;
	createdAt: string;
};

export type CreateColumnBody = {
	name: string;
	position: number;
};
