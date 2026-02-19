import { useCreateBoard } from "@/hooks/boards/useCreateBoard";
import { Modal } from "@/ui/Modal/Modal";
import { ModalActions } from "@/ui/Modal/ModalActions/ModalActions";
import { useState } from "react";

type Props = {
	onClose: () => void;
	workspaceId?: string;
};

export function CreateBoardModal({ onClose, workspaceId }: Props) {
	const { mutateAsync: createBoardAsync, isPending } = useCreateBoard(workspaceId!);

	const [boardName, setBoardName] = useState("");
	const [boardDescription, setBoardDescription] = useState("");

	const handleCreateBoard = async (e: React.SubmitEvent) => {
		e.preventDefault();

		if (!boardName || !boardName.trim()) return;

		try {
			await createBoardAsync({
				name: boardName,
				description: boardDescription,
			});
			onClose();
		} catch (error) {
			console.error("Failed to create board", error);
		}
	};

	return (
		<Modal title="Create Board" description="Create a new board for your workspace">
			<form onSubmit={handleCreateBoard} className="grid gap-2">
				<input
					placeholder="Board name"
					value={boardName}
					onChange={(e) => setBoardName(e.target.value)}
				/>
				<input
					placeholder="Board description"
					value={boardDescription}
					onChange={(e) => setBoardDescription(e.target.value)}
				/>
				<ModalActions
					onSecondaryAction={onClose}
					primaryText="Create board"
					isDisabled={isPending}
				/>
			</form>
		</Modal>
	);
}
