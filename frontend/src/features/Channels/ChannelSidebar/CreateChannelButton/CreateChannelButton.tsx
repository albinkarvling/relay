import { useModal } from "@/contexts/ModalProvider/ModalProvider";
import { useParams } from "react-router-dom";

export function CreateChannelButton() {
	const { workspaceId } = useParams();
	const { openModal } = useModal();

	const handleCreateChannelClick = () => openModal("CREATE_CHANNEL", { workspaceId });

	return (
		<button
			className="p-3 w-full text-center cursor-pointer"
			onClick={handleCreateChannelClick}
		>
			Create Channel
		</button>
	);
}
