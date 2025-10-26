import styles from './Header.module.css'
import { Logo } from '@/common/components'
import { Icon } from '@/common/components'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.header__container}`}>
        <div className={styles.header__logo}>
          <Logo />
        </div>
        <div className={styles.header__buttons}>
          <div className={styles.header__icons}>
            <Icon
              name='favorites'
              className={styles.header__iconItem}
            />
            <Icon
              name='notification'
              className={styles.header__iconItem}
            />
          </div>

          <div className={styles.header__profile}>
            <img src='/Foto.png' alt='Foto' />
            <span>Ivan1234</span>
          </div>
        </div>
      </div>
    </header>
  )
}
