import { useCreateChannel } from "@/hooks/channels/useCreateChannel";
import { Modal } from "@/ui/Modal/Modal";
import { ModalActions } from "@/ui/Modal/ModalActions/ModalActions";
import { useState } from "react";
import { useParams } from "react-router-dom";

type Props = {
	onClose: () => void;
};

export function CreateChannelModal({ onClose }: Props) {
	const { workspaceId } = useParams();
	const { mutateAsync: createChannelAsync, isPending } = useCreateChannel(workspaceId!);

	const [channelName, setChannelName] = useState("");
	const [channelDescription, setChannelDescription] = useState("");

	const handleCreateChannel = async (e: React.SubmitEvent) => {
		e.preventDefault();

		if (!channelName.trim()) {
			// Handle error: channel name is required
			return;
		}

		try {
			await createChannelAsync({
				name: channelName,
				description: channelDescription,
			});
			onClose();
		} catch (error) {
			console.error("Failed to create channel:", error);
		}
	};

	return (
		<Modal title="Create Channel" description="Create a new channel for your workspace">
			<form onSubmit={handleCreateChannel} className="grid">
				<input
					placeholder="Channel name"
					value={channelName}
					onChange={(e) => setChannelName(e.target.value)}
				/>
				<input
					placeholder="Channel description"
					value={channelDescription}
					onChange={(e) => setChannelDescription(e.target.value)}
				/>
				<ModalActions primaryText="Create channel" isDisabled={isPending} />
			</form>
		</Modal>
	);
}
