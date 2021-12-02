import styles from '../styles/components/Gig.module.scss'
import { Event } from './Live'

interface Props {
  event: Event
}

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
]

export default function Gig({ event }: Props) {
  const date = new Date(event.start.date || event.start.dateTime)
  const dateTime = event.start.dateTime
  const day = date.getDate().toString()
  const month = months[date.getMonth()]
  const hours =
    dateTime && new Date(dateTime).getHours().toString().padStart(2, '0')
  const minutes =
    dateTime && new Date(dateTime).getMinutes().toString().padStart(2, '0')
  const time = dateTime && `${hours}:${minutes}`
  const venue = event.location?.split(',')[0]
  // .filter((v, i) => i === 0 || i === 2)

  // const venue = address?.[0]

  // const location = address && `${venue}`

  return (
    <article className={styles.gig}>
      <div className={styles.date}>
        <div className={styles.month}>{month}</div>
        <div className={styles.day}>{day}</div>
        <div className={styles.time}>{time ?? 'T.B.A.'}</div>
      </div>
      <div className={styles.info}>
        {event.description ?? 'Info to be announced'}
      </div>
      <div className={styles.location}>
        {venue ?? 'Location to be announced'}
      </div>
    </article>
  )
}
