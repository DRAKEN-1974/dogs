'use client';
import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import './last.css';

// Initialize Supabase client
const supabase = createClient(
  'https://pnjauvsmrirjjxddgapd.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBuamF1dnNtcmlyamp4ZGRnYXBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU4OTk2NDQsImV4cCI6MjA2MTQ3NTY0NH0.-ue8lx8dm4qmdwELNOS3VabHFnkHMw47kDGtDZKZXzM'
);

const LastSection = () => {
  const [showDetailedForm, setShowDetailedForm] = useState(false);
  const [quickFormData, setQuickFormData] = useState({
    owner_name: '',  // Changed to match Supabase column names
    email: '',
    phone: '',
    message: ''
  });

  const [detailedFormData, setDetailedFormData] = useState({
    owner_name: '',  // Changed to match Supabase column names
    email: '',
    phone: '',
    dog_name: '',   // Changed to match Supabase column names
    breed: '',
    age: '',
    start_date: '', // Changed to match Supabase column names
    end_date: '',   // Changed to match Supabase column names
    special_notes: '' // Changed to match Supabase column names
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleQuickFormChange = (e) => {
    const { name, value } = e.target;
    setQuickFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDetailedFormChange = (e) => {
    const { name, value } = e.target;
    setDetailedFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleQuickSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const { error } = await supabase
        .from('quick_inquiries')
        .insert([
          {
            owner_name: quickFormData.owner_name,
            email: quickFormData.email,
            phone: quickFormData.phone,
            message: quickFormData.message,
            created_at: new Date().toISOString()
          }
        ]);

      if (error) throw error;

      setSubmitStatus({
        type: 'success',
        message: 'Thank you! We will contact you soon.'
      });
      
      setQuickFormData({
        owner_name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'There was an error submitting your inquiry. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDetailedSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const { error } = await supabase
        .from('staycation_requests')
        .insert([{
          ...detailedFormData,
          created_at: new Date().toISOString()
        }]);

      if (error) throw error;

      setSubmitStatus({
        type: 'success',
        message: 'Your staycation request has been successfully submitted!'
      });
      
      setDetailedFormData({
        owner_name: '',
        email: '',
        phone: '',
        dog_name: '',
        breed: '',
        age: '',
        start_date: '',
        end_date: '',
        special_notes: ''
      });
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'There was an error submitting your request. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="last-section">
      <div className="last-container">
        <div className="last-content">
          <h1 className="last-title">Travelling out of town?</h1>
          <p className="last-subtitle">Leave your pet with us for a staycation!</p>
        </div>

        {/* Quick Inquiry Form */}
        <div className="quick-inquiry-box">
          <h3>Quick Inquiry</h3>
          <form onSubmit={handleQuickSubmit} className="quick-form">
            <div className="quick-form-row">
              <input
                type="text"
                name="owner_name"
                value={quickFormData.owner_name}
                onChange={handleQuickFormChange}
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                name="email"
                value={quickFormData.email}
                onChange={handleQuickFormChange}
                placeholder="Email"
                required
              />
            </div>
            <div className="quick-form-row">
              <input
                type="tel"
                name="phone"
                value={quickFormData.phone}
                onChange={handleQuickFormChange}
                placeholder="Phone Number"
                required
              />
            </div>
            <textarea
              name="message"
              value={quickFormData.message}
              onChange={handleQuickFormChange}
              placeholder="Brief message about your requirements"
              rows="3"
              required
            ></textarea>
            <button 
              type="submit" 
              className="quick-submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Quick Inquiry'}
            </button>
          </form>
          <div className="form-divider">
            <span>OR</span>
          </div>
          <button 
            className="show-detailed-btn"
            onClick={() => setShowDetailedForm(!showDetailedForm)}
          >
            {showDetailedForm ? 'Hide Detailed Form' : 'Fill Detailed Form'}
          </button>
        </div>

        {/* Detailed Form */}
        {showDetailedForm && (
          <form className="staycation-form" onSubmit={handleDetailedSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="owner_name">Your Name</label>
                <input
                  type="text"
                  id="owner_name"
                  name="owner_name"
                  value={detailedFormData.owner_name}
                  onChange={handleDetailedFormChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={detailedFormData.email}
                  onChange={handleDetailedFormChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={detailedFormData.phone}
                  onChange={handleDetailedFormChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="dog_name">Dog's Name</label>
                <input
                  type="text"
                  id="dog_name"
                  name="dog_name"
                  value={detailedFormData.dog_name}
                  onChange={handleDetailedFormChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="breed">Breed</label>
                <input
                  type="text"
                  id="breed"
                  name="breed"
                  value={detailedFormData.breed}
                  onChange={handleDetailedFormChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="age">Age</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={detailedFormData.age}
                  onChange={handleDetailedFormChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="start_date">Start Date</label>
                <input
                  type="date"
                  id="start_date"
                  name="start_date"
                  value={detailedFormData.start_date}
                  onChange={handleDetailedFormChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="end_date">End Date</label>
                <input
                  type="date"
                  id="end_date"
                  name="end_date"
                  value={detailedFormData.end_date}
                  onChange={handleDetailedFormChange}
                  required
                />
              </div>
            </div>

            <div className="form-group full-width">
              <label htmlFor="special_notes">Special Notes</label>
              <textarea
                id="special_notes"
                name="special_notes"
                value={detailedFormData.special_notes}
                onChange={handleDetailedFormChange}
                rows="4"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Request'}
            </button>
          </form>
        )}

        {submitStatus.message && (
          <div className={`status-message ${submitStatus.type}`}>
            {submitStatus.message}
          </div>
        )}
      </div>
    </section>
  );
};

export default LastSection;