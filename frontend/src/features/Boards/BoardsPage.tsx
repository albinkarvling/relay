import { BoardSidebar } from "./BoardSidebar/BoardSidebar";

export function BoardsPage() {
	return (
		<main style={{ display: "flex", height: "100%" }}>
			<BoardSidebar />
			board content
		</main>
	);
}
