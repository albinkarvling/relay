export const baseFetch = async <T>(endpoint: string, options?: RequestInit): Promise<T> => {
	const response = await fetch(`${import.meta.env.VITE_API_URL}${endpoint}`, {
		...options,
		credentials: "include",
		headers: {
			"Content-Type": "application/json",
			...options?.headers,
		},
	});

	if (!response.ok) {
		const errorData = await response.json();
		throw new Error(errorData.message || "An error occurred while fetching data.");
	}

	return response.json();
};
