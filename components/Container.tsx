import { ReactNode } from 'react'
import styles from '../styles/components/Container.module.scss'

interface Props {
  children: ReactNode
  className?: string
  id?: string
}

const Container = ({ children, className, id }: Props) => {
  return (
    <section id={id} className={`${styles.section} ${className}`}>
      {children}
    </section>
  )
}

export default Container
