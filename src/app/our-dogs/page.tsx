'use client'
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Footer from '../components/footer';
import './our-dogs.css';

const OurDogs = () => {
  const router = useRouter();

  const handleContact = () => {
    router.push('/contact');
  };

  return (
    <div className="our-dogs-container">
      {/* Hero Section */}
      <section className="dogs-hero">
        <Image 
          src="/images/dogs-hero.jpg"
          alt="Our Dogs"
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
            Meet Our Professional Dogs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Trained with excellence, ready for service
          </motion.p>
        </div>
      </section>

      {/* Featured Dogs Section */}
      <section className="featured-dogs">
        <h2>Our Elite K9 Team</h2>
        <div className="dogs-grid">
          {dogs.map((dog, index) => (
            <motion.div 
              key={index}
              className="dog-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="dog-image-container">
                <Image
                  src={dog.image}
                  alt={dog.name}
                  fill
                  className="dog-image"
                />
                <div className="dog-specialties">
                  {dog.specialties.map((specialty, idx) => (
                    <span key={idx} className="specialty-tag">{specialty}</span>
                  ))}
                </div>
              </div>
              <div className="dog-info">
                <h3>{dog.name}</h3>
                <span className="dog-breed">{dog.breed}</span>
                <p>{dog.description}</p>
                <div className="dog-stats">
                  <div className="stat">
                    <span className="stat-label">Age</span>
                    <span className="stat-value">{dog.age} years</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">Training</span>
                    <span className="stat-value">{dog.training}</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">Experience</span>
                    <span className="stat-value">{dog.experience} years</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements-section">
        <h2>Our Achievements</h2>
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <motion.div 
              key={index}
              className="achievement-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="achievement-icon">{achievement.icon}</div>
              <h3>{achievement.title}</h3>
              <p>{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Training Process Section */}
      <section className="training-process">
        <h2>Our Training Process</h2>
        <div className="process-steps">
          {trainingSteps.map((step, index) => (
            <motion.div 
              key={index}
              className="process-step"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="step-number">{index + 1}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="dogs-cta">
        <div className="cta-content">
          <h2>Want to Meet Our Dogs?</h2>
          <p>Schedule a visit to meet our professional K9 team</p>
          <button onClick={handleContact} className="cta-button">
            Book an Appointment
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const dogs = [
  {
    name: "Max",
    breed: "German Shepherd",
    age: 3,
    training: "Advanced",
    experience: 2,
    image: "/images/dog-max.jpg",
    description: "Specialized in protection work and obedience training. Max excels in high-pressure situations and demonstrates exceptional control.",
    specialties: ["Protection", "Obedience", "Tracking"]
  },
  {
    name: "Luna",
    breed: "Belgian Malinois",
    age: 4,
    training: "Expert",
    experience: 3,
    image: "/images/dog-luna.jpg",
    description: "Expert in detection and agility. Luna has participated in numerous competitions and training demonstrations.",
    specialties: ["Detection", "Agility", "Search & Rescue"]
  },
  {
    name: "Rex",
    breed: "Dutch Shepherd",
    age: 5,
    training: "Elite",
    experience: 4,
    image: "/images/dog-rex.jpg",
    description: "Specialized in tactical operations and advanced protection work. Rex is our most experienced training demonstrator.",
    specialties: ["Tactical", "Protection", "Demonstration"]
  }
];

const achievements = [
  {
    icon: "🏆",
    title: "National K9 Championships",
    description: "Multiple first-place wins in protection and obedience categories"
  },
  {
    icon: "🎖️",
    title: "Certification Excellence",
    description: "All dogs certified with top marks in their respective specialties"
  },
  {
    icon: "🌟",
    title: "Training Success",
    description: "Over 1000+ successful training sessions completed"
  },
  {
    icon: "🤝",
    title: "Community Service",
    description: "Regular participation in community demonstrations and events"
  }
];

const trainingSteps = [
  {
    title: "Assessment",
    description: "Comprehensive evaluation of temperament and natural abilities"
  },
  {
    title: "Foundation Training",
    description: "Building core obedience and behavioral foundations"
  },
  {
    title: "Specialty Development",
    description: "Focus on specific areas of expertise and advanced skills"
  },
  {
    title: "Real-World Experience",
    description: "Practical application of skills in various environments"
  }
];

export default OurDogs;