import { useModal } from "@/contexts/ModalProvider/ModalProvider";

export function CreateBoardButton() {
	const { openModal } = useModal();

	const handleCreateBoardClick = () => openModal("createBoard");

	return (
		<button className="p-3 w-full text-center cursor-pointer" onClick={handleCreateBoardClick}>
			Create Board
		</button>
	);
}
