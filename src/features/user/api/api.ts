import { useQuery } from '@tanstack/react-query'

import { userService } from './service'

export const useFetchUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: userService.fetchUsers
  })
}

export const useFetchUserById = (id: number) => {
  return useQuery({
    queryKey: ['users', id],
    queryFn: () => userService.fetchUserById(id)
  })
}
