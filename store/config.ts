import { User } from 'firebase/auth'
import { create } from 'zustand'

type State = {
    user: User | null
}

type Actions = {
    setUser: (user: User | null) => void
}

type Store = State & Actions;

const createStore = create<Store>()((set) => ({
    user: null,
    setUser: (user) => set((state) => ({ user })),
}))

export const useStoreCroma = () => {
    const { user, setUser } = createStore()
    return {
        user,
        setUser
    }
}