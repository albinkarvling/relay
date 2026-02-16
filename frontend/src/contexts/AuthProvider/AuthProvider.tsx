import { createContext, useContext } from "react";
import type { User } from "../../types/user";
import { useMyUser } from "../../hooks/users/useMyUser";

type AuthContextType = {
	user?: User;
	isPending: boolean;
};

const AuthContext = createContext<AuthContextType | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
	const { data: user, isPending } = useMyUser();

	const value = {
		user,
		isPending,
	};
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
