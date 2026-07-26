import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

interface Subscriber {
  id: string
  email: string
  createdAt: string
  ip?: string
  userAgent?: string
}

function getDbFilePath(): string {
  const dataDir = path.resolve(process.cwd(), 'data')
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true })
  }
  return path.resolve(dataDir, 'subscribers.json')
}

function readSubscribers(): Subscriber[] {
  try {
    const filePath = getDbFilePath()
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, JSON.stringify([]), 'utf-8')
      return []
    }
    const data = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(data || '[]')
  } catch (error) {
    console.error('Error reading subscribers db:', error)
    return []
  }
}

function writeSubscribers(subscribers: Subscriber[]): void {
  const filePath = getDbFilePath()
  const tempPath = `${filePath}.tmp`
  fs.writeFileSync(tempPath, JSON.stringify(subscribers, null, 2), 'utf-8')
  fs.renameSync(tempPath, filePath)
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const rawEmail = body?.email

    if (!rawEmail || typeof rawEmail !== 'string') {
      return NextResponse.json(
        { error: 'Email address is required.' },
        { status: 400 }
      )
    }

    const cleanEmail = rawEmail.trim().toLowerCase()

    if (!EMAIL_REGEX.test(cleanEmail)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      )
    }

    const subscribers = readSubscribers()

    const isDuplicate = subscribers.some(
      (sub) => sub.email.toLowerCase() === cleanEmail
    )

    if (isDuplicate) {
      return NextResponse.json(
        { error: 'This email is already subscribed!' },
        { status: 409 }
      )
    }

    const newSubscriber: Subscriber = {
      id: crypto.randomUUID(),
      email: cleanEmail,
      createdAt: new Date().toISOString(),
      ip: request.headers.get('x-forwarded-for') || undefined,
      userAgent: request.headers.get('user-agent') || undefined,
    }

    subscribers.push(newSubscriber)
    writeSubscribers(subscribers)

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for subscribing! You are on the list.',
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Subscription API error:', error)
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    )
  }
}
