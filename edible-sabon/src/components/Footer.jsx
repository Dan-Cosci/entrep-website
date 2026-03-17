import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

import './Footer.css'
import Icon from '../assets/images/icon.png'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: 'Home', href: '#' },
    { label: 'About Us', href: '#' },
    { label: 'Menu', href: '#' },
    { label: 'Contact', href: '#' },
    { label: 'Preorder', href: '#' }
  ]

  const socialLinks = [
    { icon: <FaFacebook />, label: 'Facebook', href: '#' },
    { icon: <FaInstagram />, label: 'Instagram', href: '#' },
    { icon: <FaTwitter />, label: 'Twitter', href: '#' }
  ]

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Brand Section */}
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={Icon} alt="adobites icon" height={50}/>
            <h2>Adobites</h2>
          </div>
          <p className="footer-description">
            Authentic Filipino flavors in every bite-sized delight. 
            Bringing the taste of home to your table.
          </p>
          <div className="footer-social">
            {socialLinks.map((social) => (
              <a 
                key={social.label} 
                href={social.href} 
                className="social-link"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <ul>
            <li>
              <FaPhone className="contact-icon" />
              <span>(123) 456-7890</span>
            </li>
            <li>
              <FaEnvelope className="contact-icon" />
              <span>hello@adobites.com</span>
            </li>
            <li>
              <FaMapMarkerAlt className="contact-icon" />
              <span>123 Food Street, Manila, Philippines</span>
            </li>
            <li>
              <FaClock className="contact-icon" />
              <span>Mon-Sat: 9AM - 8PM</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-newsletter">
          <h3>Stay Updated</h3>
          <p>Subscribe to our newsletter for updates and special offers.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email"
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-button">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="footer-bottom">
        <p>&copy; {currentYear} Adobites. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
