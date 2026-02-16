declare namespace NodeJS {
	interface ProcessEnv {
		DATABASE_URL: string;
		COOKIE_SECRET: string;
		FRONTEND_URL: string;
	}
}
