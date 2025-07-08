import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Users, FileText, Phone, Pickaxe, Earth, Video, ChevronDown, GalleryVertical, NotebookTabs, GalleryThumbnails, Hand, Handshake, LetterTextIcon, Mail, PickaxeIcon } from 'lucide-react';
import { Button } from './ui/button';
import "./Header.css";
import HLogo from '/images/epbkms.png';
import DonationModal from '../pages/dropdownPages/DonationModal'; // Adjust the import path as necessary

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // Desktop dropdown state
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(null); // Mobile dropdown state
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/PBKMS', icon: null },
    { name: 'About Us', href: '/PBKMS/about', icon: Users },
    {
      name: 'What We Do',
      href: '/PBKMS/our-work',
      icon: Pickaxe,
      children: [
        { name: 'Our Work', href: '/PBKMS/our-work', icon: PickaxeIcon },
        { name: 'Campaigns', href: '/PBKMS/our-work/campaigns', icon: Earth },

      ]
    },
    {
      name: 'Media',
      
      icon: Earth,
      children: [
        { name: 'News', href: '/PBKMS/media/news', icon: FileText },
        { name: 'Gallery', href: '/PBKMS/media/gallery', icon: GalleryThumbnails },
        { name: 'Blog', href: '/PBKMS/media/blogs', icon: NotebookTabs },
      ]
    },
    { name: 'Get Involved', href: '/PBKMS/get-involved', icon: Phone,
      children: [
        { name: 'Internship', href: '/PBKMS/get-involved/internship', icon: LetterTextIcon },
        { name: 'Partner', href: '/PBKMS/get-involved/partner', icon: Handshake },
        
      ]
     },
  ];

  return (
    <header className="header">
<div className="header-top">
  <div className="header-top-content">
    <a
      href="https://mail.google.com/mail/?view=cm&fs=1&to=Pbkmswb@gmail.com"
      className="header-contact email-link"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Mail className="header-contact-icon" /> Pbkmswb@gmail.com
    </a>
    <span className="header-contact">
      <Phone className="header-contact-icon" /> +91 94332 64109
    </span>
  </div>
</div>

      <div className="header-container">
        <div className="header-inner">
          {/* Logo and Organization Name */}
          <Link to="/PBKMS" className="logo-link">
            <div className='logo-circle'>
              <img src={HLogo} alt="PBKMS Logo" className="logo-image" />
            </div>
            <div className="logo-text">
              <h1 className="organization-name">PBKMS</h1>
              <p className="organization-fullname">Paschimbanga Khet Majoor Samity</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            {navigation.map((item) => (
              <div className="nav-item-wrapper" key={item.name}>
                {item.children ? (
  <div
    className="dropdown-parent"
    onMouseEnter={() => setOpenDropdown(item.name)}
    onMouseLeave={() => setOpenDropdown(null)}
  >
    <div className="nav-link-with-dropdown">
      <div className="nav-link not-clickable">
        {item.icon && <item.icon className="nav-icon" />}
        <span>{item.name}</span>
      </div>
      <div className="dropdown-toggle">
        <ChevronDown
          className={`dropdown-icon ${openDropdown === item.name ? 'rotate' : ''}`}
          size={16}
        />
      </div>
    </div>

    {openDropdown === item.name && (
      <div className="dropdown-menu">
        {item.children.map((child) => (
          <NavLink
            key={child.name}
            to={child.href}
            className="dropdown-link"
            onClick={() => setOpenDropdown(null)}
          >
            {child.icon && <child.icon className="nav-icon" />}
            {child.name}
          </NavLink>
        ))}
      </div>
    )}
  </div>
) : (
  <NavLink
    to={item.href}
    end={item.href === '/PBKMS'}
    className={({ isActive }) =>
      isActive ? "nav-link active" : "nav-link"
    }
  >
    {item.icon && <item.icon className="nav-icon" />}
    <span>{item.name}</span>
  </NavLink>
)}

              </div>
            ))}

            {/* CTA Button */}
            <button 
        onClick={() => setIsOpen(true)}
        className="cta-button" // Add your own styles
      >
        Donate
      </button>

      {/* Include the modal */}
      <DonationModal 
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="mobile-menu-button">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="menu-toggle-button"
            >
              {isMenuOpen ? <X className="menu-icon" /> : <Menu className="menu-icon" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
  <div className="mobile-nav-container">
    <nav className="mobile-nav">
      {navigation.map((item) => (
        <div key={item.name}>
          {item.children ? (
            <div className="mobile-nav-split-item">
              <div className="mobile-nav-split-wrapper">
                <div
                  className="mobile-nav-split-text not-clickable"
                  onClick={() =>
                    setIsMobileDropdownOpen(
                      isMobileDropdownOpen === item.name ? null : item.name
                    )
                  }
                >
                  {item.icon && <item.icon className="mobile-nav-icon" />}
                  {item.name}
                </div>
                <button
                  className="mobile-nav-split-toggle"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsMobileDropdownOpen(
                      isMobileDropdownOpen === item.name ? null : item.name
                    );
                  }}
                  aria-label="Toggle dropdown"
                >
                  <ChevronDown
                    className={`mobile-dropdown-icon ${
                      isMobileDropdownOpen === item.name ? "rotate" : ""
                    }`}
                    size={16}
                  />
                </button>
              </div>

              {isMobileDropdownOpen === item.name && (
                <div className="mobile-submenu">
                  {item.children.map((child) => (
                    <Link
                      key={child.name}
                      to={child.href}
                      className="mobile-nav-link child-link"
                      onClick={() => {
                        setIsMobileDropdownOpen(null);
                        setIsMenuOpen(false);
                      }}
                    >
                      {child.icon && <child.icon className="mobile-nav-icon" />}
                      {child.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link
              to={item.href}
              className="mobile-nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.icon && <item.icon className="mobile-nav-icon" />}
              {item.name}
            </Link>
          )}
        </div>
      ))}

      {/* CTA Button */}
            <button 
        onClick={() => setIsOpen(true)}
        className="cta-button" // Add your own styles
      >
        Donate
      </button>

      {/* Include the modal */}
      <DonationModal 
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </nav>
  </div>
)}

      </div>
    </header>
  );
};

export default Header;
