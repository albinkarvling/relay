type Props = {
	primaryText: string;
	secondaryText?: string;
	onPrimaryAction?: () => void;
	onSecondaryAction?: () => void;
	isDisabled?: boolean;
};

export function ModalActions({
	primaryText,
	onPrimaryAction,
	onSecondaryAction,
	secondaryText = "Cancel",
	isDisabled = false,
}: Props) {
	return (
		<div className="flex gap-3">
			<button onClick={onSecondaryAction} disabled={isDisabled}>
				{secondaryText}
			</button>
			<button onClick={onPrimaryAction} disabled={isDisabled} type="submit">
				{primaryText}
			</button>
		</div>
	);
}
