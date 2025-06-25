import React, { useState } from 'react';
import './GetInvolved.css';
import { UserPlus, Heart, Phone, Mail, MapPin, Users, Handshake, DollarSign } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';

const GetInvolved = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    interest: '',
    message: ''
  });

  const involvementOptions = [
    {
      icon: UserPlus,
      title: 'Become a Member',
      description: 'Join our union and be part of the collective struggle for workers\' rights.',
      benefits: [
        'Legal support and representation',
        'Access to welfare programs',
        'Participation in decision-making',
        'Collective bargaining power'
      ],
      action: 'Join Now'
    },
    {
      icon: Heart,
      title: 'Volunteer',
      description: 'Contribute your time and skills to support our campaigns and activities.',
      benefits: [
        'Community organizing training',
        'Skill development opportunities',
        'Networking with activists',
        'Making real impact'
      ],
      action: 'Volunteer'
    },
    {
      icon: DollarSign,
      title: 'Support Our Cause',
      description: 'Financial contributions help us expand our reach and impact.',
      benefits: [
        'Fund legal aid programs',
        'Support campaign activities',
        'Enable training programs',
        'Expand organizational reach'
      ],
      action: 'Donate'
    },
    {
      icon: Handshake,
      title: 'Partner with Us',
      description: 'Organizations and institutions can collaborate on shared goals.',
      benefits: [
        'Joint advocacy initiatives',
        'Resource sharing',
        'Policy development',
        'Research collaboration'
      ],
      action: 'Partner'
    }
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: '1 Shib Tala Road, Maheswarpur, Badu, Madhyamram, Kolkata- 700128 India'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'Pbkmswb@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 94332 64109'
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will contact you soon.');
  };

  return (
    <div className="get-involved-container">
      {/* Hero Section */}
      <section className="hero-section-involved">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Get Involved
            </h1>
            <p className="hero-description">
              Join our movement for agricultural workers' rights. Together, we can create lasting change for rural communities.
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="involvement-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">
              Ways to Support Our Mission
            </h2>
            <p className="section-description">
              There are many ways you can contribute to our fight for workers' rights and social justice.
            </p>
          </div>
          
          <div className="involvement-grid">
            {involvementOptions.map((option, index) => (
              <Card key={index} className="involvement-card">
                <CardHeader>
                  <div className="card-header">
                    <div className="card-icon">
                      <option.icon className="icon" />
                    </div>
                    <CardTitle className="card-title">{option.title}</CardTitle>
                  </div>
                  <CardDescription className="card-description">
                    {option.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="benefits-list">
                    {option.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="benefit-item">
                        <div className="benefit-bullet"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <Button className="action-button">
                    {option.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-section">
        <div className="section-container">
          <div className="contact-grid">
            {/* Form */}
            <div className="form-container">
              <h2 className="form-title">
                Contact Us
              </h2>
              <p className="form-description">
                Ready to join our movement? Fill out the form below and we'll get in touch with you.
              </p>
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      name="location"
                      type="text"
                      value={formData.location}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <Label htmlFor="interest">How would you like to get involved?</Label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    className="interest-select"
                  >
                    <option value="">Select an option</option>
                    <option value="member">Become a Member</option>
                    <option value="volunteer">Volunteer</option>
                    <option value="donate">Support Financially</option>
                    <option value="partner">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us more about your interest in our work..."
                  />
                </div>
                
                <Button type="submit" size="lg" className="submit-button">
                  Send Message
                </Button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="info-container">
              <h3 className="info-title">
                Contact Information
              </h3>
              
              <div className="contact-info-list">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-info-item">
                    <div className="contact-icon">
                      <info.icon className="icon" />
                    </div>
                    <div>
                      <h4 className="contact-info-title">{info.title}</h4>
                      <p className="contact-info-detail">{info.details}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="office-hours">
                <h4 className="hours-title">
                  Office Hours
                </h4>
                <div className="hours-list">
                  <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</p>
                  <p><strong>Saturday:</strong> 9:00 AM - 2:00 PM</p>
                  <p><strong>Sunday:</strong> Closed</p>
                </div>
              </div>
              
              <div className="emergency-contact">
                <h4 className="emergency-title">
                  Emergency Contact
                </h4>
                <p className="emergency-description">
                  For urgent matters related to workers' rights violations or legal emergencies:
                </p>
                <p className="emergency-number">+91 XXX XXX XXXX</p>
                <p className="emergency-availability">Available 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="section-container">
          <h2 className="cta-title">
            Together We Are Stronger
          </h2>
          <p className="cta-description">
            Every voice matters in our fight for workers' rights. Join thousands of agricultural workers 
            who have already taken a stand for dignity, fair wages, and better working conditions.
          </p>
          <div className="cta-buttons">
            <Button variant="secondary" size="lg" className="cta-button join-button">
              <Users className="button-icon" />
              Join Our Community
            </Button>
            <Button variant="outline" size="lg" className="cta-button support-button">
              <Heart className="button-icon" />
              Support Our Cause
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;