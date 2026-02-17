import { CreateChannelModal } from "@/features/Channels/modals/CreateChannelModal/CreateChannelModal";

export const modalRegistry = {
	createChannel: CreateChannelModal,
} as const;

export type ModalType = keyof typeof modalRegistry;
