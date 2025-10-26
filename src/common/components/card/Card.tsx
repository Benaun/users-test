import { useState } from 'react'
import type { IUserCard } from '@/features/user/model'

import styles from './Card.module.css'
import { DropdownMenu, Icon } from '@/common/components'

export const Card = ({
  avatar,
  city,
  companyName,
  username
}: IUserCard) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleIconClick = () => {
    setIsMenuOpen(prev => !prev)
  }


  return (
    <div className={styles.card}>
      <div className={styles.card__wrapper}>
        <img
          src={avatar || 'Card.png'}
          alt='Foto'
          className={styles.card__img}
        />
        <div className={styles.card__content}>
          <div className={styles.card__info}>
            <h3>{username}</h3>
            <p>{companyName}</p>
          </div>
          <span>{city}</span>
          <Icon name='dots' className={styles.card__icon} onClick={handleIconClick} />
          {isMenuOpen && <DropdownMenu />}
        </div>
      </div>
    </div>
  )
}
