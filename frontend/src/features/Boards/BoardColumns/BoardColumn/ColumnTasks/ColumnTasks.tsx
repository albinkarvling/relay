import { useGetTasks } from "@/hooks/tasks/useGetTasks";

type Props = {
	boardId: string;
	columnId: string;
};

export function ColumnTasks({ boardId, columnId }: Props) {
	const { data: tasks } = useGetTasks(boardId, columnId);

	return (
		<ul>
			{tasks?.map((task) => (
				<li key={task.id}>{task.title}</li>
			))}
		</ul>
	);
}
