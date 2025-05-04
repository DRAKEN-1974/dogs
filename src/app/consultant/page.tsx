'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Footer from '../components/footer';
import './consultant.css';

const Consultation = () => {
  const router = useRouter();
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handleContact = () => {
    router.push('/contact');
  };

  return (
    <div className="consultation-container">
      {/* Hero Section */}
      <section className="consultation-hero">
        <Image 
          src="/images/dogk9consultant.jpg"
          alt="Dog Training Consultation"
          fill
          className="hero-image"
          priority
        />
        <div className="hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Professional Dog Training Consultation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Expert advice and personalized solutions for your dog behavior
          </motion.p>
        </div>
      </section>

      {/* Services Section */}
      <section className="consultation-services">
        <h2>Our Consultation Services</h2>
        <div className="services-grid">
          {consultationServices.map((service, index) => (
            <motion.div 
              key={index}
              className={`service-card ${selectedService === service.title ? 'selected' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedService(service.title)}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-details">
                <span className="duration">{service.duration}</span>
                <span className="price">${service.price}</span>
              </div>
              <button onClick={handleContact} className="book-button">
                Book Now
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="consultation-process">
        <h2>How It Works</h2>
        <div className="process-grid">
          {consultationProcess.map((step, index) => (
            <motion.div 
              key={index}
              className="process-step"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="step-number">{index + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Expertise Section */}
      <section className="expertise-section">
        <h2>Our Expertise</h2>
        <div className="expertise-grid">
          {expertiseAreas.map((area, index) => (
            <motion.div 
              key={index}
              className="expertise-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="expertise-icon">{area.icon}</div>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="consultation-cta">
        <div className="cta-content">
          <h2>Ready to Transform Your Dog Behavior?</h2>
          <p>Schedule your consultation today and take the first step towards a better relationship with your dog</p>
          <button onClick={handleContact} className="cta-button">
            Schedule Consultation
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const consultationServices = [
  {
    icon: "🏠",
    title: "In-Home Consultation",
    description: "Personalized evaluation and training in your home environment",
    duration: "90 minutes",
    price: "149"
  },
  {
    icon: "💻",
    title: "Virtual Consultation",
    description: "Convenient online consultation with our expert trainers",
    duration: "60 minutes",
    price: "99"
  },
  {
    icon: "🎯",
    title: "Behavior Assessment",
    description: "Comprehensive evaluation of your dog's behavior patterns",
    duration: "120 minutes",
    price: "199"
  }
];

const consultationProcess = [
  {
    title: "Initial Contact",
    description: "Fill out our consultation form with details about your dog and concerns"
  },
  {
    title: "Schedule Session",
    description: "Choose a convenient time for your consultation"
  },
  {
    title: "Consultation",
    description: "Meet with our expert trainer for evaluation and recommendations"
  },
  {
    title: "Action Plan",
    description: "Receive a customized training plan for your dog"
  }
];

const expertiseAreas = [
  {
    icon: "🦮",
    title: "Behavior Modification",
    description: "Address aggressive behavior, anxiety, and other behavioral issues"
  },
  {
    icon: "🎯",
    title: "Puppy Training",
    description: "Early development and proper socialization techniques"
  },
  {
    icon: "🏆",
    title: "Advanced Training",
    description: "Complex commands and specialized skill development"
  },
  {
    icon: "❤️",
    title: "Rehabilitation",
    description: "Help for rescued dogs and trauma recovery"
  }
];

const faqs = [
  {
    question: "How long does a consultation take?",
    answer: "Initial consultations typically last 60-90 minutes, depending on your dog's needs."
  },
  {
    question: "What should I prepare for the consultation?",
    answer: "Have your dog's history, current behaviors, and specific concerns ready to discuss."
  },
  {
    question: "Do you offer virtual consultations?",
    answer: "Yes, we offer online consultations for clients who prefer remote sessions."
  },
  {
    question: "How quickly will I see results?",
    answer: "Results vary based on the issue and consistency in following the training plan."
  }
];

export default Consultation;
