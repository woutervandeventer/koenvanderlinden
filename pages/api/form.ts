import sgMail from '@sendgrid/mail'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function formHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, newsletter, name, message } = req.body

  const emailRegExp =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  if (!emailRegExp.test(email)) {
    res.status(400).json({ error: 'Please use a valid email adress' })
    return
  }

  const subject = newsletter
    ? 'Iemand heeft zich aangemeld voor je nieuwsbrief'
    : `Je hebt een bericht van ${name}`
  const text = newsletter
    ? `Email: ${email}`
    : `${message}\r\n\r\nAntwoorden: ${email}`
  const html = newsletter
    ? `<p>Email: ${email}</p>`
    : `<p>${message.replace(
        /(?:\r\n|\r|\n)/g,
        '<br>'
      )}</p><p>Antwoorden: ${email}</p>`

  const msg = {
    to: 'koen767@hotmail.com',
    from: 'info@koenvanderlinden.com',
    subject,
    text,
    html
  }

  const key = process.env.SENDGRID_API_KEY ?? ''
  sgMail.setApiKey(key)

  try {
    await sgMail.send(msg)
    res.send(200)
  } catch {
    res.status(500).json({ error: 'Something went wrong...' })
  }
}
