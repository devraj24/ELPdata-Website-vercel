import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Stethoscope, Brain, Eye, Users, Award, Phone, Mail, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import SEOHead from "@/components/SEOHead";

export default function DoctorsPhysiciansEmailList() {
  const [showAllSpecialists, setShowAllSpecialists] = useState(false);

  const topSpecialists = [
    {
      specialty: "Internal Medicine",
      count: "89,245",
      description: "Primary care physicians specializing in adult medicine",
      icon: Stethoscope,
      color: "bg-blue-500",
      avgSalary: "$220,000 - $280,000",
      keyAreas: ["Primary Care", "Chronic Disease Management", "Preventive Medicine"]
    },
    {
      specialty: "Family Medicine", 
      count: "76,832",
      description: "Comprehensive healthcare for patients of all ages",
      icon: Heart,
      color: "bg-green-500",
      avgSalary: "$210,000 - $270,000",
      keyAreas: ["Family Practice", "Preventive Care", "Chronic Conditions"]
    },
    {
      specialty: "Emergency Medicine",
      count: "45,672",
      description: "Acute care specialists in emergency departments",
      icon: Users,
      color: "bg-red-500",
      avgSalary: "$290,000 - $370,000",
      keyAreas: ["Trauma Care", "Critical Medicine", "Emergency Response"]
    },
    {
      specialty: "Anesthesiology",
      count: "35,062",
      description: "Perioperative care and pain management specialists",
      icon: Brain,
      color: "bg-purple-500",
      avgSalary: "$350,000 - $450,000",
      keyAreas: ["Surgical Anesthesia", "Pain Management", "Critical Care"]
    },
    {
      specialty: "Radiology",
      count: "28,945",
      description: "Medical imaging and diagnostic specialists",
      icon: Eye,
      color: "bg-orange-500",
      avgSalary: "$380,000 - $480,000",
      keyAreas: ["Diagnostic Imaging", "Interventional Procedures", "Medical Technology"]
    },
    {
      specialty: "Cardiology",
      count: "24,783",
      description: "Heart and cardiovascular system specialists",
      icon: Heart,
      color: "bg-red-600",
      avgSalary: "$420,000 - $550,000",
      keyAreas: ["Heart Disease", "Cardiac Procedures", "Cardiovascular Surgery"]
    },
    {
      specialty: "Orthopedic Surgery",
      count: "22,156",
      description: "Musculoskeletal system surgical specialists",
      icon: Award,
      color: "bg-indigo-500",
      avgSalary: "$450,000 - $600,000",
      keyAreas: ["Joint Surgery", "Sports Medicine", "Trauma Surgery"]
    }
  ];

  const additionalSpecialists = [
    {
      specialty: "Dermatology",
      count: "18,934",
      description: "Skin, hair, and nail condition specialists",
      icon: Eye,
      color: "bg-pink-500",
      avgSalary: "$380,000 - $480,000",
      keyAreas: ["Skin Cancer", "Cosmetic Procedures", "Dermatologic Surgery"]
    },
    {
      specialty: "Gastroenterology", 
      count: "16,721",
      description: "Digestive system and liver specialists",
      icon: Stethoscope,
      color: "bg-yellow-500",
      avgSalary: "$390,000 - $490,000",
      keyAreas: ["Digestive Disorders", "Endoscopic Procedures", "Liver Disease"]
    },
    {
      specialty: "Pulmonology",
      count: "14,892",
      description: "Respiratory system and lung specialists",
      icon: Brain,
      color: "bg-cyan-500",
      avgSalary: "$340,000 - $440,000",
      keyAreas: ["Lung Disease", "Critical Care", "Sleep Medicine"]
    },
    {
      specialty: "Neurology",
      count: "13,567",
      description: "Nervous system and brain disorder specialists",
      icon: Brain,
      color: "bg-teal-500",
      avgSalary: "$280,000 - $380,000",
      keyAreas: ["Neurological Disorders", "Stroke Care", "Movement Disorders"]
    },
    {
      specialty: "Oncology",
      count: "12,445",
      description: "Cancer diagnosis and treatment specialists",
      icon: Award,
      color: "bg-gray-600",
      avgSalary: "$350,000 - $450,000",
      keyAreas: ["Cancer Treatment", "Chemotherapy", "Radiation Therapy"]
    },
    {
      specialty: "Endocrinology",
      count: "8,934",
      description: "Hormone and metabolic disorder specialists",
      icon: Stethoscope,
      color: "bg-lime-500",
      avgSalary: "$250,000 - $350,000",
      keyAreas: ["Diabetes Care", "Thyroid Disorders", "Hormonal Imbalances"]
    },
    {
      specialty: "Allergy & Immunology",
      count: "6,683",
      description: "Immune system and allergic reaction specialists",
      icon: Heart,
      color: "bg-rose-500",
      avgSalary: "$240,000 - $320,000",
      keyAreas: ["Allergy Testing", "Immunotherapy", "Asthma Management"]
    },
    {
      specialty: "Rheumatology",
      count: "5,234",
      description: "Joint, muscle, and autoimmune condition specialists", 
      icon: Users,
      color: "bg-violet-500",
      avgSalary: "$270,000 - $370,000",
      keyAreas: ["Arthritis", "Autoimmune Diseases", "Joint Disorders"]
    },
    {
      specialty: "Infectious Disease",
      count: "4,892",
      description: "Infectious disease and antimicrobial specialists",
      icon: Award,
      color: "bg-emerald-500",
      avgSalary: "$260,000 - $360,000",
      keyAreas: ["Infection Control", "Antimicrobial Therapy", "Public Health"]
    }
  ];

  const keyDataPoints = [
    "Professional Email Address",
    "Direct Phone Number", 
    "LinkedIn Profile",
    "NPI Number",
    "Medical License Number",
    "Board Certifications",
    "Medical Specialty",
    "Hospital Affiliations",
    "Practice Address",
    "Years in Practice",
    "Medical School",
    "Residency Training",
    "Fellowship Training",
    "DEA Number (where applicable)",
    "State License Status",
    "Malpractice Insurance Info"
  ];

  const practiceSettings = [
    "Hospital Systems",
    "Private Practice",
    "Academic Medical Centers", 
    "Specialty Clinics",
    "Ambulatory Surgery Centers",
    "Emergency Medicine",
    "Telemedicine Platforms",
    "Group Medical Practices",
    "Urgent Care Centers",
    "Rehabilitation Centers"
  ];

  const targetApplications = [
    {
      title: "Medical Device Sales",
      description: "Target physicians with relevant medical equipment needs",
      icon: Heart,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Pharmaceutical Marketing",
      description: "Reach prescribing physicians for drug promotion",
      icon: Stethoscope,
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Medical Education",
      description: "Connect with physicians for CME and training programs",
      icon: Brain,
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Healthcare Technology",
      description: "Promote EMR, healthcare IT, and digital health solutions",
      icon: Eye,
      color: "bg-orange-100 text-orange-600"
    }
  ];

  return (
    <>
      <SEOHead 
        title="Doctors & Physicians Email List - 745,628+ Licensed Medical Professionals | ELP Data"
        description="Access 745,628+ verified doctor and physician contacts across 19+ medical specialties. Includes NPI numbers, board certifications, hospital affiliations, and comprehensive practice data."
        keywords="doctors email list, physicians database, medical professionals, healthcare providers, NPI numbers, medical specialties"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Doctors & Physicians Email List
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-orange-100">
                745,628+ Licensed Medical Professionals with NPI Numbers
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge className="bg-white/20 text-white px-4 py-2 text-lg">
                  <Stethoscope className="w-5 h-5 mr-2" />
                  19+ Medical Specialties
                </Badge>
                <Badge className="bg-white/20 text-white px-4 py-2 text-lg">
                  <Award className="w-5 h-5 mr-2" />
                  Board Certified
                </Badge>
                <Badge className="bg-white/20 text-white px-4 py-2 text-lg">
                  <Heart className="w-5 h-5 mr-2" />
                  Hospital Affiliations
                </Badge>
              </div>
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                Access Physician Database
              </Button>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">745K+</div>
                <div className="text-gray-600">Licensed Physicians</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">99.2%</div>
                <div className="text-gray-600">Data Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">19+</div>
                <div className="text-gray-600">Medical Specialties</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">50</div>
                <div className="text-gray-600">States Covered</div>
              </div>
            </div>
          </div>
        </div>

        {/* Top Medical Specialties */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Top Medical Specialties
              </h2>
              <p className="text-xl text-gray-600">
                Licensed physicians across major medical specialties
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {topSpecialists.map((specialist, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-lg ${specialist.color} text-white mr-4`}>
                        <specialist.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{specialist.specialty}</h3>
                        <p className="text-2xl font-bold text-blue-600">{specialist.count}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{specialist.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">Avg. Salary:</span>
                        <span className="text-sm font-medium">{specialist.avgSalary}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {specialist.keyAreas.map((area, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {area}
                        </Badge>
                      ))}
                    </div>

                    <Button className="w-full bg-teal-600 hover:bg-teal-700">
                      View {specialist.specialty} Physicians
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* View More Button */}
            <div className="text-center mt-12">
              <Button
                onClick={() => setShowAllSpecialists(!showAllSpecialists)}
                variant="outline"
                size="lg"
                className="px-8 py-3 text-lg"
              >
                {showAllSpecialists ? (
                  <>
                    <ChevronUp className="w-5 h-5 mr-2" />
                    Show Less Specialties
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-5 h-5 mr-2" />
                    View More Specialties ({additionalSpecialists.length} more)
                  </>
                )}
              </Button>
            </div>

            {/* Additional Specialties Dropdown */}
            {showAllSpecialists && (
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {additionalSpecialists.map((specialist, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className={`p-3 rounded-lg ${specialist.color} text-white mr-4`}>
                          <specialist.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{specialist.specialty}</h3>
                          <p className="text-2xl font-bold text-blue-600">{specialist.count}</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{specialist.description}</p>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-500">Avg. Salary:</span>
                          <span className="text-sm font-medium">{specialist.avgSalary}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {specialist.keyAreas.map((area, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {area}
                          </Badge>
                        ))}
                      </div>

                      <Button className="w-full bg-teal-600 hover:bg-teal-700">
                        View {specialist.specialty} Physicians
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Data Points & Practice Settings */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Available Physician Data Points
                </h2>
                <div className="grid grid-cols-1 gap-3">
                  {keyDataPoints.map((point, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Practice Settings & Affiliations
                </h2>
                <div className="space-y-4">
                  {practiceSettings.map((setting, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                      <span className="text-lg text-gray-700">{setting}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Target Applications */}
        <div className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Target Applications
              </h2>
              <p className="text-xl text-gray-600">
                Perfect for reaching physicians across various use cases
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {targetApplications.map((application, index) => (
                <div key={index} className="text-center">
                  <div className={`p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center ${application.color}`}>
                    <application.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{application.title}</h3>
                  <p className="text-gray-600">{application.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Competitive Advantages */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose Our Physician Database?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-blue-50 p-8 rounded-lg text-center">
                <h3 className="text-xl font-semibold mb-4">Verified Credentials</h3>
                <p className="text-gray-600">All physicians verified with active medical licenses, NPI numbers, and board certifications</p>
              </div>
              <div className="bg-green-50 p-8 rounded-lg text-center">
                <h3 className="text-xl font-semibold mb-4">Real-Time Updates</h3>
                <p className="text-gray-600">Database updated monthly with license renewals, specialty changes, and practice moves</p>
              </div>
              <div className="bg-purple-50 p-8 rounded-lg text-center">
                <h3 className="text-xl font-semibold mb-4">Comprehensive Coverage</h3>
                <p className="text-gray-600">Complete coverage across all 50 states with detailed hospital and practice affiliations</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Connect with Licensed Physicians Today
            </h2>
            <p className="text-xl mb-8 text-orange-100">
              Access 745,628+ verified physician contacts with comprehensive medical credentials
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4">
                <Mail className="w-5 h-5 mr-2" />
                Get Physician Database
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}