import { ChevronRight, Home } from "lucide-react";
import { Link, useLocation } from "wouter";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumbs() {
  const [location] = useLocation();
  
  const generateBreadcrumbs = (pathname: string): BreadcrumbItem[] => {
    const breadcrumbs: BreadcrumbItem[] = [
      { label: "Home", href: "/" }
    ];
    
    if (pathname === "/") return breadcrumbs;
    
    // Technology Lists
    if (pathname.includes("-users-list")) {
      breadcrumbs.push({ label: "Technology Lists", href: "/technology-lists" });
      
      if (pathname === "/sap-users-list") breadcrumbs.push({ label: "SAP Users List" });
      else if (pathname === "/salesforce-users-list") breadcrumbs.push({ label: "Salesforce Users List" });
      else if (pathname === "/oracle-users-list") breadcrumbs.push({ label: "Oracle Users List" });
      else if (pathname === "/cisco-users-list") breadcrumbs.push({ label: "Cisco Users List" });
      else if (pathname === "/workday-users-list") breadcrumbs.push({ label: "Workday Users List" });
      else if (pathname === "/vmware-users-list") breadcrumbs.push({ label: "VMware Users List" });
      else if (pathname === "/aws-users-list") breadcrumbs.push({ label: "AWS Users List" });
      else if (pathname === "/ibm-users-list") breadcrumbs.push({ label: "IBM Users List" });
      else if (pathname === "/microsoft-users-list") breadcrumbs.push({ label: "Microsoft Users List" });
      else if (pathname === "/google-cloud-users-list") breadcrumbs.push({ label: "Google Cloud Users List" });
    }
    // Email Lists
    else if (pathname.includes("-email-list")) {
      breadcrumbs.push({ label: "Email Lists", href: "/email-lists" });
      
      if (pathname === "/ceo-email-list") breadcrumbs.push({ label: "CEO Email List" });
      else if (pathname === "/cto-email-list") breadcrumbs.push({ label: "CTO Email List" });
      else if (pathname === "/cfo-email-list") breadcrumbs.push({ label: "CFO Email List" });
      else if (pathname.includes("-industry-email-list")) {
        const industry = pathname.replace("-industry-email-list", "").replace("/", "");
        const formattedIndustry = industry.split("-").map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join(" ");
        breadcrumbs.push({ label: `${formattedIndustry} Industry Email List` });
      }
    }
    // Services
    else if (pathname === "/data-services") {
      breadcrumbs.push({ label: "Data Services" });
    }
    else if (pathname === "/ai-agents") {
      breadcrumbs.push({ label: "AI Agents" });
    }
    else if (pathname === "/about") {
      breadcrumbs.push({ label: "About" });
    }
    else if (pathname === "/contact-us") {
      breadcrumbs.push({ label: "Contact Us" });
    }
    
    return breadcrumbs;
  };
  
  const breadcrumbs = generateBreadcrumbs(location);
  
  if (breadcrumbs.length <= 1) return null;
  
  return (
    <nav aria-label="Breadcrumb" className="py-3 px-6 bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbs.map((crumb, index) => (
            <li key={index} className="flex items-center">
              {index === 0 && <Home className="w-4 h-4 mr-1 text-gray-500" />}
              
              {crumb.href ? (
                <Link 
                  href={crumb.href}
                  className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-gray-700 font-medium">{crumb.label}</span>
              )}
              
              {index < breadcrumbs.length - 1 && (
                <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}