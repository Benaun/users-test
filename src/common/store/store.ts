import { create } from 'zustand'

import type { IUserResponse } from '../../features/user/model/types'

interface UserStore {
  allUsers: IUserResponse[]
  archivedUsers: number[]
  hiddenUsers: number[]
  setAllUsers: (users: IUserResponse[]) => void
  archiveUser: (userId: number) => void
  unarchiveUser: (userId: number) => void
  hideUser: (userId: number) => void
}

export const useUserStore = create<UserStore>(set => ({
  allUsers: [],
  archivedUsers: [],
  hiddenUsers: [],

  setAllUsers: users => set({ allUsers: users }),

  archiveUser: userId =>
    set(state => {
      if (state.archivedUsers.includes(userId)) return state
      return {
        archivedUsers: [...state.archivedUsers, userId]
      }
    }),

  unarchiveUser: userId =>
    set(state => ({
      archivedUsers: state.archivedUsers.filter(
        id => id !== userId
      )
    })),

  hideUser: userId =>
    set(state => {
      if (state.hiddenUsers.includes(userId)) return state
      return {
        hiddenUsers: [...state.hiddenUsers, userId]
      }
    })
}))
