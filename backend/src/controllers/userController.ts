import bcrypt from "bcryptjs";
import { FastifyReply, FastifyRequest } from "fastify";

import { createUser, getUserByUsername, getUserById } from "../repositories/userRepository.js";

export async function registerUser(
	request: FastifyRequest<{
		Body: {
			username: string;
			password: string;
			email?: string;
		};
	}>,
	reply: FastifyReply,
) {
	const { username, password, email } = request.body;

	if (!username || !username.trim()) {
		return reply.status(400).send({
			error: "Username is required",
		});
	}
	if (!password || password.length < 6) {
		return reply.status(400).send({
			error: "Password must be at least 6 characters",
		});
	}

	const existing = await getUserByUsername(username);

	if (existing) {
		return reply.status(400).send({
			error: "Username already exists",
		});
	}

	const passwordHash = await bcrypt.hash(password, 12);

	const user = await createUser(username, passwordHash, email);

	reply.setCookie("userId", user.id, {
		path: "/",
		httpOnly: true,
		sameSite: "lax",
		signed: true,
		maxAge: 60 * 60 * 24 * 365 * 10,
	});

	return user;
}

export async function loginUser(
	request: FastifyRequest<{
		Body: {
			username: string;
			password: string;
		};
	}>,
	reply: FastifyReply,
) {
	const { username, password } = request.body;

	const user = await getUserByUsername(username);

	if (!user) {
		return reply.status(401).send({
			error: "Invalid credentials",
		});
	}

	const valid = await bcrypt.compare(password, user.password);

	if (!valid) {
		return reply.status(401).send({
			error: "Invalid credentials",
		});
	}

	reply.setCookie("userId", user.id, {
		path: "/",
		httpOnly: true,
		sameSite: "lax",
		signed: true,
		maxAge: 60 * 60 * 24 * 365 * 10,
	});

	return {
		id: user.id,
		username: user.username,
		email: user.email,
	};
}

export async function getCurrentUser(request: FastifyRequest, reply: FastifyReply) {
	const cookie = request.cookies.userId;

	console.log("FDSFDSFds");
	if (!cookie) {
		return reply.status(401).send({
			error: "Not logged in",
		});
	}

	const { value, valid } = request.unsignCookie(cookie);

	if (!valid) {
		return reply.status(401).send({
			error: "Invalid cookie",
		});
	}

	const user = await getUserById(value);

	return user;
}

export async function logoutUser(request: FastifyRequest, reply: FastifyReply) {
	reply.clearCookie("userId", {
		path: "/",
	});

	return {
		success: true,
	};
}
