import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Target, Briefcase, Crown, Settings, TrendingUp } from "lucide-react";

export default function RoleConnect() {
  const roleCategories = [
    {
      title: "C-Level Executives",
      description: "Connect with top-level decision makers across all industries",
      icon: Crown,
      roles: ["CEO", "CTO", "CFO", "CMO", "COO", "CISO"],
      count: "2.8M+",
      color: "bg-purple-500"
    },
    {
      title: "VP Level Leadership",
      description: "Target vice presidents and senior leadership roles",
      icon: Briefcase,
      roles: ["VP Sales", "VP Marketing", "VP Engineering", "VP Operations", "VP Finance", "VP HR"],
      count: "4.2M+",
      color: "bg-blue-500"
    },
    {
      title: "Director Level",
      description: "Reach directors and department heads",
      icon: Users,
      roles: ["IT Director", "Finance Director", "Operations Director", "Marketing Director"],
      count: "6.8M+",
      color: "bg-green-500"
    },
    {
      title: "Manager Level",
      description: "Connect with managers and team leaders",
      icon: Settings,
      roles: ["Project Manager", "Product Manager", "Sales Manager", "HR Manager"],
      count: "12.5M+",
      color: "bg-orange-500"
    },
    {
      title: "Specialists & Analysts",
      description: "Target technical specialists and analysts",
      icon: Target,
      roles: ["Business Analyst", "Data Analyst", "Security Specialist", "Procurement Specialist"],
      count: "8.9M+",
      color: "bg-red-500"
    },
    {
      title: "Technical Roles",
      description: "Reach engineers, developers, and technical staff",
      icon: TrendingUp,
      roles: ["Software Engineer", "Network Engineer", "Cloud Engineer", "DevOps Engineer"],
      count: "15.2M+",
      color: "bg-indigo-500"
    }
  ];

  const targetingFeatures = [
    "Job Title Precision Targeting",
    "Seniority Level Filtering",
    "Department-Based Segmentation",
    "Company Size Targeting",
    "Industry Cross-Referencing",
    "Decision-Making Authority Identification",
    "Budget Responsibility Mapping",
    "Technology Stack Alignment",
    "Reporting Structure Analysis",
    "Career Level Progression Tracking"
  ];

  return (
    <>
      <Helmet>
        <title>Role Connect - Precision Job Title & Role-Based Targeting | ELP Data</title>
        <meta name="description" content="Connect with decision makers through precision role-based targeting. Access 50M+ professional contacts organized by job titles, seniority levels, and decision-making authority." />
        <meta name="keywords" content="role-based targeting, job title targeting, executive targeting, decision maker lists, professional contacts, B2B targeting" />
        <link rel="canonical" href="https://www.elpdata.com/role-connect" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 px-4 py-2 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
              <Target className="h-4 w-4" />
              Role Connect Platform
            </div>
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Precision Role-Based
              <span className="text-blue-600 dark:text-blue-400"> Targeting</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Connect with the right decision makers through advanced role-based targeting. Access 50M+ verified professional contacts organized by job titles, seniority levels, and decision-making authority.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Start Role Targeting
              </Button>
              <Button variant="outline" size="lg">
                View Sample Data
              </Button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">50M+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Professional Contacts</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">500+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Job Title Categories</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">98%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Data Accuracy</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">24/7</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Data Updates</div>
              </CardContent>
            </Card>
          </div>

          {/* Role Categories */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Target by Role & Seniority Level
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {roleCategories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`p-3 rounded-lg ${category.color}`}>
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{category.title}</CardTitle>
                          <Badge variant="secondary">{category.count} contacts</Badge>
                        </div>
                      </div>
                      <CardDescription>{category.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {category.roles.map((role, roleIndex) => (
                          <Badge key={roleIndex} variant="outline" className="text-xs">
                            {role}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Targeting Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Advanced Targeting Capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {targetingFeatures.map((feature, index) => (
                <Card key={index} className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white dark:bg-gray-800 rounded-2xl p-12 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Connect with Decision Makers?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Start targeting the right professionals with Role Connect's precision targeting capabilities. Get instant access to verified contacts organized by role and authority level.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Get Started Today
              </Button>
              <Button variant="outline" size="lg">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}