import React from 'react';
import './terms.css';

const Terms = () => {
  return (
    <div className="terms-container">
      <div className="terms-content">
        <h1 className="terms-main-title">Terms and Conditions</h1>
        
        <section className="terms-section">
          <h2>1. OVERVIEW</h2>
          <p>This Terms of Service Agreement  is entered into by and between Jorick Ultra Luxury Life Pvt. Ltd. (K9 School), registered address First Floor, Flat No. F7-12, Block F1, DDA Flats, Vasant Kunj, New Delhi, South Delhi, Delhi – 110023, India and you, and is made effective as of the date of your use of this website – https://www.k9school.in or any of K9 School services or the date of electronic acceptance of the Google forms.</p>
          {/* ... rest of Overview content ... */}
        </section>

        <section className="terms-section">
          <h2>2. ELIGIBILITY</h2>
          <p>This Site and the Services are available only to Users who can form legally binding contracts under applicable law.</p>
          {/* ... rest of Eligibility content ... */}
        </section>

        {/* Continue with all sections similarly */}
        
        <section className="terms-section">
          <h2>18. IMPORTANT TERMS & CONDITIONS – PLEASE READ</h2>
          
          <h3>Details of the facilities provided:</h3>
          <div className="facilities-section">
            <h4>Boarding Facility</h4>
            <ul>
              <li>The pet is boarded in individual kennels</li>
              <li>The kennel complex is air-conditioned and the kennels are soundproof</li>
              {/* ... other boarding facility points ... */}
            </ul>

            <h4>Board & Train Facility </h4>
            <ul>
              <li>K9 School now offers a B&T Facility, wherein the package would in addition to the facilities of Boarding</li>
              {/* ... other B&T facility points ... */}
            </ul>
          </div>

          {/* ... continue with other subsections ... */}
        </section>

        <section className="terms-section">
          <h2>19. CONTACT INFORMATION</h2>
          <div className="contact-info">
            <p>If you have any questions about this Agreement, please contact us by email or regular mail at the following address:</p>
            <address>
              K9 School<br />
              First Floor, Flat No. F7-12, Block F1, DDA Flats,<br />
              Vasant Kunj, New Delhi, South Delhi,<br />
              Delhi – 110023, India<br />
              Contact Number: 7814652240<br />
              Email: info@k9school.in
            </address>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Terms;
