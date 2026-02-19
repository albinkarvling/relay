import { useCreateTask } from "@/hooks/tasks/useCreateTask";
import { useGetTasks } from "@/hooks/tasks/useGetTasks";
import { Modal } from "@/ui/Modal/Modal";
import { ModalActions } from "@/ui/Modal/ModalActions/ModalActions";
import { useState } from "react";

type Props = {
	columnId: string;
	onClose: () => void;
};

export function CreateTaskModal({ columnId, onClose }: Props) {
	const { data: tasks } = useGetTasks(columnId);
	const { mutateAsync: createTaskAsync, isPending } = useCreateTask(columnId);

	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [position, setPosition] = useState(0);

	const handleCreateTask = async (e: React.SubmitEvent) => {
		e.preventDefault();

		if (!title.trim()) return;
		if (position !== tasks?.length) return;

		try {
			await createTaskAsync({
				title,
				description,
				position,
			});
			onClose();
		} catch {
			// TODO: Handle error
		}
	};

	return (
		<Modal title="Create Task" description="Enter the details for the new task below.">
			<form onSubmit={handleCreateTask} className="grid">
				<input
					placeholder="Title"
					onChange={(e) => setTitle(e.target.value)}
					value={title}
				/>
				<input
					placeholder="Description"
					onChange={(e) => setDescription(e.target.value)}
					value={description}
				/>
				<input
					placeholder="Position"
					onChange={(e) => setPosition(Number(e.target.value))}
					value={position}
					type="number"
				/>
				<ModalActions primaryText="Create Task" isDisabled={isPending} />
			</form>
		</Modal>
	);
}
