"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import "./services.css";
import Footer from "../components/footer";

const HappyFamiliesSection = () => {
  return (
    <div className="happy-families-section">
      <motion.div
        className="happy-families-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="image-container"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/haapy.jpg"
            alt="Happy Families"
            width={500} /* Adjusted width */
            height={400} /* Adjusted height */
            priority
            className="image"
          />
        </motion.div>
        <motion.div
          className="text-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1>
            <span className="highlight">4,000+</span> Happy Families
          </h1>
          <p>
            K9 School has helped over 4,000 dogs and their humans live happier
            lives together. Our goal is to create a balanced, happy relationship
            between dogs and their owners, making life easier for both. At K9
            School, we teach humans how to understand and connect with their
            dogs, helping them live together without any compromises. We believe
            that a peaceful and happy life with your dog is possible, and we’re
            here to help you achieve it.
          </p>
          <motion.a
            href="#"
            className="cta-button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Book a Visit
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Board Your Dog",
      description:
        "We provide an exceptional dog boarding service that ensures your furry friend is cared for and loved while you're away. Our staff is trained to handle dogs of all sizes and personalities, creating a safe and fun environment for them.",
      image: "/images/k9servces.jpg",
      reverse: false,
    },
    {
      id: 2,
      title: "Dog Training",
      description:
        "Our dog training programs are tailored to meet the needs of both you and your dog. From basic obedience to advanced tricks, we help your dog become the best version of themselves.",
      image: "/images/k9dogtrain.jpg",
      reverse: true,
    },
    {
      id: 3,
      title: "Grooming Services",
      description:
        "Pamper your dog with our professional grooming services. We ensure your pet looks and feels their best, offering baths, haircuts, nail trims, and more.",
      image: "/images/traningk9.jpg",
      reverse: false,
    },
    {
      id: 4,
      title: "Dog Walking",
      description:
        "Our dog walking services ensure your dog gets the exercise and attention they need. Whether it's a casual stroll or an energetic run, we're here to help.",
      image: "/images/dogboarding.jpeg",
      reverse: true,
    },
  ];

  return (
    <div className="services-page">
      <motion.h1
        className="page-heading"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Our Services
      </motion.h1>
      {services.map((service, index) => (
        <motion.div
          key={service.id}
          className={`service-section ${service.reverse ? "reverse" : ""}`}
          initial={{ opacity: 0, x: service.reverse ? -100 : 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
        >
          <motion.div
            className="content"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </motion.div>
          <motion.div
            className="image"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Image
              src={service.image}
              alt={service.title}
              width={500} /* Adjusted width */
              height={400} /* Adjusted height */
              priority
            />
          </motion.div>
        </motion.div>
      ))}
      <HappyFamiliesSection />
      <Footer />
    </div>
  );
};

export default Services;