import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FastNavigateButton from "@/components/FastNavigateButton";
import { Zap, Target, BarChart3, Mail, Globe, Users, CheckCircle, ArrowRight, Bot, MessageSquare } from "lucide-react";

export default function MarketingPlatformsPage() {
  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="All Marketing Platforms - ELP Data"
        description="Comprehensive marketing platform solutions including email marketing, marketing automation, CRM integration, analytics, and multi-channel campaign management for complete marketing operations."
        keywords="marketing platforms, email marketing, automation, CRM, analytics, campaign management, marketing technology"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-800 to-purple-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-heading font-bold text-white mb-6">
                All Marketing Platforms
              </h1>
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                Complete marketing technology stack with integrated platforms for email marketing, automation, CRM, analytics, and campaign management. Scale your marketing operations with enterprise-grade solutions.
              </p>
              <div className="flex flex-wrap gap-6 text-purple-100 mb-8">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  <span>15+ Integrated Platforms</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>Unified Customer Data</span>
                </div>
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  <span>360° Analytics</span>
                </div>
              </div>
              <div className="flex gap-4">
                <FastNavigateButton 
                  href="/request-sample?samples=Marketing%20Platforms%20Suite"
                  size="lg" 
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3"
                >
                  Request Platform Demo
                </FastNavigateButton>
                <FastNavigateButton 
                  href="/contact-us"
                  size="lg" 
                  variant="outline" 
                  className="border-purple-200 text-purple-100 hover:bg-purple-100 hover:text-purple-900 px-8 py-3"
                >
                  Consult Expert
                </FastNavigateButton>
              </div>
            </div>
            <div className="relative">
              <div className="bg-purple-700 rounded-2xl p-8 shadow-2xl">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 text-center">
                      <Mail className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                      <div className="text-lg font-bold text-gray-900">Email</div>
                      <div className="text-sm text-gray-600">Marketing</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center">
                      <Bot className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <div className="text-lg font-bold text-gray-900">AI</div>
                      <div className="text-sm text-gray-600">Automation</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 text-center">
                      <BarChart3 className="w-8 h-8 text-green-600 mx-auto mb-2" />
                      <div className="text-lg font-bold text-gray-900">Analytics</div>
                      <div className="text-sm text-gray-600">Insights</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center">
                      <Users className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                      <div className="text-lg font-bold text-gray-900">CRM</div>
                      <div className="text-sm text-gray-600">Integration</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Marketing Platforms */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
              Integrated Marketing Platform Suite
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Everything you need to manage, automate, and optimize your marketing operations from a single unified platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 border-2 hover:border-purple-500 transition-colors">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-2xl mb-2">Email Marketing Platform</CardTitle>
                <CardDescription className="text-gray-600">
                  Advanced email marketing with automation, segmentation, personalization, and comprehensive analytics.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Drag-and-drop Editor</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Advanced Segmentation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">A/B Testing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Delivery Optimization</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 border-2 hover:border-blue-500 transition-colors">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Bot className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-2xl mb-2">Marketing Automation</CardTitle>
                <CardDescription className="text-gray-600">
                  AI-powered automation workflows for lead nurturing, customer onboarding, and lifecycle marketing.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Workflow Builder</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Lead Scoring</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Behavioral Triggers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Multi-channel Automation</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 border-2 hover:border-green-500 transition-colors">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-2xl mb-2">CRM Integration</CardTitle>
                <CardDescription className="text-gray-600">
                  Seamless integration with leading CRM platforms for unified customer data and sales alignment.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Salesforce Integration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">HubSpot Connector</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Lead Sync</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Activity Tracking</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 border-2 hover:border-orange-500 transition-colors">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="text-2xl mb-2">Analytics & Reporting</CardTitle>
                <CardDescription className="text-gray-600">
                  Comprehensive analytics dashboard with real-time reporting and performance insights.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Real-time Dashboards</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Custom Reports</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">ROI Tracking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Attribution Modeling</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 border-2 hover:border-red-500 transition-colors">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle className="text-2xl mb-2">Social Media Management</CardTitle>
                <CardDescription className="text-gray-600">
                  Unified social media management with scheduling, monitoring, and engagement tools.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Multi-platform Publishing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Content Calendar</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Social Listening</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Engagement Tracking</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 border-2 hover:border-indigo-500 transition-colors">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-indigo-600" />
                </div>
                <CardTitle className="text-2xl mb-2">Landing Page Builder</CardTitle>
                <CardDescription className="text-gray-600">
                  Professional landing page creation with conversion optimization and A/B testing capabilities.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Template Library</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Mobile Responsive</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Form Builder</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Conversion Tracking</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Platform Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
              Why Choose Our Marketing Platform Suite
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Unified, integrated, and optimized for maximum marketing performance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Unified Data & Insights</h3>
                  <p className="text-gray-600">
                    Single source of truth for all marketing data with unified customer profiles and comprehensive analytics across all channels.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Advanced Personalization</h3>
                  <p className="text-gray-600">
                    AI-powered personalization engine that delivers relevant content and experiences based on customer behavior and preferences.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Scalable Architecture</h3>
                  <p className="text-gray-600">
                    Enterprise-grade infrastructure that scales with your business growth and handles millions of contacts and interactions.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">500M+</div>
                  <p className="text-gray-600">Contacts Managed</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">15+</div>
                    <p className="text-sm text-gray-600">Platforms</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">99.9%</div>
                    <p className="text-sm text-gray-600">Uptime</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600 mb-1">24/7</div>
                    <p className="text-sm text-gray-600">Support</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600 mb-1">GDPR</div>
                    <p className="text-sm text-gray-600">Compliant</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-heading font-bold text-white mb-6">
            Ready to Unify Your Marketing Operations?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get access to our complete marketing platform suite and transform your marketing performance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FastNavigateButton 
              href="/request-sample?samples=Marketing%20Platforms%20Suite"
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3"
            >
              Request Platform Demo
            </FastNavigateButton>
            <FastNavigateButton 
              href="/contact-us"
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3"
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