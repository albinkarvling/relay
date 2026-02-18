import { BoardColumns } from "./BoardColumns/BoardColumns";
import { BoardHeader } from "./BoardHeader/BoardHeader";
import { BoardSidebar } from "./BoardSidebar/BoardSidebar";

export function BoardView() {
	return (
		<main className="flex h-full">
			<BoardSidebar />
			<div className="flex-1 flex flex-col min-h-0 bg-foreground">
				<BoardHeader />
				<BoardColumns />
			</div>
		</main>
	);
}
