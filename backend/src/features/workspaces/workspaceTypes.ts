export type CreateWorkspaceBody = {
	name: string;
};

export type Workspace = {
	id: string;
	name: string;
	createdAt: string;
	ownerId: string;
};
