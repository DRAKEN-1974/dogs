'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Footer from "../components/footer";
import './gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      src: "/images/traningk9.jpg",
      alt: "Advanced K9 Training",
      category: "Training",
      description: "Expert handlers conducting advanced K9 training sessions"
    },
    {
      id: 2,
      src: "/images/boardk9.jpg",
      alt: "Luxury Dog Boarding",
      category: "Boarding",
      description: "Premium boarding facilities with 24/7 care"
    },
    {
      id: 3,
      src: "/images/learnk9.webp",
      alt: "Professional Training Classes",
      category: "Learning",
      description: "Comprehensive training programs for all breeds"
    },
    {
      id: 4,
      src: "/images/dogk9consultant.jpg",
      alt: "Expert Consultation",
      category: "Consultation",
      description: "One-on-one behavioral assessment and consultation"
    },
    {
      id: 5,
      src: "/images/k9-5.jpg",
      alt: "Agility Training",
      category: "Training",
      description: "Specialized agility course training sessions"
    },
    {
      id: 6,
      src: "/images/k9-6.jpg",
      alt: "Puppy Training",
      category: "Training",
      description: "Early development and socialization programs"
    },
    {
      id: 7,
      src: "/images/k9-7.jpg",
      alt: "Guard Dog Training",
      category: "Protection",
      description: "Professional protection dog training"
    },
    {
      id: 8,
      src: "/images/k9-8.jpg",
      alt: "Search & Rescue",
      category: "Special Training",
      description: "Search and rescue training programs"
    },
    {
      id: 9,
      src: "/images/k9-9.jpg",
      alt: "Service Dog Training",
      category: "Service",
      description: "Specialized service dog training programs"
    },
    {
      id: 10,
      src: "/images/k9-10.jpg",
      alt: "Obedience Training",
      category: "Basic Training",
      description: "Core obedience training sessions"
    },
    {
      id: 11,
      src: "/images/k9-11.jpg",
      alt: "Behavior Modification",
      category: "Specialized",
      description: "Expert behavior modification programs"
    },
    {
      id: 12,
      src: "/images/k9-12.jpg",
      alt: "Police Dog Training",
      category: "Law Enforcement",
      description: "Professional police K9 unit training"
    },
    {
      id: 13,
      src: "/images/k9-13.jpg",
      alt: "Therapy Dog Training",
      category: "Therapy",
      description: "Certified therapy dog training programs"
    },
    {
      id: 14,
      src: "/images/k9-14.jpg",
      alt: "Tracking Training",
      category: "Specialized",
      description: "Advanced tracking and scent work"
    },
    {
      id: 15,
      src: "/images/k9-15.jpg",
      alt: "Competition Training",
      category: "Sport",
      description: "Competition and sport dog training"
    }
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <section className="gallery-section">
        <div className="gallery-container">
          <div className="gallery-header">
            <h1>Our Gallery</h1>
            <p>Excellence in K9 Training and Care</p>
          </div>

          <div className="gallery-masonry">
            {galleryImages.map((image, index) => (
              <div 
                key={image.id} 
                className={`gallery-item ${index % 2 === 0 ? 'tall' : ''}`}
                onClick={() => handleImageClick(image)}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="image-wrapper">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="image-overlay">
                    <span className="image-category">{image.category}</span>
                    <h3 className="image-title">{image.alt}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {selectedImage && (
            <div className="modal-overlay" onClick={handleCloseModal}>
              <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={handleCloseModal}>×</button>
                <div className="modal-image-container">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    fill
                    style={{ objectFit: 'contain' }}
                    sizes="(max-width: 1200px) 100vw, 1200px"
                  />
                </div>
                <div className="modal-info">
                  <h3>{selectedImage.alt}</h3>
                  <span className="modal-category">{selectedImage.category}</span>
                  <p>{selectedImage.description}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Gallery;