import { baseFetch } from "../baseFetch";
import type { User } from "../../types/user";
import type { LoginPayload } from "../../types/auth";

export const loginUser = (payload: LoginPayload) =>
	baseFetch<User>("/users/login", {
		method: "POST",
		body: JSON.stringify(payload),
	});
