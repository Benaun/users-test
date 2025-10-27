import { useEffect, useRef, useState } from 'react'

import type { IUserCard } from '@/features/user/model'

import styles from './Card.module.css'
import { DropdownMenu, Icon } from '@/common/components'
import { useUserStore } from '@/common/store/store'

export const Card = ({
  id,
  avatar,
  city,
  companyName,
  username
}: IUserCard) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const { archivedUsers } = useUserStore()

  const isArchived = archivedUsers.includes(id)

  const handleIconClick = () => {
    setIsMenuOpen(prev => !prev)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        cardRef.current &&
        !cardRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener(
        'mousedown',
        handleClickOutside
      )
    }
  }, [isMenuOpen])

  return (
    <div className={styles.card} ref={cardRef}>
      <div className={styles.card__wrapper}>
        <img
          src={
            isArchived
              ? '/CardArchive.png'
              : avatar || '/Card.png'
          }
          alt='Foto'
          className={styles.card__img}
        />
        <div
          className={`${styles.card__content} ${isArchived ? styles.card__content_archived : ''}`}
        >
          <div className={styles.card__info}>
            <h3>{username}</h3>
            <p>{companyName}</p>
          </div>
          <span>{city}</span>
          <Icon
            name='dots'
            className={styles.card__icon}
            onClick={handleIconClick}
          />
          {isMenuOpen && <DropdownMenu userId={id} />}
        </div>
      </div>
    </div>
  )
}
