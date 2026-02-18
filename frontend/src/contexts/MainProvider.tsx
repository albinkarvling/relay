import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./AuthProvider/AuthProvider";
import { NavigationMemoryProvider } from "./NavigationMemoryProvider/NavigationMemoryProvider";
import { ModalProvider } from "./ModalProvider/ModalProvider";
import { WebSocketProvider } from "./WebsocketProvider/WebsocketProvider";

const queryClient = new QueryClient();

export function MainProvider({ children }: { children: React.ReactNode }) {
	return (
		<QueryClientProvider client={queryClient}>
			<WebSocketProvider>
				<NavigationMemoryProvider>
					<AuthProvider>
						<ModalProvider>{children}</ModalProvider>
					</AuthProvider>
				</NavigationMemoryProvider>
			</WebSocketProvider>
		</QueryClientProvider>
	);
}
