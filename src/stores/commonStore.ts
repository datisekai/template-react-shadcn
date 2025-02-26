import { create } from "zustand";

interface ICommonState {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

export const useCommonStore = create<ICommonState>((set) => ({
  isLoading: false,
  setIsLoading: (isLoading) => set({ isLoading }),
}));
