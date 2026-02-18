import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./App.tsx";
import { MainProvider } from "./contexts/MainProvider.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<MainProvider>
			<RouterProvider router={router} />
		</MainProvider>
	</StrictMode>,
);
