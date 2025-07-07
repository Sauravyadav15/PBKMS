import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Calendar, Award, Heart } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import "./Home.css";
// import heroImage from '../assets/hero_woman_farmer.jpg';
import farmWorkersImage from '../assets/farm_workers_group.jpg';
import womenEmpowermentImage from '../assets/women_farmers_empowerment.jpg';
import solidarityImage from '/images/about.jpg';
// import img1 from "../assets/bg_pbs.jpg";
// import img2 from "../assets/imgsix.webp";
// import img3 from "../assets/nature.webp";

const Home = () => {
  const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: solidarityImage,
      title: "Fighting for ",
      subtitle: "For over 30 years, PBKMS has been the voice of agricultural workers in West Bengal.",
    },
    {
      image:  farmWorkersImage,
      title: "Advocating for Fair Wages",
      subtitle: "We demand ₹600 minimum daily wage for all agricultural workers.",
    },
    {
      image: womenEmpowermentImage,
      title: "Empowering Women Workers",
      subtitle: "60% of our members are women fighting for equal rights.",
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 15000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="hero-slider">
      {/* Slides */}
      <div className="hero-slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="hero-slide">
            <div 
              className="hero-background" 
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="hero-overlay"></div>
            </div>
            
            <div className="hero-content">
              <h1 className="hero-title">
                {slide.title} {index === 0 && <span className="text-accent">Agricultural Workers' Rights</span>}
              </h1>
              <p className="hero-subtitle">{slide.subtitle}</p>
              <div className="hero-buttons">
                <Button asChild size="lg" className="primary-button-home">
                  <Link to="/about">
                    Read our story <ArrowRight className="button-icon" />
                  </Link>
                </Button>
                <Button asChild size="lg" className="outline-button">
                  <Link to="/get-involved">Join Our Movement</Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="hero-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`hero-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
  const stats = [
    { icon: Users, label: 'Active Members', value: '50,000+' },
    { icon: Calendar, label: 'Years of Service', value: '30+' },
    { icon: Award, label: 'Districts Covered', value: '12' },
    { icon: Heart, label: 'Women Members', value: '60%' },
  ];

  const workAreas = [
    {
      title: 'NREGA Advocacy',
      description: 'Ensuring proper implementation of the National Rural Employment Guarantee Act for agricultural workers.',
      image: farmWorkersImage,
    },
    {
      title: 'Women\'s Rights',
      description: 'Empowering women agricultural workers and ensuring their safety and equal rights at work sites.',
      image: womenEmpowermentImage,
    },
    {
      title: 'Fair Wages Campaign',
      description: 'Fighting for minimum wage of ₹600 per day and timely payment for all agricultural workers.',
      image: solidarityImage,
    },
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      {/* <section className="hero-section">
        <div 
          className="hero-background"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="hero-overlay"></div>
        </div>
        
        <div className="hero-content">
          <h1 className="hero-title">
            Fighting for <span className="hero-title-accent">Agricultural Workers' Rights</span>
          </h1>
          <p className="hero-subtitle">
            For over 30 years, PBKMS has been the voice of agricultural workers in West Bengal, 
            ensuring dignity, fair wages, and better working conditions for rural communities.
          </p>
          <div className="hero-buttons">
            <Button asChild size="lg" className="hero-primary-button">
              <Link to="/about">
                Learn Our Story <ArrowRight className="hero-button-icon" />
              </Link>
            </Button>
            <Button asChild size="lg" className="hero-outline-button">
              <Link to="/get-involved">Join Our Movement</Link>
            </Button>
          </div>
        </div>
      </section> */}
      <HeroSlider/>

      {/* Statistics Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="section-header">
            <h2 className="section-title">
              Our Impact in Numbers
            </h2>
            <p className="section-description">
              Four decades of relentless struggle for workers' rights has created lasting change across West Bengal.
            </p>
          </div>
          
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-icon-container">
                  <stat.icon className="stat-icon" />
                </div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label-home">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      

      {/* Mission Statement */}
      <section className="mission-section">
        <div className="mission-container">
          <div className="mission-content">
            <h2 className="section-title">
              Our Mission
            </h2>
            <p className="mission-text">
              Paschimbanga Khet Majoor Samity (PBKMS) is an independent trade union dedicated to promoting 
              the rights of agricultural workers to decent wages, work, and food. We believe in the power 
              of collective action to create lasting change for rural communities across West Bengal.
            </p>
            <div className="mission-quote">
              <blockquote className="quote-text">
                "More than half of our membership consists of women, reflecting our commitment to 
                gender equality and women's empowerment in agricultural work."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Work Areas */}
      <section className="work-section">
        <div className="work-container">
          <div className="section-header">
            <h2 className="section-title">
              Our Key Work Areas
            </h2>
            <p className="section-description">
              We focus on critical areas that directly impact the lives and livelihoods of agricultural workers.
            </p>
          </div>
          
          <div className="work-grid">
            {workAreas.map((area, index) => (
              <Card key={index} className="work-card">
                <div className="card-image-container">
                  <img 
                    src={area.image} 
                    alt={area.title}
                    className="card-image"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="card-title">{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="card-description">
                    {area.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="work-button-container">
            <Button asChild size="lg" className="work-secondary-button">
              <Link to="/our-work">
                Explore All Our Work <ArrowRight className="work-button-icon-home" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      {/* <section className="cta-section-home">
        <div className="cta-container">
          <h2 className="cta-title">
            Join the Movement for Workers' Rights
          </h2>
          <p className="cta-text">
            Your support can help us continue our fight for fair wages, better working conditions, 
            and dignity for agricultural workers across West Bengal.
          </p>
          <div className="cta-buttons">
            <Button asChild size="lg" className="cta-primary-button">
              <Link to="/get-involved">Become a Member</Link>
            </Button>
            <Button asChild size="lg" className="cta-outline-button">
              <Link to="/news">Latest News</Link>
            </Button>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Home;