import { createContext, useContext, useEffect, useRef, useState } from "react";

import { useParams } from "react-router-dom";

type WorkspaceMemory = {
	/** Key is workspaceId of the channel */
	lastChannelId: Record<string, string>;
	/** Key is workspaceId of the board */
	lastBoardId: Record<string, string>;
};

type ContextType = {
	getLastChannelId: (workspaceId?: string) => string;
	getLastBoardId: (workspaceId?: string) => string;
};

const WorkspaceNavigationMemoryContext = createContext<ContextType | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useNavigationMemory = () => {
	const context = useContext(WorkspaceNavigationMemoryContext);

	if (!context) {
		throw new Error("useWorkspaceNavigationMemory must be used within provider");
	}

	return context;
};

export function NavigationMemoryProvider({ children }: { children: React.ReactNode }) {
	const { workspaceId, channelId, boardId } = useParams();

	const [previousRoutes, setPreviousRoutes] = useState<WorkspaceMemory>({
		lastBoardId: {},
		lastChannelId: {},
	});
	const previousRoutesRef = useRef<WorkspaceMemory>({
		lastBoardId: {},
		lastChannelId: {},
	});

	useEffect(() => {
		if (!workspaceId) return;

		const updatedRoutes = { ...previousRoutesRef.current };

		if (channelId && channelId !== updatedRoutes.lastChannelId[workspaceId]) {
			updatedRoutes.lastChannelId = {
				...updatedRoutes.lastChannelId,
				[workspaceId]: channelId,
			};
		}

		if (boardId && boardId !== updatedRoutes.lastBoardId[workspaceId]) {
			updatedRoutes.lastBoardId = {
				...updatedRoutes.lastBoardId,
				[workspaceId]: boardId,
			};
		}

		previousRoutesRef.current = updatedRoutes;
		setPreviousRoutes(updatedRoutes);
	}, [workspaceId, channelId, boardId]);

	const getLastChannelId = (workspaceId?: string) => {
		if (!workspaceId) return "";
		return previousRoutes.lastChannelId[workspaceId] ?? "";
	};
	const getLastBoardId = (workspaceId?: string) => {
		if (!workspaceId) return "";
		return previousRoutes.lastBoardId[workspaceId] ?? "";
	};

	const value = {
		getLastChannelId,
		getLastBoardId,
	};
	return (
		<WorkspaceNavigationMemoryContext.Provider value={value}>
			{children}
		</WorkspaceNavigationMemoryContext.Provider>
	);
}
