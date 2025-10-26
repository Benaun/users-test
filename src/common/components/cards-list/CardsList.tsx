import { Card } from '..'

import type { IUserCard } from '@/features/user/model'

import styles from './CardsList.module.css'

export const CardsList = ({ items }: { items: IUserCard[] }) => {
  return (
    <div className={styles.list}>
      {items.map(item => (
        <Card
          key={item.id}
          id={item.id}
          avatar={item.avatar}
          username={item.username}
          city={item.city}
          companyName={item.companyName}
        />
      ))}
    </div>
  )
}
