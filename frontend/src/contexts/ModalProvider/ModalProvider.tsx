import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { MODAL_COMPONENTS, type ModalState, type ModalType } from "./modalRegistry";

type ModalContextProps = {
	openModal: <T extends ModalType>(
		type: T,
		props?: Omit<React.ComponentProps<(typeof MODAL_COMPONENTS)[T]>, "onClose">,
	) => void;
	closeModal: () => void;
};

const ModalContext = createContext<ModalContextProps | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useModal = () => {
	const context = useContext(ModalContext);
	if (!context) {
		throw new Error("useModal must be used within a ModalProvider");
	}
	return context;
};

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [modalData, setModalData] = useState<ModalState | null>(null);

	const closeModal = useCallback(() => setModalData(null), []);

	const openModal = useCallback(
		<T extends ModalType>(
			type: T,
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			props: Omit<React.ComponentProps<(typeof MODAL_COMPONENTS)[T]>, "onClose"> = {} as any,
		) => {
			setModalData({ type, props } as ModalState);
		},
		[],
	);

	useEffect(() => {
		const handleEsc = (e: KeyboardEvent) => {
			if (e.key === "Escape") closeModal();
		};
		window.addEventListener("keydown", handleEsc);
		return () => window.removeEventListener("keydown", handleEsc);
	}, [closeModal]);

	useEffect(() => {
		document.body.style.overflow = modalData ? "hidden" : "unset";
	}, [modalData]);

	return (
		<ModalContext.Provider value={{ openModal, closeModal }}>
			{children}
			{modalData && (
				<div className="fixed inset-0 grid place-items-center z-50">
					<div
						className="absolute inset-0 bg-black/60 pointer-events-auto"
						onClick={closeModal}
					/>
					<div className="relative z-10 pointer-events-auto">
						{React.createElement(
							// eslint-disable-next-line @typescript-eslint/no-explicit-any
							MODAL_COMPONENTS[modalData.type] as React.ComponentType<any>,
							{
								...modalData.props,
								onClose: closeModal,
							},
						)}
					</div>
				</div>
			)}
		</ModalContext.Provider>
	);
};
