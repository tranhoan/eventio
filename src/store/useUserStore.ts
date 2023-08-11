import { create } from 'zustand';
import { User } from '../api/types';

interface UserState {
    user: User | null;
    setUser: (user: User) => void;
}
export const useUserStore = create<UserState>((set) => ({
    user: null,
    setUser: (user) => set({ user }),
}));
