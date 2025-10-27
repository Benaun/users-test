import { zodResolver } from '@hookform/resolvers/zod'
import { type SubmitHandler, useForm } from 'react-hook-form'

import {
  type UpdateFormData,
  fields,
  updateUserSchema
} from '../../model'

import styles from './ProfileForm.module.css'
import { Input } from '@/common/components'

interface IProps {
  initialValues?: UpdateFormData
  onUpdateSuccess: (data: UpdateFormData) => void
}

export const ProfileForm = ({
  initialValues,
  onUpdateSuccess
}: IProps) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid }
  } = useForm<UpdateFormData>({
    resolver: zodResolver(updateUserSchema),
    mode: 'onChange',
    defaultValues: initialValues
  })

  const onSubmit: SubmitHandler<UpdateFormData> = formData => {
    if (isValid) {
      console.log(formData)
      onUpdateSuccess(formData)
    }
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles.form}
    >
      {fields.map(field => (
        <Input
          key={field.id}
          label={field.label}
          placeholder={field.placeholder}
          register={register}
          fieldName={field.fieldName}
          required
          error={errors[field.fieldName]}
        />
      ))}
      <button type='submit' className={styles.form__button}>
        <span>Сохранить</span>
      </button>
    </form>
  )
}
