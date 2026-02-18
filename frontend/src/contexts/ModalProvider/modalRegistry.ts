import { CreateBoardModal } from "@/features/Boards/modals/CreateBaordModal/CreateBoardModal";
import { CreateChannelModal } from "@/features/Channels/modals/CreateChannelModal/CreateChannelModal";

export const modalRegistry = {
	createChannel: CreateChannelModal,
	createBoard: CreateBoardModal,
} as const;

export type ModalType = keyof typeof modalRegistry;
