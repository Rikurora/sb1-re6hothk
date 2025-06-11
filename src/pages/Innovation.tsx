import React from 'react';
import { Rocket, Target, Users, Award, TrendingUp, Building, Lightbulb, DollarSign, Download, FileText, Star, Globe } from 'lucide-react';

const Innovation: React.FC = () => {
  const challenges = [
    {
      name: "BOOSTUP Challenge",
      description: "Namibia's flagship innovation competition supporting early-stage startups and entrepreneurs",
      prize: "N$500,000",
      participants: "200+ applications",
      categories: ["Technology", "Agriculture", "Health", "Environment"],
      status: "Applications Open",
      deadline: "March 31, 2025"
    },
    {
      name: "Scale-Up Namibia",
      description: "Growth acceleration program for established startups ready to scale their operations",
      prize: "N$1,000,000",
      participants: "50+ companies",
      categories: ["Fintech", "Agritech", "Healthtech", "Cleantech"],
      status: "Applications Open",
      deadline: "April 15, 2025"
    }
  ];

  const innovators = [
    {
      name: "Dr. Sarah Nakamhela",
      company: "AgriTech Solutions",
      sector: "Agriculture Technology",
      innovation: "Smart irrigation system using IoT sensors and AI for water optimization",
      impact: "30% water savings, 25% yield increase across 500+ farms",
      funding: "N$350,000 from BOOSTUP 2023",
      image: "https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Michael Itenge",
      company: "HealthConnect Namibia",
      sector: "Healthcare Technology",
      innovation: "Telemedicine platform connecting rural communities with healthcare professionals",
      impact: "10,000+ patients served, 50+ healthcare workers trained",
      funding: "N$200,000 from Scale-Up Namibia",
      image: "https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Anna Shikongo",
      company: "EcoEnergy Solutions",
      sector: "Renewable Energy",
      innovation: "Solar-powered water purification systems for off-grid communities",
      impact: "200+ households with clean water access, 15 jobs created",
      funding: "N$450,000 combined funding",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "James Mwandemele",
      company: "FinTech Namibia",
      sector: "Financial Technology",
      innovation: "Mobile payment platform for rural and underbanked populations",
      impact: "50,000+ users, 300+ merchant partners",
      funding: "N$280,000 from Innovation Fund",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Elizabeth Nghipondoka",
      company: "EduTech Innovations",
      sector: "Education Technology",
      innovation: "Digital learning platform with offline capabilities for remote schools",
      impact: "25 schools, 2,000+ students benefiting from digital education",
      funding: "N$180,000 from BOOSTUP 2024",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Peter Shipanga",
      company: "Mining Tech Solutions",
      sector: "Mining Technology",
      innovation: "AI-powered mineral exploration and safety monitoring systems",
      impact: "40% improvement in exploration accuracy, enhanced worker safety",
      funding: "N$520,000 from Industry Partnership",
      image: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const ecosystemPartners = [
    {
      name: "Startup Incubators",
      count: "8",
      description: "Supporting early-stage entrepreneurs with mentorship and resources",
      examples: ["FabLab Namibia", "Innovation Village", "Tech Hub"]
    },
    {
      name: "Venture Capital",
      count: "5",
      description: "Investment funds focused on Namibian startups and growth companies",
      examples: ["Namibia Investment Fund", "Regional VC Partners", "Impact Investors"]
    },
    {
      name: "Corporate Partners",
      count: "15",
      description: "Large corporations supporting innovation through partnerships",
      examples: ["Banking Sector", "Mining Companies", "Telecommunications"]
    },
    {
      name: "Universities",
      count: "4",
      description: "Academic institutions driving research and student entrepreneurship",
      examples: ["UNAM", "NUST", "IUM", "University of Namibia"]
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="bg-ncrst-green text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-heading">Innovation & Entrepreneurship</h1>
            <p className="text-xl max-w-3xl mx-auto leading-body opacity-90">
              Fostering a vibrant innovation ecosystem that transforms ideas into impactful businesses driving Namibia's economic growth.
            </p>
          </div>
        </div>
      </section>

      {/* Innovation Challenges */}
      <section id="boostup" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">Innovation Challenges</h2>
            <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body">
              Competitive programs designed to identify, support, and scale innovative solutions to Namibian challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-ncrst-green hover:shadow-xl transition-all">
                <div className="bg-gradient-to-r from-ncrst-green to-ncrst-blue text-white p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <Rocket size={32} />
                    <h3 className="text-2xl font-bold leading-heading">{challenge.name}</h3>
                  </div>
                  <p className="opacity-90 leading-body">{challenge.description}</p>
                </div>
                
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-ncrst-green">{challenge.prize}</div>
                      <div className="text-sm text-ncrst-grey-dark">Total Prize Pool</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-ncrst-blue">{challenge.participants}</div>
                      <div className="text-sm text-ncrst-grey-dark">Expected Applications</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-ncrst-grey mb-2">Focus Areas</h4>
                      <div className="flex flex-wrap gap-2">
                        {challenge.categories.map((category, idx) => (
                          <span key={idx} className="bg-ncrst-grey-light text-ncrst-grey px-3 py-1 rounded-full text-sm">
                            {category}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          challenge.status === 'Applications Open' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {challenge.status}
                        </span>
                      </div>
                      <div className="text-sm text-ncrst-grey-dark">
                        Deadline: {challenge.deadline}
                      </div>
                    </div>
                  </div>

                  <button className="w-full mt-6 bg-ncrst-green text-white py-3 rounded-lg font-semibold hover:bg-ncrst-green/90 transition-colors">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scale-Up Namibia */}
      <section id="scaleup" className="py-16 bg-ncrst-grey-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">Scale-Up Namibia</h2>
            <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body">
              Growth acceleration program for established startups ready to scale their operations.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-ncrst-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="text-ncrst-blue" size={32} />
                </div>
                <h3 className="text-lg font-bold text-ncrst-grey mb-3 leading-heading">Growth Support</h3>
                <p className="text-sm text-ncrst-grey-dark">Mentorship and resources for scaling operations</p>
              </div>
              <div className="text-center">
                <div className="bg-ncrst-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="text-ncrst-green" size={32} />
                </div>
                <h3 className="text-lg font-bold text-ncrst-grey mb-3 leading-heading">Investment Ready</h3>
                <p className="text-sm text-ncrst-grey-dark">Preparation for larger investment rounds</p>
              </div>
              <div className="text-center">
                <div className="bg-ncrst-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="text-ncrst-grey" size={32} />
                </div>
                <h3 className="text-lg font-bold text-ncrst-grey mb-3 leading-heading">Market Expansion</h3>
                <p className="text-sm text-ncrst-grey-dark">Support for regional and international expansion</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* National Innovation Programme */}
      <section id="national-programme" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">National Innovation Programme</h2>
            <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body">
              Comprehensive framework for promoting innovation across all sectors of the Namibian economy.
            </p>
          </div>

          <div className="bg-ncrst-blue text-white rounded-xl p-8 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 leading-heading">Programme Objectives</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-ncrst-gold rounded-full mt-2"></div>
                    <span>Foster innovation culture across sectors</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-ncrst-gold rounded-full mt-2"></div>
                    <span>Support technology transfer and commercialization</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-ncrst-gold rounded-full mt-2"></div>
                    <span>Build innovation capacity and skills</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-ncrst-gold rounded-full mt-2"></div>
                    <span>Create enabling policy environment</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <div className="bg-white/10 p-6 rounded-xl">
                  <Lightbulb size={64} className="text-ncrst-gold mx-auto mb-4" />
                  <h4 className="text-xl font-bold mb-2">Innovation Funding Guide</h4>
                  <p className="text-sm opacity-90 mb-4">Comprehensive guide to funding opportunities</p>
                  <button className="bg-ncrst-gold text-ncrst-grey px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors flex items-center space-x-2 mx-auto">
                    <Download size={16} />
                    <span>Download PDF</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Southern Africa Innovation Collective */}
      <section id="saic" className="py-16 bg-ncrst-grey-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">Southern Africa Innovation Collective (SAIC)</h2>
            <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body">
              Regional collaboration platform connecting innovators across Southern Africa.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-ncrst-grey mb-4 leading-heading">SAIC Initiatives</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-ncrst-green rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-ncrst-grey">Cross-Border Innovation</h4>
                      <p className="text-sm text-ncrst-grey-dark">Facilitating innovation partnerships across SADC countries</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-ncrst-green rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-ncrst-grey">Knowledge Sharing</h4>
                      <p className="text-sm text-ncrst-grey-dark">Platform for sharing best practices and resources</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-ncrst-green rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-ncrst-grey">Joint Programs</h4>
                      <p className="text-sm text-ncrst-grey-dark">Collaborative innovation challenges and funding opportunities</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-ncrst-grey mb-4 leading-heading">Member Countries</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="bg-ncrst-grey-light p-2 rounded text-center">Namibia</div>
                  <div className="bg-ncrst-grey-light p-2 rounded text-center">South Africa</div>
                  <div className="bg-ncrst-grey-light p-2 rounded text-center">Botswana</div>
                  <div className="bg-ncrst-grey-light p-2 rounded text-center">Zambia</div>
                  <div className="bg-ncrst-grey-light p-2 rounded text-center">Zimbabwe</div>
                  <div className="bg-ncrst-grey-light p-2 rounded text-center">Mozambique</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Agencies in Africa Network */}
      <section id="iaa" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">Innovation Agencies in Africa Network (IAA)</h2>
            <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body">
              Continental network of innovation agencies promoting African innovation and technology development.
            </p>
          </div>

          <div className="bg-ncrst-green text-white rounded-xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4 leading-heading">Continental Collaboration</h3>
              <p className="text-lg opacity-90 max-w-3xl mx-auto leading-body">
                Connecting innovation ecosystems across Africa to accelerate technology transfer and knowledge sharing.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-white/10 p-4 rounded-lg mb-3">
                  <h4 className="font-bold text-ncrst-gold">25+ Countries</h4>
                </div>
                <p className="text-sm opacity-90">African innovation agencies participating</p>
              </div>
              <div className="text-center">
                <div className="bg-white/10 p-4  rounded-lg mb-3">
                  <h4 className="font-bold text-ncrst-gold">50+ Programs</h4>
                </div>
                <p className="text-sm opacity-90">Joint innovation initiatives and exchanges</p>
              </div>
              <div className="text-center">
                <div className="bg-white/10 p-4 rounded-lg mb-3">
                  <h4 className="font-bold text-ncrst-gold">1000+ Innovators</h4>
                </div>
                <p className="text-sm opacity-90">Connected through the network</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovators Hub */}
      <section id="innovators-hub" className="py-16 bg-ncrst-grey-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">Innovators Hub</h2>
            <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body">
              Celebrating the achievements of innovative Namibian entrepreneurs making a real impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {innovators.map((innovator, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <img
                    src={innovator.image}
                    alt={innovator.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-ncrst-green text-white px-3 py-1 rounded-full text-sm font-medium">
                      {innovator.sector}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-ncrst-green/10 w-10 h-10 rounded-lg flex items-center justify-center">
                      <Star className="text-ncrst-green" size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-ncrst-grey leading-heading">{innovator.name}</h3>
                      <p className="text-sm text-ncrst-blue font-medium">{innovator.company}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div>
                      <h4 className="font-semibold text-ncrst-grey mb-1">Innovation</h4>
                      <p className="text-ncrst-grey-dark">{innovator.innovation}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-ncrst-grey mb-1">Impact</h4>
                      <p className="text-ncrst-grey-dark">{innovator.impact}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-ncrst-grey mb-1">Funding</h4>
                      <p className="text-ncrst-green font-medium">{innovator.funding}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Ecosystem */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">Innovation Ecosystem</h2>
            <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body">
              A comprehensive network of partners supporting entrepreneurs at every stage of their journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {ecosystemPartners.map((partner, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="bg-ncrst-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-ncrst-blue">{partner.count}</span>
                </div>
                <h3 className="text-lg font-bold text-ncrst-grey mb-3 leading-heading">{partner.name}</h3>
                <p className="text-sm text-ncrst-grey-dark mb-4 leading-body">{partner.description}</p>
                <div className="space-y-1">
                  {partner.examples.map((example, idx) => (
                    <div key={idx} className="text-xs bg-ncrst-grey-light text-ncrst-grey px-2 py-1 rounded">
                      {example}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Ecosystem Map */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-ncrst-grey mb-6 text-center leading-heading">Innovation Support Journey</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="text-center">
                <div className="bg-red-100 p-4 rounded-lg mb-3">
                  <Lightbulb className="text-red-600 mx-auto" size={24} />
                </div>
                <h4 className="font-semibold text-ncrst-grey text-sm">Ideation</h4>
                <p className="text-xs text-ncrst-grey-dark">Workshops, Hackathons</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 p-4 rounded-lg mb-3">
                  <Target className="text-orange-600 mx-auto" size={24} />
                </div>
                <h4 className="font-semibold text-ncrst-grey text-sm">Validation</h4>
                <p className="text-xs text-ncrst-grey-dark">Market Research, MVP</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 p-4 rounded-lg mb-3">
                  <Building className="text-blue-600 mx-auto" size={24} />
                </div>
                <h4 className="font-semibold text-ncrst-grey text-sm">Incubation</h4>
                <p className="text-xs text-ncrst-grey-dark">Mentorship, Resources</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 p-4 rounded-lg mb-3">
                  <TrendingUp className="text-green-600 mx-auto" size={24} />
                </div>
                <h4 className="font-semibold text-ncrst-grey text-sm">Acceleration</h4>
                <p className="text-xs text-ncrst-grey-dark">Funding, Scaling</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 p-4 rounded-lg mb-3">
                  <Award className="text-purple-600 mx-auto" size={24} />
                </div>
                <h4 className="font-semibold text-ncrst-grey text-sm">Growth</h4>
                <p className="text-xs text-ncrst-grey-dark">Investment, Expansion</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Innovation;