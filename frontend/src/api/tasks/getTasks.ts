import type { Task } from "@/types/task";
import { baseFetch } from "../baseFetch";

export const getTasks = async (columnId: string) => baseFetch<Task[]>(`/columns/${columnId}/tasks`);
