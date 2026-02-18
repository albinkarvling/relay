import { useModal } from "@/contexts/ModalProvider/ModalProvider";

export function CreateColumnButton() {
	const { openModal } = useModal();

	const handleCreateClick = () => openModal("createColumn");

	return (
		<button className="cursor-pointer" onClick={handleCreateClick}>
			Create Column
		</button>
	);
}
