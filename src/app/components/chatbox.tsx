"use client"

import { useState } from 'react'
import styles from './chatbox.module.css'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://pnjauvsmrirjjxddgapd.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBuamF1dnNtcmlyamp4ZGRnYXBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU4OTk2NDQsImV4cCI6MjA2MTQ3NTY0NH0.-ue8lx8dm4qmdwELNOS3VabHFnkHMw47kDGtDZKZXzM'
const supabase = createClient(supabaseUrl, supabaseKey)

interface Platform {
  name: string
  icon: string
  color: string
  url: string
}

const platforms: Platform[] = [
  {
    name: 'WhatsApp',
    icon: 'M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z',
    color: '#25D366',
    url: 'https://wa.me/919876543210' // Replace with your number
  },
  {
    name: 'Telegram',
    icon: 'M18.384 22.779a1.19 1.19 0 0 0 1.107.145 1.16 1.16 0 0 0 .724-.84C21.084 18 23.192 7.663 23.983 3.948a.78.78 0 0 0-.26-.758.8.8 0 0 0-.797-.14c-3.856 1.534-15.283 5.364-20.046 7.641a.82.82 0 0 0-.456.456.8.8 0 0 0 .145.797l4.783 4.783c.18.18.43.28.684.28.254 0 .504-.1.684-.28l5.364-5.364 5.364 5.364c.18.18.43.28.684.28.254 0 .504-.1.684-.28l4.783-4.783z',
    color: '#0088cc',
    url: 'https://t.me/yourusername' // Replace with your username
  },
  {
    name: 'Email',
    icon: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z',
    color: '#EA4335',
    url: 'mailto:your@email.com' // Replace with your email
  }
]

export default function ChatBox() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const { error } = await supabase
        .from('chat_messages')
        .insert([{
          name,
          email,
          message,
          created_at: '2025-04-29 11:42:04',
          user_id: 'draken197413'
        }])

      if (error) throw error

      setStatus('Message sent successfully!')
      setName('')
      setEmail('')
      setMessage('')

      // Close chat box after 2 seconds
      setTimeout(() => {
        setIsOpen(false)
        setStatus('')
      }, 2000)
    } catch (error) {
      setStatus('Failed to send message. Please try again.')
    }
  }

  const handlePlatformClick = async (platform: Platform) => {
    try {
      await supabase
        .from('platform_clicks')
        .insert([{
          platform: platform.name,
          clicked_at: '2025-04-29 11:42:04',
          user_id: 'draken197413'
        }])
    } catch (error) {
      console.error('Failed to track click:', error)
    }

    window.open(platform.url, '_blank')
  }

  return (
    <div className={styles.chatWrapper}>
      {isOpen && (
        <div className={styles.chatBox}>
          <div className={styles.chatHeader}>
            <h3>Get in Touch</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className={styles.closeButton}
              aria-label="Close chat"
            >
              ×
            </button>
          </div>
          
          <div className={styles.platforms}>
            {platforms.map((platform) => (
              <button
                key={platform.name}
                className={styles.platformButton}
                style={{ backgroundColor: platform.color }}
                onClick={() => handlePlatformClick(platform)}
              >
                <svg 
                  viewBox="0 0 24 24" 
                  className={styles.platformIcon}
                >
                  <path 
                    d={platform.icon} 
                    fill="currentColor"
                  />
                </svg>
                <span>{platform.name}</span>
              </button>
            ))}
          </div>

          <div className={styles.separator}>
            <span>or send us a message</span>
          </div>

          <form onSubmit={handleSubmit} className={styles.chatForm}>
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className={styles.input}
            />
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={styles.input}
            />
            <textarea
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className={styles.textarea}
            />
            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>

          {status && (
            <div className={`${styles.status} ${
              status.includes('successfully') ? styles.success : styles.error
            }`}>
              {status}
            </div>
          )}
        </div>
      )}

      <button
        className={`${styles.chatToggle} ${isOpen ? styles.open : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle chat"
      >
        <svg 
          viewBox="0 0 24 24" 
          className={styles.chatIcon}
        >
          <path
            d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
  )
}