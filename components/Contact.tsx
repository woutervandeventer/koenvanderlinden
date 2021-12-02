import { Dispatch, FormEvent, SetStateAction, useState } from 'react'
import Button from './Button'
import Container from './Container'
import Form from './Form'
import SectionHeading from './SectionHeading'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [notification, setNotification] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    const res = await fetch('/api/form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, name, message })
    })

    if (!res.ok) {
      const { error } = await res.json()
      setNotification(error)
      return
    }

    setName('')
    setEmail('')
    setMessage('')
    setSuccess(true)
    setNotification("Thanks, I'll get in touch with you soon.")
  }

  return (
    <Container id="contact">
      <SectionHeading title="Contact" />
      <Form
        onSubmit={handleSubmit}
        success={success}
        notification={notification}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="message">Message</label>
        <textarea
          name="email"
          value={message}
          rows={8}
          placeholder="Your message"
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <Button submit text="Send" />
      </Form>
    </Container>
  )
}

export default Contact
