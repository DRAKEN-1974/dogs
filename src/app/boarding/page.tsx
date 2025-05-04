'use client'
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Footer from '../components/footer';
import './boarding.css';

const Boarding = () => {
  const router = useRouter();

  const handleContact = () => {
    router.push('/contact');
  };

  return (
    <div className="boarding-container">
      {/* Hero Section */}
      <section className="boarding-hero">
        <Image 
          src="/images/boardk9.jpg"
          alt="Dog Boarding"
          fill
          className="hero-image"
          priority
        />
        <div className="hero-overlay">
          <h1>Board Your Dog</h1>
          <p>Safe and comfortable boarding services with 24/7 care and attention</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="boarding-features">
        <div className="features-grid">
          {boardingFeatures.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Accommodation Section */}
      <section className="accommodation-section">
        <h2>Our Accommodations</h2>
        <div className="accommodation-grid">
          {accommodations.map((room, index) => (
            <div key={index} className="room-card">
              <div className="room-image-container">
                <Image
                  src={room.image}
                  alt={room.title}
                  fill
                  className="room-image"
                />
              </div>
              <div className="room-details">
                <h3>{room.title}</h3>
                <p>{room.description}</p>
                <div className="room-price">
                  <span>Starting from</span>
                  <span className="price">${room.price}/night</span>
                </div>
                <button onClick={handleContact} className="book-button">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Included Services</h2>
        <div className="services-grid">
          {includedServices.map((service, index) => (
            <div key={index} className="service-item">
              <div className="service-icon">{service.icon}</div>
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="boarding-cta">
        <div className="cta-content">
          <h2>Ready to Book Your Dog's Stay?</h2>
          <p>Secure a comfortable and safe space for your furry friend</p>
          <button onClick={handleContact} className="cta-button">
            Reserve Now
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const boardingFeatures = [
  {
    icon: '🏠',
    title: '24/7 Supervision',
    description: 'Round-the-clock care from our experienced staff'
  },
  {
    icon: '🦮',
    title: 'Daily Exercise',
    description: 'Structured playtime and walks in our secure facilities'
  },
  {
    icon: '🏥',
    title: 'Veterinary Access',
    description: 'On-call veterinary services for peace of mind'
  },
  {
    icon: '📱',
    title: 'Daily Updates',
    description: 'Regular photos and updates of your pets stay'
  }
];

const accommodations = [
  {
    title: 'Standard Suite',
    description: 'Comfortable private space with bedding and feeding area',
    price: '45',
    image: '/images/standard-suite.jpg'
  },
  {
    title: 'Luxury Suite',
    description: 'Spacious room with premium bedding and private play area',
    price: '65',
    image: '/images/luxury-suite.jpg'
  },
  {
    title: 'Premium Suite',
    description: 'VIP accommodation with extra space and webcam access',
    price: '85',
    image: '/images/premium-suite.jpg'
  }
];

const includedServices = [
  {
    icon: '🍽️',
    title: 'Premium Meals',
    description: 'High-quality food served according to your pet schedule'
  },
  {
    icon: '🎯',
    title: 'Activity Sessions',
    description: 'Structured play and exercise throughout the day'
  },
  {
    icon: '🛁',
    title: 'Grooming',
    description: 'Basic grooming and cleanliness maintenance'
  },
  {
    icon: '🏥',
    title: 'Health Monitoring',
    description: 'Regular health and wellness checks'
  },
  {
    icon: '🎮',
    title: 'Webcam Access',
    description: 'View your pet anytime through our secure webcam'
  },
  {
    icon: '📝',
    title: 'Daily Report',
    description: 'Detailed updates on your pets activities and behavior'
  }
];

export default Boarding;