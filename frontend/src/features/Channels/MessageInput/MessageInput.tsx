import { useCreateChannelMessage } from "@/hooks/messages/useCreateChannelMessage";
import { useState } from "react";
import { useParams } from "react-router-dom";

export function MessageInput() {
	const { channelId } = useParams();
	const { mutateAsync: sendMessageAsync } = useCreateChannelMessage(channelId!);

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
		<form onSubmit={handleSubmit}>
			<input
				placeholder="Send message"
				onChange={(e) => setContent(e.target.value)}
				value={content}
			/>
			<button type="submit">Send</button>
		</form>
	);
}
