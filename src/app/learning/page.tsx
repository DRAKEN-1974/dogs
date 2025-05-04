'use client'
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Footer from '../components/footer';
import './learning.css';

const Learning = () => {
  const router = useRouter();

  const handleContact = () => {
    router.push('/contact');
  };

  return (
    <div className="learning-container">
      {/* Hero Section */}
      <section className="learning-hero">
        <Image 
          src="/images/learnk9.webp"
          alt="Dog Training Learning"
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
            Master Dog Training
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Professional certification courses to become an expert dog trainer
          </motion.p>
        </div>
      </section>

      {/* Courses Section */}
      <section className="courses-section">
        <h2>Our Training Courses</h2>
        <div className="courses-grid">
          {courses.map((course, index) => (
            <motion.div 
              key={index}
              className="course-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="course-image-container">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="course-image"
                />
              </div>
              <div className="course-content">
                <span className="course-level">{course.level}</span>
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <div className="course-details">
                  <span>Duration: {course.duration}</span>
                  <span>Price: ${course.price}</span>
                </div>
                <button onClick={handleContact} className="enroll-button">
                  Enroll Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <h2>Why Choose Our Program</h2>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              className="benefit-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="benefit-icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Instructors Section */}
      <section className="instructors-section">
        <h2>Meet Our Expert Instructors</h2>
        <div className="instructors-grid">
          {instructors.map((instructor, index) => (
            <motion.div 
              key={index}
              className="instructor-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="instructor-image-container">
                <Image
                  src={instructor.image}
                  alt={instructor.name}
                  fill
                  className="instructor-image"
                />
              </div>
              <div className="instructor-info">
                <h3>{instructor.name}</h3>
                <span className="instructor-title">{instructor.title}</span>
                <p>{instructor.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="learning-cta">
        <div className="cta-content">
          <h2>Ready to Start Your Journey?</h2>
          <p>Join our professional dog training certification program</p>
          <button onClick={handleContact} className="cta-button">
            Get Started Today
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const courses = [
  {
    title: "Basic Dog Training Fundamentals",
    description: "Learn the essential principles of dog training and behavior modification",
    level: "Beginner",
    duration: "8 weeks",
    price: "899",
    image: "/images/basic-training.jpg"
  },
  {
    title: "Advanced Training Techniques",
    description: "Master complex training methods and behavioral psychology",
    level: "Advanced",
    duration: "12 weeks",
    price: "1299",
    image: "/images/advanced-training.jpg"
  },
  {
    title: "Professional Trainer Certification",
    description: "Comprehensive program to become a certified professional dog trainer",
    level: "Professional",
    duration: "16 weeks",
    price: "1999",
    image: "/images/professional-training.jpg"
  }
];

const benefits = [
  {
    icon: "🎓",
    title: "Certified Program",
    description: "Internationally recognized certification upon completion"
  },
  {
    icon: "👥",
    title: "Expert Instructors",
    description: "Learn from experienced professional trainers"
  },
  {
    icon: "📚",
    title: "Comprehensive Curriculum",
    description: "Well-structured content covering all aspects of dog training"
  },
  {
    icon: "💼",
    title: "Career Support",
    description: "Job placement assistance and business guidance"
  }
];

const instructors = [
  {
    name: "Sarah Johnson",
    title: "Head Trainer",
    description: "15+ years experience in professional dog training",
    image: "/images/instructor-1.jpg"
  },
  {
    name: "Michael Chen",
    title: "Behavioral Specialist",
    description: "Expert in canine behavior and psychology",
    image: "/images/instructor-2.jpg"
  },
  {
    name: "Emily Williams",
    title: "Certification Program Director",
    description: "Specialist in professional trainer development",
    image: "/images/instructor-3.jpg"
  }
];

export default Learning;