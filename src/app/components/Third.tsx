'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import './third.css';

const criteriaData = {
  title: 'K9 School Acceptance Criteria',
  description:
    'We are committed to providing a safe and positive environment for all dogs. Here are the requirements for acceptance into our programs:',
  points: [
    'Dogs must be in excellent overall health.',
    "Owners must submit up-to-date vaccination records and health certificates.",
    'Each dog must pass a temperament and behavior evaluation.',
  ],
  buttonText: 'Schedule an Assessment',
};

const Criteria = () => {
  const router = useRouter();

  const handleScheduleClick = () => {
    router.push('/contact');
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.05,
      boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.95 }
  };

  return (
    <motion.section 
      className="criteria-section"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div 
        className="criteria-image"
        variants={itemVariants}
      >
        <img
          src="/images/k9image2.jpg"
          alt="Decorative dog element"
        />
      </motion.div>
      <motion.div 
        className="criteria-content"
        variants={itemVariants}
      >
        <motion.h2 
          className="criteria-title"
          variants={itemVariants}
        >
          {criteriaData.title}
        </motion.h2>
        <motion.p 
          className="criteria-description"
          variants={itemVariants}
        >
          {criteriaData.description}
        </motion.p>
        <motion.ul 
          className="criteria-list"
          variants={containerVariants}
        >
          {criteriaData.points.map((point, index) => (
            <motion.li 
              key={index} 
              className="criteria-item"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.2 }}
            >
              <motion.span 
                className="checkmark"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
              >
                ✓
              </motion.span> 
              {point}
            </motion.li>
          ))}
        </motion.ul>
        <motion.button 
          className="criteria-button"
          variants={buttonVariants}
          initial="rest"
          whileHover="hover"
          whileTap="tap"
          onClick={handleScheduleClick}
        >
          {criteriaData.buttonText}
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default Criteria;