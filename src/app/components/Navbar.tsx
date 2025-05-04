'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${isOpen ? 'menu-open' : ''} ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-content">
          <Link href="/" className="brand">
            <Image
              src="/images/k9logo.png"
              alt="K9SCHOOLS"
              width={50}
              height={50}
              className="brand-logo"
            />
            <span className="brand-name">K9SCHOOLS</span>
          </Link>

          <button
            className={`nav-toggle ${isOpen ? 'active' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>{isOpen ? 'CLOSE' : 'MENU'}</span>
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="nav-menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="menu-items">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
                </motion.div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="services-item"
                >
                  <Link href="/services" onClick={() => setIsOpen(false)}>Services</Link>
                  <span className="service-subtitle"></span>
                </motion.div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >


                 <Link href="/our-dogs" onClick={() => setIsOpen(false)}>Our-Dogs</Link>
                  <span className="service-subtitle"></span>
                 </motion.div>
                 <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >

<Link href="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link>
                </motion.div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >



<Link href="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
                </motion.div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >



<Link href="/donation" onClick={() => setIsOpen(false)}>Donation</Link>
                </motion.div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >








                  <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
                </motion.div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <div className="nav-spacer"></div>
    </>
  );
};

export default Navbar;