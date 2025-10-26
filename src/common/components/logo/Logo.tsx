import styles from './Logo.module.css'

export const Logo = () => {
  return (
    <img
      src='./public/Logo.png'
      alt='Logo'
      className={styles.logo}
    />
  )
}
