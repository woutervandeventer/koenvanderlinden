import { FormEvent, ReactNode } from 'react'
import styles from '../styles/components/Form.module.scss'

interface Props {
  children: ReactNode
  success: boolean
  onSubmit: (e: FormEvent) => Promise<void>
  notification: string
}

const Form = ({ children, success, onSubmit, notification }: Props) => {
  return (
    <form onSubmit={onSubmit} className={styles.form}>
      {children}
      {notification && (
        <div className={`${success && styles.success}`}>{notification}</div>
      )}
    </form>
  )
}

export default Form
