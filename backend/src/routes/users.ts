import { FastifyInstance } from "fastify";

import {
	registerUser,
	loginUser,
	getCurrentUser,
	logoutUser,
} from "../controllers/userController.js";

export async function userRoutes(app: FastifyInstance) {
	app.post("/register", registerUser);
	app.post("/login", loginUser);
	app.post("/logout", logoutUser);
	app.get("/me", getCurrentUser);
}
