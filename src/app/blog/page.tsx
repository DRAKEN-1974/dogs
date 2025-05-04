'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './blog.css';
import Footer from '../components/footer';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  authorImage: string;
}

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Essential Dog Training Tips for Beginners",
      excerpt: "Start your journey in dog training with these fundamental tips and techniques...",
      content: "Starting your journey in dog training can be overwhelming, but with the right approach...",
      author: "John Smith",
      date: "2025-04-28",
      category: "Training",
      readTime: "5 min read",
      image: "/images/blog/training-basics.jpg",
      authorImage: "/images/authors/john-smith.jpg"
    },
    {
      id: 2,
      title: "Understanding Dog Body Language",
      excerpt: "Learn to read and interpret your dog's body language for better communication...",
      content: "Dogs communicate primarily through body language. Understanding these signals...",
      author: "Sarah Johnson",
      date: "2025-04-25",
      category: "Behavior",
      readTime: "7 min read",
      image: "/images/blog/dog-body-language.jpg",
      authorImage: "/images/authors/sarah-johnson.jpg"
    },
    // Add more blog posts here
  ];

  const categories = ['All', 'Training', 'Behavior', 'Health', 'Nutrition', 'Tips'];

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <>
      <main className="blog-main">
        <div className="blog-header">
          <h1>K9 Training Insights</h1>
          <p>Expert tips, training guides, and insights into dog behavior</p>
        </div>

        <div className="category-filter">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="featured-post">
          {blogPosts[0] && (
            <div className="featured-post-content">
              <div className="featured-image-wrapper">
                <Image
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
                <div className="featured-overlay">
                  <span className="featured-category">{blogPosts[0].category}</span>
                  <h2>{blogPosts[0].title}</h2>
                  <p>{blogPosts[0].excerpt}</p>
                  <div className="featured-meta">
                    <div className="author-info">
                      <Image
                        src={blogPosts[0].authorImage}
                        alt={blogPosts[0].author}
                        width={40}
                        height={40}
                        className="author-image"
                      />
                      <span>{blogPosts[0].author}</span>
                    </div>
                    <div className="post-info">
                      <span>{blogPosts[0].date}</span>
                      <span>•</span>
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="blog-grid">
          {filteredPosts.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="card-image-wrapper">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <span className="post-category">{post.category}</span>
              </div>
              <div className="card-content">
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="card-meta">
                  <div className="author-info">
                    <Image
                      src={post.authorImage}
                      alt={post.author}
                      width={32}
                      height={32}
                      className="author-image"
                    />
                    <span>{post.author}</span>
                  </div>
                  <div className="post-info">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <Link href={`/blog/${post.id}`} className="read-more">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Blog;