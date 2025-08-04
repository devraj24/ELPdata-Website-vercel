import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Stethoscope, Building, Users, TrendingUp } from "lucide-react";

export default function EpicUsersListPage() {
  const epicModules = [
    { name: "CareConnect Epic EHR", companies: "4,312" },
    { name: "Epic Anesthesia", companies: "3,890" },
    { name: "Epic ASAP", companies: "2,156" },
    { name: "Epic Beacon", companies: "3,567" },
    { name: "Epic Beaker", companies: "4,123" },
    { name: "Epic Bridges", companies: "2,890" },
    { name: "Epic Caboodle", companies: "3,234" },
    { name: "Epic Cadence", companies: "5,678" },
    { name: "Epic Care Everywhere", companies: "6,234" },
    { name: "Epic Cheers", companies: "1,890" },
    { name: "Epic Clarity", companies: "7,456" },
    { name: "Epic ClinDoc", companies: "3,123" },
    { name: "Epic Cupid", companies: "2,567" },
    { name: "Epic EHR", companies: "8,901" },
    { name: "Epic Health Information Management", companies: "3,456" },
    { name: "Epic Healthy Planet", companies: "2,234" },
    { name: "Epic Hyperdrive", companies: "4,567" },
    { name: "Epic Identity", companies: "3,789" },
    { name: "Epic MyChart", companies: "9,234" },
    { name: "Epic MyChart Bedside", companies: "2,890" },
    { name: "Epic NoteReader CDI", companies: "1,567" },
    { name: "Epic Nurse Triage", companies: "3,890" },
    { name: "Epic Optime", companies: "4,234" },
    { name: "Epic Prelude", companies: "2,678" },
    { name: "Epic Radiant", companies: "5,123" },
    { name: "Epic Resolute", companies: "6,456" },
    { name: "Epic Secure Chat", companies: "3,567" },
    { name: "Epic Stork", companies: "2,123" },
    { name: "Epic Systems", companies: "12,345" },
    { name: "Epic Tapestry", companies: "4,789" },
    { name: "Epic Willow", companies: "3,234" },
    { name: "EpicCare", companies: "7,890" },
    { name: "EpicCare Ambulatory", companies: "6,123" },
    { name: "EpicCare Inpatient", companies: "5,567" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Breadcrumbs />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-blue-700 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl font-heading font-bold mb-6">Epic Healthcare Users</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Connect with 30,800+ healthcare organizations using Epic EHR systems. Target CIOs, Epic analysts, and clinical informatics professionals implementing Epic modules across hospitals, health systems, and medical practices.
            </p>
            <div className="flex justify-center gap-4">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">30.8K</div>
                  <div className="text-sm text-white/80">Companies</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">82K</div>
                  <div className="text-sm text-white/80">Records</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white">85%</div>
                  <div className="text-sm text-white/80">Data Accuracy</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Epic Implementation Categories */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">Epic Implementation Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Healthcare organizations implementing Epic EHR solutions for patient care, clinical documentation, and hospital management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Stethoscope className="w-6 h-6 text-green-500" />
                  Epic Clinical Systems
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Core Epic EHR and clinical documentation systems for patient care
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Epic EHR</Badge>
                  <Badge variant="secondary">EpicCare Ambulatory</Badge>
                  <Badge variant="secondary">EpicCare Inpatient</Badge>
                  <Badge variant="secondary">Epic Clarity</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Primary Healthcare Settings:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Academic Medical Centers</li>
                    <li>• Large Hospital Systems</li>
                    <li>• Multi-specialty Clinics</li>
                    <li>• Integrated Health Networks</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Decision Makers:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Chief Medical Officers</li>
                    <li>• Epic Application Analysts</li>
                    <li>• Clinical Informatics Directors</li>
                    <li>• Healthcare IT Directors</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-blue-500" />
                  Patient Engagement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Epic MyChart and patient portal solutions for engagement
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Epic MyChart</Badge>
                  <Badge variant="secondary">MyChart Bedside</Badge>
                  <Badge variant="secondary">Epic Secure Chat</Badge>
                  <Badge variant="secondary">Epic Care Everywhere</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Implementation Focus:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Patient portal adoption</li>
                    <li>• Mobile health engagement</li>
                    <li>• Telehealth integration</li>
                    <li>• Care coordination</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="w-6 h-6 text-purple-500" />
                  Revenue & Operations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Epic revenue cycle and operational management systems
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Epic Resolute</Badge>
                  <Badge variant="secondary">Epic Cadence</Badge>
                  <Badge variant="secondary">Epic Prelude</Badge>
                  <Badge variant="secondary">Epic Healthy Planet</Badge>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded">
                  <div className="text-sm font-semibold text-gray-900">Key Challenges:</div>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Revenue cycle optimization</li>
                    <li>• Claims processing efficiency</li>
                    <li>• Financial reporting accuracy</li>
                    <li>• Population health analytics</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Epic Modules List */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Epic Modules & Applications</h2>
            <p className="text-lg text-gray-600">Complete list of Epic healthcare applications and modules</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {epicModules.map((module, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">{module.name}</h3>
                      <div className="text-lg font-bold text-green-600">{module.companies}</div>
                      <div className="text-xs text-gray-500">Companies</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Related Healthcare Lists */}
      <section className="bg-white py-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Related Healthcare Technology Lists</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <a href="/cerner-users-list" className="group p-4 bg-gray-50 rounded-lg border hover:border-blue-300 hover:shadow-md transition-all">
              <div className="text-lg font-bold text-blue-600">24.5K</div>
              <div className="text-sm text-gray-700">Cerner Users</div>
            </a>
            <a href="/allscripts-users-list" className="group p-4 bg-gray-50 rounded-lg border hover:border-blue-300 hover:shadow-md transition-all">
              <div className="text-lg font-bold text-blue-600">18.3K</div>
              <div className="text-sm text-gray-700">Allscripts Users</div>
            </a>
            <a href="/meditech-users-list" className="group p-4 bg-gray-50 rounded-lg border hover:border-blue-300 hover:shadow-md transition-all">
              <div className="text-lg font-bold text-blue-600">15.7K</div>
              <div className="text-sm text-gray-700">Meditech Users</div>
            </a>
            <a href="/athenahealth-users-list" className="group p-4 bg-gray-50 rounded-lg border hover:border-blue-300 hover:shadow-md transition-all">
              <div className="text-lg font-bold text-blue-600">12.4K</div>
              <div className="text-sm text-gray-700">athenahealth Users</div>
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}