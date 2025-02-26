import { create } from "zustand";

interface IModalState {
  visible: boolean;
  modalName: string;
  content: any;
  onToggle: (modalName: string, options?: { content?: any }) => void;
  onDismiss: () => void;
}

export const useModalStore = create<IModalState>((set) => ({
  visible: false,
  modalName: "",
  content: {},
  onToggle: (modalName, options) => {
    set((state) => ({
      ...state,
      modalName: modalName,
      visible: !state.visible,
      ...options,
    }));
  },
  onDismiss: () => {
    set((state) => ({ ...state, visible: false }));
  },
}));
