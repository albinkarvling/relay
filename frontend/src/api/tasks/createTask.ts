import type { Task, CreateTaskPayload } from "@/types/task";
import { baseFetch } from "../baseFetch";

type Params = {
	columnId: string;
	payload: CreateTaskPayload;
};

export const createTask = async ({ columnId, payload }: Params) =>
	baseFetch<Task>(`/columns/${columnId}/tasks`, {
		method: "POST",
		body: JSON.stringify(payload),
	});
