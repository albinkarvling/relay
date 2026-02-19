import type { BoardLayout } from "@/types/board";
import { baseFetch } from "../baseFetch";

export const getBoardLayout = (boardId: string) =>
	baseFetch<BoardLayout>(`/boards/${boardId}/layout`);
