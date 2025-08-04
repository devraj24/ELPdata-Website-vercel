import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Shield, FileText, AlertTriangle, Search, Award, BarChart3 } from "lucide-react";

const riskSolutions = [
  {
    title: "Business Credit Reports",
    description: "Comprehensive credit analysis and financial health assessment for informed business decisions",
    icon: <FileText className="w-8 h-8 text-teal-600" />,
    features: [
      "Real-time credit scoring",
      "Financial stability analysis",
      "Payment history tracking",
      "Industry benchmarking",
      "Risk trend monitoring"
    ],
    coverage: [
      "50M+ businesses worldwide",
      "200+ countries",
      "Real-time updates",
      "Historical data analysis"
    ],
    pricing: "Starting at $25 per report",
    href: "/pages/business_credit_reports"
  },
  {
    title: "Compliance Solutions",
    description: "Ensure regulatory compliance with automated monitoring and comprehensive compliance frameworks",
    icon: <Award className="w-8 h-8 text-blue-600" />,
    features: [
      "Regulatory change tracking",
      "Automated compliance monitoring",
      "Risk assessment frameworks",
      "Audit trail management",
      "Policy documentation"
    ],
    coverage: [
      "GDPR compliance",
      "SOX requirements",
      "Industry regulations",
      "Global standards"
    ],
    pricing: "Starting at $2,500/month",
    href: "/pages/compliance_solutions"
  },
  {
    title: "Fraud Prevention",
    description: "Advanced fraud detection and prevention systems to protect your business from financial losses",
    icon: <Shield className="w-8 h-8 text-red-600" />,
    features: [
      "Real-time fraud detection",
      "Machine learning algorithms",
      "Identity verification",
      "Transaction monitoring",
      "Risk scoring models"
    ],
    coverage: [
      "99.9% fraud detection rate",
      "Real-time alerts",
      "Multi-channel protection",
      "24/7 monitoring"
    ],
    pricing: "Starting at $1,500/month",
    href: "/pages/fraud_prevention"
  },
  {
    title: "Risk Assessment Tools",
    description: "Comprehensive risk analysis tools to identify, evaluate, and mitigate business risks effectively",
    icon: <BarChart3 className="w-8 h-8 text-orange-600" />,
    features: [
      "Risk identification matrices",
      "Probability assessment",
      "Impact analysis",
      "Mitigation strategies",
      "Risk reporting dashboards"
    ],
    coverage: [
      "Financial risks",
      "Operational risks", 
      "Strategic risks",
      "Compliance risks"
    ],
    pricing: "Starting at $800/month",
    href: "/pages/risk_assessment_tools"
  },
  {
    title: "Due Diligence Services",
    description: "Thorough due diligence investigations for mergers, acquisitions, and partnership decisions",
    icon: <Search className="w-8 h-8 text-blue-600" />,
    features: [
      "Financial due diligence",
      "Legal compliance review",
      "Background investigations",
      "Market analysis",
      "Regulatory assessment"
    ],
    coverage: [
      "M&A transactions",
      "Partnership evaluations",
      "Vendor assessments",
      "Investment decisions"
    ],
    pricing: "Custom project pricing",
    href: "/pages/due_diligence_services"
  }
];

const riskCategories = [
  {
    category: "Financial Risk",
    description: "Credit risk, market risk, liquidity risk",
    tools: ["Credit reports", "Financial analysis", "Market monitoring"]
  },
  {
    category: "Operational Risk", 
    description: "Process failures, system issues, human errors",
    tools: ["Process audits", "System monitoring", "Training programs"]
  },
  {
    category: "Compliance Risk",
    description: "Regulatory violations, legal non-compliance",
    tools: ["Compliance tracking", "Regulatory updates", "Audit support"]
  },
  {
    category: "Strategic Risk",
    description: "Market changes, competitive threats",
    tools: ["Market analysis", "Competitive intelligence", "Strategic planning"]
  }
];

export default function RiskManagementPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Risk Management</h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Comprehensive risk management solutions to protect your business, ensure compliance, 
            and make informed decisions with confidence in today's complex business environment.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-white">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6" />
              <span className="text-lg font-semibold">99.9% Protection Rate</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6" />
              <span className="text-lg font-semibold">Compliance Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <BarChart3 className="w-6 h-6" />
              <span className="text-lg font-semibold">Real-time Monitoring</span>
            </div>
          </div>
        </div>
      </div>

      {/* Risk Solutions */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Risk Management Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive suite of risk management tools designed to protect and strengthen your business
            </p>
          </div>

          <div className="space-y-8">
            {riskSolutions.map((solution, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-4 gap-8">
                    {/* Solution Info */}
                    <div className="lg:col-span-2">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="p-3 bg-gray-100 rounded-lg">
                          {solution.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{solution.title}</h3>
                          <p className="text-gray-600 text-lg">{solution.description}</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                        <ul className="space-y-2">
                          {solution.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-gray-700">
                              <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Coverage */}
                    <div className="bg-red-50 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-4">Coverage & Capabilities</h4>
                      <ul className="space-y-3">
                        {solution.coverage.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <AlertTriangle className="w-4 h-4 text-red-600" />
                            <span className="text-gray-700 font-medium">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pricing & CTA */}
                    <div className="bg-gray-50 rounded-lg p-6">
                      <div className="text-center mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Pricing</h4>
                        <p className="text-xl font-bold text-teal-600">{solution.pricing}</p>
                      </div>
                      
                      <div className="space-y-3">
                        <Link href="/contact-us">
                          <Button className="w-full bg-teal-600 hover:bg-teal-700">
                            Learn More
                          </Button>
                        </Link>
                        <Link href="/contact-us">
                          <Button variant="outline" className="w-full">
                            Get Assessment
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Risk Categories */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-navy mb-4">Risk Categories We Address</h2>
            <p className="text-lg text-gray-600">Comprehensive coverage across all major business risk areas</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {riskCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-primary-navy flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    {category.category}
                  </CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-primary-navy mb-3">Management Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.tools.map((tool, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-navy mb-4">Why Risk Management Matters</h2>
            <p className="text-lg text-gray-600">Protect your business and enable confident decision-making</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Financial Protection",
                description: "Minimize financial losses through proactive risk identification and mitigation",
                icon: <Shield className="w-12 h-12 text-green-600" />
              },
              {
                title: "Regulatory Compliance",
                description: "Stay compliant with evolving regulations and avoid costly penalties",
                icon: <Award className="w-12 h-12 text-blue-600" />
              },
              {
                title: "Business Continuity",
                description: "Ensure operational resilience and maintain business continuity",
                icon: <BarChart3 className="w-12 h-12 text-purple-600" />
              }
            ].map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary-navy mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="bg-primary-navy py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Risk Management by the Numbers</h2>
            <p className="text-blue-100 text-lg">Proven track record of protecting businesses worldwide</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { metric: "99.9%", label: "Fraud Detection Rate" },
              { metric: "50M+", label: "Businesses Protected" },
              { metric: "24/7", label: "Monitoring Coverage" },
              { metric: "95%", label: "Compliance Success" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary-teal mb-2">{item.metric}</div>
                <div className="text-blue-100 font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Protect Your Business Today
          </h2>
          <p className="text-white mb-8 text-lg">
            Get started with our comprehensive risk management solutions and safeguard your business future.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-primary-teal hover:bg-teal-600 text-white px-8 py-3">
              Start Risk Assessment
            </Button>
            <Link href="/pages/contact">
              <Button size="lg" variant="outline" className="border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white px-8 py-3">
                Speak with Expert
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}