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
                <p className="text-xs text-gray-300">Premium Data | AI | Automation | Marketing Solutions</p>
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
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-gray-300 text-sm mb-4">
              <li><a href="/sap-users-list" className="hover:text-blue-400 transition-colors">SAP Users (368.7K)</a></li>
              <li><a href="/salesforce-users-list" className="hover:text-blue-400 transition-colors">Salesforce CRM (189.7K)</a></li>
              <li><a href="/aws-users-list" className="hover:text-blue-400 transition-colors">AWS Cloud (156.2K)</a></li>
              <li><a href="/oracle-users-list" className="hover:text-blue-400 transition-colors">Oracle Database (134.2K)</a></li>
              <li><a href="/installed-base" className="hover:text-blue-400 transition-colors">All Technology Lists</a></li>
            </ul>
            <div className="space-y-3">
              <p className="text-gray-300 text-xs">
                <i className="fas fa-envelope mr-2"></i><a href="mailto:info@elpdata.com" className="text-blue-400 hover:text-blue-300 underline">info@elpdata.com</a><br />
                <i className="fas fa-phone mr-2"></i><a href="tel:+13072242324" className="text-blue-400 hover:text-blue-300">+1 (307) 224-2324</a>
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://linkedin.com/company/elpdata" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-white transition-colors" 
                  title="Follow ELP Data on LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a 
                  href="https://twitter.com/data_elp" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-white transition-colors" 
                  title="Follow ELP Data on Twitter"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-600 pt-8 text-center text-gray-300">
          <p>&copy; 2024 ELP Data. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
