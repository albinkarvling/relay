import { useModal } from "@/contexts/ModalProvider/ModalProvider";
import { useParams } from "react-router-dom";

export function CreateColumnButton() {
	const { boardId } = useParams();
	const { openModal } = useModal();

	const handleCreateClick = () => openModal("CREATE_COLUMN", { boardId });

	return (
		<button className="cursor-pointer" onClick={handleCreateClick}>
			Create Column
		</button>
	);
}
