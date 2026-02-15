export type CreateChannelBody = {
	name: string;
	description?: string;
};

export type Channel = {
	id: string;
	workspaceId: string;
	name: string;
	description: string | null;
	createdBy: string;
	createdAt: string;
};
