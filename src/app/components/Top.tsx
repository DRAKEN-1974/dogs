'use client';

import React from 'react';
import { motion } from 'framer-motion';
import './Top.css';

const HeroSection = () => {
  const scrollToFeatures = () => {
    const featuresSection = document.querySelector('#features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="video-background">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="background-video"
          >
            <source src="/images/77626-562965806_small.mp4" type="video/mp4" />
          </video>
          <div className="video-overlay"></div>
        </div>

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            WELCOME TO K9SCHOOLS
          </motion.p>
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Professional Dog Training & Behavior Modification
          </motion.h1>
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Transform your dog behavior with our expert training programs. 
            We specialize in obedience training, behavioral modification, 
            and creating lasting bonds between dogs and their owners.
          </motion.p>
          <motion.button 
            className="hero-button"
            onClick={scrollToFeatures}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ delay: 0.8, duration: 0.3 }}
          >
            Explore Training Programs
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
