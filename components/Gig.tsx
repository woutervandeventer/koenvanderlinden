import styles from '../styles/components/Gig.module.scss'
import { Event } from './Live'

interface Props {
  event: Event
}

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export default function Gig({ event }: Props) {
  const date = new Date(event.start.date || event.start.dateTime)
  const dateTime = event.start.dateTime
  const day = date.getDate().toString()
  const month = months[date.getMonth()]
  const hours = dateTime && new Date(dateTime).getHours().toString().padStart(2, '0')
  const minutes = dateTime && new Date(dateTime).getMinutes().toString().padStart(2, '0')
  const time = dateTime && `${hours}:${minutes}`

  const locationStr = event.location
  let city
  let venue

  if (locationStr) {
    city = getCityFromLocationString(locationStr)
    venue = getVenueFromLocationString(locationStr)
  }

  const location = makeLocation(city, venue)

  return (
    <article className={styles.gig}>
      <div className={styles.date}>
        <div className={styles.month}>{month}</div>
        <div className={styles.day}>{day}</div>
        <div className={styles.time}>{time ?? 'T.B.A.'}</div>
      </div>
      <div className={styles.info}>{event.description ?? 'Info to be announced'}</div>
      <div className={styles.location}>{location}</div>
    </article>
  )
}

function getCityFromLocationString(locationStr: string): string | undefined {
  let city

  const cityRegExp = /[A-Z][a-z](?:.*)/
  const strArr = locationStr.split(',')

  if (strArr.length === 2) {
    city = strArr[0]
  }

  if (strArr.length === 3) {
    city = strArr[1].match(cityRegExp)?.[0]
  }

  if (strArr.length === 4) {
    city = strArr[2].match(cityRegExp)?.[0]
  }

  return city
}

function getVenueFromLocationString(locationStr: string): string | undefined {
  let venue

  const strArr = locationStr.split(',')

  if (strArr.length === 4 || strArr.length === 3) {
    venue = strArr[0]
  }

  return venue
}

function makeLocation(city: string | undefined, venue: string | undefined): string {
  if (city && !venue) return city
  if (!city && venue) return venue
  if (city && venue) return `${venue}, ${city}`
  return 'Location to be announced'
}
