import { useQuery } from "@tanstack/react-query";
import { getWorkspaces } from "../../api/workspaces/getWorkspaces";

export const useGetWorkspaces = () =>
	useQuery({ queryKey: ["getWorkspaces"], queryFn: getWorkspaces });
