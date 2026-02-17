type Props = {
	children: React.ReactNode;
	title: string;
	description: string;
};

export function Modal({ children, title, description }: Props) {
	return (
		<div className="p-5 w-(--modal-width) max-h-(--modal-max-height) bg-foreground pointer-events-auto rounded-md">
			<h2 className="text-2xl font-semibold">{title}</h2>
			<p className="mb-5">{description}</p>
			{children}
		</div>
	);
}
