import { CreateBoardModal } from "@/features/Boards/modals/CreateBaordModal/CreateBoardModal";
import { CreateColumnModal } from "@/features/Boards/modals/CreateColumnModal/CreateColumnModal";
import { CreateTaskModal } from "@/features/Boards/modals/CreateTaskModal/CreateTaskModal";
import { CreateChannelModal } from "@/features/Channels/modals/CreateChannelModal/CreateChannelModal";

export const MODAL_COMPONENTS = {
	CREATE_CHANNEL: CreateChannelModal,
	CREATE_BOARD: CreateBoardModal,
	CREATE_COLUMN: CreateColumnModal,
	CREATE_TASK: CreateTaskModal,
} as const;

export type ModalType = keyof typeof MODAL_COMPONENTS;

export type ModalState = {
	[K in ModalType]: {
		type: K;
		props: Omit<React.ComponentProps<(typeof MODAL_COMPONENTS)[K]>, "onClose">;
	};
}[ModalType];
