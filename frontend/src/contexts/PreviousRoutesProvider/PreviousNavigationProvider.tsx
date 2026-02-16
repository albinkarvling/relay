import { createContext, useContext, useRef } from "react";

import { useLocation, useParams } from "react-router-dom";

type WorkspaceMemory = {
	lastChannelId: string | null;
	lastBoardId: string | null;
};

type MemoryMap = Record<string, WorkspaceMemory>;

type ContextType = {
	getLastChannel: (workspaceId: string) => string | null;

	getLastBoard: (workspaceId: string) => string | null;
};

const WorkspaceNavigationMemoryContext = createContext<ContextType | null>(null);

export function useWorkspaceNavigationMemory() {
	const context = useContext(WorkspaceNavigationMemoryContext);

	if (!context) {
		throw new Error("useWorkspaceNavigationMemory must be used within provider");
	}

	return context;
}

export function WorkspaceNavigationMemoryProvider({ children }: { children: React.ReactNode }) {
	const location = useLocation();

	const { workspaceId, channelId, boardId } = useParams();

	const memoryRef = useRef<MemoryMap>({});

	// Update memory synchronously during render when route changes
	if (workspaceId) {
		const workspace = memoryRef.current[workspaceId] ?? {
			lastChannelId: null,
			lastBoardId: null,
		};

		if (channelId && channelId !== workspace.lastChannelId) {
			workspace.lastChannelId = channelId;
		}

		if (boardId && boardId !== workspace.lastBoardId) {
			workspace.lastBoardId = boardId;
		}

		memoryRef.current[workspaceId] = workspace;
	}

	const getLastChannel = (workspaceId: string) =>
		memoryRef.current[workspaceId]?.lastChannelId ?? null;

	const getLastBoard = (workspaceId: string) =>
		memoryRef.current[workspaceId]?.lastBoardId ?? null;

	return (
		<WorkspaceNavigationMemoryContext.Provider
			value={{
				getLastChannel,
				getLastBoard,
			}}
		>
			{children}
		</WorkspaceNavigationMemoryContext.Provider>
	);
}
