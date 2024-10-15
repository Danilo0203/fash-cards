import { create } from "zustand";
interface State {
  isOpen?: boolean;
  defaultOpen?: boolean;
  onClose?(): void;
  onOpen?(): void;
  onOpenChange?(isOpen: boolean | undefined): void;
}
export const useModalStore = create<State>()((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  onOpenChange: () => set((state) => ({ isOpen: !state.isOpen })),
}));
