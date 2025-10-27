import styles from './ArchiveUsersList.module.css'
// import { Title } from '@/common/components'
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
    <div className={styles.wrapper}>
      {/* <Title text='Архив' /> */}
      {visibleArchivedUsers.length ? (
        <CardsList items={visibleArchivedUsers} />
      ) : (
        <div> Архив пуст</div>
      )}
    </div>
  )
}
