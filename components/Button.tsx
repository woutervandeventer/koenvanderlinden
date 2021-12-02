import styles from '../styles/components/Button.module.scss'

interface Props {
  text: string
  submit?: boolean
  onClick?: () => void
}

const Button = ({ text, submit, onClick }: Props) => {
  return (
    <button
      type={submit ? 'submit' : 'button'}
      className={styles.button}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
