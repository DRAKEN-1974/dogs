'use client';
import React from 'react';
import Image from 'next/image';
import './Security.css';

const SecurityDogs = () => {
  const dogs = [
    {
      name: 'Rex',
      image: '/securityDogs/rex.jpg',
      description: 'Rex is a highly trained German Shepherd, specializing in patrol duties and rapid response operations.',
    },
    {
      name: 'Bolt',
      image: '/securityDogs/bolt.jpg',
      description: 'Bolt excels in explosive detection and ensures safety in large public gatherings and high-security areas.',
    },
    {
      name: 'Shadow',
      image: '/securityDogs/shadow.jpg',
      description: 'Shadow is an expert in stealth operations, night patrols, and perimeter security enforcement.',
    },
  ];

  return (
    <section className="security-section">
      <div className="security-container">
        {/* Mission Section */}
        <div className="mission">
          <h2 className="section-title">Our Mission: Safety & Loyalty</h2>
          <p className="mission-text">
            At [Your Company], our mission is to provide unparalleled security services with the help of our elite team of
            security dogs. These highly trained canines are not just guards—they are loyal protectors, ensuring safety and
            peace of mind wherever they serve. We are committed to excellence, precision, and dedication in every aspect of
            security. Whether its patrolling premises, detecting threats, or offering companionship with purpose, our
            security dogs are always prepared to safeguard lives and assets.
          </p>
        </div>

        {/* Security Dogs Showcase */}
        <div className="dogs-showcase">
          <h3 className="dogs-title">Meet Our Security Dogs</h3>
          <div className="dogs-grid">
            {dogs.map((dog, index) => (
              <div key={index} className="dog-card">
                <div className="dog-image-wrapper">
                  <Image
                    src={dog.image}
                    alt={dog.name}
                    layout="fill"
                    objectFit="cover"
                    className="dog-image"
                    priority
                  />
                </div>
                <h4 className="dog-name">{dog.name}</h4>
                <p className="dog-description">{dog.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityDogs;
