'use client'
import React from 'react';
import { motion } from 'framer-motion';
import './youtube.css';

const YouTube = () => {
  return (
    <section className="youtube-section">
      <div className="youtube-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="section-title"
        >
          <h2>Watch Our Latest Training</h2>
          <p>Subscribe to our channel for weekly training tips and updates</p>
        </motion.div>

        <div className="video-wrapper">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="video-container"
          >
            <iframe
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=0&rel=0"
              title="K9 Training Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="youtube-iframe"
            ></iframe>
          </motion.div>
        </div>

        <div className="channel-info">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="subscribe-section"
          >
            <div className="channel-stats">
              <div className="stat-item">
                <span className="stat-number">100K+</span>
                <span className="stat-label">Subscribers</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Videos</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">1M+</span>
                <span className="stat-label">Views</span>
              </div>
            </div>
            <a 
              href="https://www.youtube.com/@YourChannelName" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="subscribe-button"
            >
              <svg className="youtube-icon" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              Subscribe Now
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="featured-playlists"
          >
            <h3>Featured Playlists</h3>
            <div className="playlist-grid">
              {playlists.map((playlist, index) => (
                <a
                  key={index}
                  href={playlist.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="playlist-card"
                >
                  <div className="playlist-thumbnail">
                    <img src={playlist.thumbnail} alt={playlist.title} />
                    <div className="playlist-count">{playlist.videoCount} Videos</div>
                  </div>
                  <h4>{playlist.title}</h4>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const playlists = [
  {
    title: "Basic Dog Training",
    thumbnail: "/images/playlist-basic.jpg",
    videoCount: "25",
    url: "https://www.youtube.com/playlist?list=YOUR_PLAYLIST_ID_1"
  },
  {
    title: "Advanced Commands",
    thumbnail: "/images/playlist-advanced.jpg",
    videoCount: "30",
    url: "https://www.youtube.com/playlist?list=YOUR_PLAYLIST_ID_2"
  },
  {
    title: "Behavior Solutions",
    thumbnail: "/images/playlist-behavior.jpg",
    videoCount: "20",
    url: "https://www.youtube.com/playlist?list=YOUR_PLAYLIST_ID_3"
  }
];

export default YouTube;