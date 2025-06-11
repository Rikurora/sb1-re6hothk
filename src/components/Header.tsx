import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, Menu, X, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const navigation = [
    { 
      name: 'About Us', 
      href: '/about',
      dropdown: [
        { name: 'CEO\'s Foreword', href: '/about#ceo-forward' },
        { name: 'Board of Commissioners', href: '/about#board' },
        { name: 'Councils', href: '/about#councils' },
        { name: 'Legislation', href: '/about#legislation' },
        { name: 'Organisational Structure', href: '/about#structure' }
      ]
    },
    { 
      name: 'Research', 
      href: '/research',
      dropdown: [
        { name: 'Research Grants', href: '/research#grants' },
        { name: 'Open Calls', href: '/research#calls' },
        { name: 'Research Permits', href: '/research#permits' },
        { name: 'Institute Registration', href: '/research#registration' },
        { name: 'Research Symposium', href: '/research#symposium' }
      ]
    },
    { 
      name: 'Science', 
      href: '/science',
      dropdown: [
        { name: 'National Science Fair', href: '/science#fair' },
        { name: 'STEM Gender Programmes', href: '/science#stem' },
        { name: 'Science Week', href: '/science#science-week' },
        { name: 'Space Week', href: '/science#space' },
        { name: 'National Science Quiz', href: '/science#quiz' },
        { name: 'Science Olympiads', href: '/science#olympiads' }
      ]
    },
    { 
      name: 'Technology', 
      href: '/technology',
      dropdown: [
        { name: 'National AI Working Group', href: '/technology#ai' },
        { name: 'Biotechnology Labs', href: '/technology#biotech' },
        { name: 'Biosafety', href: '/technology#biosafety' },
        { name: 'Space Science and Technology (SST)', href: '/technology#sst' },
        { name: 'Tech Resources', href: '/technology#resources' }
      ]
    },
    { 
      name: 'Innovation', 
      href: '/innovation',
      dropdown: [
        { name: 'BOOSTUP Challenge', href: '/innovation#boostup' },
        { name: 'Scale-Up Namibia', href: '/innovation#scaleup' },
        { name: 'National Innovation Programme', href: '/innovation#national-programme' },
        { name: 'Southern Africa Innovation Collective (SAIC)', href: '/innovation#saic' },
        { name: 'Innovation Agencies in Africa Network (IAA)', href: '/innovation#iaa' },
        { name: 'Innovators Hub', href: '/innovation#innovators-hub' }
      ]
    },
    { 
      name: 'Councils', 
      href: '/councils',
      dropdown: [
        { name: 'Biosafety Council', href: '/councils/biosafety' },
        { name: 'National Space Science Council', href: '/councils/space-science' },
        { name: 'National Indigenous Knowledge System (IKS)', href: '/councils/iks' }
      ]
    },
    { 
      name: 'Resources & Opportunities', 
      href: '/resources',
      dropdown: [
        { name: 'Resources', href: '/resources' },
        { name: 'Procurement', href: '/procurement' },
        { name: 'Vacancies', href: '/vacancies' }
      ]
    },
    { 
      name: 'Connect', 
      href: '/news',
      dropdown: [
        { name: 'News & Events', href: '/news' },
        { name: 'Contact', href: '/contact' }
      ]
    }
  ];

  const handleDropdownToggle = (navName: string) => {
    setActiveDropdown(activeDropdown === navName ? null : navName);
  };

  const handleMainNavClick = () => {
    setActiveDropdown(null);
    setIsMenuOpen(false);
  };

  const handleDropdownItemClick = () => {
    setActiveDropdown(null);
    setIsMenuOpen(false);
  };

  const handleAnchorNavigation = (href: string, event: React.MouseEvent) => {
    event.preventDefault();
    
    // Parse the href to get the path and hash
    const [path, hash] = href.split('#');
    
    // If we're already on the target page, just scroll to the section
    if (location.pathname === path && hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // Navigate to the page first, then scroll to the section
      navigate(href);
      
      // Use setTimeout to ensure the page has loaded before scrolling
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    }
    
    handleDropdownItemClick();
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Banner */}
      <div className="bg-ncrst-blue text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div>
              Republic of Namibia
            </div>
            <div className="flex space-x-4">
              <button className="hover:text-ncrst-gold transition-colors">EN</button>
              <span>|</span>
              <button className="hover:text-ncrst-gold transition-colors">Local</button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo - Now links to home */}
          <Link to="/" className="flex items-center space-x-3" onClick={handleMainNavClick}>
            <img 
              src="/NCRST.png" 
              alt="NCRST Logo" 
              className="w-12 h-12 object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-ncrst-grey leading-heading">NCRST</h1>
              <p className="text-sm text-ncrst-grey-dark">National Commission on Research, Science & Technology</p>
            </div>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ncrst-blue focus:border-transparent"
                aria-label="Search site"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-ncrst-grey hover:bg-gray-100"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden lg:block border-t border-gray-200">
          <div className="flex space-x-8 py-4">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div>
                    <div className="flex items-center">
                      <Link
                        to={item.href}
                        onClick={handleMainNavClick}
                        className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                          location.pathname === item.href || location.pathname.startsWith(item.href + '/')
                            ? 'text-ncrst-blue bg-ncrst-gold/10'
                            : 'text-ncrst-grey hover:text-ncrst-blue hover:bg-gray-50'
                        }`}
                      >
                        {item.name}
                      </Link>
                      <button
                        onClick={() => handleDropdownToggle(item.name)}
                        className="ml-1 p-1 rounded-md hover:bg-gray-50"
                        aria-label={`Toggle ${item.name} dropdown`}
                      >
                        <ChevronDown size={16} className={`transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                      </button>
                    </div>
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-1 w-80 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50">
                        {item.dropdown.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-ncrst-grey hover:bg-gray-50 hover:text-ncrst-blue"
                            onClick={(e) => handleAnchorNavigation(subItem.href, e)}
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    onClick={handleMainNavClick}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      location.pathname === item.href || location.pathname.startsWith(item.href + '/')
                        ? 'text-ncrst-blue bg-ncrst-gold/10'
                        : 'text-ncrst-grey hover:text-ncrst-blue hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden border-t border-gray-200 py-4">
            {/* Mobile Search */}
            <div className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ncrst-blue focus:border-transparent"
                  aria-label="Search site"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            
            <div className="space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                      location.pathname === item.href || location.pathname.startsWith(item.href + '/')
                        ? 'text-ncrst-blue bg-ncrst-gold/10'
                        : 'text-ncrst-grey hover:text-ncrst-blue hover:bg-gray-50'
                    }`}
                    onClick={handleMainNavClick}
                  >
                    {item.name}
                  </Link>
                  {/* Mobile dropdown items */}
                  {item.dropdown && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-3 py-1 text-sm text-ncrst-grey-dark hover:text-ncrst-blue"
                          onClick={(e) => handleAnchorNavigation(subItem.href, e)}
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;