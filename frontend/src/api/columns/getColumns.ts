import type { Column } from "@/types/column";
import { baseFetch } from "../baseFetch";

export const getColumns = (boardId: string) => baseFetch<Column[]>(`/boards/${boardId}/columns`);
