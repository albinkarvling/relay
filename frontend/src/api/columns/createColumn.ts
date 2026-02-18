import type { Column, CreateColumnPayload } from "@/types/column";
import { baseFetch } from "../baseFetch";

type Params = {
	boardId: string;
	payload: CreateColumnPayload;
};

export const createColumn = ({ boardId, payload }: Params) =>
	baseFetch<Column>(`/boards/${boardId}/columns`, {
		method: "POST",
		body: JSON.stringify(payload),
	});
