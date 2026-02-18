import type { Board, CreateBoardPayload } from "@/types/board";
import { baseFetch } from "../baseFetch";

type Params = {
	workspaceId: string;
	payload: CreateBoardPayload;
};

export const createBoard = ({ workspaceId, payload }: Params) =>
	baseFetch<Board>(`/workspaces/${workspaceId}/boards`, {
		method: "POST",
		body: JSON.stringify(payload),
	});
