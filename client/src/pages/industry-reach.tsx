import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building2, Globe, Target, TrendingUp, Users, Zap } from "lucide-react";

export default function IndustryReach() {
  const industryCategories = [
    {
      title: "Technology & Software",
      description: "Connect with tech companies, software vendors, and IT service providers",
      icon: Zap,
      sectors: ["Software Development", "IT Services", "Cloud Computing", "Cybersecurity", "AI/ML"],
      count: "2.8M+",
      color: "bg-blue-500"
    },
    {
      title: "Healthcare & Life Sciences",
      description: "Reach healthcare providers, pharmaceutical, and biotech companies",
      icon: Building2,
      sectors: ["Hospitals", "Pharmaceuticals", "Medical Devices", "Biotech", "Telemedicine"],
      count: "1.9M+",
      color: "bg-green-500"
    },
    {
      title: "Financial Services",
      description: "Target banks, insurance, investment firms, and fintech companies",
      icon: TrendingUp,
      sectors: ["Banking", "Insurance", "Investment", "Fintech", "Asset Management"],
      count: "1.6M+",
      color: "bg-purple-500"
    },
    {
      title: "Manufacturing & Industrial",
      description: "Connect with manufacturers, suppliers, and industrial companies",
      icon: Users,
      sectors: ["Automotive", "Aerospace", "Heavy Machinery", "Electronics", "Chemical"],
      count: "3.2M+",
      color: "bg-orange-500"
    },
    {
      title: "Energy & Utilities",
      description: "Reach energy companies, utilities, and renewable energy firms",
      icon: Globe,
      sectors: ["Oil & Gas", "Renewable Energy", "Utilities", "Mining", "Power Generation"],
      count: "890K+",
      color: "bg-red-500"
    },
    {
      title: "Government & Public Sector",
      description: "Target government agencies, military, and public institutions",
      icon: Target,
      sectors: ["Federal Government", "State & Local", "Military", "Education", "Non-Profit"],
      count: "1.2M+",
      color: "bg-indigo-500"
    }
  ];

  const reachCapabilities = [
    "Industry Classification & Segmentation",
    "Sector-Specific Targeting",
    "Supply Chain Mapping",
    "Competitive Landscape Analysis",
    "Market Size & Growth Tracking",
    "Regulatory Environment Monitoring",
    "Technology Adoption Patterns",
    "Decision-Making Process Analysis",
    "Budget Cycle Alignment",
    "Industry Event & Conference Tracking"
  ];

  const additionalIndustries = [
    "Retail & E-commerce", "Education & Training", "Media & Entertainment", "Transportation & Logistics",
    "Real Estate & Construction", "Hospitality & Tourism", "Agriculture & Food", "Textiles & Apparel",
    "Furniture & Home Goods", "Sports & Recreation", "Beauty & Personal Care", "Legal Services",
    "Consulting Services", "Marketing & Advertising", "Human Resources", "Facilities Management"
  ];

  return (
    <>
      <Helmet>
        <title>Industry Reach - Sector-Specific Targeting & Outreach | ELP Data</title>
        <meta name="description" content="Target companies by industry with precision sector-specific outreach. Access 45M+ companies across 60+ industries with detailed market intelligence and contact data." />
        <meta name="keywords" content="industry targeting, sector targeting, vertical marketing, industry outreach, B2B industry data, market segmentation" />
        <link rel="canonical" href="https://www.elpdata.com/industry-reach" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900 px-4 py-2 rounded-full text-green-700 dark:text-green-300 text-sm font-medium mb-6">
              <Globe className="h-4 w-4" />
              Industry Reach Platform
            </div>
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Industry-Specific
              <span className="text-green-600 dark:text-green-400"> Outreach</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Target companies with precision industry-specific outreach. Access 45M+ companies across 60+ industries with comprehensive market intelligence, sector trends, and verified contact data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Explore Industries
              </Button>
              <Button variant="outline" size="lg">
                View Market Data
              </Button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">45M+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Companies Covered</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">60+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Industry Sectors</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">95%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Industry Accuracy</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">180+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Countries Covered</div>
              </CardContent>
            </Card>
          </div>

          {/* Industry Categories */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Target by Industry & Sector
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industryCategories.map((industry, index) => {
                const IconComponent = industry.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`p-3 rounded-lg ${industry.color}`}>
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{industry.title}</CardTitle>
                          <Badge variant="secondary">{industry.count} companies</Badge>
                        </div>
                      </div>
                      <CardDescription>{industry.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {industry.sectors.map((sector, sectorIndex) => (
                          <Badge key={sectorIndex} variant="outline" className="text-xs">
                            {sector}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Additional Industries */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Additional Industry Coverage
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {additionalIndustries.map((industry, index) => (
                <Card key={index} className="p-4 hover:shadow-md transition-shadow">
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-700 dark:text-gray-300">{industry}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Reach Capabilities */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Industry Intelligence & Targeting
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {reachCapabilities.map((capability, index) => (
                <Card key={index} className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{capability}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white dark:bg-gray-800 rounded-2xl p-12 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Expand Your Industry Reach?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Start targeting specific industries with Industry Reach's comprehensive sector intelligence. Access detailed company data, market trends, and verified contacts across all major industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Start Industry Targeting
              </Button>
              <Button variant="outline" size="lg">
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}