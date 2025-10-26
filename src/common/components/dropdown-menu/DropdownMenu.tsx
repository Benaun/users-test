import { useNavigate } from 'react-router'

import styles from './DropdownMenu.module.css'
import { Paths } from '@/common/routing/Routing'
import { useUserStore } from '@/common/store/store'

export const DropdownMenu = ({ userId }: { userId: number }) => {
  const navigate = useNavigate()
  const { archiveUser, unarchiveUser, hideUser, archivedUsers } =
    useUserStore()

  const isArchived = archivedUsers.includes(userId)

  const handleEdit = () => {
    navigate(`${Paths.Profile}/${userId}`)
  }

  const handleArchive = () => {
    if (isArchived) {
      unarchiveUser(userId)
    } else {
      archiveUser(userId)
    }
  }

  const handleHide = () => {
    hideUser(userId)
  }

  return (
    <div
      className={`${styles.menu} ${isArchived ? styles.menu_archived : ''}`}
    >
      {!isArchived ? (
        <div className={styles.menu__wrapper}>
          <div
            className={styles.menu__item}
            onClick={handleEdit}
          >
            Редактировать
          </div>
          <div
            className={styles.menu__item}
            onClick={handleArchive}
          >
            Архивировать
          </div>
          <div
            className={styles.menu__item}
            onClick={handleHide}
          >
            Скрыть
          </div>
        </div>
      ) : (
        <div
          className={styles.menu__item}
          onClick={handleArchive}
        >
          Активировать
        </div>
      )}
    </div>
  )
}
