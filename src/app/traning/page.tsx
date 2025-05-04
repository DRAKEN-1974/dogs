'use client'
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Footer from '../components/footer';
import './traning.css';

const Training = () => {
  const router = useRouter();

  const handleContact = () => {
    router.push('/contact');
  };

  return (
    <div className="font-sora">
      {/* Hero Section */}
      <section className="hero-section">
        <Image 
          src="/images/shepherd-dog-4357790_1920.jpg"
          alt="Dog Training"
          className="hero-image"
          fill
          priority
        />
        <div className="hero-content">
          <h1 className="hero-title fade-in">Train Your Dog</h1>
          <p className="hero-description fade-in">
            Expert training programs tailored for your dog's unique needs and personality
          </p>
        </div>
      </section>

      {/* Programs Section */}
      <section className="programs-section">
        <div className="section-container">
          <h2 className="section-title">Our Training Programs</h2>
          <div className="programs-grid">
            {trainingPrograms.map((program, index) => (
              <div key={index} className="program-card">
                <div className="program-icon">{program.icon}</div>
                <h3 className="program-title">{program.title}</h3>
                <p className="program-description">{program.description}</p>
                <div className="program-footer">
                  <span className="program-price">${program.price}</span>
                  <button className="button button-white" onClick={handleContact}>
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="section-container">
          <div className="about-container">
            <div className="about-content">
              <h2 className="about-title">Why Choose Our Training?</h2>
              <ul className="benefits-list">
                {benefits.map((benefit, index) => (
                  <li key={index} className="benefit-item">
                    <div className="benefit-dot">
                      <div className="benefit-dot-inner"></div>
                    </div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="about-image-container">
              <Image
                src="/images/dogtraniner.jpg"
                alt="Professional Dog Trainer"
                fill
                className="about-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Ready to Transform Your Dog's Behavior?</h2>
          <p className="cta-description">
            Schedule a consultation with our expert trainers today
          </p>
          <div className="cta-buttons">
            <button className="button button-primary" onClick={handleContact}>
              Book Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const trainingPrograms = [
  {
    icon: '🎯',
    title: 'Basic Obedience',
    description: 'Master essential commands and establish good behavior patterns.',
    price: '299'
  },
  {
    icon: '⭐',
    title: 'Advanced Training',
    description: 'Take your dogs skills to the next level with advanced techniques.',
    price: '499'
  },
  {
    icon: '🔄',
    title: 'Behavior Modification',
    description: 'Address specific behavioral issues with targeted training.',
    price: '399'
  }
];

const benefits = [
  'Personalized training plans tailored to your dog',
  'Experienced and certified professional trainers',
  'Positive reinforcement training methods',
  'Flexible scheduling options',
  'Progress tracking and regular updates',
  'Post-training support and guidance'
];

export default Training;