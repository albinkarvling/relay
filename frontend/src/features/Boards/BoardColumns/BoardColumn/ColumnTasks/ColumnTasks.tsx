import { useGetTasks } from "@/hooks/tasks/useGetTasks";

type Props = {
	columnId: string;
};

export function ColumnTasks({ columnId }: Props) {
	const { data: tasks } = useGetTasks(columnId);

	return (
		<ul>
			{tasks?.map((task) => (
				<li key={task.id}>{task.title}</li>
			))}
		</ul>
	);
}
