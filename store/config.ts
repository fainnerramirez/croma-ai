import { User } from 'firebase/auth'
import { create } from 'zustand'

type State = {
    user: User | null
}

type Actions = {
    setUser: () => void
}

type Store = State & Actions;

const createStore = create<Store>()((set) => ({
    user: null,
    setUser: () => set((state) => ({ user: state.user })),
}))

export const useStore = () => {
    const { user, setUser } = createStore()
    return {
        user,
        setUser
    }
}