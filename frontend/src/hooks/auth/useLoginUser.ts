import {
	QueryClient,
	useMutation,
	useQueryClient,
	type UseMutationOptions,
} from "@tanstack/react-query";
import { loginUser } from "../../api/auth/loginUser";
import type { LoginPayload } from "../../types/auth";
import type { User } from "../../types/user";
import { useGetMyUserQueryOptions } from "../users/useMyUser";

const loginUserOptions = (
	queryClient: QueryClient,
): UseMutationOptions<User, Error, LoginPayload> => ({
	mutationKey: ["loginUser"],
	mutationFn: loginUser,
	onSuccess: () => {
		queryClient.invalidateQueries({ queryKey: useGetMyUserQueryOptions.queryKey });
	},
});

export const useLoginUser = () => {
	const queryClient = useQueryClient();
	return useMutation(loginUserOptions(queryClient));
};
