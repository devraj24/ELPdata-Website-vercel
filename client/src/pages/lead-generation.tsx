import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FastNavigateButton from "@/components/FastNavigateButton";
import { Target, Users, TrendingUp, Mail, Phone, Globe, BarChart3, CheckCircle, ArrowRight, Zap } from "lucide-react";

export default function LeadGenerationPage() {
  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="Lead Generation Services - ELP Data"
        description="Professional B2B lead generation services with verified contact data, advanced targeting, and multi-channel outreach campaigns. Generate high-quality leads that convert into revenue."
        keywords="lead generation, B2B leads, contact data, sales leads, prospecting, outreach campaigns"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 to-blue-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-heading font-bold text-white mb-6">
                Professional Lead Generation Services
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Generate high-quality B2B leads with our verified contact database, advanced targeting algorithms, and multi-channel outreach campaigns. Turn prospects into revenue with precision targeting and personalized engagement.
              </p>
              <div className="flex flex-wrap gap-6 text-blue-100 mb-8">
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  <span>96% Data Accuracy</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>500M+ Contacts</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  <span>40% Higher Conversion</span>
                </div>
              </div>
              <div className="flex gap-4">
                <FastNavigateButton 
                  href="/request-sample?samples=Lead%20Generation%20Services"
                  size="lg" 
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3"
                >
                  Request Lead Generation
                </FastNavigateButton>
                <FastNavigateButton 
                  href="/contact-us"
                  size="lg" 
                  variant="outline" 
                  className="border-blue-200 text-blue-100 hover:bg-blue-100 hover:text-blue-900 px-8 py-3"
                >
                  Consult Expert
                </FastNavigateButton>
              </div>
            </div>
            <div className="relative">
              <div className="bg-blue-700 rounded-2xl p-8 shadow-2xl">
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-gray-600">Lead Quality Score</span>
                      <span className="text-lg font-bold text-green-600">94%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '94%'}}></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-1">2.8M</div>
                      <div className="text-sm text-gray-600">Monthly Leads</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-green-600 mb-1">35%</div>
                      <div className="text-sm text-gray-600">Conversion Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Generation Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
              Complete Lead Generation Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              From prospect identification to qualified lead delivery, our comprehensive services cover every aspect of B2B lead generation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 border-2 hover:border-blue-500 transition-colors">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-2xl mb-2">Targeted Prospecting</CardTitle>
                <CardDescription className="text-gray-600">
                  Advanced targeting using firmographic, technographic, and intent data to identify high-value prospects matching your ideal customer profile.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Technographic Targeting</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Intent Data Analysis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Account-Based Targeting</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 border-2 hover:border-green-500 transition-colors">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-2xl mb-2">Multi-Channel Outreach</CardTitle>
                <CardDescription className="text-gray-600">
                  Coordinated outreach campaigns across email, LinkedIn, phone, and direct mail to maximize engagement and response rates.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Email Sequences</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">LinkedIn Outreach</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Cold Calling Campaigns</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 border-2 hover:border-purple-500 transition-colors">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-2xl mb-2">Lead Qualification</CardTitle>
                <CardDescription className="text-gray-600">
                  Advanced lead scoring and qualification processes to ensure you receive only the highest-quality prospects ready for sales engagement.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">BANT Qualification</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Behavioral Scoring</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Sales-Ready Handoff</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Lead Generation Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
              Our Lead Generation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              A systematic approach to identifying, engaging, and qualifying prospects for your sales pipeline
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Research & Targeting</h3>
              <p className="text-gray-600">
                Identify ideal customer profiles using advanced data analytics and market intelligence.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Content Creation</h3>
              <p className="text-gray-600">
                Develop personalized messaging and content that resonates with your target audience.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Multi-Channel Outreach</h3>
              <p className="text-gray-600">
                Execute coordinated campaigns across email, social media, and direct communication channels.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Lead Qualification</h3>
              <p className="text-gray-600">
                Score and qualify leads to ensure your sales team receives high-intent prospects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
              Lead Generation Performance
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Proven results across industries and company sizes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center p-8">
              <div className="text-4xl font-bold text-blue-600 mb-2">96%</div>
              <p className="text-gray-600">Data Accuracy Rate</p>
            </Card>
            
            <Card className="text-center p-8">
              <div className="text-4xl font-bold text-green-600 mb-2">35%</div>
              <p className="text-gray-600">Average Conversion Rate</p>
            </Card>
            
            <Card className="text-center p-8">
              <div className="text-4xl font-bold text-purple-600 mb-2">2.8M</div>
              <p className="text-gray-600">Monthly Lead Volume</p>
            </Card>
            
            <Card className="text-center p-8">
              <div className="text-4xl font-bold text-orange-600 mb-2">24h</div>
              <p className="text-gray-600">Average Response Time</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-heading font-bold text-white mb-6">
            Ready to Generate Quality Leads?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Start your lead generation campaign today and see immediate results in your sales pipeline
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FastNavigateButton 
              href="/request-sample?samples=Lead%20Generation%20Services"
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3"
            >
              Start Lead Generation
            </FastNavigateButton>
            <FastNavigateButton 
              href="/contact-us"
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3"
            >
              Schedule Consultation
            </FastNavigateButton>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}