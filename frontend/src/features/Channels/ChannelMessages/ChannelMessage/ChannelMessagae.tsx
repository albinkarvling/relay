import type { Message } from "@/types/message";

type Props = {
	message: Message;
};

export function ChannelMessage({ message }: Props) {
	return (
		<div className="flex items-start">
			<div
				style={{
					display: "grid",
					placeItems: "center",
					width: "42px",
					aspectRatio: 1,
					borderRadius: "50%",
					backgroundColor: "#242424",
				}}
			>
				{message.author.username.slice(0, 1).toUpperCase()}
			</div>
			<div style={{ display: "grid" }}>
				<span>{message.author.username}</span>
				<span>{message.content}</span>
			</div>
		</div>
	);
}
