import type { Board } from "@/types/board";
import { baseFetch } from "../baseFetch";

export const getBoards = async (workspaceId: string) =>
	baseFetch<Board[]>(`/workspaces/${workspaceId}/boards`);
