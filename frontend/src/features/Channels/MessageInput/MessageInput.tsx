import { useCreateChannelMessage } from "@/hooks/messages/useCreateChannelMessage";
import { SendIcon } from "lucide-react";
import { useState } from "react";
import { useParams } from "react-router-dom";

export function MessageInput() {
	const { channelId } = useParams();
	const { mutateAsync: sendMessageAsync, isPending } = useCreateChannelMessage(channelId!);

	const [content, setContent] = useState("");

	const handleSubmit = async (e: React.SubmitEvent) => {
		e.preventDefault();

		if (!content || content.trim() === "") {
			return;
		}

		try {
			await sendMessageAsync({ content });
		} catch (error) {
			console.error("Failed to send message:", error);
		} finally {
			setContent("");
		}
	};

	return (
		<div className="p-5 pt-0 w-full sticky bottom-0 bg-foreground">
			<form
				onSubmit={handleSubmit}
				className="relative w-full flexborder-2 bg-foreground-secondary border-foreground-tertiary rounded-lg"
			>
				<input
					className="p-5 w-full"
					placeholder="Send message"
					onChange={(e) => setContent(e.target.value)}
					value={content}
				/>
				<button
					type="submit"
					className="absolute p-2 right-3 top-2/4 -translate-y-2/4 rounded-md transition-colors hover:bg-foreground-tertiary cursor-pointer"
					disabled={isPending}
				>
					<SendIcon />
				</button>
			</form>
		</div>
	);
}
