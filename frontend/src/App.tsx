import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "./features/Login/LoginPage";
import { ChannelsPage } from "./features/Channels/ChannelsPage";
import { AppLayout } from "./layouts/AppLayout/AppLayout";

export const router = createBrowserRouter([
	{
		path: "/login",
		element: <LoginPage />,
	},
	{
		path: "/workspaces",
		element: <AppLayout />,
		children: [
			{
				path: "/workspaces/:workspaceId",
				element: <ChannelsPage />,
			},
		],
	},
	{
		path: "/workspaces/:workspaceId/channels",
		element: <AppLayout />,
		children: [
			{
				path: "/workspaces/:workspaceId/channels/:channelId",
				element: <ChannelsPage />,
			},
		],
	},
]);
