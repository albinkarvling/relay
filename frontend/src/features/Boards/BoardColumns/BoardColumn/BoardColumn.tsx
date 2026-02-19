import type { Column } from "@/types/column";
import { ColumnTasks } from "./ColumnTasks/ColumnTasks";
import { CreateTaskButton } from "./CreateTaskButton/CreateTaskButton";

type Props = {
	column: Column;
};

export function BoardColumn({ column }: Props) {
	return (
		<div className="w-(--column-width) bg-foreground-secondary">
			<h2 className="py-2 px-3">{column.name}</h2>
			<ColumnTasks columnId={column.id} />
			<CreateTaskButton columnId={column.id} />
		</div>
	);
}
