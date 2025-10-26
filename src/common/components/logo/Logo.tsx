import { useNavigate } from 'react-router'

import styles from './Logo.module.css'
import { Paths } from '@/common/routing/Routing'

export const Logo = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(Paths.Main)
  }

  return (
    <img
      src='/Logo.png'
      alt='Logo'
      className={styles.logo}
      onClick={handleClick}
    />
  )
}
