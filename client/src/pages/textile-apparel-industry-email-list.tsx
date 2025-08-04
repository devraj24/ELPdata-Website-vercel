import { Users, Shirt, MapPin, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TextileApparelIndustryEmailList() {
  const textileTitles = [
    { title: "Fashion Designers", count: "234,567", description: "Creating clothing and fashion designs" },
    { title: "Production Managers", count: "345,678", description: "Managing textile and apparel manufacturing" },
    { title: "Merchandising Directors", count: "189,234", description: "Managing product merchandising and retail strategy" },
    { title: "Textile Engineers", count: "156,789", description: "Developing textile materials and production processes" },
    { title: "Quality Control Specialists", count: "198,765", description: "Ensuring product quality and standards" },
    { title: "Supply Chain Coordinators", count: "267,890", description: "Managing textile supply chain operations" },
    { title: "Brand Managers", count: "178,234", description: "Managing fashion and textile brand strategies" },
    { title: "Retail Buyers", count: "234,567", description: "Purchasing textiles and apparel for retail" },
    { title: "Sustainability Directors", count: "123,456", description: "Leading sustainable fashion initiatives" },
    { title: "Pattern Makers", count: "145,678", description: "Creating patterns for garment production" }
  ];

  const keyMetrics = [
    { label: "Total Professionals", value: "2.07M+", icon: Users },
    { label: "Textile Companies", value: "34,800+", icon: Shirt },
    { label: "Coverage", value: "All 50 States", icon: MapPin },
    { label: "Data Accuracy", value: "98.7%", icon: TrendingUp }
  ];

  return (
    <>
      <SEOHead 
        title="Textile & Apparel Industry Email List - 2.07M+ Verified Contacts | ELP Data"
        description="Access comprehensive textile & apparel industry email database with 2.07M+ verified contacts. Connect with fashion designers, production managers, and retail buyers."
        keywords="textile apparel industry email list, fashion designer contacts, production manager database, retail buyer professionals"
      />
      <Header />
      
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-slate-50">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-pink-100 text-pink-800 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <Shirt className="w-4 h-4 mr-2" />
              Textile & Apparel Industry Intelligence
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Textile & Apparel Industry
              <span className="block text-pink-600">Email Database</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Connect with over 2.07 million textile & apparel professionals including fashion designers, 
              production managers, merchandising directors, and retail specialists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FastNavigateButton 
                href="/request-contacts?industry=Textile"
                size="lg" 
                className="bg-pink-600 hover:bg-pink-700"
              >
                Get Textile & Apparel Contacts
              </FastNavigateButton>
              <FastNavigateButton 
                href="/request-sample?samples=Textile%20Apparel%20Sample%20Data"
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
                    <Icon className="w-8 h-8 text-pink-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                    <div className="text-sm text-gray-600">{metric.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Key Textile & Apparel Professionals
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {textileTitles.map((title, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-pink-600">{title.title}</CardTitle>
                    <CardDescription>{title.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">{title.count} contacts</Badge>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => window.open(`/contact-us?industry=textile-apparel&role=${encodeURIComponent(title.title)}`, '_blank')}
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
              <CardTitle className="text-2xl text-gray-900">Get Textile & Apparel Contacts</CardTitle>
              <CardDescription>
                Access verified textile & apparel industry email lists for your marketing campaigns
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
              <Textarea placeholder="Specific textile & apparel segments or requirements..." />
              <Button className="w-full bg-pink-600 hover:bg-pink-700">
                Request Textile & Apparel Database Access
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </>
  );
}