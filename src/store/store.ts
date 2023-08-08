import { create } from 'zustand'

export interface AppState {
  booleanState: boolean
  toggle: () => void
  setTo: (value: boolean) => void;
}

export const useAppStore = create<AppState>()((set) => ({
  booleanState: false,
  toggle: () => set((state: AppState) => ({booleanState: !(state.booleanState)})),
  setTo: (value) => set(({booleanState: value}))
}))
