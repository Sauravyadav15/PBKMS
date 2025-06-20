import React from 'react';
import { CheckCircle, Users, Shield, Briefcase, Heart, Scale } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import farmWorkersImage from '../assets/farm_workers_group.jpg';
import womenEmpowermentImage from '../assets/women_farmers_empowerment.jpg';
import tradeUnionImage from '../assets/trade_union_march.jpg';
import './OurWork.css';

const OurWork = () => {
  const workAreas = [
    {
      icon: Briefcase,
      title: 'NREGA Advocacy',
      description: 'Ensuring proper implementation of the National Rural Employment Guarantee Act',
      image: farmWorkersImage,
      achievements: [
        'Submitted demand charters across 12 districts',
        'Advocated for 200 days guaranteed employment',
        'Fought for ₹600 minimum daily wage',
        'Ensured timely wage disbursement'
      ]
    },
    {
      icon: Heart,
      title: 'Women\'s Rights & Safety',
      description: 'Empowering women workers and ensuring their safety at work sites',
      image: womenEmpowermentImage,
      achievements: [
        'Over 60% women membership',
        'Creche facilities for working mothers',
        'Sexual harassment prevention measures',
        'Equal wage campaigns'
      ]
    },
    {
      icon: Scale,
      title: 'Legal Support & Advocacy',
      description: 'Providing legal assistance and policy advocacy for workers',
      image: tradeUnionImage,
      achievements: [
        'Job card registration support',
        'Grievance redressal mechanisms',
        'Policy advocacy at state level',
        'Legal aid for workers'
      ]
    }
  ];

  const demands = [
    {
      number: '1',
      title: 'Guaranteed Employment',
      description: '200 days of guaranteed wage employment for each individual in rural areas'
    },
    {
      number: '2',
      title: 'Minimum Wage',
      description: 'Fixation of minimum daily wage at ₹600 in line with 7th pay commission recommendations'
    },
    {
      number: '3',
      title: 'Timely Payment',
      description: 'Wage disbursement within a fortnight of work completion as per law'
    },
    {
      number: '4',
      title: 'Fair Wages',
      description: 'No worker should be paid less than stipulated wages under any pretext'
    },
    {
      number: '5',
      title: 'Unemployment Benefits',
      description: 'Proper disbursement of unemployment benefits when work is not provided'
    },
    {
      number: '6',
      title: 'Basic Facilities',
      description: 'Drinking water, shed, and creche facilities at all work sites'
    },
    {
      number: '7',
      title: 'Work Alternatives',
      description: 'Alternatives to earthwork should be made available, especially for women'
    },
    {
      number: '8',
      title: 'Job Card Rights',
      description: 'Every eligible applicant should receive a job card without arbitrary cancellation'
    },
    {
      number: '9',
      title: 'Safe Workplaces',
      description: 'Appropriate measures to prevent sexual harassment of women at work sites'
    }
  ];

  return (
    <div className="our-work-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Our Work
            </h1>
            <p className="hero-description">
              Fighting for agricultural workers' rights through advocacy, legal support, and community empowerment.
            </p>
          </div>
        </div>
      </section>

      {/* Key Work Areas */}
      <section className="work-areas-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">
              Key Work Areas
            </h2>
            <p className="section-description">
              Our comprehensive approach addresses multiple aspects of agricultural workers' lives and rights.
            </p>
          </div>
          
          <div className="work-areas-list">
            {workAreas.map((area, index) => (
              <div key={index} className={`work-area-item ${index % 2 === 1 ? 'even' : 'odd'}`}>
                <div className={`work-area-content ${index % 2 === 1 ? 'even-content' : ''}`}>
                  <div className="work-area-header">
                    <div className="work-area-icon">
                      <area.icon className="icon" />
                    </div>
                    <h3 className="work-area-title">{area.title}</h3>
                  </div>
                  <p className="work-area-description">{area.description}</p>
                  <div className="achievements-list">
                    {area.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="achievement-item">
                        <CheckCircle className="achievement-icon" />
                        <span className="achievement-text">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={`work-area-image ${index % 2 === 1 ? 'even-image' : ''}`}>
                  <img 
                    src={area.image} 
                    alt={area.title}
                    className="area-image"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Demands */}
      <section className="demands-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">
              Our Current Demands
            </h2>
            <p className="section-description">
              These demands have been placed before the Central and State Governments to ensure better 
              implementation of workers' rights and welfare programs.
            </p>
          </div>
          
          <div className="demands-grid">
            {demands.map((demand, index) => (
              <Card key={index} className="demand-card">
                <CardHeader>
                  <div className="demand-header">
                    <Badge variant="secondary" className="demand-number">
                      {demand.number}
                    </Badge>
                    <CardTitle className="demand-title">{demand.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="demand-description">
                    {demand.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statement */}
      <section className="impact-section">
        <div className="section-container">
          <div className="impact-content">
            <h2 className="impact-title">
              Our Impact
            </h2>
            <p className="impact-description">
              Through our persistent advocacy and grassroots organizing, we have successfully influenced 
              policy changes and improved the lives of thousands of agricultural workers across West Bengal.
            </p>
            <div className="impact-stats">
              <div className="impact-stat">
                <div className="stat-number">12</div>
                <div className="stat-label">Districts Covered</div>
              </div>
              <div className="impact-stat">
                <div className="stat-number">50,000+</div>
                <div className="stat-label">Active Members</div>
              </div>
              <div className="impact-stat">
                <div className="stat-number">30+</div>
                <div className="stat-label">Years of Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="section-container">
          <h2 className="cta-title">
            Support Our Work
          </h2>
          <p className="cta-description">
            Join us in our fight for agricultural workers' rights. Your support can help us continue 
            our advocacy and expand our reach to more communities.
          </p>
          <div className="cta-buttons">
            <button className="cta-button primary">
              Become a Member
            </button>
            <button className="cta-button secondary">
              Support Our Campaigns
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurWork;