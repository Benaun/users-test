import { useNavigate } from 'react-router'

import { Icon } from '../icon/Icon'

import styles from './ButtonBack.module.css'
import { Paths } from '@/common/routing'

export const ButtonBack = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(Paths.Main)
  }
  return (
    <button className={styles.button} onClick={handleClick}>
      <Icon name='arrowLeft' />
      <span>Назад</span>
    </button>
  )
}
