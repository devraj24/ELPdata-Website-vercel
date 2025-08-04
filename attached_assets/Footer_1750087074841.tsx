export default function Footer() {
  const footerSections = [
    {
      title: "Services",
      links: [
        "Technology Research",
        "Market Analysis", 
        "Competitive Intelligence",
        "API Integration"
      ]
    },
    {
      title: "Industries", 
      links: [
        "Fintech",
        "Healthcare",
        "Manufacturing",
        "Sustainability"
      ]
    },
    {
      title: "Resources",
      links: [
        "Documentation",
        "API Reference",
        "Case Studies",
        "White Papers"
      ]
    }
  ];

  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <svg width="40" height="40" viewBox="0 0 48 48" className="mr-3">
                <defs>
                  <linearGradient id="footerLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#0891b2', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#1e3a8a', stopOpacity: 1}} />
                  </linearGradient>
                </defs>
                <rect width="48" height="48" rx="8" fill="url(#footerLogoGradient)" />
                <text x="24" y="32" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold" fontFamily="Arial, sans-serif">E</text>
                <circle cx="36" cy="12" r="3" fill="white" opacity="0.8" />
                <rect x="8" y="8" width="4" height="4" fill="white" opacity="0.6" />
                <rect x="8" y="36" width="4" height="4" fill="white" opacity="0.6" />
              </svg>
              <div>
                <h3 className="text-xl font-bold text-white">ELP Data</h3>
                <p className="text-xs text-gray-300">Premium Technology Data & Business Intelligence</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Premium technology data and business intelligence platform. Connect with decision-makers at organizations using the exact technologies you target.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors text-white"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors text-white"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors text-white"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
          
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4 text-white">{section.title}</h4>
              <ul className="space-y-2 text-gray-300">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="hover:text-blue-400 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          <div>
            <h4 className="font-semibold mb-4 text-white">Connect</h4>
            <p className="text-gray-300 text-sm mb-4">
              <i className="fas fa-envelope mr-2"></i><a href="mailto:info@elpdata.com" className="text-blue-400 hover:text-blue-300 underline">info@elpdata.com</a><br />
              <i className="fas fa-phone mr-2"></i>Support: <a href="tel:+13072242324" className="text-blue-400 hover:text-blue-300">+1 (307) 224-2324</a><br />
              <i className="fas fa-phone mr-2"></i>Sales: <a href="tel:+13095223785" className="text-blue-400 hover:text-blue-300">+1 (309) 522-3785</a>
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-600 pt-8 text-center text-gray-300">
          <p>&copy; 2024 ELP Data. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
