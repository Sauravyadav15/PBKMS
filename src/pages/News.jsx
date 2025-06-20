import React from 'react';
import './News.css';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: 'PBKMS and SMS observe the 16th NREGA Diwas across West Bengal',
      excerpt: 'Paschim Banga Khet Majoor Samity (PBKMS) and Shramajivee Mahila Samity (SMS) marked the 16th anniversary of the implementation of the public works programme which came into force on 2nd February 2006.',
      date: '2024-02-02',
      category: 'NREGA',
      featured: true
    },
    {
      id: 2,
      title: 'PBKMS and SMS commemorate International Workers\' Day',
      excerpt: 'We renewed our pledges on May Day to extend our complete solidarity with the global struggle of the working class. Field areas across 14 districts of West Bengal commemorated the historic day.',
      date: '2024-05-01',
      category: 'Workers Rights',
      featured: true
    },
    {
      id: 3,
      title: 'Demand Charter Submitted to Block Development Officers',
      excerpt: 'Deputations and demand charters have been submitted across 12 districts in West Bengal with senior activists taking a lead role in engaging with the bureaucracy.',
      date: '2024-01-15',
      category: 'Advocacy',
      featured: false
    },
    {
      id: 4,
      title: 'Women Workers\' Safety Campaign Launched',
      excerpt: 'PBKMS launches comprehensive campaign to ensure safety measures and prevent sexual harassment of women at work sites across rural West Bengal.',
      date: '2024-03-08',
      category: 'Women Rights',
      featured: false
    },
    {
      id: 5,
      title: 'Minimum Wage Campaign Gains Momentum',
      excerpt: 'Our ongoing campaign for ₹600 minimum daily wage in line with 7th pay commission recommendations continues to gain support from workers across the state.',
      date: '2024-04-20',
      category: 'Fair Wages',
      featured: false
    },
    {
      id: 6,
      title: 'Tea Garden Workers\' Rights Advocacy',
      excerpt: 'PBKMS continues its work with tea garden workers in North Bengal, addressing issues of unpaid wages and poor working conditions in the tea industry.',
      date: '2024-06-10',
      category: 'Tea Workers',
      featured: false
    }
  ];

  const categories = ['All', 'NREGA', 'Workers Rights', 'Women Rights', 'Fair Wages', 'Advocacy', 'Tea Workers'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredNews = selectedCategory === 'All' 
    ? newsItems 
    : newsItems.filter(item => item.category === selectedCategory);

  const featuredNews = newsItems.filter(item => item.featured);
  const regularNews = filteredNews.filter(item => !item.featured);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="news-container">
      {/* Hero Section */}
      <section className="news-hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              News & Updates
            </h1>
            <p className="hero-description">
              Stay informed about our latest campaigns, achievements, and ongoing struggles for workers' rights.
            </p>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="featured-news-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">
              Featured Stories
            </h2>
            <p className="section-description">
              Our most important recent developments and campaign updates.
            </p>
          </div>
          
          <div className="featured-grid">
            {featuredNews.map((item) => (
              <Card key={item.id} className="featured-card">
                <CardHeader>
                  <div className="card-header-top">
                    <Badge variant="secondary">{item.category}</Badge>
                    <div className="date-info">
                      <Calendar className="date-icon" />
                      {formatDate(item.date)}
                    </div>
                  </div>
                  <CardTitle className="card-title">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="card-excerpt">
                    {item.excerpt}
                  </CardDescription>
                  <Button variant="outline" size="sm" className="read-more-btn">
                    Read More <ArrowRight className="arrow-icon" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="category-filter">
        <div className="section-container">
          <div className="filter-buttons">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="filter-btn"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* All News */}
      <section className="all-news-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">
              Latest Updates
            </h2>
            <p className="section-description">
              All our recent news, campaign updates, and organizational activities.
            </p>
          </div>
          
          <div className="news-grid">
            {regularNews.map((item) => (
              <Card key={item.id} className="news-card">
                <CardHeader>
                  <div className="card-header-top">
                    <Badge variant="outline">{item.category}</Badge>
                    <div className="date-info">
                      <Clock className="date-icon" />
                      {formatDate(item.date)}
                    </div>
                  </div>
                  <CardTitle className="card-title">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="card-excerpt">
                    {item.excerpt}
                  </CardDescription>
                  <Button variant="ghost" size="sm" className="read-more-link">
                    Read More <ArrowRight className="arrow-icon" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="newsletter-section">
        <div className="section-container">
          <div className="newsletter-content">
            <h2 className="newsletter-title">
              Stay Updated
            </h2>
            <p className="newsletter-description">
              Subscribe to our newsletter to receive the latest updates about our campaigns, 
              events, and achievements in the fight for workers' rights.
            </p>
            <div className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="email-input"
              />
              <Button variant="secondary" size="lg" className="subscribe-btn">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Media */}
      <section className="media-contact-section">
        <div className="section-container">
          <h2 className="section-title">
            Media Inquiries
          </h2>
          <p className="section-description">
            For press releases, interviews, or media coverage requests, please contact our media team.
          </p>
          <div className="action-buttons">
            <Button size="lg" className="media-contact-btn">
              Contact Media Team
            </Button>
            <Button variant="outline" size="lg" className="press-kit-btn">
              Download Press Kit
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;