import { useState } from 'react'

import styles from './ProfileNav.module.css'

interface NavigationItem {
  id: number
  label: string
}

const navigationItems: NavigationItem[] = [
  { id: 1, label: 'Данные профиля' },
  { id: 2, label: 'Рабочее пространство' },
  { id: 3, label: 'Приватность' },
  { id: 4, label: 'Безопасность' }
]

export const ProfileNav = () => {
  const [activeItem] = useState(1)

  return (
    <div className={styles.navigation}>
      <div className={styles.navigation__image}>
        <img
          src='/CardBig.jpg'
          alt='Photo'
          className={styles.navigation__img}
        />
      </div>
      <nav className={styles.navigation__list}>
        {navigationItems.map(item => (
          <div
            key={item.id}
            className={`${styles.navigation__item} ${
              activeItem === item.id
                ? styles.navigation__item_active
                : ''
            }`}
          >
            {item.label}
          </div>
        ))}
      </nav>
    </div>
  )
}
