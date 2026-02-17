export type CreateChannelPayload = {
	name: string;
	description?: string;
};

export type Channel = {
	id: string;
	workspace_id: string;
	name: string;
	description: string | null;
	created_at: string;
	created_by: string;
};
