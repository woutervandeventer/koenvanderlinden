import { google } from 'googleapis'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function eventsHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const pageToken = req.body.pageToken

  const calendar = google.calendar({
    version: 'v3',
    auth: process.env.CALENDAR_API_KEY
  })

  const calRes = await calendar.events.list({
    calendarId: process.env.CALENDAR_ID,
    timeMin: new Date().toISOString(),
    maxResults: 5,
    singleEvents: true,
    orderBy: 'startTime',
    pageToken
  })

  const events = calRes.data.items?.map((item) => {
    return {
      id: item.id,
      start: item.start,
      description: item.description,
      location: item.location
    }
  })

  const newToken = calRes.data.nextPageToken

  calRes.statusText !== 'OK'
    ? res.status(500).json({ error: 'Something went wrong' })
    : res.status(200).json({ events, newToken })
}
