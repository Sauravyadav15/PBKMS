import React from 'react';
import { Calendar, Users, Target, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import ruralWomenImage from '/images/about1.png';
import solidarityImage from '/images/about.jpg';
import './About.css';

const About = () => {
  const milestones = [
    {
      year: '1990',
      title: 'Foundation',
      description: 'PBKMS was established as an independent trade union to fight for agricultural workers\' rights in West Bengal.'
    },
    {
      year: '2006',
      title: 'NREGA Victory',
      description: 'Successfully advocated for the implementation of the National Rural Employment Guarantee Act.'
    },
    {
      year: '2015',
      title: 'Women\'s Empowerment',
      description: 'Launched comprehensive programs for women\'s safety and equal rights at work sites.'
    },
    {
      year: '2024',
      title: 'Continued Struggle',
      description: 'Ongoing campaigns for ₹600 minimum daily wage and better implementation of worker protection laws.'
    }
  ];

  const values = [
    {
      icon: Users,
      title: 'Solidarity',
      description: 'We believe in the power of collective action and unity among agricultural workers.'
    },
    {
      icon: Target,
      title: 'Justice',
      description: 'Fighting for fair wages, dignified work conditions, and equal rights for all workers.'
    },
    {
      icon: Award,
      title: 'Empowerment',
      description: 'Especially focused on empowering women workers who form the majority of our membership.'
    },
    {
      icon: Calendar,
      title: 'Persistence',
      description: 'Three decades of unwavering commitment to workers\' rights and social justice.'
    }
  ];

  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="about-hero-section">
        <div className="about-hero-container">
          <div className="about-hero-content">
            <h1 className="about-hero-title">
              About PBKMS
            </h1>
            <p className="about-hero-subtitle">
              Three decades of fighting for agricultural workers' rights, dignity, and social justice in West Bengal.
            </p>
          </div>
        </div>
      </section>

      {/* Organization Overview */}
      <section className="about-overview-section">
        <div className="about-overview-container">
          <div className="about-overview-grid">
            <div className="about-overview-text">
              <h2 className="about-section-title">
                Who We Are
              </h2>
              <p className="about-text">
                Paschimbanga Khetmajoor Samity (PBKMS) is an independent trade union in West Bengal, India, 
                that has been promoting the rights of agricultural workers to decent wages, work, and food 
                for over three decades.
              </p>
              <p className="about-text">
                More than half of our membership consists of women, reflecting our deep commitment to 
                gender equality and women's empowerment in agricultural work. We organize workers across 
                12 districts in West Bengal and have been involved in many trade union, human rights, 
                and development struggles.
              </p>
              <p className="about-text">
                Our work extends beyond traditional trade union activities to include advocacy for policy 
                changes, legal support for workers, and community development initiatives that address 
                the root causes of rural poverty and inequality.
              </p>
            </div>
            <div className="about-overview-image-wrapper">
              <img 
                src={ruralWomenImage} 
                alt="Rural women workers" 
                className="about-overview-image"
              />
              <div className="about-overview-overlay"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="about-values-section">
        <div className="about-values-container">
          <div className="about-values-header">
            <h2 className="about-section-title">
              Our Core Values
            </h2>
            <p className="about-section-description">
              These principles guide our work and define our commitment to agricultural workers across West Bengal.
            </p>
          </div>
          
          <div className="about-values-grid">
            {values.map((value, index) => (
              <Card key={index} className="about-value-card">
                <CardHeader>
                  <div className="about-value-icon-wrapper">
                    <value.icon className="about-value-icon" />
                  </div>
                  <CardTitle className="about-value-title">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="about-value-description">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="about-timeline-section">
        <div className="about-timeline-container">
          <div className="about-timeline-header">
            <h2 className="about-section-title">
              Our Journey
            </h2>
            <p className="about-section-description">
              Key milestones in our three-decade struggle for workers' rights and social justice.
            </p>
          </div>
          
          <div className="about-timeline-wrapper">
            <div className="about-timeline-line"></div>
            
            <div className="about-timeline-items">
              {milestones.map((milestone, index) => (
                <div key={index} className={`about-timeline-item ${index % 2 === 0 ? 'about-timeline-left' : 'about-timeline-right'}`}>
                  <div className="about-timeline-content">
                    <Card className="about-milestone-card">
                      <CardHeader>
                        <div className="about-milestone-header">
                          <CardTitle className="about-milestone-year">{milestone.year}</CardTitle>
                        </div>
                        <CardTitle className="about-milestone-title">{milestone.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="about-milestone-description">
                          {milestone.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="about-timeline-dot"></div>
                  
                  <div className="about-timeline-empty"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Message */}
      <section className="about-message-section">
        <div className="about-message-container">
          <div className="about-message-grid">
            <div className="about-message-image-wrapper">
              <img 
                src={solidarityImage} 
                alt="Workers solidarity" 
                className="about-message-image"
              />
              <div className="about-message-overlay"></div>
            </div>
            <div className="about-message-content">
              <h2 className="about-section-title">
                Our Commitment
              </h2>
              <blockquote className="about-quote">
                "The global pandemic and the vulnerabilities of the migrant population in urban spaces have 
                highlighted the importance of our work. NREGA has been a lifesaver for rural communities, 
                and we continue to fight for its proper implementation."
              </blockquote>
              <p className="about-text">
                Despite witnessing unenthusiastic implementation of crucial programs, job cardholders being 
                denied work, and wages getting inordinately delayed, we remain committed to our struggle 
                for workers' rights.
              </p>
              <p className="about-text">
                Our deputations and demand charters have been submitted across 12 districts in West Bengal, 
                with senior activists taking a lead role in engaging with the bureaucracy and political leadership.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;