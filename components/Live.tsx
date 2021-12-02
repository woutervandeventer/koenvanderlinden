import { useEffect, useState } from 'react'
import Button from './Button'
import Container from './Container'
import Gig from './Gig'
import SectionHeading from './SectionHeading'
import styles from '../styles/components/Live.module.scss'

export interface Event {
  id: string
  start: {
    date: string
    dateTime: string
  }
  description?: string
  location?: string
}

const Live = () => {
  const [events, setEvents] = useState<Event[]>([])
  const [pageToken, setPageToken] = useState('')

  const fetchEvents = async () => {
    const res = await fetch('/api/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ pageToken })
    })

    const data = await res.json()

    setEvents([...events, ...data.events])
    setPageToken(data.newToken)
  }

  useEffect(() => {
    fetchEvents()
  }, [])

  return (
    <Container id="live">
      <SectionHeading title="Live" />
      {!events.length ? (
        <div className={styles.message}>No upcoming events found</div>
      ) : (
        events.map((event: Event) => <Gig event={event} key={event.id} />)
      )}
      {pageToken && <Button text="Load more" onClick={fetchEvents} />}
    </Container>
  )
}

export default Live
