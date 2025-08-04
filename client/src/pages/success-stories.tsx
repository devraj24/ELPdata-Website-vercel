import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SEOHead from "@/components/SEOHead";
import { Trophy, TrendingUp, DollarSign, Clock, Star, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SuccessStories() {
  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="Success Stories - ELP Data Customer Achievements"
        description="Discover how leading enterprises achieved remarkable ROI with ELP Data's technology intelligence solutions. Real customer success stories and measurable business outcomes."
        keywords="success stories, customer testimonials, ROI, enterprise solutions, technology intelligence results"
      />
      <Header />
      
      {/* Hero Section - Orange to Red Gradient */}
      <section className="bg-gradient-to-r from-orange-600 to-red-500 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-heading font-bold text-white mb-6">
            Customer Success Stories
          </h1>
          <p className="text-xl text-white mb-8 max-w-4xl mx-auto">
            Real customer achievements demonstrating measurable ROI and business transformation through ELP Data's technology intelligence solutions
          </p>
        </div>
      </section>

      {/* Success Metrics Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Proven Customer Results</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our clients consistently achieve exceptional returns through targeted technology intelligence and precision marketing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-4xl font-bold text-green-600 mb-2">847%</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Average ROI</div>
              <p className="text-gray-600">Customer return on investment within 12 months</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2">73%</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Faster Sales Cycles</div>
              <p className="text-gray-600">Reduction in time to close enterprise deals</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-4xl font-bold text-purple-600 mb-2">$12.4M</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Revenue Generated</div>
              <p className="text-gray-600">Average additional revenue per customer annually</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-8 w-8 text-orange-600" />
              </div>
              <div className="text-4xl font-bold text-orange-600 mb-2">92%</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Customer Satisfaction</div>
              <p className="text-gray-600">Clients rating our solutions as exceptional</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Success Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Featured Customer Achievements</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Fortune 500 Technology Company */}
            <Card className="p-8 border-2 border-blue-100 bg-blue-50">
              <div className="flex items-center mb-6">
                <Award className="h-8 w-8 text-blue-600 mr-3" />
                <div>
                  <h3 className="text-xl font-bold text-blue-800">Fortune 500 Technology Company</h3>
                  <Badge className="bg-blue-100 text-blue-700 mt-1">Enterprise Software</Badge>
                </div>
              </div>
              <CardContent className="p-0">
                <p className="text-gray-700 mb-4">
                  "ELP Data's Oracle JD Edwards customer database helped us identify 47,982 qualified prospects, resulting in our most successful product launch campaign."
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">1,247%</div>
                    <div className="text-sm text-gray-600">ROI Increase</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">$18.9M</div>
                    <div className="text-sm text-gray-600">New Revenue</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 italic">
                  "The precision targeting of Oracle JD Edwards users saved us months of prospecting time and delivered qualified leads that converted at 3x our typical rate."
                </p>
              </CardContent>
            </Card>

            {/* Global Consulting Firm */}
            <Card className="p-8 border-2 border-green-100 bg-green-50">
              <div className="flex items-center mb-6">
                <Star className="h-8 w-8 text-green-600 mr-3" />
                <div>
                  <h3 className="text-xl font-bold text-green-800">Global Consulting Firm</h3>
                  <Badge className="bg-green-100 text-green-700 mt-1">Professional Services</Badge>
                </div>
              </div>
              <CardContent className="p-0">
                <p className="text-gray-700 mb-4">
                  "Using ELP Data's Salesforce CRM customer list of 82,984 companies, we launched the most successful account-based marketing campaign in our firm's history."
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-2xl font-bold text-green-600">634%</div>
                    <div className="text-sm text-gray-600">Pipeline Growth</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">$7.2M</div>
                    <div className="text-sm text-gray-600">Closed Deals</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 italic">
                  "The quality of contact data was exceptional - 98% accuracy rate meant our sales team could focus on selling instead of data cleanup."
                </p>
              </CardContent>
            </Card>

            {/* Enterprise Software Vendor */}
            <Card className="p-8 border-2 border-purple-100 bg-purple-50">
              <div className="flex items-center mb-6">
                <Trophy className="h-8 w-8 text-purple-600 mr-3" />
                <div>
                  <h3 className="text-xl font-bold text-purple-800">Enterprise Software Vendor</h3>
                  <Badge className="bg-purple-100 text-purple-700 mt-1">SaaS Platform</Badge>
                </div>
              </div>
              <CardContent className="p-0">
                <p className="text-gray-700 mb-4">
                  "ELP Data's comprehensive technology intelligence across 500+ technologies enabled us to identify market opportunities we never knew existed."
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-2xl font-bold text-purple-600">289%</div>
                    <div className="text-sm text-gray-600">Market Share Growth</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">$23.1M</div>
                    <div className="text-sm text-gray-600">Annual Revenue</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 italic">
                  "The depth of technology adoption data across 195 countries gave us competitive intelligence that transformed our go-to-market strategy."
                </p>
              </CardContent>
            </Card>

            {/* Healthcare Technology Provider */}
            <Card className="p-8 border-2 border-red-100 bg-red-50">
              <div className="flex items-center mb-6">
                <Award className="h-8 w-8 text-red-600 mr-3" />
                <div>
                  <h3 className="text-xl font-bold text-red-800">Healthcare Technology Provider</h3>
                  <Badge className="bg-red-100 text-red-700 mt-1">Healthcare IT</Badge>
                </div>
              </div>
              <CardContent className="p-0">
                <p className="text-gray-700 mb-4">
                  "Leveraging ELP Data's 6.2M professional contacts database, we connected with C-level executives at major healthcare systems nationwide."
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-2xl font-bold text-red-600">456%</div>
                    <div className="text-sm text-gray-600">Lead Quality Improvement</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-red-600">$14.7M</div>
                    <div className="text-sm text-gray-600">Contract Value</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 italic">
                  "Direct access to healthcare CIOs and CTOs accelerated our sales process and resulted in our largest enterprise contracts to date."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* More Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">More Success Stories</h2>
          <p className="text-center text-gray-600 mb-12">Explore additional case studies across various industries and use cases</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* TechCorp Success */}
            <Card className="p-6 bg-white">
              <div className="mb-4">
                <Badge className="bg-blue-100 text-blue-700 mb-2">Enterprise Software</Badge>
                <h3 className="font-bold text-gray-900 mb-2">TechCorp Increases Lead Quality by 300%</h3>
                <p className="text-sm text-gray-600 mb-4">TechCorp Solutions</p>
                <div className="space-y-2 mb-4">
                  <div className="text-lg font-bold text-blue-600">300% increase</div>
                  <div className="text-xs text-gray-600">lead Quality</div>
                  <div className="text-lg font-bold text-blue-600">85% improvement</div>
                  <div className="text-xs text-gray-600">conversion</div>
                  <div className="text-lg font-bold text-blue-600">$2.5M additional revenue</div>
                  <div className="text-xs text-gray-600">6 months timeframe</div>
                </div>
                <button className="text-blue-600 text-sm font-semibold hover:text-blue-800">
                  View Case Study
                </button>
              </div>
            </Card>

            {/* Manufacturing Giant */}
            <Card className="p-6 bg-white">
              <div className="mb-4">
                <Badge className="bg-green-100 text-green-700 mb-2">Manufacturing</Badge>
                <h3 className="font-bold text-gray-900 mb-2">Manufacturing Giant Reduces Compliance Risk by 90%</h3>
                <p className="text-sm text-gray-600 mb-4">Global Manufacturing Inc.</p>
                <div className="space-y-2 mb-4">
                  <div className="text-lg font-bold text-green-600">90% reduction</div>
                  <div className="text-xs text-gray-600">compliance violations</div>
                  <div className="text-lg font-bold text-green-600">75% faster</div>
                  <div className="text-xs text-gray-600">reporting efficiency</div>
                  <div className="text-lg font-bold text-green-600">$5.2M saved</div>
                  <div className="text-xs text-gray-600">12 months timeframe</div>
                </div>
                <button className="text-green-600 text-sm font-semibold hover:text-green-800">
                  View Case Study
                </button>
              </div>
            </Card>

            {/* FinTech Startup */}
            <Card className="p-6 bg-white">
              <div className="mb-4">
                <Badge className="bg-purple-100 text-purple-700 mb-2">Financial Technology</Badge>
                <h3 className="font-bold text-gray-900 mb-2">FinTech Startup Scales Customer Acquisition 5x</h3>
                <p className="text-sm text-gray-600 mb-4">InnovatePay</p>
                <div className="space-y-2 mb-4">
                  <div className="text-lg font-bold text-purple-600">500% increase</div>
                  <div className="text-xs text-gray-600">customer acquisition</div>
                  <div className="text-lg font-bold text-purple-600">60% reduction</div>
                  <div className="text-xs text-gray-600">in CAC cost</div>
                  <div className="text-lg font-bold text-purple-600">$15M qualified</div>
                  <div className="text-xs text-gray-600">9 months pipeline</div>
                </div>
                <button className="text-purple-600 text-sm font-semibold hover:text-purple-800">
                  View Case Study
                </button>
              </div>
            </Card>

            {/* Healthcare Network */}
            <Card className="p-6 bg-white">
              <div className="mb-4">
                <Badge className="bg-red-100 text-red-700 mb-2">Healthcare</Badge>
                <h3 className="font-bold text-gray-900 mb-2">Healthcare Network Improves Patient Data Accuracy by 95%</h3>
                <p className="text-sm text-gray-600 mb-4">Regional Health Systems</p>
                <div className="space-y-2 mb-4">
                  <div className="text-lg font-bold text-red-600">95% improvement</div>
                  <div className="text-xs text-gray-600">data accuracy</div>
                  <div className="text-lg font-bold text-red-600">40% faster</div>
                  <div className="text-xs text-gray-600">patient processing</div>
                  <div className="text-lg font-bold text-red-600">$3.1M saved</div>
                  <div className="text-xs text-gray-600">operational savings</div>
                </div>
                <button className="text-red-600 text-sm font-semibold hover:text-red-800">
                  View Case Study
                </button>
              </div>
            </Card>

            {/* E-commerce Platform */}
            <Card className="p-6 bg-white">
              <div className="mb-4">
                <Badge className="bg-orange-100 text-orange-700 mb-2">E-commerce</Badge>
                <h3 className="font-bold text-gray-900 mb-2">E-commerce Platform Boosts Personalization ROI 250%</h3>
                <p className="text-sm text-gray-600 mb-4">ShopTech Direct</p>
                <div className="space-y-2 mb-4">
                  <div className="text-lg font-bold text-orange-600">250% ROI</div>
                  <div className="text-xs text-gray-600">personalization</div>
                  <div className="text-lg font-bold text-orange-600">35% increase</div>
                  <div className="text-xs text-gray-600">average order value</div>
                  <div className="text-lg font-bold text-orange-600">90% retention</div>
                  <div className="text-xs text-gray-600">customer retention</div>
                </div>
                <button className="text-orange-600 text-sm font-semibold hover:text-orange-800">
                  View Case Study
                </button>
              </div>
            </Card>

            {/* Professional Services */}
            <Card className="p-6 bg-white">
              <div className="mb-4">
                <Badge className="bg-teal-100 text-teal-700 mb-2">Professional Services</Badge>
                <h3 className="font-bold text-gray-900 mb-2">Professional Services Firm Accelerates Sales Cycle by 40%</h3>
                <p className="text-sm text-gray-600 mb-4">ConsultPro Partners</p>
                <div className="space-y-2 mb-4">
                  <div className="text-lg font-bold text-teal-600">40% faster</div>
                  <div className="text-xs text-gray-600">sales cycles</div>
                  <div className="text-lg font-bold text-teal-600">180% increase</div>
                  <div className="text-xs text-gray-600">qualified leads</div>
                  <div className="text-lg font-bold text-teal-600">$4.8M won</div>
                  <div className="text-xs text-gray-600">new business</div>
                </div>
                <button className="text-teal-600 text-sm font-semibold hover:text-teal-800">
                  View Case Study
                </button>
              </div>
            </Card>

            {/* Insurance Company */}
            <Card className="p-6 bg-white">
              <div className="mb-4">
                <Badge className="bg-indigo-100 text-indigo-700 mb-2">Insurance</Badge>
                <h3 className="font-bold text-gray-900 mb-2">Insurance Company Reduces Fraud Detection Time by 85%</h3>
                <p className="text-sm text-gray-600 mb-4">SecureLife Insurance</p>
                <div className="space-y-2 mb-4">
                  <div className="text-lg font-bold text-indigo-600">85% faster</div>
                  <div className="text-xs text-gray-600">fraud detection</div>
                  <div className="text-lg font-bold text-indigo-600">$12M prevented</div>
                  <div className="text-xs text-gray-600">losses</div>
                  <div className="text-lg font-bold text-indigo-600">99.2% accuracy</div>
                  <div className="text-xs text-gray-600">detection rate</div>
                </div>
                <button className="text-indigo-600 text-sm font-semibold hover:text-indigo-800">
                  View Case Study
                </button>
              </div>
            </Card>

            {/* Retail Chain */}
            <Card className="p-6 bg-white">
              <div className="mb-4">
                <Badge className="bg-pink-100 text-pink-700 mb-2">Retail</Badge>
                <h3 className="font-bold text-gray-900 mb-2">Retail Chain Optimizes Inventory Management by 60%</h3>
                <p className="text-sm text-gray-600 mb-4">MegaMart Stores</p>
                <div className="space-y-2 mb-4">
                  <div className="text-lg font-bold text-pink-600">60% optimization</div>
                  <div className="text-xs text-gray-600">inventory management</div>
                  <div className="text-lg font-bold text-pink-600">45% reduction</div>
                  <div className="text-xs text-gray-600">stockouts</div>
                  <div className="text-lg font-bold text-pink-600">$8.9M saved</div>
                  <div className="text-xs text-gray-600">cost reduction</div>
                </div>
                <button className="text-pink-600 text-sm font-semibold hover:text-pink-800">
                  View Case Study
                </button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Industry Impact by Numbers */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact Across Industries</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real results from real companies. See how our solutions drive measurable business outcomes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold text-blue-800 mb-4">Technology</h3>
              <div className="space-y-3">
                <div>
                  <div className="text-2xl font-bold text-blue-600">1,200+</div>
                  <div className="text-sm text-gray-600">Companies Served</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">275%</div>
                  <div className="text-sm text-gray-600">Avg. Improvement</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">$45M</div>
                  <div className="text-sm text-gray-600">Total Savings</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold text-green-800 mb-4">Healthcare</h3>
              <div className="space-y-3">
                <div>
                  <div className="text-2xl font-bold text-green-600">850+</div>
                  <div className="text-sm text-gray-600">Companies Served</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">180%</div>
                  <div className="text-sm text-gray-600">Avg. Improvement</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">$32M</div>
                  <div className="text-sm text-gray-600">Total Savings</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold text-purple-800 mb-4">Financial Services</h3>
              <div className="space-y-3">
                <div>
                  <div className="text-2xl font-bold text-purple-600">650+</div>
                  <div className="text-sm text-gray-600">Companies Served</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">320%</div>
                  <div className="text-sm text-gray-600">Avg. Improvement</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">$58M</div>
                  <div className="text-sm text-gray-600">Total Savings</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold text-orange-800 mb-4">Manufacturing</h3>
              <div className="space-y-3">
                <div>
                  <div className="text-2xl font-bold text-orange-600">900+</div>
                  <div className="text-sm text-gray-600">Companies Served</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-600">195%</div>
                  <div className="text-sm text-gray-600">Avg. Improvement</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-600">$41M</div>
                  <div className="text-sm text-gray-600">Total Savings</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Success Stories Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Additional Success Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Additional 20+ success stories */}
            {[
              { company: "CloudTech Solutions", industry: "Cloud Services", improvement: "450% ROI", metric: "Migration Speed", color: "blue" },
              { company: "DataFlow Analytics", industry: "Big Data", improvement: "380% Efficiency", metric: "Processing Speed", color: "green" },
              { company: "SecureNet Corp", industry: "Cybersecurity", improvement: "95% Threat Detection", metric: "Security Score", color: "red" },
              { company: "AutoMate Industries", industry: "Automation", improvement: "67% Cost Reduction", metric: "Operational Efficiency", color: "purple" },
              { company: "SmartLogistics", industry: "Supply Chain", improvement: "55% Faster Delivery", metric: "Supply Chain", color: "orange" },
              { company: "EduTech Platform", industry: "Education", improvement: "89% Student Engagement", metric: "Learning Outcomes", color: "teal" },
              { company: "AgriSmart Solutions", industry: "Agriculture", improvement: "73% Yield Increase", metric: "Crop Productivity", color: "green" },
              { company: "EnergyFlow Systems", industry: "Energy", improvement: "42% Energy Savings", metric: "Efficiency Gains", color: "yellow" },
              { company: "MedDevice Innovations", industry: "Medical Devices", improvement: "88% Compliance Rate", metric: "Regulatory Approval", color: "blue" },
              { company: "RealEstate Connect", industry: "Real Estate", improvement: "65% Lead Conversion", metric: "Sales Performance", color: "indigo" },
              { company: "TransportFlow", industry: "Transportation", improvement: "58% Route Optimization", metric: "Delivery Efficiency", color: "gray" },
              { company: "FoodTech Ventures", industry: "Food Technology", improvement: "92% Quality Control", metric: "Safety Standards", color: "green" },
              { company: "BuildSmart Construction", industry: "Construction", improvement: "47% Project Completion", metric: "Timeline Efficiency", color: "orange" },
              { company: "TextileMax", industry: "Textiles", improvement: "63% Production Speed", metric: "Manufacturing", color: "pink" },
              { company: "ChemFlow Industries", industry: "Chemicals", improvement: "71% Process Optimization", metric: "Chemical Processing", color: "purple" },
              { company: "MediaStream Corp", industry: "Media", improvement: "84% Content Delivery", metric: "Streaming Performance", color: "red" },
              { company: "SportsTech Analytics", industry: "Sports", improvement: "76% Performance Analysis", metric: "Athletic Performance", color: "blue" },
              { company: "LegalTech Solutions", industry: "Legal Services", improvement: "69% Case Processing", metric: "Legal Efficiency", color: "indigo" },
              { company: "ConsultMax Partners", industry: "Consulting", improvement: "91% Client Satisfaction", metric: "Service Quality", color: "teal" },
              { company: "TourismPlus", industry: "Hospitality", improvement: "83% Guest Experience", metric: "Customer Satisfaction", color: "orange" },
              { company: "NonProfitMax", industry: "Non-Profit", improvement: "78% Donation Efficiency", metric: "Fundraising Success", color: "green" },
              { company: "UtilityFlow", industry: "Utilities", improvement: "66% Grid Efficiency", metric: "Power Distribution", color: "yellow" },
              { company: "EcoSolutions", industry: "Environmental", improvement: "85% Waste Reduction", metric: "Sustainability", color: "green" },
              { company: "FitnessMax", industry: "Fitness", improvement: "79% Member Retention", metric: "Health Outcomes", color: "red" }
            ].map((story, index) => (
              <Card key={index} className="p-4 bg-white hover:shadow-lg transition-shadow">
                <div className="mb-3">
                  <Badge className={`bg-${story.color}-100 text-${story.color}-700 mb-2`}>{story.industry}</Badge>
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">{story.company}</h4>
                  <div className="space-y-1">
                    <div className={`text-lg font-bold text-${story.color}-600`}>{story.improvement}</div>
                    <div className="text-xs text-gray-600">{story.metric}</div>
                  </div>
                  <button className={`text-${story.color}-600 text-xs font-medium hover:text-${story.color}-800 mt-2`}>
                    View Details →
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-500">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Join hundreds of companies that have transformed their operations with our data solutions.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors">
              Download Case Studies
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}