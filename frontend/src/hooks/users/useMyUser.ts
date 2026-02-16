import { useQuery, type UseQueryOptions } from "@tanstack/react-query";
import { getMyUser } from "../../api/users/getMyUser";
import type { User } from "../../types/user";

export const useGetMyUserQueryOptions: UseQueryOptions<User> = {
	queryKey: ["getMyUser"],
	queryFn: getMyUser,
	retry: false,
};

export const useMyUser = () => useQuery(useGetMyUserQueryOptions);
