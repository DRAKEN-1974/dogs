'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './footer.css';
import Terms from '../components/Terms';

const socialLinks = [
  {
    id: 1,
    name: 'Instagram',
    href: 'https://instagram.com',
    description: 'Follow our inspirational stories'
  },
  {
    id: 2,
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    description: 'Connect with our team'
  },
  {
    id: 3,
    name: 'YouTube',
    href: 'https://youtube.com',
    description: 'Watch traning guides'
  }
];

const companyInfo = {
  address: 'New York, NY 10012',
  email: 'hello@k9schools.com',
  phone: '+1 (555) 123-4567'
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showTerms, setShowTerms] = useState(false);

  const handleTermsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowTerms(true);
  };

  const handleCloseTerms = () => {
    setShowTerms(false);
  };

  return (
    <>
      <footer className="footer">
        <motion.div 
          className="footer-wave"
          animate={{ 
            y: [0, -10, 0],
            transition: { duration: 3, repeat: Infinity }
          }}
        />
        <div className="footer-container">
          <div className="footer-main">
            <div className="footer-left">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="footer-title"
              >
                Get your fluffy companion trained with us
              </motion.h2>
              <div className="company-info">
                <p>{companyInfo.address}</p>
                <p>{companyInfo.email}</p>
                <p>{companyInfo.phone}</p>
              </div>
            </div>

            <div className="footer-right">
              <div className="social-links">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.id}
                    href={link.href}
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <div className="social-content">
                      <span className="social-name">{link.name}</span>
                      <span className="social-description">{link.description}</span>
                    </div>
                    <motion.svg 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="arrow-icon"
                    >
                      <path 
                        d="M7 17L17 7M17 7H7M17 7V17" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </motion.svg>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          <motion.div 
            className="footer-bottom"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p>&copy; {currentYear} K9SCHOOLS. All rights reserved.</p>
            <div className="footer-links">
              <a href="/privacy">Privacy Policy</a>
              <a href="#" onClick={handleTermsClick}>Terms of Service</a>
            </div>
          </motion.div>
        </div>
      </footer>

      {showTerms && (
        <div className="terms-modal">
          <div className="terms-modal-content">
            <button className="terms-close-button" onClick={handleCloseTerms}>×</button>
            <Terms />
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;