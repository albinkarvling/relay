export const formatTimestamp = (input: string | Date) => {
	const date = new Date(input);
	const now = new Date();

	const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

	const yesterday = new Date(today);
	yesterday.setDate(today.getDate() - 1);

	const targetDay = new Date(date.getFullYear(), date.getMonth(), date.getDate());

	const timeFormatter = new Intl.DateTimeFormat(undefined, {
		hour: "numeric",
		minute: "2-digit",
	});

	const dateFormatter = new Intl.DateTimeFormat(undefined, {
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
	});

	const AMPM = date.getHours() >= 12 ? "PM" : "AM";

	if (targetDay.getTime() === today.getTime()) {
		return `Today at ${timeFormatter.format(date)} ${AMPM}`;
	}

	if (targetDay.getTime() === yesterday.getTime()) {
		return `Yesterday at ${timeFormatter.format(date)} ${AMPM}`;
	}

	return `${dateFormatter.format(date)} at ${timeFormatter.format(date)} ${AMPM}`;
};

export const formatTimeTimestamp = (input: string | Date): string => {
	const date = new Date(input);

	const timeFormatter = new Intl.DateTimeFormat(undefined, {
		hour: "numeric",
		minute: "2-digit",
	});

	return timeFormatter.format(date);
};
