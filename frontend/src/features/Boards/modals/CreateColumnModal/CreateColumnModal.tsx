import { useCreateColumn } from "@/hooks/columns/useCreateColumn";
import { useGetColumns } from "@/hooks/columns/useGetColumns";
import { Modal } from "@/ui/Modal/Modal";
import { ModalActions } from "@/ui/Modal/ModalActions/ModalActions";
import { useState } from "react";

type Props = {
	onClose: () => void;
	boardId?: string;
};

export function CreateColumnModal({ boardId, onClose }: Props) {
	const { mutateAsync: createColumnAsync, isPending } = useCreateColumn(boardId!);
	const { data: columns } = useGetColumns(boardId!);

	const [columnName, setColumnName] = useState("");
	// i cannot stress this enough. this should NOT be in frontend.
	// will move to backend asap.
	const [position, setPosition] = useState(0);

	const handleCreateColumn = async (e: React.SubmitEvent) => {
		e.preventDefault();

		if (!columnName || !columnName.trim()) return;

		// REMOVE THIS. SHOULD NOT BE IN FRONTEND
		if (position !== columns?.length) return;

		try {
			await createColumnAsync({ name: columnName, position });
			onClose();
		} catch {
			// Handle error later
		}
	};

	return (
		<Modal
			title="Create Column"
			description="Create a column for your board to organize your tasks."
		>
			<form onSubmit={handleCreateColumn} className="grid gap-2">
				<input
					placeholder="Column name"
					value={columnName}
					onChange={(e) => setColumnName(e.target.value)}
				/>
				{/* remove this, not in FE please */}
				<input
					placeholder="Column position"
					value={position}
					onChange={(e) => setPosition(Number(e.target.value))}
					type="number"
				/>
				<ModalActions
					primaryText="Create Column"
					onSecondaryAction={onClose}
					isDisabled={isPending}
				/>
			</form>
		</Modal>
	);
}
