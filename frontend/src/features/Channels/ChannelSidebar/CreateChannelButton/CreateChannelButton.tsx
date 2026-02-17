import { useModal } from "@/contexts/ModalProvider/ModalProvider";

export function CreateChannelButton() {
	const { openModal } = useModal();

	const handleCreateChannelClick = () => openModal("createChannel");

	return (
		<button
			className="p-3 w-full text-center cursor-pointer"
			onClick={handleCreateChannelClick}
		>
			Create Channel
		</button>
	);
}
