import styles from './DropdownMenu.module.css'

export const DropdownMenu = () => {
    return (
        <div className={styles.menu}>
            <div className={styles.menu__wrapper}>
                <div className={styles.menu__item}>Редактировать</div>
                <div className={styles.menu__item}>Активировать</div>
                <div className={styles.menu__item}>Скрыть</div>
            </div>
        </div>
    )
}
