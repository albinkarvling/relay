import { useGetChannelMessages } from "@/hooks/messages/useGetChannelMessages";
import { useParams } from "react-router-dom";

export function WorkspacesPage() {
	const { channelId } = useParams();

	const { data: messages } = useGetChannelMessages(channelId!);

	return (
		<ul>
			{messages?.map((message) => (
				<li>{message.content}</li>
			))}
		</ul>
	);
}
