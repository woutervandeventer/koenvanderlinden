import styles from '../styles/components/Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      &copy; {new Date().getFullYear().toString()}{' '}
      <a href="https://woutervandeventer.com/" target="_blank" rel="noreferrer">
        Wouter van Deventer
      </a>
    </footer>
  )
}

export default Footer
