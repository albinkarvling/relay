import { createContext, useContext, useState } from "react";

import { modalRegistry, type ModalType } from "./modalRegistry";

type ModalState = {
	type: ModalType | null;
};

type ModalContextType = {
	openModal: (type: ModalType) => void;
	closeModal: () => void;
};

const ModalContext = createContext<ModalContextType | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useModal = () => {
	const context = useContext(ModalContext);
	if (!context) {
		throw new Error("useModal must be used within a ModalProvider");
	}
	return context;
};

export function ModalProvider({ children }: { children: React.ReactNode }) {
	const [modal, setModal] = useState<ModalState>({
		type: null,
	});

	const openModal = (type: ModalType) =>
		setModal({
			type,
		});

	const closeModal = () => setModal({ type: null });

	const ModalComponent = modal.type ? modalRegistry[modal.type] : null;

	return (
		<ModalContext.Provider
			value={{
				openModal,
				closeModal,
			}}
		>
			{children}

			<div className="fixed inset-0 w-screen h-screen grid place-items-center pointer-events-none">
				{ModalComponent && (
					<div
						className="absolute -z-1 w-full h-full bg-black/60 pointer-events-auto"
						onClick={closeModal}
					/>
				)}
				{ModalComponent && <ModalComponent onClose={closeModal} />}
			</div>
		</ModalContext.Provider>
	);
}
