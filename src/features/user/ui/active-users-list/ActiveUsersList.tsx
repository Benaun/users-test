import { useEffect } from 'react'

import { useFetchUsers } from '@/features/user/api'

import styles from './ActiveUsersList.module.css'
import { Title } from '@/common/components'
import { CardsList } from '@/common/components'
import { useUserStore } from '@/common/store/store'

export const ActiveUsersList = () => {
  const { data: users, isLoading } = useFetchUsers()
  const { allUsers, archivedUsers, hiddenUsers, setAllUsers } =
    useUserStore()

  useEffect(() => {
    if (users) {
      setAllUsers(users)
    }
  }, [users, setAllUsers])

  const visibleActiveUsers = allUsers.filter(
    user =>
      !archivedUsers.includes(user.id) &&
      !hiddenUsers.includes(user.id)
  )

  if (isLoading) return <div>...loading</div>

  return (
    <div className={styles.wrapper}>
      <Title text='Активные' />
      <CardsList items={visibleActiveUsers} />
    </div>
  )
}
