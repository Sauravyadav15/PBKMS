import React from 'react';
import { Calendar, MapPin, Users, ArrowRight, Scale } from 'lucide-react';
import './Campaigns.css';
import mnregaImage from '/images/mnregaC.jpg';

const Campaigns = () => {
  return (
    <div className="campaigns-container">
      <div className="campaigns-content">
        {/* Header */}
        <div className="campaigns-header">
          <h1 className="campaigns-title">
            Our Campaigns & Initiatives
          </h1>
          <p className="campaigns-subtitle">
            Fighting for workers' rights through organized campaigns, legal advocacy, 
            and grassroots mobilization across West Bengal.
          </p>
        </div>

        {/* Featured Campaign - MNREGA Court Case */}
        <div className="featured-campaign">
          <div className="featured-campaign-grid">
            <div className="featured-campaign-content">
              <div className="campaign-badge">
                <span className="badge-text">Landmark Victory</span>
              </div>
              <h2 className="featured-campaign-title">
                MNREGA Restoration in Kolkata
              </h2>
              <p className="featured-campaign-description">
                PBKMS successfully fought a landmark court case that resulted in the restoration 
                of MNREGA implementation in Kolkata. This victory ensures employment rights for 
                thousands of workers and sets a precedent for similar cases across the country.
              </p>
              <div className="campaign-features">
                <div className="feature-item">
                  <Scale size={20} className="feature-icon" />
                  <span>Legal victory in High Court</span>
                </div>
                <div className="feature-item">
                  <Users size={20} className="feature-icon" />
                  <span>Thousands of workers benefited</span>
                </div>
                <div className="feature-item">
                  <MapPin size={20} className="feature-icon" />
                  <span>Kolkata and surrounding areas</span>
                </div>
              </div>
              <button className="campaign-button">
                Read Full Case Details
                <ArrowRight size={20} className="button-icon" />
              </button>
            </div>
            <div className="featured-campaign-image">
              <img 
                src={mnregaImage} 
                alt="MNREGA Court Case Victory" 
                className="campaign-image"
              />
            </div>
          </div>
        </div>

        {/* Ongoing Campaigns */}
        <div className="ongoing-campaigns">
          <h2 className="section-title">Ongoing Campaigns</h2>
          <div className="campaigns-grid">
            <div className="campaign-card">
              <div className="campaign-icon-container">
                <Users size={24} className="campaign-icon" />
              </div>
              <h3 className="campaign-card-title">MGNREGA Implementation</h3>
              <p className="campaign-card-description">
                Advocating for 200 days of guaranteed wage employment and ₹600 minimum daily wage 
                under the MGNREGA scheme.
              </p>
              <div className="campaign-location">Active across 14 districts</div>
            </div>

            <div className="campaign-card">
              <div className="campaign-icon-container">
                <Scale size={24} className="campaign-icon" />
              </div>
              <h3 className="campaign-card-title">Anti-Farm Laws Campaign</h3>
              <p className="campaign-card-description">
                Fighting against anti-people farm legislation and supporting farmers' protests 
                for fair agricultural policies.
              </p>
              <div className="campaign-location">Nationwide solidarity</div>
            </div>

            <div className="campaign-card">
              <div className="campaign-icon-container">
                <Users size={24} className="campaign-icon" />
              </div>
              <h3 className="campaign-card-title">Women Workers' Rights</h3>
              <p className="campaign-card-description">
                Organizing women through Shramajivee Mahila Samity (SMS) for equal wages 
                and workplace safety.
              </p>
              <div className="campaign-location">50%+ women membership</div>
            </div>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="recent-activities">
          <h2 className="section-title">Recent Activities</h2>
          <div className="activities-list">
            <div className="activity-item">
              <div className="activity-content">
                <div className="activity-icon-container">
                  <Calendar size={20} className="activity-icon" />
                </div>
                <div>
                  <h3 className="activity-title">
                    International Workers' Day Commemoration
                  </h3>
                  <p className="activity-description">
                    PBKMS and SMS marked May Day 2022 with rallies, marches, and flag hoisting 
                    across 14 districts of West Bengal, renewing pledges of solidarity with 
                    the global working class struggle.
                  </p>
                  <div className="activity-date">May 1, 2022</div>
                </div>
              </div>
            </div>

            <div className="activity-item">
              <div className="activity-content">
                <div className="activity-icon-container">
                  <MapPin size={20} className="activity-icon" />
                </div>
                <div>
                  <h3 className="activity-title">
                    Kultali BDO Deputation
                  </h3>
                  <p className="activity-description">
                    Members met with the Block Development Officer of Kultali to address 
                    issues in welfare scheme implementation including PDS, MGNREGA, 
                    and social assistance programs.
                  </p>
                  <div className="activity-date">March 24, 2022</div>
                </div>
              </div>
            </div>

            <div className="activity-item">
              <div className="activity-content">
                <div className="activity-icon-container">
                  <Users size={20} className="activity-icon" />
                </div>
                <div>
                  <h3 className="activity-title">
                    Nationwide Strike Participation
                  </h3>
                  <p className="activity-description">
                    Participated in the two-day nationwide strike called by central trade unions 
                    and farmer organizations to protest anti-working class policies and 
                    farm legislation.
                  </p>
                  <div className="activity-date">March 2022</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="campaign-cta">
          <h2 className="cta-title">Join Our Campaigns</h2>
          <p className="cta-description">
            Be part of the movement for workers' rights and social justice. 
            Your support can make a difference in the lives of thousands of agricultural workers.
          </p>
          <div className="cta-buttons">
            <button className="primary-button">
              Volunteer With Us
            </button>
            <button className="secondary-button">
              Support Our Cause
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campaigns;