import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./AuthProvider/AuthProvider";
import { NavigationMemoryProvider } from "./NavigationMemoryProvider/NavigationMemoryProvider";
import { ModalProvider } from "./ModalProvider/ModalProvider";

const queryClient = new QueryClient();

export function MainProvider({ children }: { children: React.ReactNode }) {
	return (
		<QueryClientProvider client={queryClient}>
			<NavigationMemoryProvider>
				<AuthProvider>
					<ModalProvider>{children}</ModalProvider>
				</AuthProvider>
			</NavigationMemoryProvider>
		</QueryClientProvider>
	);
}
