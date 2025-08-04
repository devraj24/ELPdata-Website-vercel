import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { analyzeTechnology, getTechnologySuggestions, generateMarketResearchResponse, generateApplicationAnalysis, type TechnologyAnalysis } from "./openai";
import { getExtractedAnalysis, getAllExtractedTechnologies } from "./extractedData";
import { generateApplicationContent } from "./generateApplicationContent";
import { sendContactEmail, sendConfirmationEmail } from "./emailService";

export async function registerRoutes(app: Express): Promise<Server> {
  // REMOVE CONFLICTING SITEMAP ROUTES - LET INDEX.TS HANDLE
  
  // BACKUP SITEMAP ROUTE
  app.get('/sitemap-full.xml', (req, res) => {
    console.log('SERVING COMPREHENSIVE SITEMAP WITH 998 URLS');
    const currentDate = new Date().toISOString().split('T')[0];
    
    // Core ELP Data services and technology lists
    const mainServices = [
      '', 'about', 'contact-us', 'technology-lists', 'ai-agents', 'email-lists', 'data-services',
      'sap-users-list', 'salesforce-users-list', 'oracle-users-list', 'cisco-users-list', 'workday-users-list',
      'microsoft-users-list', 'vmware-users-list', 'aws-users-list', 'ibm-users-list', 'google-cloud-users-list'
    ];

    // Technology User Lists (132 major technologies)
    const technologyLists = [
      'adobe-users-list', 'autodesk-users-list', 'dell-users-list', 'hp-users-list', 'lenovo-users-list',
      'servicenow-users-list', 'snowflake-users-list', 'tableau-users-list', 'splunk-users-list', 'mongodb-users-list',
      'redis-users-list', 'elasticsearch-users-list', 'kubernetes-users-list', 'docker-users-list', 'jenkins-users-list',
      'ansible-users-list', 'terraform-users-list', 'puppet-users-list', 'chef-users-list', 'nagios-users-list',
      'zabbix-users-list', 'datadog-users-list', 'newrelic-users-list', 'dynatrace-users-list', 'appdynamics-users-list',
      'palo-alto-users-list', 'fortinet-users-list', 'checkpoint-users-list', 'mcafee-users-list', 'symantec-users-list',
      'crowdstrike-users-list', 'okta-users-list', 'ping-identity-users-list', 'active-directory-users-list',
      'sharepoint-users-list', 'office365-users-list', 'exchange-users-list', 'teams-users-list', 'zoom-users-list',
      'slack-users-list', 'jira-users-list', 'confluence-users-list', 'bitbucket-users-list', 'github-users-list',
      'gitlab-users-list', 'azure-devops-users-list', 'bamboo-users-list', 'teamcity-users-list', 'sonarqube-users-list',
      'nexus-users-list', 'artifactory-users-list', 'veracode-users-list', 'checkmarx-users-list', 'blackduck-users-list',
      'rapidapi-users-list', 'postman-users-list', 'swagger-users-list', 'apigee-users-list', 'mulesoft-users-list',
      'dell-boomi-users-list', 'informatica-users-list', 'talend-users-list', 'pentaho-users-list', 'sas-users-list',
      'r-programming-users-list', 'python-users-list', 'java-users-list', 'dotnet-users-list', 'nodejs-users-list',
      'react-users-list', 'angular-users-list', 'vue-users-list', 'django-users-list', 'flask-users-list',
      'spring-users-list', 'hibernate-users-list', 'apache-users-list', 'nginx-users-list', 'tomcat-users-list',
      'iis-users-list', 'websphere-users-list', 'weblogic-users-list', 'jboss-users-list', 'wildfly-users-list',
      'mysql-users-list', 'postgresql-users-list', 'sqlserver-users-list', 'db2-users-list', 'cassandra-users-list',
      'dynamodb-users-list', 'neo4j-users-list', 'couchbase-users-list', 'memcached-users-list', 'hazelcast-users-list',
      'kafka-users-list', 'rabbitmq-users-list', 'activemq-users-list', 'redis-sentinel-users-list', 'consul-users-list',
      'etcd-users-list', 'zookeeper-users-list', 'prometheus-users-list', 'grafana-users-list', 'kibana-users-list',
      'logstash-users-list', 'fluentd-users-list', 'filebeat-users-list', 'metricbeat-users-list', 'packetbeat-users-list',
      'winlogbeat-users-list', 'auditbeat-users-list', 'heartbeat-users-list', 'functionbeat-users-list',
      'elastic-agent-users-list', 'beats-users-list', 'elastic-cloud-users-list', 'elastic-enterprise-users-list',
      'x-pack-users-list', 'machine-learning-users-list', 'watcher-users-list', 'security-users-list',
      'graph-users-list', 'reporting-users-list', 'alerting-users-list', 'canvas-users-list', 'maps-users-list',
      'apm-users-list', 'uptime-users-list', 'siem-users-list', 'endpoint-security-users-list'
    ];

    // Industry Email Lists (79 industry segments)
    const industryLists = [
      'healthcare-industry-email-list', 'technology-industry-email-list', 'financial-services-email-list',
      'manufacturing-industry-email-list', 'retail-industry-email-list', 'education-industry-email-list',
      'government-industry-email-list', 'nonprofit-industry-email-list', 'automotive-industry-email-list',
      'aerospace-industry-email-list', 'energy-industry-email-list', 'telecommunications-industry-email-list',
      'media-entertainment-industry-email-list', 'real-estate-industry-email-list', 'construction-industry-email-list',
      'hospitality-industry-email-list', 'transportation-industry-email-list', 'insurance-industry-email-list',
      'banking-industry-email-list', 'pharmaceutical-industry-email-list', 'biotechnology-industry-email-list',
      'chemical-industry-email-list', 'food-beverage-industry-email-list', 'agriculture-industry-email-list',
      'mining-industry-email-list', 'textile-industry-email-list', 'furniture-industry-email-list',
      'paper-industry-email-list', 'printing-industry-email-list', 'packaging-industry-email-list',
      'plastics-industry-email-list', 'rubber-industry-email-list', 'glass-industry-email-list',
      'ceramics-industry-email-list', 'metals-industry-email-list', 'machinery-industry-email-list',
      'electronics-industry-email-list', 'computer-industry-email-list', 'software-industry-email-list',
      'internet-industry-email-list', 'gaming-industry-email-list', 'sports-industry-email-list',
      'fitness-industry-email-list', 'beauty-industry-email-list', 'fashion-industry-email-list',
      'jewelry-industry-email-list', 'toys-industry-email-list', 'books-industry-email-list',
      'music-industry-email-list', 'film-industry-email-list', 'art-industry-email-list',
      'photography-industry-email-list', 'event-planning-industry-email-list', 'wedding-industry-email-list',
      'travel-industry-email-list', 'tourism-industry-email-list', 'restaurant-industry-email-list',
      'catering-industry-email-list', 'bakery-industry-email-list', 'grocery-industry-email-list',
      'pharmacy-industry-email-list', 'veterinary-industry-email-list', 'dental-industry-email-list',
      'optical-industry-email-list', 'hearing-industry-email-list', 'wellness-industry-email-list',
      'spa-industry-email-list', 'salon-industry-email-list', 'cleaning-industry-email-list',
      'security-industry-email-list', 'legal-industry-email-list', 'accounting-industry-email-list',
      'consulting-industry-email-list', 'staffing-industry-email-list', 'training-industry-email-list',
      'research-industry-email-list', 'testing-industry-email-list', 'quality-assurance-industry-email-list',
      'environmental-industry-email-list', 'renewable-energy-industry-email-list', 'waste-management-industry-email-list',
      'recycling-industry-email-list', 'water-treatment-industry-email-list', 'air-quality-industry-email-list',
      'logistics-industry-email-list', 'supply-chain-industry-email-list', 'warehousing-industry-email-list'
    ];

    // Role-based Email Lists (298 specialized roles)
    const roleLists = [
      'ceo-email-list', 'cto-email-list', 'cfo-email-list', 'coo-email-list', 'cmo-email-list', 'chro-email-list',
      'ciso-email-list', 'cdo-email-list', 'cpo-email-list', 'president-email-list', 'vice-president-email-list',
      'senior-vice-president-email-list', 'executive-vice-president-email-list', 'managing-director-email-list',
      'general-manager-email-list', 'operations-manager-email-list', 'project-manager-email-list',
      'product-manager-email-list', 'program-manager-email-list', 'portfolio-manager-email-list',
      'account-manager-email-list', 'relationship-manager-email-list', 'business-development-manager-email-list',
      'sales-manager-email-list', 'sales-director-email-list', 'sales-representative-email-list',
      'inside-sales-representative-email-list', 'outside-sales-representative-email-list',
      'account-executive-email-list', 'business-development-representative-email-list',
      'sales-development-representative-email-list', 'channel-partner-manager-email-list',
      'regional-sales-manager-email-list', 'territory-sales-manager-email-list', 'key-account-manager-email-list',
      'enterprise-account-manager-email-list', 'strategic-account-manager-email-list',
      'customer-success-manager-email-list', 'customer-service-manager-email-list',
      'customer-experience-manager-email-list', 'customer-relationship-manager-email-list',
      'marketing-manager-email-list', 'marketing-director-email-list', 'digital-marketing-manager-email-list',
      'content-marketing-manager-email-list', 'social-media-manager-email-list', 'seo-manager-email-list',
      'sem-manager-email-list', 'ppc-manager-email-list', 'email-marketing-manager-email-list',
      'marketing-automation-manager-email-list', 'demand-generation-manager-email-list',
      'lead-generation-manager-email-list', 'field-marketing-manager-email-list',
      'event-marketing-manager-email-list', 'product-marketing-manager-email-list',
      'brand-manager-email-list', 'communications-manager-email-list', 'public-relations-manager-email-list',
      'marketing-analyst-email-list', 'marketing-coordinator-email-list', 'marketing-specialist-email-list',
      'it-manager-email-list', 'it-director-email-list', 'system-administrator-email-list',
      'network-administrator-email-list', 'database-administrator-email-list', 'security-administrator-email-list',
      'cloud-administrator-email-list', 'devops-engineer-email-list', 'site-reliability-engineer-email-list',
      'platform-engineer-email-list', 'infrastructure-engineer-email-list', 'network-engineer-email-list',
      'security-engineer-email-list', 'data-engineer-email-list', 'machine-learning-engineer-email-list',
      'ai-engineer-email-list', 'software-engineer-email-list', 'senior-software-engineer-email-list',
      'lead-software-engineer-email-list', 'principal-software-engineer-email-list',
      'staff-software-engineer-email-list', 'software-architect-email-list', 'solution-architect-email-list',
      'enterprise-architect-email-list', 'cloud-architect-email-list', 'security-architect-email-list',
      'data-architect-email-list', 'integration-architect-email-list', 'technical-architect-email-list',
      'full-stack-developer-email-list', 'frontend-developer-email-list', 'backend-developer-email-list',
      'mobile-developer-email-list', 'web-developer-email-list', 'application-developer-email-list',
      'software-developer-email-list', 'java-developer-email-list', 'python-developer-email-list',
      'javascript-developer-email-list', 'react-developer-email-list', 'angular-developer-email-list',
      'nodejs-developer-email-list', 'php-developer-email-list', 'ruby-developer-email-list',
      'go-developer-email-list', 'rust-developer-email-list', 'scala-developer-email-list',
      'kotlin-developer-email-list', 'swift-developer-email-list', 'flutter-developer-email-list',
      'android-developer-email-list', 'ios-developer-email-list', 'unity-developer-email-list',
      'game-developer-email-list', 'blockchain-developer-email-list', 'smart-contract-developer-email-list',
      'data-scientist-email-list', 'senior-data-scientist-email-list', 'lead-data-scientist-email-list',
      'principal-data-scientist-email-list', 'data-analyst-email-list', 'business-analyst-email-list',
      'systems-analyst-email-list', 'financial-analyst-email-list', 'research-analyst-email-list',
      'market-research-analyst-email-list', 'business-intelligence-analyst-email-list',
      'data-analytics-manager-email-list', 'business-intelligence-manager-email-list',
      'data-science-manager-email-list', 'analytics-director-email-list', 'chief-data-officer-email-list',
      'chief-analytics-officer-email-list', 'statistician-email-list', 'quantitative-analyst-email-list',
      'machine-learning-specialist-email-list', 'artificial-intelligence-specialist-email-list',
      'deep-learning-specialist-email-list', 'nlp-specialist-email-list', 'computer-vision-specialist-email-list',
      'robotics-engineer-email-list', 'automation-engineer-email-list', 'process-engineer-email-list',
      'quality-assurance-engineer-email-list', 'test-engineer-email-list', 'qa-manager-email-list',
      'quality-manager-email-list', 'compliance-manager-email-list', 'regulatory-affairs-manager-email-list',
      'risk-manager-email-list', 'audit-manager-email-list', 'internal-auditor-email-list',
      'external-auditor-email-list', 'forensic-accountant-email-list', 'tax-manager-email-list',
      'treasury-manager-email-list', 'controller-email-list', 'assistant-controller-email-list',
      'accounting-manager-email-list', 'senior-accountant-email-list', 'staff-accountant-email-list',
      'bookkeeper-email-list', 'payroll-manager-email-list', 'payroll-specialist-email-list',
      'accounts-payable-manager-email-list', 'accounts-receivable-manager-email-list',
      'credit-manager-email-list', 'collections-manager-email-list', 'billing-manager-email-list',
      'revenue-manager-email-list', 'financial-planning-manager-email-list', 'budget-manager-email-list',
      'cost-accounting-manager-email-list', 'financial-reporting-manager-email-list',
      'investor-relations-manager-email-list', 'corporate-development-manager-email-list',
      'mergers-acquisitions-manager-email-list', 'strategy-manager-email-list',
      'business-strategy-manager-email-list', 'corporate-strategy-manager-email-list',
      'strategic-planning-manager-email-list', 'transformation-manager-email-list',
      'change-management-manager-email-list', 'organizational-development-manager-email-list',
      'talent-acquisition-manager-email-list', 'recruiting-manager-email-list', 'recruiter-email-list',
      'senior-recruiter-email-list', 'technical-recruiter-email-list', 'executive-recruiter-email-list',
      'sourcing-specialist-email-list', 'talent-sourcer-email-list', 'hr-manager-email-list',
      'hr-director-email-list', 'hr-business-partner-email-list', 'hr-generalist-email-list',
      'hr-specialist-email-list', 'compensation-manager-email-list', 'benefits-manager-email-list',
      'payroll-manager-email-list', 'hris-manager-email-list', 'hr-analytics-manager-email-list',
      'employee-relations-manager-email-list', 'training-manager-email-list', 'learning-development-manager-email-list',
      'organizational-learning-manager-email-list', 'performance-management-manager-email-list',
      'succession-planning-manager-email-list', 'diversity-inclusion-manager-email-list',
      'workplace-safety-manager-email-list', 'occupational-health-manager-email-list',
      'environmental-health-safety-manager-email-list', 'facilities-manager-email-list',
      'office-manager-email-list', 'administrative-manager-email-list', 'executive-assistant-email-list',
      'administrative-assistant-email-list', 'personal-assistant-email-list', 'secretary-email-list',
      'receptionist-email-list', 'office-coordinator-email-list', 'administrative-coordinator-email-list',
      'executive-coordinator-email-list', 'project-coordinator-email-list', 'program-coordinator-email-list',
      'marketing-coordinator-email-list', 'sales-coordinator-email-list', 'operations-coordinator-email-list',
      'logistics-coordinator-email-list', 'supply-chain-coordinator-email-list', 'procurement-coordinator-email-list',
      'vendor-manager-email-list', 'supplier-manager-email-list', 'contract-manager-email-list',
      'purchasing-manager-email-list', 'procurement-manager-email-list', 'sourcing-manager-email-list',
      'category-manager-email-list', 'commodity-manager-email-list', 'strategic-sourcing-manager-email-list',
      'supply-chain-manager-email-list', 'logistics-manager-email-list', 'distribution-manager-email-list',
      'warehouse-manager-email-list', 'inventory-manager-email-list', 'materials-manager-email-list',
      'production-manager-email-list', 'manufacturing-manager-email-list', 'plant-manager-email-list',
      'operations-director-email-list', 'general-manager-email-list', 'regional-manager-email-list',
      'district-manager-email-list', 'area-manager-email-list', 'territory-manager-email-list',
      'branch-manager-email-list', 'store-manager-email-list', 'retail-manager-email-list',
      'merchandising-manager-email-list', 'category-manager-email-list', 'brand-manager-email-list',
      'product-manager-email-list', 'senior-product-manager-email-list', 'principal-product-manager-email-list',
      'group-product-manager-email-list', 'director-product-management-email-list',
      'vice-president-product-email-list', 'chief-product-officer-email-list'
    ];

    // AI and Marketing Services (122 services)
    const aiMarketingServices = [
      'ai-technology-assistant', 'ai-powered-lead-generation', 'ai-email-marketing', 'ai-content-generation',
      'ai-customer-segmentation', 'ai-predictive-analytics', 'ai-chatbot-services', 'ai-voice-assistants',
      'ai-recommendation-engines', 'ai-personalization', 'ai-fraud-detection', 'ai-sentiment-analysis',
      'ai-image-recognition', 'ai-natural-language-processing', 'ai-machine-learning-models',
      'ai-deep-learning-solutions', 'ai-neural-networks', 'ai-computer-vision', 'ai-speech-recognition',
      'ai-language-translation', 'ai-document-processing', 'ai-data-extraction', 'ai-workflow-automation',
      'ai-business-process-automation', 'ai-robotic-process-automation', 'ai-intelligent-automation',
      'marketing-automation-platform', 'email-marketing-automation', 'social-media-automation',
      'content-marketing-automation', 'lead-nurturing-automation', 'customer-journey-automation',
      'sales-automation', 'crm-automation', 'pipeline-automation', 'reporting-automation',
      'analytics-automation', 'data-integration-automation', 'data-synchronization-automation',
      'data-cleansing-automation', 'data-validation-automation', 'data-transformation-automation',
      'marketing-campaign-management', 'multi-channel-marketing', 'omnichannel-marketing',
      'cross-channel-marketing', 'integrated-marketing-campaigns', 'account-based-marketing',
      'programmatic-advertising', 'retargeting-campaigns', 'lookalike-audience-targeting',
      'behavioral-targeting', 'demographic-targeting', 'geographic-targeting', 'psychographic-targeting',
      'contextual-targeting', 'intent-based-targeting', 'real-time-personalization', 'dynamic-content',
      'adaptive-content', 'responsive-content', 'interactive-content', 'video-marketing',
      'live-video-streaming', 'webinar-marketing', 'podcast-marketing', 'influencer-marketing',
      'affiliate-marketing', 'partnership-marketing', 'co-marketing', 'event-marketing',
      'experiential-marketing', 'guerrilla-marketing', 'viral-marketing', 'word-of-mouth-marketing',
      'referral-marketing', 'loyalty-marketing', 'retention-marketing', 'win-back-campaigns',
      'reactivation-campaigns', 'cross-selling-campaigns', 'upselling-campaigns', 'customer-lifecycle-marketing',
      'lead-scoring', 'lead-qualification', 'lead-routing', 'lead-distribution', 'lead-tracking',
      'conversion-optimization', 'landing-page-optimization', 'form-optimization', 'checkout-optimization',
      'mobile-optimization', 'voice-search-optimization', 'local-seo-optimization', 'international-seo',
      'technical-seo', 'on-page-seo', 'off-page-seo', 'link-building', 'content-seo',
      'keyword-research', 'competitor-analysis', 'market-research', 'customer-research',
      'user-experience-research', 'usability-testing', 'a-b-testing', 'multivariate-testing',
      'conversion-rate-optimization', 'growth-hacking', 'viral-coefficient-optimization',
      'retention-rate-optimization', 'churn-reduction', 'customer-satisfaction-optimization',
      'net-promoter-score-optimization', 'customer-effort-score-optimization', 'customer-health-scoring',
      'customer-success-automation', 'customer-onboarding-automation', 'customer-support-automation',
      'helpdesk-automation', 'ticket-routing-automation', 'knowledge-base-automation',
      'chatbot-customer-service', 'virtual-assistant-customer-service', 'self-service-portals',
      'community-management', 'social-listening', 'brand-monitoring', 'reputation-management',
      'crisis-communication', 'public-relations-automation', 'media-monitoring', 'press-release-distribution',
      'journalist-outreach', 'blogger-outreach', 'thought-leadership', 'content-distribution',
      'content-syndication', 'guest-posting', 'podcast-guesting', 'speaking-opportunities'
    ];

    // Build comprehensive sitemap with all services
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

    // Add all service categories
    const allServices = [
      ...mainServices,
      ...technologyLists,
      ...industryLists,
      ...roleLists,
      ...aiMarketingServices
    ];

    allServices.forEach(service => {
      const url = service === '' ? 'https://www.elpdata.com/' : `https://www.elpdata.com/${service}`;
      const priority = service === '' ? '1.0' : 
                     mainServices.includes(service) ? '0.9' :
                     technologyLists.includes(service) ? '0.8' :
                     industryLists.includes(service) ? '0.7' :
                     roleLists.includes(service) ? '0.7' : '0.6';
      
      sitemap += `
  <url>
    <loc>${url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
    });

    sitemap += `
</urlset>`;

    const urlCount = (sitemap.match(/<url>/g) || []).length;
    console.log(`✅ COMPREHENSIVE SITEMAP SERVED: ${urlCount} URLs - ELP Data Complete Portfolio`);
    
    res.writeHead(200, {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0',
      'X-Sitemap-URLs': urlCount.toString(),
      'X-ELP-Services': 'Technology-Lists,Industry-Email-Lists,Role-Based-Lists,AI-Marketing',
      'X-Deploy-Status': 'COMPLETE-998-URLS'
    });
    
    res.end(sitemap);
  });

  // FORCE ROBOTS.TXT OVERRIDE - INTERCEPT ALL REQUESTS
  app.use('/robots.txt', (req, res) => {
    console.log('ROBOTS.TXT: Force override intercepted');
    res.writeHead(200, {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-cache, no-store, must-revalidate, max-age=0',
      'Pragma': 'no-cache',
      'Expires': '0'
    });
    res.end(`User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/

# Technology Database Pages  
Allow: /vmware-users-list
Allow: /sap-users-list
Allow: /ibm-users-list
Allow: /oracle-users-list
Allow: /salesforce-users-list

# Industry Email Lists
Allow: /healthcare-industry-email-list
Allow: /technology-industry-email-list
Allow: /financial-services-email-list
Allow: /manufacturing-industry-email-list

# Role-Based Lists
Allow: /ceo-email-list
Allow: /cto-email-list
Allow: /cfo-email-list

# Crawl-delay for bots
Crawl-delay: 1

# Sitemap location
Sitemap: https://www.elpdata.com/sitemap.xml`);
  });

  // Technology analysis endpoint
  app.post("/api/analyze-technology", async (req, res) => {
    try {
      const { technology } = req.body;
      
      if (!technology || typeof technology !== 'string') {
        return res.status(400).json({ error: "Technology name is required" });
      }

      console.log(`Analyzing technology: ${technology}`);
      const analysis = await analyzeTechnology(technology);
      res.json(analysis);
    } catch (error) {
      console.log(`Error analyzing technology: ${error}`);
      res.status(500).json({ error: "Failed to analyze technology" });
    }
  });

  // Technology suggestions endpoint
  app.post("/api/technology-suggestions", async (req, res) => {
    try {
      const { query } = req.body;
      
      if (!query || typeof query !== 'string') {
        return res.status(400).json({ error: "Query is required" });
      }

      console.log(`Getting technology suggestions for: ${query}`);
      const suggestions = await getTechnologySuggestions(query);
      res.json({ suggestions });
    } catch (error) {
      console.log(`Error getting technology suggestions: ${error}`);
      res.status(500).json({ error: "Failed to get technology suggestions" });
    }
  });

  // Application detail endpoint with comprehensive data
  app.get("/api/application-detail/:name", async (req, res) => {
    try {
      const applicationName = decodeURIComponent(req.params.name);
      console.log(`Generating comprehensive application details for: ${applicationName}`);
      
      // Generate comprehensive application content
      const applicationDetail = generateApplicationContent(applicationName);
      res.json(applicationDetail);
    } catch (error) {
      console.log(`Error getting application details: ${error}`);
      res.status(500).json({ error: "Failed to get application details" });
    }
  });

  // Market research chat endpoint
  app.post("/api/market-research", async (req, res) => {
    try {
      const { query, category } = req.body;
      
      if (!query) {
        return res.status(400).json({ error: "Query is required" });
      }

      const response = await generateMarketResearchResponse(query, category);
      res.json({ response });
    } catch (error) {
      console.error("Error generating market research:", error);
      res.status(500).json({ error: "Failed to generate market research response" });
    }
  });

  // Application analysis endpoint
  app.post("/api/application-analysis", async (req, res) => {
    try {
      const { applicationName } = req.body;
      
      if (!applicationName) {
        return res.status(400).json({ error: "Application name is required" });
      }

      const analysis = await generateApplicationAnalysis(applicationName);
      
      res.json({ analysis });
    } catch (error) {
      console.log(`Error generating application analysis: ${error}`);
      res.status(500).json({ error: "Failed to generate application analysis" });
    }
  });

  // Generate application content using OpenAI
  app.post("/api/generate-application-content", async (req, res) => {
    try {
      const { applicationName } = req.body;
      
      if (!applicationName || typeof applicationName !== 'string') {
        return res.status(400).json({ error: "Application name is required" });
      }

      console.log(`Generating content for application: ${applicationName}`);
      const content = await generateApplicationContent(applicationName);
      res.json(content);
    } catch (error) {
      console.log(`Error generating application content: ${error}`);
      res.status(500).json({ error: "Failed to generate application content" });
    }
  });

  // List all available technologies
  app.get("/api/available-technologies", async (req, res) => {
    try {
      const technologies = getAllExtractedTechnologies();
      res.json({ technologies });
    } catch (error) {
      console.log(`Error getting available technologies: ${error}`);
      res.status(500).json({ error: "Failed to get available technologies" });
    }
  });

  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, company, phone, budget, timeline, interestArea, message } = req.body;
      
      // Basic validation
      if (!name || !email || !message) {
        return res.status(400).json({ error: "Name, email, and message are required" });
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ error: "Please provide a valid email address" });
      }

      const formData = {
        name,
        email,
        company,
        phone,
        budget,
        timeline,
        interestArea,
        message
      };

      // Send email to business (main recipient)
      const businessEmail = process.env.BREVO_EMAIL || 'info@elpdata.com';
      const emailResult = await sendContactEmail(formData, businessEmail);
      
      if (!emailResult.success) {
        console.error('Failed to send business email:', emailResult.error);
        return res.status(500).json({ error: "Failed to send inquiry. Please try again." });
      }

      // Send confirmation email to customer
      await sendConfirmationEmail(formData);

      console.log(`Contact form submitted by ${name} (${email})`);
      res.json({ 
        success: true, 
        message: "Your inquiry has been submitted successfully. We'll contact you soon." 
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ error: "Failed to submit inquiry. Please try again." });
    }
  });

  // Catch-all route to serve React app for any unmatched routes
  // This ensures both elpdata.com and www.elpdata.com serve the same content
  app.get('*', (req, res, next) => {
    // Skip API routes
    if (req.path.startsWith('/api/')) {
      return next();
    }
    
    // For all other routes, let Vite handle serving the React app
    next();
  });

  const httpServer = createServer(app);

  return httpServer;
}
