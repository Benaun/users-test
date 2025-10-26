import { useEffect, useRef, useState } from 'react'
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
  const cardRef = useRef<HTMLDivElement>(null)

  const handleIconClick = () => {
    setIsMenuOpen(prev => !prev)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])


  return (
    <div className={styles.card} ref={cardRef}>
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
