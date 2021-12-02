import { FormEvent, useState } from 'react'
import styles from '../styles/components/Hero.module.scss'
import Button from './Button'
import Container from './Container'
import Form from './Form'

const Hero = () => {
  const [email, setEmail] = useState('')
  const [notification, setNotification] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    const res = await fetch('/api/form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, newsletter: true })
    })

    if (!res.ok) {
      const { error } = await res.json()
      setNotification(error)
      return
    }

    setEmail('')
    setSuccess(true)
    setNotification('Thank you!')
  }

  return (
    <Container className={styles.hero} id="hero">
      <h1>
        I'm <span className={styles.koen}>Koen</span>, a jazz piano and trumpet
        player based in The Hague.
      </h1>
      <p>
        If you want to know what I'm doing, feel free to sign up for my
        newsletter.
      </p>
      <Form
        onSubmit={handleSubmit}
        success={success}
        notification={notification}
      >
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button submit text="Subscribe" />
      </Form>
    </Container>
  )
}

export default Hero
