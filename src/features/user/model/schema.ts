import { z } from 'zod'

export const updateUserSchema = z.object({
  name: z
    .string()
    .min(2, 'Должно быть минимум 2 символа')
    .max(64, 'Слишком длинное имя, не более 64 символов'),
  username: z
    .string()
    .min(2, 'Должно быть минимум 2 символа')
    .max(64, 'Слишком длинное никнейм, не более 64 символов'),
  email: z
    .string()
    .min(1, 'Почта обязательна')
    .email('Неверный формат почты'),
  city: z
    .string()
    .min(2, 'Должно быть минимум 2 символа')
    .max(
      64,
      'Слишком длинное название города, не более 64 символов'
    ),
  phone: z
    .string()
    .min(1, 'Телефон обязателен')
    .regex(/^\d+$/, 'Телефон должен содержать только цифры'),
  companyName: z
    .string()
    .min(2, 'Должно быть минимум 2 символа')
    .max(
      64,
      'Слишком длинное название компании, не более 64 символов'
    )
})

export type UpdateFormData = z.infer<typeof updateUserSchema>
