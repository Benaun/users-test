import { Card } from '..'

import type { IUserResponse } from '@/features/user/model'
import type { IUserCard } from '@/features/user/model'

import styles from './CardsList.module.css'

interface CardsListProps {
  items: IUserResponse[]
  hiddenUsers?: IUserCard[]
}

export const CardsList = ({
  items,
  hiddenUsers
}: CardsListProps) => {
  const visibleItems = items.filter(
    item => !hiddenUsers?.some(user => user.id === item.id)
  )

  return (
    <div className={`container ${styles.list}`}>
      {visibleItems.map(item => (
        <Card
          key={item.id}
          id={item.id}
          avatar={item.avatar}
          username={item.username}
          city={item.address.city}
          companyName={item.company.name}
        />
      ))}
    </div>
  )
}
