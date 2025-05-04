'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import './middle.css';
import { useRouter } from 'next/navigation';

const destinations = [
  {
    id: 1,
    title: "Train Your Dog",
    image: "/images/traningk9.jpg",
    category: "TRAINING",
    description: "Expert training programs tailored for your dog's unique needs and personality",
    path: "/traning"
  },
  {
    id: 2,
    title: "Board Your Dog",
    image: "/images/boardk9.jpg",
    category: "BOARDING",
    description: "Safe and comfortable boarding services with 24/7 care and attention",
    path: "/boarding"
  },
  {
    id: 3,
    title: "Learn Dog Training",
    image: "/images/learnk9.webp",
    category: "LEARNING",
    description: "Master the art of dog training with our professional certification courses",
    path: "/learning"
  },
  {
    id: 4,
    title: "Get Consultation",
    image: "/images/dogk9consultant.jpg",
    category: "CONSULTATION",
    description: "Professional advice and personalized solutions for your dog's behavior",
    path: "/consultant"
  }
];

const Destination = () => {
  const router = useRouter();
  const [startX, setStartX] = React.useState(0);
  const [scrollLeft, setScrollLeft] = React.useState(0);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!(e.buttons > 0)) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleExplore = (destination: any) => {
    if (destination.path) {
      router.push(destination.path);
    }
  };

  return (
    <section className="featured-section">
      <div className="featured-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="section-title"
        >
          <h1>Featured Services</h1>
          <p>Explore our handpicked services for your furry friend</p>
        </motion.div>

        <div 
          className="destinations-wrapper"
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setStartX(0)}
          onMouseUp={() => setStartX(0)}
        >
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              className="destination-card"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -20 }}
            >
              <div className="card-image">
                <Image
                  src={destination.image}
                  alt={destination.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority={index < 2}
                />
                <div className="category">{destination.category}</div>
              </div>
              <div className="card-content">
                <h3>{destination.title}</h3>
                <p>{destination.description}</p>
                <button 
                  className="explore-btn"
                  onClick={() => handleExplore(destination)}
                >
                  Explore
                  <span className="arrow">→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destination;