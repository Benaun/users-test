import type {
  FieldError,
  FieldValues,
  Path,
  UseFormRegister
} from 'react-hook-form'

import styles from './Input.module.css'

interface IProps<T extends FieldValues> {
  label: string
  fieldName: Path<T>
  register: UseFormRegister<T>
  required: boolean
  placeholder: string
  error?: FieldError
}

export const Input = <T extends FieldValues>({
  label,
  register,
  fieldName,
  required,
  placeholder,
  error
}: IProps<T>) => {
  return (
    <div className={styles.group}>
      <label className={styles.group__label}>{label}</label>
      <input
        className={`${styles.group__input} ${error ? styles.group__input_error : ''}`}
        {...register(fieldName, { required })}
        placeholder={placeholder}
        type='text'
      />
      {error && (
        <p className={styles.group__error}>{error.message}</p>
      )}
    </div>
  )
}
