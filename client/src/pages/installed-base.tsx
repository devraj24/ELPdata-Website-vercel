import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Database, Globe, Target } from "lucide-react";
import { getInstalledBaseTechnologies, getAllTechnologies } from "@/data/installedBaseTechnologies";
import SEOHead from "@/components/SEOHead";

export default function InstalledBase() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(selectedCategory === categoryName ? null : categoryName);
  };

  const categories = [
    {
      name: "IBM Users",
      count: "390+",
      totalCompanies: "335,300",
      totalRecords: "1,200,000",
      topTechnologies: [
        "IBM AIX",
        "IBM DB2",
        "IBM WebSphere",
        "IBM Cognos",
        "IBM SPSS",
        "IBM Lotus Notes",
        "IBM Tivoli",
        "IBM MQ",
        "IBM DataStage",
        "IBM Security"
      ]
    },
    {
      name: "VMware Users",
      count: "127+",
      totalCompanies: "391,200",
      totalRecords: "1,100,000",
      topTechnologies: [
        "VMware vSphere",
        "VMware ESXi",
        "VMware vCenter",
        "VMware NSX",
        "VMware vSAN",
        "VMware Horizon",
        "VMware Cloud",
        "VMware Tanzu",
        "VMware Carbon Black",
        "VMware Workspace ONE"
      ]
    },
    {
      name: "SAP Users",
      count: "215+",
      totalCompanies: "368,700",
      totalRecords: "1,150,000",
      topTechnologies: [
        "SAP ERP",
        "SAP S/4HANA",
        "SAP BW",
        "SAP CRM",
        "SAP HANA",
        "SAP BPC",
        "SAP SuccessFactors",
        "SAP Ariba",
        "SAP Concur",
        "SAP Hybris"
      ]
    },
    {
      name: "CRM Software",
      count: "466+",
      totalCompanies: "1,820,000",
      topTechnologies: [
        "Salesforce CRM",
        "Microsoft Dynamics CRM", 
        "Oracle CRM",
        "Oracle Fusion",
        "SugarCRM",
        "Siebel CRM",
        "Zoho CRM",
        "SAP CRM",
        "Infor CRM",
        "Sage CRM"
      ]
    },
    {
      name: "ERP Software", 
      count: "257+",
      totalCompanies: "924,690",
      topTechnologies: [
        "SAP ERP",
        "JD Edwards",
        "Microsoft Dynamics AX",
        "Microsoft Dynamics NAV",
        "Microsoft Dynamics GP",
        "Oracle E-Business Suite",
        "PeopleSoft",
        "Infor",
        "Sage",
        "NetSuite ERP"
      ]
    },
    {
      name: "High Performance Computing (HPC)",
      count: "60+", 
      totalCompanies: "7,181,438",
      topTechnologies: [
        "Altair CFD",
        "Amazon EC2",
        "Amazon Web Services (AWS)",
        "Apache Hadoop",
        "Apache Hadoop HDFS",
        "Arista Networks",
        "Avere vFXT for Azure",
        "AWS Batch",
        "AWS Snowball",
        "Brocade TurboIron 24X Switch"
      ]
    },
    {
      name: "Accounting Software",
      count: "760+",
      totalCompanies: "1,400,000", 
      topTechnologies: [
        "1C Enterprise",
        "aACE Business Suite",
        "AbacusLaw",
        "Abila",
        "Abrigo ALLL & CECL",
        "Abrigo BAM+",
        "Abrigo Sageworks",
        "AccessPay",
        "Acclaim Software",
        "Accountant's Drill"
      ]
    },
    {
      name: "Big Data",
      count: "20+",
      totalCompanies: "1,200,000",
      topTechnologies: [
        "Apache Spark",
        "Informatica",
        "Teradata",
        "Apache Hadoop",
        "Apache Hbase",
        "MongoDB",
        "Cassandra",
        "Cloudera",
        "Hortonworks",
        "MapR"
      ]
    },
    {
      name: "Marketing Automation",
      count: "30+",
      totalCompanies: "800,000",
      topTechnologies: [
        "HubSpot",
        "Marketo",
        "InfusionSoft",
        "Salesforce Pardot",
        "Adobe DTM",
        "Eloqua",
        "Act-On",
        "SharpSpring",
        "GetResponse",
        "Constant Contact"
      ]
    },
    {
      name: "DBMS",
      count: "229+",
      totalCompanies: "225,100",
      topTechnologies: [
        "Microsoft SQL Server",
        "MySQL",
        "Oracle Database",
        "MongoDB",
        "PostgreSQL",
        "Redis",
        "Elasticsearch",
        "Cassandra",
        "IBM DB2",
        "SAP HANA"
      ]
    },
    {
      name: "HR Management",
      count: "40+",
      totalCompanies: "500,000",
      topTechnologies: [
        "ADP Payroll",
        "Oracle HCM Cloud",
        "BambooHR",
        "PeopleSoft HCM",
        "Workday HCM",
        "Ultimate Software",
        "Cornerstone OnDemand",
        "SuccessFactors",
        "Kronos",
        "Ceridian"
      ]
    },
    {
      name: "WCMS Software",
      count: "25+",
      totalCompanies: "300,000",
      topTechnologies: [
        "WordPress",
        "Joomla",
        "Magento",
        "Drupal",
        "Adobe Dreamweaver",
        "Sitecore",
        "Umbraco",
        "Kentico",
        "DotNetNuke",
        "Squarespace"
      ]
    },
    {
      name: "Middleware",
      count: "20+",
      totalCompanies: "250,000",
      topTechnologies: [
        "IBM WebSphere MQ",
        "Microsoft BizTalk Server",
        "MuleSoft",
        "Oracle Fusion Middleware",
        "Informatica PowerCenter",
        "Tibco",
        "Apache Camel",
        "Red Hat JBoss"
      ]
    },
    {
      name: "Live Chat Software",
      count: "15+",
      totalCompanies: "180,000",
      topTechnologies: [
        "Freshdesk",
        "Zendesk",
        "Tawk.to",
        "LiveChat",
        "LivePerson",
        "Intercom",
        "Drift",
        "Olark",
        "Zopim",
        "Pure Chat"
      ]
    },
    {
      name: "Business Intelligence",
      count: "505+",
      totalCompanies: "5,500,000",
      topTechnologies: [
        "Microsoft Power BI",
        "Tableau",
        "SAP Analytics Cloud",
        "Qlik Sense",
        "IBM Cognos Analytics",
        "MicroStrategy",
        "Looker",
        "SAS Business Intelligence",
        "Oracle Analytics Cloud",
        "Amazon QuickSight"
      ]
    },
    {
      name: "Enterprise Applications",
      count: "30+",
      totalCompanies: "600,000",
      topTechnologies: [
        "Oracle E-Business Suite",
        "Software AG",
        "Ab Initio",
        "SAP Quality Management",
        "Oracle AutoVue",
        "PeopleSoft",
        "Siebel",
        "JD Edwards",
        "Lawson",
        "Infor"
      ]
    },
    {
      name: "Supply Chain Management",
      count: "20+",
      totalCompanies: "400,000",
      topTechnologies: [
        "SAP Ariba",
        "SAP MM",
        "Infor GT Nexus",
        "Infor Demand Management",
        "JDA",
        "Oracle SCM",
        "Manhattan Associates",
        "Blue Yonder",
        "Kinaxis",
        "E2open"
      ]
    },
    {
      name: "Marketing Cloud Platform",
      count: "15+",
      totalCompanies: "350,000",
      topTechnologies: [
        "Salesforce Marketing Cloud",
        "Infor Orbis",
        "SAP Marketing Cloud",
        "Adobe Marketing Cloud",
        "Oracle Eloqua",
        "HubSpot Marketing Hub",
        "Marketo Engage"
      ]
    },
    {
      name: "Financial Management",
      count: "25+",
      totalCompanies: "450,000",
      topTechnologies: [
        "PeopleSoft Project Costing",
        "QuickBooks Capital",
        "SAP Billing",
        "PeopleSoft Billing",
        "Lawson S3",
        "Oracle Financials",
        "NetSuite Financials",
        "Sage Intacct",
        "Workday Financials"
      ]
    },
    {
      name: "Project Management",
      count: "20+",
      totalCompanies: "320,000",
      topTechnologies: [
        "Oracle Primavera",
        "NetSuite PSA",
        "Trello",
        "BaseCamp",
        "Microsoft Project",
        "Asana",
        "Monday.com",
        "Smartsheet",
        "Wrike",
        "Jira"
      ]
    },
    {
      name: "Data Integration",
      count: "25+",
      totalCompanies: "280,000",
      topTechnologies: [
        "SAS Data Integration",
        "SAS/ACCESS",
        "IBM InfoSphere Information Server",
        "Talend",
        "IBM InfoSphere DataStage",
        "Informatica PowerCenter",
        "MuleSoft",
        "Dell Boomi",
        "SnapLogic",
        "Apache Kafka"
      ]
    },
    {
      name: "Cloud Infrastructure",
      count: "40+",
      totalCompanies: "2,100,000",
      topTechnologies: [
        "Amazon AWS",
        "Microsoft Azure",
        "Google Cloud Platform",
        "IBM Cloud",
        "Oracle Cloud Infrastructure",
        "DigitalOcean",
        "Linode",
        "Vultr",
        "Alibaba Cloud",
        "Salesforce Heroku"
      ]
    },
    {
      name: "Security & Compliance",
      count: "35+",
      totalCompanies: "750,000",
      topTechnologies: [
        "Symantec Endpoint Protection",
        "McAfee ePO",
        "Trend Micro",
        "Kaspersky",
        "CrowdStrike Falcon",
        "SentinelOne",
        "Carbon Black",
        "Cylance",
        "Palo Alto Networks",
        "Fortinet FortiGate"
      ]
    },
    {
      name: "DevOps & Development Tools",
      count: "30+",
      totalCompanies: "850,000",
      topTechnologies: [
        "Jenkins",
        "GitLab CI/CD",
        "GitHub Actions",
        "CircleCI",
        "Travis CI",
        "Azure DevOps",
        "TeamCity",
        "Bamboo",
        "Octopus Deploy",
        "Spinnaker"
      ]
    },
    {
      name: "Collaboration & Communication",
      count: "25+",
      totalCompanies: "1,500,000",
      topTechnologies: [
        "Microsoft Teams",
        "Slack",
        "Zoom",
        "WebEx",
        "GoToMeeting",
        "Skype for Business",
        "Google Workspace",
        "Microsoft 365",
        "Dropbox Business",
        "Box"
      ]
    },
    {
      name: "Analytics & Data Science",
      count: "20+",
      totalCompanies: "650,000",
      topTechnologies: [
        "SAS",
        "SPSS",
        "R",
        "Python",
        "Apache Spark",
        "Hadoop",
        "Databricks",
        "Snowflake",
        "Palantir",
        "Alteryx"
      ]
    },
    {
      name: "E-commerce & Retail",
      count: "18+",
      totalCompanies: "420,000",
      topTechnologies: [
        "Shopify",
        "WooCommerce",
        "Magento",
        "BigCommerce",
        "Salesforce Commerce Cloud",
        "SAP Commerce",
        "Oracle Commerce",
        "Adobe Commerce",
        "Prestashop",
        "OpenCart"
      ]
    },
    {
      name: "Manufacturing & IoT",
      count: "15+",
      totalCompanies: "380,000",
      topTechnologies: [
        "Siemens PLM",
        "Autodesk",
        "SolidWorks",
        "PTC Windchill",
        "Dassault Systemes",
        "ANSYS",
        "Bentley Systems",
        "Rockwell Automation",
        "Schneider Electric",
        "GE Digital"
      ]
    },
    {
      name: "Transportation Management Software (TMS)",
      count: "190+",
      totalCompanies: "290,000",
      topTechnologies: [
        "24SevenOffice",
        "3GTMS",
        "ADSI Shipping",
        "AESCUDATA",
        "AgileAssets",
        "Alpega TMS",
        "amfori BSCI platform",
        "AscendTMS",
        "Asprova",
        "Atlas Planning Platform"
      ]
    },
    {
      name: "Electronic Payment Systems",
      count: "240+",
      totalCompanies: "510,000",
      topTechnologies: [
        "2Checkout",
        "ACI Base24",
        "ACI Base24-eps",
        "ACI Worldwide",
        "Adyen",
        "Affirm",
        "AfterPay",
        "Airwallex",
        "Ali WangWang",
        "AliPay"
      ]
    },
    {
      name: "Spend Management",
      count: "120+",
      totalCompanies: "180,000",
      topTechnologies: [
        "Acubiz",
        "Addepar",
        "Aggregate Knowledge",
        "Airbase",
        "AmpliFund",
        "APEX Analytix",
        "Apptricity",
        "Azure Cost Management",
        "Basware Procure-to-Pay",
        "Basware Travel & Expense Management"
      ]
    },
    {
      name: "Construction Software",
      count: "240+",
      totalCompanies: "340,000",
      topTechnologies: [
        "AccuBuild",
        "Acculynx",
        "Active Takeoff",
        "ADAPT",
        "AGTEK",
        "AroFlo",
        "Asite",
        "Assignar",
        "Autodesk Constructware",
        "AVEVA Bocad"
      ]
    },
    {
      name: "Payroll Software",
      count: "310+",
      totalCompanies: "1,210,170",
      topTechnologies: [
        "1C Enterprise",
        "7Shifts",
        "Access EasyPay",
        "Accountedge",
        "ACCURAT HCM",
        "ActivityHD",
        "AcuStaf",
        "ADP",
        "ADP Celergo",
        "ADP Comprehensive Services"
      ]
    },
    {
      name: "Application Development Tools",
      count: "963+",
      totalCompanies: "8,580,000",
      topTechnologies: [
        "C Enterprise",
        "A1WebStats",
        "Abstract",
        "Accelerite CloudPortal Business Manager",
        "ACCELQ",
        "accessiBe",
        "Accompa",
        "Active>Data",
        "ActiveState",
        "Adobe Analytics Data Connector"
      ]
    },
    {
      name: "Data Center Infrastructure Management",
      count: "502+",
      totalCompanies: "1,820,000",
      topTechnologies: [
        "1E",
        "1E AppClarity",
        "1E Tachyon",
        "6connect",
        "ABB Ability",
        "Accenture Infrastructure Services",
        "Actian DataCloud",
        "Active IQ Unified Manager",
        "Adobe Acrobat Sign",
        "AetherPal"
      ]
    },
    {
      name: "Identity Governance",
      count: "328+",
      totalCompanies: "434,810",
      topTechnologies: [
        "1Password",
        "Accertify",
        "Access Auditor",
        "Adabas SAF Security",
        "ADSelfService Plus",
        "Aegify",
        "Akamai EAA",
        "AlertEnterprise",
        "Alloy",
        "Amazon Cognito"
      ]
    },
    {
      name: "Security Information and Event Management (SIEM)",
      count: "316+",
      totalCompanies: "174,020",
      topTechnologies: [
        "42Crunch",
        "Access Auditor",
        "ADSelfService Plus",
        "Agent Vi",
        "Alert Logic",
        "Alert Logic Cybersecurity Monitoring",
        "AlienVault",
        "AlienVault Unified Security Management",
        "Amazon Fraud Detector",
        "Amazon GuardDuty"
      ]
    },
    {
      name: "PLM Software",
      count: "15+",
      totalCompanies: "120,000",
      topTechnologies: [
        "Dassault Enovia",
        "Oracle Agile PLM",
        "Siemens Teamcenter",
        "Infor PLM",
        "PTC Windchill",
        "Autodesk Vault",
        "Arena PLM"
      ]
    }
  ];

  const topTechnologies = [
    { name: "Salesforce CRM", companies: "189,690" },
    { name: "SAP ERP", companies: "368,700" },
    { name: "VMware vSphere", companies: "391,200" },
    { name: "Microsoft Dynamics AX", companies: "26,322" },
    { name: "PEO/EOR Services", companies: "167,365" }
  ];

  const topCategories = [
    { name: "CRM", companies: "1,820,000" },
    { name: "ERP", companies: "924,690" },
    { name: "High Performance Computing (HPC)", companies: "7,181,438" },
    { name: "Application Development Tools", companies: "8,580,000" },
    { name: "Payroll Software", companies: "1,210,170" },
    { name: "Data Center Infrastructure Management", companies: "1,820,000" },
    { name: "SIEM", companies: "174,020" },
    { name: "Identity Governance", companies: "434,810" },
    { name: "HRMS", companies: "266,136" },
    { name: "Accounting Software", companies: "1,400,000" },
    { name: "DBMS", companies: "225,100" },
    { name: "Business Intelligence", companies: "5,500,000" }
  ];

  return (
    <>
      <SEOHead 
        title="Installed Base - Technology Intelligence Platform | ELP Data"
        description="Forecast & Experience market-leading technologies and platforms using our advanced analytics. Monitor over 10M+ data records of companies across the Globe."
        keywords="installed base, technology intelligence, analytics, company data, market forecast"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Installed Base
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
                Forecast & Experience market-leading technologies and platforms using our advanced analytics. We monitor over 10M+ data records of companies across the Globe. Design and customize your modern marketing campaigns in a way as never before.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-12">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    type="text"
                    placeholder="Search here..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 pr-20 py-4 text-lg bg-white/90 backdrop-blur-sm border-0 rounded-xl shadow-lg focus:ring-2 focus:ring-blue-400"
                  />
                  <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 rounded-lg px-6">
                    Search
                  </Button>
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-2 text-white">10M+</div>
                  <div className="text-lg text-blue-100">Company Records</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-2 text-white">195</div>
                  <div className="text-lg text-blue-100">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-2 text-white">500+</div>
                  <div className="text-lg text-blue-100">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-2 text-white">98%</div>
                  <div className="text-lg text-blue-100">Accuracy Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Top Technologies & Categories */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Top Technologies */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Top Technologies</h2>
              <div className="space-y-4">
                {topTechnologies.map((tech, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border">
                    <span className="font-medium text-gray-900">{tech.name}</span>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">Companies Using</div>
                      <div className="text-lg font-bold text-blue-600">{tech.companies}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Categories */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Top Categories</h2>
              <div className="space-y-4">
                {topCategories.map((category, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border">
                    <span className="font-medium text-gray-900">{category.name}</span>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">Companies Using</div>
                      <div className="text-lg font-bold text-blue-600">{category.companies}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Blog Section */}
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Installed Base Tech Blog</h2>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Technographic Data Simplified</h3>
            <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
              Installed Base acts as a right tool to help your sales and marketing teams gain maximum goal oriented results when required. If direct customer engagement is your top priority,
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg">
              Watch how Installed Base is the right solution for you
            </Button>
          </div>

          {/* Complete Technology Database */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Complete Technology Database</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <Card 
                  key={index} 
                  className={`cursor-pointer transition-all duration-300 hover:shadow-lg border-0 ${
                    selectedCategory === category.name ? 'ring-2 ring-blue-500 shadow-lg' : ''
                  }`}
                  onClick={() => handleCategoryClick(category.name)}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary" className="text-lg px-3 py-1">
                        {category.count}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {category.name}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="space-y-2 mb-4">
                      {category.topTechnologies.slice(0, 10).map((tech, techIndex) => (
                        <div key={techIndex} className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer">
                          {tech} Customers List
                        </div>
                      ))}
                    </div>
                    
                    {selectedCategory === category.name && getInstalledBaseTechnologies(category.name)?.technologies && (
                      <div className="mb-6 space-y-2 border-t pt-4 max-h-96 overflow-y-auto">
                        <h4 className="font-semibold text-gray-900 mb-3">
                          All Technologies ({getInstalledBaseTechnologies(category.name)?.technologies?.length || 0}):
                        </h4>
                        {getInstalledBaseTechnologies(category.name)?.technologies?.map((tech, techIndex) => (
                          <div 
                            key={techIndex}
                            className="flex items-center justify-between text-sm hover:bg-gray-50 p-2 rounded cursor-pointer"
                          >
                            <span className="text-gray-700 font-medium">{tech.name}</span>
                            <Badge variant="outline" className="text-xs">{tech.companies}</Badge>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    <Button 
                      variant="outline" 
                      className="w-full text-blue-600 border-blue-600 hover:bg-blue-50"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCategoryClick(category.name);
                      }}
                    >
                      {selectedCategory === category.name ? `Hide Technologies` : `View All ${category.count.replace('+', '')} Technologies`}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}