import styles from './Headline.module.css'

export const Headline = ({ text }: { text: string }) => {
  return (
    <div className={`container ${styles.title__container}`}>
      <h1 className={styles.title}>{text}</h1>
    </div>
  )
}
