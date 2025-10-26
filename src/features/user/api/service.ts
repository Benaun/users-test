import type { IUserResponse } from '../model'

export const userService = {
  async fetchUsers(): Promise<IUserResponse[]> {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/users'
    )
    if (!response.ok) {
      throw new Error('Failed to fetch users')
    }
    const users = await response.json()
    return users.slice(0, 6)
  },

  async fetchUserById(id: number): Promise<IUserResponse> {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    )
    if (!response.ok) {
      throw new Error('Failed to fetch user')
    }
    return response.json()
  }
}
