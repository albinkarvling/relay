export type CreateBoardBody = {
	name: string;
	description?: string;
};

export type Board = {
	id: string;
	workspaceId: string;
	name: string;
	description: string | null;
	createdBy: string;
	createdAt: string;
};
