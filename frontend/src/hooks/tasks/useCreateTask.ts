import { createTask } from "@/api/tasks/createTask";
import type { CreateTaskPayload, Task } from "@/types/task";
import { useMutation, type UseMutationOptions } from "@tanstack/react-query";

export const createTaskMutationOptions = (
	columnId: string,
): UseMutationOptions<Task, Error, CreateTaskPayload> => ({
	mutationKey: ["createTask"],
	mutationFn: (payload) => createTask({ columnId, payload }),
});

export const useCreateTask = (columnId: string) => useMutation(createTaskMutationOptions(columnId));
