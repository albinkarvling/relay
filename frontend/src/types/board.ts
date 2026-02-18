export type CreateBoardPayload = {
	name: string;
	description?: string;
};

export type Board = {
	id: string;
	name: string;
	description: string | null;
	workspaceId: string;
	createdAt: string;
	updatedAt: string;
};
