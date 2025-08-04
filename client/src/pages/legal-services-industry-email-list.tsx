import { Users, Scale, MapPin, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FastNavigateButton from "@/components/FastNavigateButton";

export default function LegalServicesIndustryEmailList() {
  const legalTitles = [
    { title: "Partners & Managing Partners", count: "123,456", description: "Leading law firms and legal practices" },
    { title: "Corporate Attorneys", count: "234,567", description: "Providing corporate and business legal services" },
    { title: "Litigation Attorneys", count: "189,234", description: "Handling legal disputes and court proceedings" },
    { title: "Legal Operations Directors", count: "89,765", description: "Managing law firm operations and efficiency" },
    { title: "Paralegals", count: "345,678", description: "Supporting attorneys with legal research and documentation" },
    { title: "Legal Technology Directors", count: "76,543", description: "Managing legal technology and systems" },
    { title: "Compliance Officers", count: "156,789", description: "Ensuring regulatory compliance and risk management" },
    { title: "Legal Secretaries", count: "298,765", description: "Providing administrative support to legal teams" },
    { title: "Contract Managers", count: "167,890", description: "Managing contracts and legal agreements" },
    { title: "Intellectual Property Attorneys", count: "134,567", description: "Handling IP law and patent matters" }
  ];

  const keyMetrics = [
    { label: "Total Professionals", value: "1.82M+", icon: Users },
    { label: "Legal Firms", value: "78,400+", icon: Scale },
    { label: "Coverage", value: "All 50 States", icon: MapPin },
    { label: "Data Accuracy", value: "99.1%", icon: TrendingUp }
  ];

  return (
    <>
      <SEOHead 
        title="Legal Services Industry Email List - 1.82M+ Verified Contacts | ELP Data"
        description="Access comprehensive legal services industry email database with 1.82M+ verified contacts. Connect with attorneys, partners, and legal professionals."
        keywords="legal services industry email list, attorney contacts, law firm partner database, legal professional contacts"
      />
      <Header />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <Scale className="w-4 h-4 mr-2" />
              Legal Services Industry Intelligence
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Legal Services Industry
              <span className="block text-blue-600">Email Database</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Connect with over 1.82 million legal professionals including attorneys, partners, 
              paralegals, and legal operations specialists across all practice areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FastNavigateButton 
                href="/request-contacts?industry=Legal"
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700"
              >
                Get Legal Services Contacts
              </FastNavigateButton>
              <FastNavigateButton 
                href="/request-sample?samples=Legal%20Services%20Sample%20Data"
                size="lg" 
                variant="outline"
              >
                Request Sample Data
              </FastNavigateButton>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {keyMetrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <Icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                    <div className="text-sm text-gray-600">{metric.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Key Legal Professionals
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {legalTitles.map((title, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-600">{title.title}</CardTitle>
                    <CardDescription>{title.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">{title.count} contacts</Badge>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => window.open(`/contact-us?industry=legal-services&role=${encodeURIComponent(title.title)}`, '_blank')}
                      >
                        Get Contacts
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-gray-900">Get Legal Services Contacts</CardTitle>
              <CardDescription>
                Access verified legal services industry email lists for your marketing campaigns
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input placeholder="First Name" />
                <Input placeholder="Last Name" />
              </div>
              <Input placeholder="Business Email" />
              <Input placeholder="Company Name" />
              <Input placeholder="Phone Number" />
              <Textarea placeholder="Specific legal practice areas or requirements..." />
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Request Legal Services Database Access
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </>
  );
}