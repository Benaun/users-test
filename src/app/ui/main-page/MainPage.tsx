import { Title } from '@/common/components/Title/Title'
import { CardsList } from '@/common/components/cards-list/CardsList'

export const MainPage = () => {
  const items = [
    {
      id: 1,
      city: 'Санкт-Петербург',
      username: 'Ivan1234',
      companyName: 'At-Work'
    },
    {
      id: 2,
      city: 'Санкт-Петербург',
      username: 'Ivan1234',
      companyName: 'At-Work'
    },
    {
      id: 3,
      city: 'Санкт-Петербург',
      username: 'Ivan1234',
      companyName: 'At-Work'
    },
    {
      id: 4,
      city: 'Санкт-Петербург',
      username: 'Ivan1234',
      companyName: 'At-Work'
    }
  ]

  return (
    <>
      <div>
        <Title text='Активные' />
        <CardsList items={items} />
      </div>
      <div>
        <Title text='Архив' />
        <CardsList items={items} />
      </div>
    </>
  )
}
