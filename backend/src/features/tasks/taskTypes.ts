export type CreateTaskBody = {
	title: string;
	description?: string;
	position: number;
};

export type Task = {
	id: string;
	columnId: string;
	title: string;
	description: string | null;
	position: number;
	createdBy: string;
	createdAt: string;
};
