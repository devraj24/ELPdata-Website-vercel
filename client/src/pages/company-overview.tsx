import { Building2, Award, Zap, Phone, Mail, Star, CheckCircle, ArrowRight, Globe, Users, TrendingUp, Shield, Target } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import SEOHead from '../components/SEOHead';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function CompanyOverview() {
  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="ELP Data Company Overview - Premium Data | AI | Automation | Marketing Solutions"
        description="For over 15 years, ELP Data has been the world's most trusted provider of premium technology data and business intelligence solutions, serving 5,000+ clients across 195+ countries."
        keywords="ELP Data company overview, premium technology data, business intelligence, global data provider, technology intelligence"
      />
      <Header />
      
      {/* Executive Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Badge className="bg-gradient-to-r from-orange-500 to-red-600 text-white border-0 px-6 py-3 text-lg font-semibold">
                  <Star className="w-5 h-5 mr-2" />
                  Global Leader Since 2009
                </Badge>
              </div>
              <h1 className="text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
                  ELP Data
                </span>
                <br />
                <span className="text-white text-4xl lg:text-5xl">Company Overview</span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-300 mb-12 max-w-2xl leading-relaxed">
                The world's most trusted provider of premium technology data and business intelligence solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-10 py-6 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300">
                  View Our Services
                  <ArrowRight className="ml-3 w-6 h-6" />
                </Button>
                <Button variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 px-10 py-6 text-lg font-semibold rounded-xl backdrop-blur-sm">
                  Contact Leadership
                </Button>
              </div>
            </div>
            
            {/* Executive Metrics */}
            <div className="grid grid-cols-2 gap-8">
              <Card className="bg-white/10 backdrop-blur-xl border-white/20 p-8 rounded-2xl hover:bg-white/15 transition-all duration-300 group">
                <div className="text-center">
                  <div className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">15+</div>
                  <div className="text-slate-300 text-lg font-medium">Years of Excellence</div>
                  <div className="text-slate-400 text-sm mt-2">Established Leadership</div>
                </div>
              </Card>
              <Card className="bg-white/10 backdrop-blur-xl border-white/20 p-8 rounded-2xl hover:bg-white/15 transition-all duration-300 group">
                <div className="text-center">
                  <div className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">5,000+</div>
                  <div className="text-slate-300 text-lg font-medium">Enterprise Clients</div>
                  <div className="text-slate-400 text-sm mt-2">Global Fortune 500</div>
                </div>
              </Card>
              <Card className="bg-white/10 backdrop-blur-xl border-white/20 p-8 rounded-2xl hover:bg-white/15 transition-all duration-300 group">
                <div className="text-center">
                  <div className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">195+</div>
                  <div className="text-slate-300 text-lg font-medium">Countries Served</div>
                  <div className="text-slate-400 text-sm mt-2">Worldwide Presence</div>
                </div>
              </Card>
              <Card className="bg-white/10 backdrop-blur-xl border-white/20 p-8 rounded-2xl hover:bg-white/15 transition-all duration-300 group">
                <div className="text-center">
                  <div className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">99.2%</div>
                  <div className="text-slate-300 text-lg font-medium">Data Accuracy</div>
                  <div className="text-slate-400 text-sm mt-2">Industry Leading</div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Story Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <Badge className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 text-lg font-semibold mb-8">
              Our Story
            </Badge>
            <h2 className="text-5xl font-bold text-slate-900 mb-8">From Vision to Global Leadership</h2>
            <p className="text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed">
              Founded in 2009, ELP Data emerged from a simple yet powerful vision: to democratize access to premium business intelligence and technology data for organizations worldwide.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            <Card className="bg-white border-2 border-orange-100 p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Mission</h3>
                <p className="text-slate-700 leading-relaxed text-lg">
                  To empower businesses with the most accurate, comprehensive, and actionable technology data and business intelligence solutions available anywhere in the world.
                </p>
              </div>
            </Card>
            
            <Card className="bg-white border-2 border-blue-100 p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <Star className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Vision</h3>
                <p className="text-slate-700 leading-relaxed text-lg">
                  To be the world's most trusted and comprehensive source of technology data and business intelligence, driving growth and innovation across all industries.
                </p>
              </div>
            </Card>
            
            <Card className="bg-white border-2 border-green-100 p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Values</h3>
                <p className="text-slate-700 leading-relaxed text-lg">
                  Accuracy, integrity, innovation, and customer success drive everything we do. We believe in delivering excellence without compromise.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Global Impact Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <Badge className="bg-white/20 text-white px-6 py-3 text-lg font-semibold mb-8">
              Global Impact
            </Badge>
            <h2 className="text-5xl font-bold mb-8">Driving Success Worldwide</h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Our comprehensive data solutions have empowered thousands of organizations to achieve unprecedented growth, reduce risk, and unlock new market opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Enterprise Implementation */}
            <Card className="p-8 border-2 border-blue-100 bg-blue-50">
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <Building2 className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-bold text-blue-800">Enterprise Implementation</h3>
                </div>
                <p className="text-blue-700 mb-6">
                  Company Overview implementation for enterprise implementation and organizational efficiency
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <Badge className="bg-blue-100 text-blue-700 text-center py-2">Enterprise Deployment</Badge>
                  <Badge className="bg-blue-100 text-blue-700 text-center py-2">System Integration</Badge>
                  <Badge className="bg-blue-100 text-blue-700 text-center py-2">User Training</Badge>
                  <Badge className="bg-blue-100 text-blue-700 text-center py-2">Support Services</Badge>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">Target Industries:</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Large Enterprise Organizations</li>
                      <li>• Multi-national Corporations</li>
                      <li>• Fortune 500 Companies</li>
                      <li>• Global Technology Leaders</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">Responsible Job Titles:</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• IT Director</li>
                      <li>• Systems Administrator</li>
                      <li>• Enterprise Architect</li>
                      <li>• Technology Manager</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">Current Challenges:</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Large-scale deployment and configuration challenges</li>
                      <li>• Integration with existing enterprise infrastructure</li>
                      <li>• User adoption and training across multiple locations</li>
                      <li>• Performance optimization for high-volume usage</li>
                      <li>• Security and compliance requirements</li>
                      <li>• License management and cost optimization</li>
                      <li>• Vendor relationship and support coordination</li>
                      <li>• Change management and organizational adoption</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            {/* Business Operations */}
            <Card className="p-8 border-2 border-green-100 bg-green-50">
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <Zap className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="text-2xl font-bold text-green-800">Business Operations</h3>
                </div>
                <p className="text-green-700 mb-6">
                  Company Overview implementation for business operations and organizational efficiency
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <Badge className="bg-green-100 text-green-700 text-center py-2">Process Optimization</Badge>
                  <Badge className="bg-green-100 text-green-700 text-center py-2">Workflow Management</Badge>
                  <Badge className="bg-green-100 text-green-700 text-center py-2">Business Intelligence</Badge>
                  <Badge className="bg-green-100 text-green-700 text-center py-2">Analytics</Badge>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-green-800 mb-2">Target Industries:</h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Manufacturing & Production</li>
                      <li>• Service Industries</li>
                      <li>• Consulting & Professional Services</li>
                      <li>• Retail & Distribution</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-green-800 mb-2">Responsible Job Titles:</h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Operations Manager</li>
                      <li>• Business Analyst</li>
                      <li>• Process Improvement Specialist</li>
                      <li>• Department Head</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-green-800 mb-2">Current Challenges:</h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Business process optimization and automation</li>
                      <li>• Data quality and consistency management</li>
                      <li>• Reporting and analytics requirements</li>
                      <li>• Cross-department collaboration and workflows</li>
                      <li>• Performance metrics and KPI tracking</li>
                      <li>• Regulatory compliance and audit trails</li>
                      <li>• Custom configuration and business rules</li>
                      <li>• Integration with third-party business applications</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Implementation Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Technical Administration */}
            <Card className="p-6 bg-white border-2 border-purple-100">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-purple-800 mb-2">Technical Administration</h3>
                <p className="text-sm text-purple-700 mb-4">
                  Company Overview implementation for technical administration and organizational efficiency
                </p>
                
                <div className="space-y-2 mb-4">
                  <Badge className="bg-purple-100 text-purple-700 text-xs">System Administration</Badge>
                  <Badge className="bg-purple-100 text-purple-700 text-xs">Configuration Management</Badge>
                  <Badge className="bg-purple-100 text-purple-700 text-xs">Performance Tuning</Badge>
                  <Badge className="bg-purple-100 text-purple-700 text-xs">Maintenance</Badge>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-purple-800">Target Industries:</h4>
                    <p className="text-xs text-purple-700">Technology Service Providers, Managed Service Companies, IT Consulting Firms, System Integrators</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-purple-800">Job Titles:</h4>
                    <p className="text-xs text-purple-700">System Administrator, Technical Lead, DevOps Engineer, Infrastructure Specialist</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* User Experience & Training */}
            <Card className="p-6 bg-white border-2 border-orange-100">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-orange-800 mb-2">User Experience & Training</h3>
                <p className="text-sm text-orange-700 mb-4">
                  Company Overview implementation for user experience & training and organizational efficiency
                </p>
                
                <div className="space-y-2 mb-4">
                  <Badge className="bg-orange-100 text-orange-700 text-xs">User Training</Badge>
                  <Badge className="bg-orange-100 text-orange-700 text-xs">Change Management</Badge>
                  <Badge className="bg-orange-100 text-orange-700 text-xs">Support Services</Badge>
                  <Badge className="bg-orange-100 text-orange-700 text-xs">Adoption Programs</Badge>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-orange-800">Target Industries:</h4>
                    <p className="text-xs text-orange-700">Education & Training Organizations, Human Resources Departments, Corporate Training, End-user Support Teams</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-orange-800">Job Titles:</h4>
                    <p className="text-xs text-orange-700">Training Manager, Change Management Specialist, User Experience Manager, Support Team Lead</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Compliance & Security */}
            <Card className="p-6 bg-white border-2 border-red-100">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-red-800 mb-2">Compliance & Security</h3>
                <p className="text-sm text-red-700 mb-4">
                  Company Overview implementation for compliance & security and organizational efficiency
                </p>
                
                <div className="space-y-2 mb-4">
                  <Badge className="bg-red-100 text-red-700 text-xs">Security Management</Badge>
                  <Badge className="bg-red-100 text-red-700 text-xs">Compliance Monitoring</Badge>
                  <Badge className="bg-red-100 text-red-700 text-xs">Risk Assessment</Badge>
                  <Badge className="bg-red-100 text-red-700 text-xs">Audit Preparation</Badge>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-red-800">Target Industries:</h4>
                    <p className="text-xs text-red-700">Regulated Industries, Financial Services, Healthcare Organizations, Government Agencies</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-red-800">Job Titles:</h4>
                    <p className="text-xs text-red-700">Compliance Officer, Security Administrator, Risk Manager, Audit Specialist</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Strategic Planning */}
            <Card className="p-6 bg-white border-2 border-indigo-100">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-indigo-800 mb-2">Strategic Planning</h3>
                <p className="text-sm text-indigo-700 mb-4">
                  Company Overview implementation for strategic planning and organizational efficiency
                </p>
                
                <div className="space-y-2 mb-4">
                  <Badge className="bg-indigo-100 text-indigo-700 text-xs">Strategic Planning</Badge>
                  <Badge className="bg-indigo-100 text-indigo-700 text-xs">Technology Roadmap</Badge>
                  <Badge className="bg-indigo-100 text-indigo-700 text-xs">ROI Analysis</Badge>
                  <Badge className="bg-indigo-100 text-indigo-700 text-xs">Vendor Management</Badge>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-indigo-800">Target Industries:</h4>
                    <p className="text-xs text-indigo-700">Executive Leadership, Strategic Planning Departments, Technology Planning, Business Development</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-indigo-800">Job Titles:</h4>
                    <p className="text-xs text-indigo-700">Chief Technology Officer, IT Strategy Manager, Business Development Director, Strategic Planning Analyst</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}