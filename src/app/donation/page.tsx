"use client"

import { createClient } from '@supabase/supabase-js'
import { useState, useEffect } from 'react'
import Script from 'next/script'
import Footer from "../components/footer"
import styles from './style.module.css'

// Supabase configuration
const supabaseUrl = 'https://pnjauvsmrirjjxddgapd.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBuamF1dnNtcmlyamp4ZGRnYXBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU4OTk2NDQsImV4cCI6MjA2MTQ3NTY0NH0.-ue8lx8dm4qmdwELNOS3VabHFnkHMw47kDGtDZKZXzM'
const supabase = createClient(supabaseUrl, supabaseKey)

// Constants
const CURRENT_DATETIME = '2025-04-29 16:47:52'
const CURRENT_USER = 'draken197413'
const RAZORPAY_KEY = 'rzp_test_rlIohxHr7dhM6c'

// Interfaces
interface FormState {
  name: string
  email: string
  amount: number
}

interface RazorpayResponse {
  razorpay_payment_id: string
  razorpay_order_id: string
  razorpay_signature: string
}

interface RazorpayOptions {
  key: string
  amount: number
  currency: string
  name: string
  description: string
  order_id: string
  handler: (response: RazorpayResponse) => void
  prefill: {
    name: string
    email: string
  }
  theme: {
    color: string
  }
}

declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => {
      open: () => void
    }
  }
}

export default function DonatePage() {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    amount: 100
  })
  const [isProcessing, setIsProcessing] = useState(false)
  const [status, setStatus] = useState('')
  const [selectedAmount, setSelectedAmount] = useState<number>(100)

  const predefinedAmounts = [100, 500, 1000, 5000]

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount)
    setFormData(prev => ({ ...prev, amount }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.amount) {
      setStatus('Please fill in all fields')
      return
    }

    if (formData.amount < 1) {
      setStatus('Please enter a valid amount')
      return
    }

    setIsProcessing(true)
    setStatus('')

    try {
      const options: RazorpayOptions = {
        key: RAZORPAY_KEY,
        amount: formData.amount * 100,
        currency: "INR",
        name: "K9SCHOOLS",
        description: "Donation",
        order_id: `order_${Date.now()}`,
        handler: async (response: RazorpayResponse) => {
          try {
            const { error } = await supabase
              .from('donations')
              .insert([{
                name: formData.name,
                email: formData.email,
                amount: formData.amount,
                payment_id: response.razorpay_payment_id,
                order_id: response.razorpay_order_id,
                signature: response.razorpay_signature,
                created_at: CURRENT_DATETIME,
                user_id: CURRENT_USER,
                status: 'completed'
              }])

            if (error) throw error

            setStatus('Thank you for your generous donation!')
            setFormData({
              name: '',
              email: '',
              amount: 100
            })
            setSelectedAmount(100)
          } catch (error) {
            console.error('Database error:', error)
            setStatus('Error recording donation. Please contact support.')
          }
        },
        prefill: {
          name: formData.name,
          email: formData.email,
        },
        theme: {
          color: "#000000"
        }
      }

      const razorpay = new window.Razorpay(options)
      razorpay.open()
    } catch (error: any) {
      console.error('Payment initialization failed:', error)
      setStatus(error.message || 'Failed to initialize payment. Please try again.')
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="beforeInteractive"
      />
      <div className={styles.wrapper}>
        <section className={styles.hero}>
          <video autoPlay loop muted playsInline className={styles.heroVideo}>
            <source src="/images/2849936-uhd_3840_2160_24fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className={styles.heroOverlay} />
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Make a Difference in Their Lives
            </h1>
            <p className={styles.heroDescription}>
              Join us in our mission to provide better lives for our furry friends
              through professional training and care.
            </p>
            <div className={styles.donationStats}>
              <div className={styles.statBox}>
                <span className={styles.statNumber}>500+</span>
                <span className={styles.statLabel}>Dogs Trained</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statNumber}>98%</span>
                <span className={styles.statLabel}>Success Rate</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statNumber}>1000+</span>
                <span className={styles.statLabel}>Happy Families</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.formSection}>
          <div className={styles.container}>
            <div className={styles.donationForm}>
              <h2 className={styles.formTitle}>Make a Donation</h2>
              <p className={styles.formSubtitle}>
                Support our cause with your generous contribution
              </p>

              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ 
                      ...prev, 
                      name: e.target.value 
                    }))}
                    className={styles.input}
                    placeholder="Enter your full name"
                    required
                    disabled={isProcessing}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ 
                      ...prev, 
                      email: e.target.value 
                    }))}
                    className={styles.input}
                    placeholder="Enter your email address"
                    required
                    disabled={isProcessing}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Select Amount (₹)</label>
                  <div className={styles.amountButtons}>
                    {predefinedAmounts.map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        className={`${styles.amountButton} ${
                          selectedAmount === amount ? styles.selected : ''
                        }`}
                        onClick={() => handleAmountSelect(amount)}
                        disabled={isProcessing}
                      >
                        ₹{amount.toLocaleString()}
                      </button>
                    ))}
                  </div>
                  
                  <label htmlFor="customAmount" className={styles.label}>
                    Or Enter Custom Amount (₹)
                  </label>
                  <input
                    type="number"
                    id="customAmount"
                    value={formData.amount}
                    onChange={(e) => {
                      const value = Math.max(0, parseInt(e.target.value) || 0)
                      setFormData(prev => ({ ...prev, amount: value }))
                      setSelectedAmount(value)
                    }}
                    className={styles.input}
                    placeholder="Enter custom amount"
                    min="1"
                    required
                    disabled={isProcessing}
                  />
                </div>

                <button 
                  type="submit" 
                  className={styles.submitButton}
                  disabled={isProcessing || formData.amount < 1}
                >
                  {isProcessing ? 'Processing...' : `Donate ₹${formData.amount.toLocaleString()}`}
                </button>

                {status && (
                  <div 
                    className={`${styles.status} ${
                      status.includes('Thank you') ? styles.success : styles.error
                    }`}
                  >
                    {status}
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}