import { useParams } from 'react-router'

import { useFetchUserById } from '../api'

export const ProfilePage = () => {
  const { id } = useParams<{ id: string }>()
  const userId = id ? parseInt(id, 10) : 0

  const { data: user, isLoading } = useFetchUserById(userId)

  if (isLoading) return <div>...loading</div>
  if (!user) return <div>User not found</div>

  return (
    <div>
      <h1>Profile Page</h1>
      <p>Name: {user.name}</p>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>City: {user.address?.city}</p>
      <p>Company: {user.company?.name}</p>
    </div>
  )
}
