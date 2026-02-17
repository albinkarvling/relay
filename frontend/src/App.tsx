import { createBrowserRouter, Outlet } from "react-router-dom";
import { LoginPage } from "./features/Login/LoginPage";
import { ChannelsPage } from "./features/Channels/ChannelsPage";
import { AppLayout } from "./layouts/AppLayout/AppLayout";
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
						element: <ChannelsPage />,
					},

					{
						path: "channels",
						element: <ChannelsPage />,
					},

					{
						path: "channels/:channelId",
						element: <ChannelsPage />,
					},
				],
			},
		],
	},
]);
