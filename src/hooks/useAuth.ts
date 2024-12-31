import { create } from 'zustand';

interface User {
  name: string;
  email: string;
}

interface AuthStore {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const useAuth = create<AuthStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));