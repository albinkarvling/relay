import { useState } from "react";
import { useLoginUser } from "@/hooks/auth/useLoginUser";
import { useNavigate } from "react-router-dom";

export function LoginPage() {
	const navigate = useNavigate();

	const { mutateAsync: loginUserAsync, isPending } = useLoginUser();

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = async (e: React.SubmitEvent) => {
		e.preventDefault();

		if (!username || username.trim() === "") {
			setError("Username is required");
			return;
		}
		if (!password || password.length < 6) {
			setError("Password must be at least 6 characters");
			return;
		}

		try {
			await loginUserAsync({ username, password });
			navigate("/workspaces");
		} catch (error) {
			if (error instanceof Error) {
				setError(error.message);
			} else {
				setError("An unknown error occurred");
			}
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			{error && <span style={{ color: "red" }}>{error}</span>}
			<input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
			<input placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
			<button type="submit" disabled={isPending}>
				Login
			</button>
		</form>
	);
}
