import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "./features/Login/LoginPage";
import { ChannelView } from "./features/Channels/ChannelView";
import { AppLayout } from "./layouts/AppLayout/AppLayout";
import { BoardsPage } from "./features/Boards/BoardsPage";

export const router = createBrowserRouter([
	{
		path: "/login",
		element: <LoginPage />,
	},
	{
		path: "/workspaces/:workspaceId",
		element: <AppLayout />,
		children: [
			{
				index: true,
				element: <ChannelView />,
			},

			{
				path: "channels",
				element: <ChannelView />,
			},

			{
				path: "channels/:channelId",
				element: <ChannelView />,
			},
		],
	},
	{
		path: "/workspaces/:workspaceId",
		element: <AppLayout />,
		children: [
			{
				index: true,
				element: <BoardsPage />,
			},
			{
				path: "boards",
				element: <BoardsPage />,
			},
			{
				path: "boards/:boardId",
				element: <BoardsPage />,
			},
		],
	},
]);
