import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FastNavigateButton from "@/components/FastNavigateButton";
import { Brain, Target, TrendingUp, Search, Globe, Users, CheckCircle, ArrowRight, Zap, BarChart3 } from "lucide-react";

export default function IntentDataSolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="Intent Data Solutions - ELP Data"
        description="Advanced intent data solutions that identify prospects actively researching your solutions. Capture buying signals, prioritize accounts, and engage at the perfect moment with B2B intent intelligence."
        keywords="intent data, buyer intent, purchase intent, B2B intelligence, sales signals, prospect research, account prioritization"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-800 to-indigo-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-heading font-bold text-white mb-6">
                Intent Data Solutions
              </h1>
              <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
                Identify prospects actively researching your solutions with advanced intent data intelligence. Capture buying signals, prioritize high-intent accounts, and engage at the perfect moment to maximize conversion rates.
              </p>
              <div className="flex flex-wrap gap-6 text-indigo-100 mb-8">
                <div className="flex items-center gap-2">
                  <Brain className="w-5 h-5" />
                  <span>AI-Powered Insights</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  <span>95% Signal Accuracy</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  <span>3x Higher Conversion</span>
                </div>
              </div>
              <div className="flex gap-4">
                <FastNavigateButton 
                  href="/request-sample?samples=Intent%20Data%20Solutions"
                  size="lg" 
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3"
                >
                  Get Intent Data
                </FastNavigateButton>
                <FastNavigateButton 
                  href="/contact-us"
                  size="lg" 
                  variant="outline" 
                  className="border-indigo-200 text-indigo-100 hover:bg-indigo-100 hover:text-indigo-900 px-8 py-3"
                >
                  Schedule Demo
                </FastNavigateButton>
              </div>
            </div>
            <div className="relative">
              <div className="bg-indigo-700 rounded-2xl p-8 shadow-2xl">
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-gray-600">Buying Intent Score</span>
                      <span className="text-lg font-bold text-green-600">High</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Research Activity</span>
                        <span className="font-medium">92%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{width: '92%'}}></div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-indigo-600 mb-1">250K</div>
                      <div className="text-sm text-gray-600">Active Signals</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-orange-600 mb-1">85%</div>
                      <div className="text-sm text-gray-600">Intent Accuracy</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intent Data Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
              Comprehensive Intent Data Intelligence
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Multiple intent signal types to identify prospects at every stage of the buying journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 border-2 hover:border-indigo-500 transition-colors">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Search className="w-6 h-6 text-indigo-600" />
                </div>
                <CardTitle className="text-2xl mb-2">Search Intent</CardTitle>
                <CardDescription className="text-gray-600">
                  Monitor keyword research patterns and search behavior to identify prospects actively seeking solutions in your category.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Keyword Monitoring</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Topic Clustering</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Competitor Analysis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Search Volume Trends</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 border-2 hover:border-blue-500 transition-colors">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-2xl mb-2">Website Intent</CardTitle>
                <CardDescription className="text-gray-600">
                  Track content consumption patterns and website behavior to identify prospects researching your solutions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Content Engagement</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Page Visit Patterns</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Download Activity</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Time on Site</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 border-2 hover:border-green-500 transition-colors">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-2xl mb-2">Technographic Intent</CardTitle>
                <CardDescription className="text-gray-600">
                  Identify technology adoption patterns and infrastructure changes that signal buying opportunities.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Technology Stack Analysis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Contract Expiration Tracking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Implementation Signals</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Migration Indicators</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Intent Data Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
              How Intent Data Works
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              From signal capture to actionable insights in real-time
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Data Collection</h3>
              <p className="text-gray-600">
                Monitor billions of digital touchpoints across the web to capture intent signals in real-time.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Analysis</h3>
              <p className="text-gray-600">
                Advanced machine learning algorithms analyze patterns and score intent levels for each prospect.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Account Prioritization</h3>
              <p className="text-gray-600">
                Rank accounts by intent score and buying stage to focus on the highest-value opportunities.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Actionable Alerts</h3>
              <p className="text-gray-600">
                Receive real-time notifications when prospects show high buying intent for immediate follow-up.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intent Data Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">
                Transform Your Sales Performance
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Intent data provides the competitive advantage you need to identify, prioritize, and engage prospects at the perfect moment.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">3x Higher Conversion Rates</h3>
                    <p className="text-gray-600">
                      Engage prospects when they're actively researching solutions, resulting in significantly higher conversion rates.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">50% Shorter Sales Cycles</h3>
                    <p className="text-gray-600">
                      Identify prospects already in the buying process to accelerate deals and reduce time to close.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">2x Pipeline Growth</h3>
                    <p className="text-gray-600">
                      Increase qualified pipeline by focusing efforts on accounts showing genuine buying interest.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">95%</div>
                  <p className="text-gray-600">Intent Signal Accuracy</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">250K</div>
                    <p className="text-sm text-gray-600">Daily Signals</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">50M</div>
                    <p className="text-sm text-gray-600">Companies Tracked</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600 mb-1">24/7</div>
                    <p className="text-sm text-gray-600">Real-time Monitoring</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600 mb-1">API</div>
                    <p className="text-sm text-gray-600">Integration Ready</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
              Intent Data Use Cases
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Practical applications across sales, marketing, and customer success teams
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl mb-2">Account Prioritization</CardTitle>
                <CardDescription>
                  Rank target accounts by intent score to focus sales efforts on the most promising opportunities.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl mb-2">Competitive Displacement</CardTitle>
                <CardDescription>
                  Identify prospects researching competitors and position your solution as the better alternative.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl mb-2">Customer Expansion</CardTitle>
                <CardDescription>
                  Monitor existing customers for expansion opportunities based on new product research activity.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl mb-2">Content Personalization</CardTitle>
                <CardDescription>
                  Customize marketing content and messaging based on specific topics prospects are researching.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl mb-2">Event Targeting</CardTitle>
                <CardDescription>
                  Identify high-intent prospects for targeted invitations to webinars, demos, and events.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl mb-2">Churn Prevention</CardTitle>
                <CardDescription>
                  Detect when customers research alternatives and proactively address retention risks.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-heading font-bold text-white mb-6">
            Start Capturing Buying Intent Today
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Transform your sales and marketing performance with actionable intent data intelligence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FastNavigateButton 
              href="/request-sample?samples=Intent%20Data%20Solutions"
              size="lg" 
              className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3"
            >
              Get Intent Data Demo
            </FastNavigateButton>
            <FastNavigateButton 
              href="/contact-us"
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-3"
            >
              Speak with Expert
            </FastNavigateButton>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}