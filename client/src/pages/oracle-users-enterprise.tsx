import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, Server, Cloud, Shield, BarChart, Cpu } from "lucide-react";

export default function OracleUsersListPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Oracle Database Users List",
    "description": "Access verified contacts of Oracle Database administrators and architects across 58,392+ installations implementing RAC, Exadata, and Cloud Database solutions.",
    "provider": {
      "@type": "Organization",
      "name": "ELP Data"
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Database Vendors, Cloud Providers, Enterprise Software Companies"
    },
    "serviceType": "Database User Database",
    "areaServed": "Global"
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="Oracle Database Users List | 58K+ Enterprise Installations | ELP Data"
        description="Connect with Oracle Database administrators, architects, and IT managers across 58,392+ installations. Target RAC, Exadata, and Cloud Database implementations with verified contacts."
        keywords="Oracle Database users, Oracle DBA contacts, database administrators, Oracle RAC, Exadata users, Oracle Cloud Database, enterprise database"
        canonical="https://elpdata.com/oracle-users-enterprise"
        structuredData={structuredData}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-orange-700 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl font-heading font-bold mb-6">Oracle Database Users</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Connect with 58,392+ organizations running Oracle database systems. Target database administrators, Oracle architects, and IT managers implementing Oracle Database, RAC, and Exadata for mission-critical enterprise applications.
            </p>
            <div className="flex justify-center gap-4">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">58,392</div>
                  <div className="text-sm text-white/80">Oracle Installations</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">32%</div>
                  <div className="text-sm text-white/80">Enterprise Database Market</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">99.95%</div>
                  <div className="text-sm text-white/80">Uptime SLA</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Oracle Implementation Categories Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">Oracle Database Implementation Types</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organizations implementing Oracle database solutions for transaction processing, data warehousing, and enterprise applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-red-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="w-6 h-6 text-red-500" />
                  Oracle Database Enterprise
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  High-availability OLTP databases with RAC clustering and Data Guard
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Oracle RAC Clustering</Badge>
                  <Badge variant="secondary">Data Guard Standby</Badge>
                  <Badge variant="secondary">Advanced Security</Badge>
                  <Badge variant="secondary">Partitioning & Compression</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Financial Services & Banking</li>
                    <li>• Telecommunications</li>
                    <li>• Government Agencies</li>
                    <li>• Large Enterprise Applications</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="w-6 h-6 text-blue-500" />
                  Oracle Exadata Systems
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Engineered systems combining database software with optimized hardware
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Exadata Database Machine</Badge>
                  <Badge variant="secondary">Smart Scan Processing</Badge>
                  <Badge variant="secondary">Storage Indexes</Badge>
                  <Badge variant="secondary">Hybrid Columnar Compression</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Data Warehousing Organizations</li>
                    <li>• High-Transaction Financial Firms</li>
                    <li>• Large Manufacturing Companies</li>
                    <li>• Government Data Centers</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cloud className="w-6 h-6 text-green-500" />
                  Oracle Cloud Database
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Autonomous Database and Database Cloud Services for modern applications
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Autonomous Database</Badge>
                  <Badge variant="secondary">Oracle Cloud Infrastructure</Badge>
                  <Badge variant="secondary">Database as a Service</Badge>
                  <Badge variant="secondary">Machine Learning Integration</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Industries:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Cloud-First Organizations</li>
                    <li>• Digital Transformation Projects</li>
                    <li>• Startups & Scale-ups</li>
                    <li>• DevOps & Agile Development</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}