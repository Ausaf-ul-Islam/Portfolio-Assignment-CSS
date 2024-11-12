import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import "../CSS/Contact.css"; // Import CSS file

const ContactSection = () => {
  return (
    <section id="contact">
      <div className="container">
        <h2>Get in Touch</h2>

        <div className="contact-grid">
          <div className="contact-form">
            <form action="https://formspree.io/f/{your-form-id}" method="POST">
              <div>
                <label>Name</label>
                <input type="text" name="name" required />
              </div>
              <div>
                <label>Email</label>
                <input type="email" name="email" required />
              </div>
              <div>
                <label>Message</label>
                <textarea name="message" required></textarea>
              </div>
              <button type="submit">Send Message</button>
            </form>
          </div>

          <div className="contact-info">
            <div className="contact-info-item">
              <FaPhone className="icon" />
              <div>
                <h4>Phone</h4>
                <p>+123 456 789</p>
              </div>
            </div>
            <div className="contact-info-item">
              <FaEnvelope className="icon" />
              <div>
                <h4>Email</h4>
                <p>info@example.com</p>
              </div>
            </div>
            <div className="contact-info-item">
              <FaMapMarkerAlt className="icon" />
              <div>
                <h4>Address</h4>
                <p>123 Main St, Anytown, PAK</p>
              </div>
            </div>

            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.5313906350534!2d67.19876541059422!3d24.845694277846896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3309a1285ed8b%3A0xf6996718975e5724!2s89%20Landhi%20Rd%2C%20Sector%2037%20B%20Landhi%20Town%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1731216132594!5m2!1sen!2s"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
