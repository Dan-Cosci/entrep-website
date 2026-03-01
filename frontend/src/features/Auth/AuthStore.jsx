import create from 'zustand'

const useAuthStore = create((set) => ({
  isAuthenticated: false,
  isLoading: true,

  login: () => set({ isLogged: true, isLoading: false}),
  logout: () => set({ isLogged: false, isLoading: false}),
}))

export default useAuthStore;