import { FastifyInstance } from "fastify";
import { getCurrentUser, loginUser, logoutUser, registerUser } from "./userController.js";

export async function userRoutes(app: FastifyInstance) {
	app.post("/register", registerUser);
	app.post("/login", loginUser);
	app.post("/logout", logoutUser);
	app.get("/me", getCurrentUser);
}
