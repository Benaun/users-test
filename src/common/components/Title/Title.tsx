import styles from './Title.module.css'

export const Title = ({ text }: { text: string }) => {
  return (
    <div className={`container ${styles.title__container}`}>
      <h1 className={styles.title}>{text}</h1>
    </div>
  )
}
