import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "./components/Login/LoginPage";
import { WorkspacesPage } from "./components/Workspaces/WorkspacesPage";
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
				element: <WorkspacesPage />,
			},
		],
	},
	{
		path: "/workspaces/:workspaceId/channels",
		element: <AppLayout />,
		children: [
			{
				path: "/workspaces/:workspaceId/channels/:channelId",
				element: <WorkspacesPage />,
			},
		],
	},
]);
