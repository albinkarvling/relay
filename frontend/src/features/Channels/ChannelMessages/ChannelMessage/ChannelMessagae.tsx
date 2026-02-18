import type { Message } from "@/types/message";
import { formatTimestamp, formatTimeTimestamp } from "@/utils/formatTimestamp";
import { twMerge } from "tailwind-merge";

type Props = {
	message: Message;
	previousMessage?: Message;
};

export function ChannelMessage({ message, previousMessage }: Props) {
	console.log(message, previousMessage);
	const isSameAuthorAsPrevious = previousMessage?.author.id === message.author.id;
	const isWithinShortTimeframe =
		previousMessage &&
		new Date(message.createdAt).getTime() - new Date(previousMessage.createdAt).getTime() <
			5 * 60 * 1000;

	const shouldGroupWithPrevious = isSameAuthorAsPrevious && isWithinShortTimeframe;
	return (
		<div
			className={twMerge(
				"group relative p-1 flex gap-2 items-start hover:bg-foreground-secondary/50 rounded-md",
			)}
		>
			{!shouldGroupWithPrevious && (
				<div className="absolute grid place-items-center w-11 aspect-square rounded-full bg-foreground-secondary">
					{message.author.username.slice(0, 1).toUpperCase()}
				</div>
			)}
			<div className="relative ml-14 grid">
				{shouldGroupWithPrevious && (
					<span
						className={twMerge(
							"absolute text-xs right-[calc(100%+.5rem)] mt-[0.1rem] top-2/4 -translate-y-2/4",
							"hidden group-hover:block",
						)}
					>
						{formatTimeTimestamp(message.createdAt)}
					</span>
				)}
				{!shouldGroupWithPrevious && (
					<div className="flex gap-2 items-center">
						<span>{message.author.username}</span>
						<span className="mt-1 text-xs text-text-secondary">
							{formatTimestamp(message.createdAt)}
						</span>
					</div>
				)}
				<span>{message.content}</span>
			</div>
		</div>
	);
}
