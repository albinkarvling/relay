import { createBrowserRouter, Outlet } from "react-router-dom";
import { LoginPage } from "./features/Login/LoginPage";
import { ChannelView } from "./features/Channels/ChannelView";
import { AppLayout } from "./layouts/AppLayout/AppLayout";
import { BoardView } from "./features/Boards/BoardView";
import { MainProvider } from "./contexts/MainProvider";

export const router = createBrowserRouter([
	{
		element: (
			<MainProvider>
				<Outlet />
			</MainProvider>
		),
		children: [
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
						element: <BoardView />,
					},
					{
						path: "boards",
						element: <BoardView />,
					},
					{
						path: "boards/:boardId",
						element: <BoardView />,
					},
				],
			},
		],
	},
]);
