import { Title } from '@/common/components'
import { CardsList } from '@/common/components'
import { useUserStore } from '@/common/store/store'

export const ArchiveUsersList = () => {
  const { allUsers, archivedUsers, hiddenUsers } = useUserStore()

  const visibleArchivedUsers = allUsers.filter(
    user =>
      archivedUsers.includes(user.id) &&
      !hiddenUsers.includes(user.id)
  )

  return (
    <div>
      <Title text='Архив' />
      <CardsList items={visibleArchivedUsers} />
    </div>
  )
}
