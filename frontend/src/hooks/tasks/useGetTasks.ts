import { getTasks } from "@/api/tasks/getTasks";
import type { Task } from "@/types/task";
import { useQuery, type UseQueryOptions } from "@tanstack/react-query";

export const getTasksQueryOptions = (columnId?: string): UseQueryOptions<Task[]> => ({
	queryKey: ["getTasks", columnId],
	queryFn: () => getTasks(columnId!),
	enabled: !!columnId,
});

export const useGetTasks = (columnId?: string) => useQuery(getTasksQueryOptions(columnId));
