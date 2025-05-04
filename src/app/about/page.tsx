"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Footer from '../components/footer';
import './about.css';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stats = [
    { number: "1000+", label: "Trained Dogs" },
    { number: "15+", label: "Years Experience" },
    { number: "50+", label: "Expert Trainers" },
    { number: "98%", label: "Success Rate" }
  ];

  const services = [
    {
      title: "Basic Obedience",
      description: "Foundation training for puppies and adult dogs",
      icon: "🦮"
    },
    {
      title: "Advanced Training",
      description: "Complex commands and behavior modification",
      icon: "🎯"
    },
    {
      title: "Protection Training",
      description: "Professional security and protection dog training",
      icon: "🛡️"
    },
    {
      title: "Service Dog Training",
      description: "Specialized training for service and therapy dogs",
      icon: "❤️"
    }
  ];

  const team = [
    {
      name: "John Doe",
      position: "Head Trainer",
      image: "/images/team/trainer1.jpg",
      description: "20+ years of experience in K9 training"
    },
    {
      name: "Jane Smith",
      position: "Behavioral Specialist",
      image: "/images/team/trainer2.jpg",
      description: "Expert in dog psychology and behavior modification"
    },
    {
      name: "Mike Johnson",
      position: "Protection Training Expert",
      image: "/images/team/trainer3.jpg",
      description: "Former military K9 handler"
    }
  ];

  return (
    <div className="about-container">
      {/* Hero Section */}
      <motion.section 
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-content">
          <motion.h1 
            className="hero-title"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Excellence in K9 Training
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Building stronger bonds between humans and dogs since 2010
          </motion.p>
        </div>
      </motion.section>

      {/* Mission Section */}
      <section className="mission-section">
        <motion.div 
          className="section-content"
          {...fadeInUp}
        >
          <h2 className="section-title">Our Mission</h2>
          <p className="section-text">
            At K9Schools, we are dedicated to fostering understanding and harmony between humans and their canine companions. Our mission is to provide world-class training that enhances the bond between dogs and their owners while ensuring the highest standards of obedience and behavior.
          </p>
          <div className="stats-container">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="stat-item"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="stat-number">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <motion.div 
          className="section-content"
          {...fadeInUp}
        >
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="service-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <span className="service-icon">{service.icon}</span>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Training Facility */}
      <section className="facility-section">
        <motion.div 
          className="section-content"
          {...fadeInUp}
        >
          <h2 className="section-title">State-of-the-Art Training Facility</h2>
          <div className="facility-grid">
            <div className="facility-image">
              <Image
                src="/images/facility.jpg"
                alt="K9Schools Training Facility"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="facility-info">
              <h3>Modern Training Environment</h3>
              <ul className="facility-features">
                <li>10,000 sq ft indoor training area</li>
                <li>2-acre outdoor training ground</li>
                <li>Climate-controlled environment</li>
                <li>Professional agility equipment</li>
                <li>Specialized protection training zones</li>
                <li>Comfortable waiting areas</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <motion.div 
          className="section-content"
          {...fadeInUp}
        >
          <h2 className="section-title">Our Expert Team</h2>
          <div className="team-grid">
            {team.map((member, index) => (
              <motion.div 
                key={index}
                className="team-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="team-image">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-position">{member.position}</p>
                  <p className="team-description">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Certifications Section */}
      <section className="certifications-section">
        <motion.div 
          className="section-content"
          {...fadeInUp}
        >
          <h2 className="section-title">Our Certifications</h2>
          <div className="certifications-grid">
            <div className="certification-item">
              <Image
                src="/images/cert1.png"
                alt="Certification 1"
                width={100}
                height={100}
              />
              <p>International K9 Training Association</p>
            </div>
            <div className="certification-item">
              <Image
                src="/images/cert2.png"
                alt="Certification 2"
                width={100}
                height={100}
              />
              <p>Professional Dog Trainers Alliance</p>
            </div>
            <div className="certification-item">
              <Image
                src="/images/cert3.png"
                alt="Certification 3"
                width={100}
                height={100}
              />
              <p>Service Dog Training Certification</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <motion.div 
          className="section-content"
          {...fadeInUp}
        >
          <h2 className="section-title">Our Core Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <h3>Excellence</h3>
              <p>Committed to delivering the highest quality training and service</p>
            </div>
            <div className="value-item">
              <h3>Compassion</h3>
              <p>Understanding and caring for both dogs and their owners</p>
            </div>
            <div className="value-item">
              <h3>Innovation</h3>
              <p>Using modern training techniques and continuous improvement</p>
            </div>
            <div className="value-item">
              <h3>Integrity</h3>
              <p>Honest and ethical practices in all our interactions</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contact CTA Section */}
      <section className="cta-section">
        <motion.div 
          className="section-content"
          {...fadeInUp}
        >
          <h2 className="cta-title">Ready to Start Your Dogs Training Journey?</h2>
          <p className="cta-text">
            Contact us today to schedule a consultation and learn more about our programs.
          </p>
          <motion.button 
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
