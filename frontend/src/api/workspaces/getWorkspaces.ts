import type { Workspace } from "../../types/workspace";
import { baseFetch } from "../baseFetch";

export const getWorkspaces = () => baseFetch<Workspace[]>("/workspaces");
