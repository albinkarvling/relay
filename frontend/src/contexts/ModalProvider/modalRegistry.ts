import { CreateBoardModal } from "@/features/Boards/modals/CreateBaordModal/CreateBoardModal";
import { CreateColumnModal } from "@/features/Boards/modals/CreateColumnModal/CreateColumnModal";
import { CreateChannelModal } from "@/features/Channels/modals/CreateChannelModal/CreateChannelModal";

export const modalRegistry = {
	// channel modals
	createChannel: CreateChannelModal,

	// board modals
	createBoard: CreateBoardModal,
	createColumn: CreateColumnModal,
} as const;

export type ModalType = keyof typeof modalRegistry;
