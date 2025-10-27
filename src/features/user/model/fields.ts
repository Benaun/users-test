import type { UpdateFormData } from './schema'

export const fields = [
  {
    id: 1,
    label: 'Имя',
    placeholder: 'Имя',
    fieldName: 'name' as keyof UpdateFormData
  },
  {
    id: 2,
    label: 'Никнейм',
    placeholder: 'Никнейм',
    fieldName: 'username' as keyof UpdateFormData
  },
  {
    id: 3,
    label: 'Почта',
    placeholder: 'Почта',
    fieldName: 'email' as keyof UpdateFormData
  },
  {
    id: 4,
    label: 'Город',
    placeholder: 'Город',
    fieldName: 'city' as keyof UpdateFormData
  },
  {
    id: 5,
    label: 'Телефон',
    placeholder: 'Телефон',
    fieldName: 'phone' as keyof UpdateFormData
  },
  {
    id: 6,
    label: 'Название компании',
    placeholder: 'Название компании',
    fieldName: 'company' as keyof UpdateFormData
  }
]
