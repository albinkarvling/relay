import type { User } from "../../types/user";
import { baseFetch } from "../baseFetch";

export const getMyUser = () => baseFetch<User>("/users/me");
