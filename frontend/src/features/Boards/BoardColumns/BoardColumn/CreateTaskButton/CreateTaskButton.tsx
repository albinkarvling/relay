import { useModal } from "@/contexts/ModalProvider/ModalProvider";

type Props = {
	columnId: string;
};
export function CreateTaskButton({ columnId }: Props) {
	const { openModal } = useModal();

	const handleCreateBoardClick = () => openModal("CREATE_TASK", { columnId });

	return (
		<button className="p-3 w-full text-center cursor-pointer" onClick={handleCreateBoardClick}>
			Create Task
		</button>
	);
}
