import { create } from 'zustand'

export const useStateDirectory = create((set) => ({
  state: 1,
  handleIncrement: ({ has_next_page, loading, error }) => {
    if ((!loading || !error) && has_next_page) return set((s) => ({ state: s.state + 1 }))
  },

  handleDecrement: () => set((s) => {
    if (s.state <= 1) return { state: 1 }
    return { state: s.state - 1 }
  }),

  handleReset: () => set({ state: 1 })
}))
