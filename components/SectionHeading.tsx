import styles from '../styles/components/SectionHeading.module.scss'

interface Props {
  title: string
}

const SectionHeading = ({ title }: Props) => {
  return <h2 className={styles.h2}>{title}</h2>
}

export default SectionHeading
