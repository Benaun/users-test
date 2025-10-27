import { useEffect } from 'react'

import styles from './Modal.module.css'

export const Modal = ({ onClose }: { onClose: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, 5000)

    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.modal}
        onClick={e => e.stopPropagation()}
      >
        <div className={styles.modal__content}>
          <img src='/Checked.png' alt='Check' />
          <h3>Изменения сохранены!</h3>
          <button
            className={styles.modal__close}
            onClick={onClose}
          >
            х
          </button>
        </div>
      </div>
    </div>
  )
}
