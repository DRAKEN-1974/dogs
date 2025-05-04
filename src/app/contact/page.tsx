"use client"

import { createClient } from '@supabase/supabase-js'
import { useState, FormEvent } from 'react'
import styles from './styles.module.css'
import Footer from "../components/footer"
import { motion, AnimatePresence } from 'framer-motion'

const supabaseUrl = 'https://pnjauvsmrirjjxddgapd.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBuamF1dnNtcmlyamp4ZGRnYXBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU4OTk2NDQsImV4cCI6MjA2MTQ3NTY0NH0.-ue8lx8dm4qmdwELNOS3VabHFnkHMw47kDGtDZKZXzM'
const supabase = createClient(supabaseUrl, supabaseKey)

interface FormState {
  firstName: string
  lastName: string
  email: string
  phone: string
  companyName: string
  subject: string
  message: string
  preferredContact: string
  dogBreed: string
  trainingInterest: string
  experience: string
  urgency: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormState>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyName: '',
    subject: '',
    message: '',
    preferredContact: 'email',
    dogBreed: '',
    trainingInterest: '',
    experience: '',
    urgency: 'normal'
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!formData.firstName || !formData.email || !formData.message) {
      setStatus('Please fill in all required fields')
      return
    }

    setIsSubmitting(true)
    setStatus('')

    try {
      const { error } = await supabase
        .from('contacts')
        .insert([
          {
            first_name: formData.firstName.trim(),
            last_name: formData.lastName.trim(),
            email: formData.email.trim(),
            phone: formData.phone.trim(),
            company_name: formData.companyName.trim(),
            subject: formData.subject.trim(),
            message: formData.message.trim(),
            preferred_contact: formData.preferredContact,
            dog_breed: formData.dogBreed.trim(),
            training_interest: formData.trainingInterest.trim(),
            experience: formData.experience.trim(),
            urgency: formData.urgency,
            created_at: new Date().toISOString(),
            submitted_at: new Date().toISOString(),
            user_id: 'draken197413'
          }
        ])

      if (error) {
        throw new Error(error.message)
      }

      setStatus('Message sent successfully!')
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        companyName: '',
        subject: '',
        message: '',
        preferredContact: 'email',
        dogBreed: '',
        trainingInterest: '',
        experience: '',
        urgency: 'normal'
      })
    } catch (error) {
      if (error instanceof Error) {
        setStatus(`Error: ${error.message}`)
      } else {
        setStatus('An unexpected error occurred. Please try again.')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const formGroupVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <motion.div 
      className={styles.wrapper}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <main className={styles.pageContainer}>
        <motion.div 
          className={styles.contentWrapper}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className={styles.formContainer}>
            <motion.div 
              className={styles.header}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className={styles.title}>Contact Us</h1>
              <p className={styles.subtitle}>
                We are here to help with your dog training needs
              </p>
            </motion.div>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGrid}>
                <motion.div 
                  className={styles.formGroup}
                  variants={formGroupVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.3 }}
                >
                  <label htmlFor="firstName" className={styles.label}>
                    First Name *
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="Enter your first name"
                    required
                    disabled={isSubmitting}
                  />
                </motion.div>

                <motion.div 
                  className={styles.formGroup}
                  variants={formGroupVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.3 }}
                >
                  <label htmlFor="lastName" className={styles.label}>
                    Last Name
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="Enter your last name"
                    disabled={isSubmitting}
                  />
                </motion.div>
              </div>

              <div className={styles.formGrid}>
                <motion.div 
                  className={styles.formGroup}
                  variants={formGroupVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.4 }}
                >
                  <label htmlFor="email" className={styles.label}>
                    Email Address *
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="Enter your email"
                    required
                    disabled={isSubmitting}
                  />
                </motion.div>

                <motion.div 
                  className={styles.formGroup}
                  variants={formGroupVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.4 }}
                >
                  <label htmlFor="phone" className={styles.label}>
                    Phone Number
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="Enter your phone number"
                    disabled={isSubmitting}
                  />
                </motion.div>
              </div>

              <motion.div 
                className={styles.formGroup}
                variants={formGroupVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.5 }}
              >
                <label htmlFor="preferredContact" className={styles.label}>
                  Preferred Contact Method
                </label>
                <motion.select
                  whileFocus={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                  id="preferredContact"
                  name="preferredContact"
                  value={formData.preferredContact}
                  onChange={handleChange}
                  className={styles.select}
                  disabled={isSubmitting}
                >
                  <option value="email">Email</option>
                  <option value="phone">Phone</option>
                  <option value="both">Both</option>
                </motion.select>
              </motion.div>

              <motion.div 
                className={styles.formGroup}
                variants={formGroupVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.5 }}
              >
                <label htmlFor="dogBreed" className={styles.label}>
                  Dog Breed
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                  type="text"
                  id="dogBreed"
                  name="dogBreed"
                  value={formData.dogBreed}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="Enter your dog's breed"
                  disabled={isSubmitting}
                />
              </motion.div>

              <motion.div 
                className={styles.formGroup}
                variants={formGroupVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.6 }}
              >
                <label htmlFor="trainingInterest" className={styles.label}>
                  Training Interest
                </label>
                <motion.select
                  whileFocus={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                  id="trainingInterest"
                  name="trainingInterest"
                  value={formData.trainingInterest}
                  onChange={handleChange}
                  className={styles.select}
                  disabled={isSubmitting}
                >
                  <option value="">Select training type</option>
                  <option value="basic">Basic Obedience</option>
                  <option value="advanced">Advanced Training</option>
                  <option value="behavior">Behavior Modification</option>
                  <option value="protection">Protection Training</option>
                  <option value="agility">Agility Training</option>
                </motion.select>
              </motion.div>

              <motion.div 
                className={styles.formGroup}
                variants={formGroupVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.7 }}
              >
                <label htmlFor="subject" className={styles.label}>
                  Subject *
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="Enter message subject"
                  required
                  disabled={isSubmitting}
                />
              </motion.div>

              <motion.div 
                className={styles.formGroup}
                variants={formGroupVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.8 }}
              >
                <label htmlFor="message" className={styles.label}>
                  Message *
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={styles.textarea}
                  placeholder="Type your message here..."
                  required
                  disabled={isSubmitting}
                  rows={5}
                />
              </motion.div>

              <motion.button 
                type="submit" 
                className={styles.button}
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>

              <AnimatePresence>
                {status && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className={`${styles.status} ${
                      status.includes('success') ? styles.success : styles.error
                    }`}
                  >
                    {status}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </motion.div>
      </main>
      <Footer />
    </motion.div>
  )
}
