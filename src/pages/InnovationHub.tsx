import React from "react";
import { Star } from "lucide-react";

const Innovation: React.FC = () => {
  const innovators = [
    {
      name: "Victoria Haihambo",
      company: "Agelvipa Online",
      sector: "E-commerce and Digital empowerment",
      innovation:
        "Multi-vendor e-commerce platform connecting local businesses to markets, with a focus on empowering women through the Women E-hub initiative ",
      impact:
        "Developed a mobile app & website, expanded to an Author Hub for African writers, increased social media presence, and secured seed funding from Impacther Africa",
      funding: "BOOST-UP programme",
      image:
        "https://scontent.fers4-1.fna.fbcdn.net/v/t39.30808-6/473694455_1784071045469124_2245374436978736370_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Q-XdgqlpUSAQ7kNvwFSbrBe&_nc_oc=AdkDF1Lr5hkZ3IcpwX3Iy0DX5A7PAGRivbUV1IFF9-FNddMhjBwptwPgjfHyRtzAbh0&_nc_zt=23&_nc_ht=scontent.fers4-1.fna&_nc_gid=a4puxn5rJRqgRsKy3jJMdQ&oh=00_AfPrus-3xhIR4iTk69JKeaNEd7h5tryd7tv1W-R-rzi_dQ&oe=684F25E7",
    },
    {
      name: "Sara Iyaloo S. Ekondo",
      company: "Awana Food Trading Enterprise CC",
      sector: "Agri-Processing & Food Waste Reduction",
      innovation:
        "Value-added food products (hibiscus syrup, lemonade concentrates, sauces) from excess/b-grade produce to combat food waste",
      impact:
        "Reduced farm-level food spoilage, created jobs, and built a small-holder farmer database for sustainable sourcing",
      funding: "NICW programme",
      image:
        "https://scontent.fers4-1.fna.fbcdn.net/v/t39.30808-6/481176930_647080284525501_5494073247083489745_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=rNRO26IIbQIQ7kNvwE0pR36&_nc_oc=Adk1dFHYI2LntyH06iqcVS4B15CeqdIL3EkijSxR4PQ8Iw_XAJxLCRip-tioeznMbAM&_nc_zt=23&_nc_ht=scontent.fers4-1.fna&_nc_gid=Z5iFbcKMLejdjJU8n97phw&oh=00_AfOg1Wlh_hqTApR7hSyQK5pWcp7apR-ZOufUStmQUjP5cQ&oe=684F37F5",
    },
    {
      name: "Verna Nghuumono",
      company: "Laverne Pads Manufacturing CC",
      sector: "Menstrual Health & Sustainable Hygiene",
      innovation:
        "Affordable, reusable sanitary pads to combat period poverty and reduce school dropouts",
      impact:
        "Reducing period poverty in Namibia, decreasing school absenteeism, and providing eco-friendly menstrual solutions",
      funding: "NICW programme",
      image: "https://lasanitarym.com/img/blog3.jpg",
    },
    {
      name: "Vaughan Weiss",
      company: "Wision Media and Drafting",
      sector: "Visual Communication & Immersive Technology",
      innovation:
        "3D rendering, animation and VR solutions to transform complex ideas into clear visual communications",
      impact:
        "Enhancing brand awareness, investor attraction and customer acquisition through cutting-edge visual storytelling",
      funding: "BOOST-UP programme",
      image:
        "https://scontent.fers4-1.fna.fbcdn.net/v/t39.30808-6/480271760_1570729174329722_1139182505980930790_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=s3u4iZ69_xUQ7kNvwGdzXew&_nc_oc=Adn8ypogsZJ8IwbL-4enlZC7mCTBwJe9h2zlLyNLvQDlXw1aHqZpKXufmQ5ArYrVYHk&_nc_zt=23&_nc_ht=scontent.fers4-1.fna&_nc_gid=eXAKZXYrzWc-OtuhiSOgJw&oh=00_AfMNI8HFdmEBNfr1gOWd0Ne0M8dRN0df-S0PA7NRx8lOBQ&oe=684F2BBD",
    },
    {
      name: "Haita Ester",
      company: "Nzimbu Investment CC",
      sector: "Organic Food Production & Health",
      innovation:
        "Pure organic juices, jams, tea, and oil made from indigenous Namibian ingredients (Nongongo fruits, Mutete vegetables)",
      impact:
        "Promoting health through local organic products while preserving traditional food knowledge",
      funding: "NICW programme",
      image:
        "https://scontent.fers4-1.fna.fbcdn.net/v/t39.30808-6/489952016_1176531004259108_8979381946798009155_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=nJOye_WZi5AQ7kNvwHtWOW7&_nc_oc=Adn7wv-1SlOR-BlprmGn6v6Jp9exjTKGxu_96iY5_sqaMXhkRCkFKqCQLHkrQORc5BI&_nc_zt=23&_nc_ht=scontent.fers4-1.fna&_nc_gid=fbKv1RazPZ8Y5QDpSi9BjA&oh=00_AfNHfQ6tQK9LPRQ-bL6Vp4c30N9_A6MfyfFNW_1iwrchzg&oe=684F0235",
    },
    {
      name: "Dankie Nendongo",
      company: "Leo Canopus Inc",
      sector: "Digital Infrastructure & Connectivity Solutions",
      innovation:
        "Free community Wi-Fi solutions revolutionizing internet access deployment in underserved areas",
      impact:
        "Closing Africa's digital divide - targeting the 40% of continent without internet access",
      funding: "BOOST-UP programme",
      image:
        "https://media.licdn.com/dms/image/v2/C4D03AQFbbr5sI_AWsQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1640990216019?e=1755129600&v=beta&t=t4WgTRQD5r0QgMLBfr2mah7V2kixVSSARTPhuUVOsa8",
    },
    {
      name: "Jesse Liula Schiceya",
      company: "Patient Care",
      sector: "Healthcare Technology",
      innovation: "Telemedicine and healthcare insurance platform",
      impact: "Provides accessible healthcare services and insurance",
      funding: "BOOST-UP programme",
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQEDfYQCcVls3A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720142406873?e=1755129600&v=beta&t=fou3taCeIsGvab1Tz8nvbWeK7WlDliWSe4G7NU6altk",
    },
    {
      name: "Stacey Likando",
      company: "THANK-YOU WALLET",
      sector: "Technology",
      innovation: "Community empowerment through direct payments",
      impact: "Enables seamless payments to stores and service stations",
      funding: "BOOST-UP programme",
      image: "https://lasanitarym.com/img/blog3.jpg",
    },
    {
      name: "Roswitha Matheus",
      company: "Green kitchen's Tech",
      sector: "Clean Energy",
      innovation: "Manufacturing clean cook stoves",
      impact: "Provides clean cooking solutions and promotes green energy",
      funding: "NICW programme",
      image: "https://lasanitarym.com/img/blog3.jpg",
    },
    {
      name: "Akuumba Andrias",
      company: "Kaskola",
      sector: "Digital Marketing",
      innovation: "Digitalization of the Namibian Nomad Visa",
      impact: "Helps market and digitalize visa processes",
      funding: "BOOST-UP programme",
      image: "https://lasanitarym.com/img/blog3.jpg",
    },
    {
      name: "Wilbard Lazarus",
      company: "Okaluli (by Ausgezeichnet Technische)",
      sector: "Education Technology",
      innovation: "Empowering students in Sub-Saharan Africa",
      impact: "Provides accessible education solutions",
      funding: "BOOST-UP programme",
      image: "https://lasanitarym.com/img/blog3.jpg",
    },
    {
      name: "Andreas Elifas",
      company: "Jumper Namibia",
      sector: "Creative Agency",
      innovation: "Innovative design, VR experiences, and visual communication",
      impact: "Delivers impactful creative solutions",
      funding: "BOOST-UP programme",
      image: "https://lasanitarym.com/img/blog3.jpg",
    },
    {
      name: "Cecilia Naule",
      company: "Rural Power Solutions CC",
      sector: "Renewable Energy",
      innovation: "Solar cooking energy solutions",
      impact: "Provides energy access to people with limited electricity",
      funding: "NICW programme",
      image: "https://lasanitarym.com/img/blog3.jpg",
    },
    {
      name: "Diana Nakwenye-Nakuumba",
      company: "DN-NAK Investment CC",
      sector: "Food Processing",
      innovation: "Nutritional food products (e.g., jam, juice, chutney)",
      impact: "Adds value to local produce and promotes healthy eating",
      funding: "NICW programme",
      image: "https://lasanitarym.com/img/blog3.jpg",
    },
    {
      name: "Loide Dawid",
      company: "K-12 EdTech Inc.",
      sector: "Education Technology",
      innovation: "Virtual teaching robots and digitized learning",
      impact: "Streamlines and automates education for students",
      funding: "NICW programme",
      image: "https://lasanitarym.com/img/blog3.jpg",
    },
    {
      name: "Selma Matheus",
      company: "Kalahari Truffles (Pty) Ltd",
      sector: "Agriculture & Food",
      innovation: "Farming and supply of Kalahari truffles",
      impact: "Expands market for Namibian truffles beyond Africa",
      funding: "NICW programme",
      image: "https://lasanitarym.com/img/blog3.jpg",
    },
    {
      name: "Saarty Mikka",
      company: "Kernytic Investments CC",
      sector: "Interior Design",
      innovation: "Interior Design",
      impact: "Enables seamless payments to s",
      funding: "NICW programme",
      image: "https://lasanitarym.com/img/blog3.jpg",
    },
    {
      name: "Eiretha-Cynthia Rukira-Veiko",
      company: "Oilonga-Media CC",
      sector: "Media & Procurement",
      innovation: "Innovative solutions for procurement challenges",
      impact: "Supports bidders and buyers in the procurement market",
      funding: "NICW programme",
      image: "https://lasanitarym.com/img/blog3.jpg",
    },
    {
      name: "Anna-Liisa Hatutale",
      company: "Landu Fish Spreads",
      sector: "Food Processing",
      innovation: "Value-added fish products (e.g., fish spreads)",
      impact: "Enhances utilization of horse mackerel and reduces waste",
      funding: "NICW programme",
      image: "https://lasanitarym.com/img/blog3.jpg",
    },
    {
      name: "Kristofine Ekandjo",
      company: "Tulande Online",
      sector: "E-Commerce",
      innovation: "Online platform for digital trade",
      impact: "Expands market access for vendors and buyers",
      funding: "NICW programme",
      image: "https://lasanitarym.com/img/blog3.jpg",
    },
    {
      name: "Matjita Hengua",
      company: "Otjisajiena Farming",
      sector: "Agriculture",
      innovation: "Home gardening and homemade jams",
      impact: "Promotes local food production and self-sufficiency",
      funding: "NICW programme",
      image: "https://lasanitarym.com/img/blog3.jpg",
    },
    {
      name: "Maria Shipapo",
      company: "MIST Agricultural Laboratory",
      sector: "Agri-Tech",
      innovation: "Agricultural laboratory services",
      impact: "Agricultural laboratory services",
      funding: "NICW programme",
      image: "https://lasanitarym.com/img/blog3.jpg",
    },
    {
      name: "Ndinelago Illeka",
      company: "Granny's Green Garden",
      sector: "Agriculture",
      innovation: "Local farming and produce",
      impact: "Promotes sustainable gardening practices",
      funding: "NICW programme",
      image: "https://lasanitarym.com/img/blog3.jpg",
    },
    {
      name: "Lydia Ndinelao Horn",
      company: "Namibia Institute of Seeds",
      sector: "Agriculture",
      innovation: "Seed production and distribution",
      impact: "Enhances agricultural productivity with quality seeds",
      funding: "NICW programme",
      image: "https://lasanitarym.com/img/blog3.jpg",
    },
    {
      name: "Ndapewa Treresius",
      company: "Possible Trading cc",
      sector: "Disability Tech",
      innovation: "Software for visually and hearing-impaired communities",
      impact:
        "Improves accessibility and quality of life for persons with disabilities",
      funding: "NICW programme",
      image: "https://lasanitarym.com/img/blog3.jpg",
    },
    {
      name: "Twahafffwa Izaloo Nambuwa",
      company: "Petwa Medical Practice",
      sector: "Healthcare",
      innovation: "Medical-grade topical products for skin conditions",
      impact: "Provides solutions for acne and pigmentation issues",
      funding: "NICW programme",
      image: "https://lasanitarym.com/img/blog3.jpg",
    },
    {
      name: "Helaria Shuudeni",
      company: "VIBERA INVESTMENTS CC",
      sector: "Body Care",
      innovation: "Natural and moisturizing body care products",
      impact: "Offers spunny and sustainable personal care solutions",
      funding: "NICW programme",
      image: "https://lasanitarym.com/img/blog3.jpg",
    },
    {
      name: "Octavius Maketo",
      company: "Ubuntu Aquatic CC",
      sector: "Sustainable Agriculture",
      innovation: "Integration of aquaculture and hydroponics",
      impact: "Addresses waste disposal and promotes sustainability",
      funding: "BOOST-UP programme",
      image: "https://lasanitarym.com/img/blog3.jpg",
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="bg-ncrst-green text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-heading">
              Innovators Hub
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-body opacity-90">
              Celebrating the achievements of innovative Namibian entrepreneurs
              making a real impact.
            </p>
          </div>
        </div>
      </section>

      {/* Innovators Hub */}
      <section id="innovators-hub" className="py-16 bg-ncrst-grey-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ncrst-grey mb-4 leading-heading">
              Innovators Hub
            </h2>
            <p className="text-lg text-ncrst-grey-dark max-w-3xl mx-auto leading-body">
              Celebrating the achievements of innovative Namibian entrepreneurs
              making a real impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {innovators.map((innovator, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
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
                      <h3 className="font-bold text-ncrst-grey leading-heading">
                        {innovator.name}
                      </h3>
                      <p className="text-sm text-ncrst-blue font-medium">
                        {innovator.company}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div>
                      <h4 className="font-semibold text-ncrst-grey mb-1">
                        Innovation
                      </h4>
                      <p className="text-ncrst-grey-dark">
                        {innovator.innovation}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-ncrst-grey mb-1">
                        Impact
                      </h4>
                      <p className="text-ncrst-grey-dark">{innovator.impact}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-ncrst-grey mb-1">
                        Funding
                      </h4>
                      <p className="text-ncrst-green font-medium">
                        {innovator.funding}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Innovation;
