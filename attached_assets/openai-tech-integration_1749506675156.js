// OpenAI Integration for Technology Application Queries
document.addEventListener('DOMContentLoaded', function() {
    // Initialize chat interface
    const aiChatInput = document.getElementById('ai-chat-input');
    const aiChatButton = document.getElementById('ai-chat-button');
    const aiChatMessages = document.getElementById('ai-chat-messages');
    
    if (aiChatButton && aiChatInput && aiChatMessages) {
        aiChatButton.addEventListener('click', function() {
            const userQuery = aiChatInput.value.trim();
            if (userQuery) {
                // Add user message to chat
                addMessage(userQuery, 'user');
                
                // Clear input
                aiChatInput.value = '';
                
                // Process the query and generate response
                processQuery(userQuery);
            }
        });
        
        // Allow Enter key to send message
        aiChatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                aiChatButton.click();
            }
        });
    }
    
    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `ai-message ai-message-${sender}`;
        messageDiv.textContent = text;
        aiChatMessages.appendChild(messageDiv);
        
        // Scroll to bottom
        aiChatMessages.scrollTop = aiChatMessages.scrollHeight;
    }
    
    function processQuery(query) {
        // Show typing indicator
        const typingDiv = document.createElement('div');
        typingDiv.className = 'ai-message ai-message-bot ai-typing';
        typingDiv.textContent = 'Analyzing your query...';
        aiChatMessages.appendChild(typingDiv);
        
        // Simulate API delay
        setTimeout(() => {
            // Remove typing indicator
            aiChatMessages.removeChild(typingDiv);
            
            // Generate response based on query
            const response = generateResponse(query);
            
            // Add AI response to chat
            addMessage(response, 'bot');
        }, 1500);
    }
    
    function generateResponse(query) {
        // Convert query to lowercase for easier matching
        query = query.toLowerCase();
        
        // Technology categories
        const categories = {
            erp: ["sap", "oracle", "jd edwards", "sage", "infor", "microsoft dynamics", "epicor", "netsuite", "odoo", "erp"],
            crm: ["salesforce", "dynamics crm", "sugarcrm", "zoho", "hubspot", "zendesk", "siebel", "marketo", "crm"],
            cloud: ["aws", "amazon web services", "azure", "microsoft azure", "google cloud", "gcp", "ibm cloud", "oracle cloud", "cloud"],
            database: ["oracle database", "sql server", "mysql", "postgresql", "mongodb", "cassandra", "redis", "db2", "database"],
            security: ["cybersecurity", "firewall", "antivirus", "endpoint protection", "security", "encryption", "vpn", "malware"],
            ai: ["artificial intelligence", "machine learning", "deep learning", "neural networks", "ai", "ml", "nlp", "computer vision"]
        };
        
        // Determine which category the query belongs to
        let matchedCategory = null;
        let highestMatchCount = 0;
        
        for (const [category, keywords] of Object.entries(categories)) {
            const matchCount = keywords.filter(keyword => query.includes(keyword)).length;
            if (matchCount > highestMatchCount) {
                highestMatchCount = matchCount;
                matchedCategory = category;
            }
        }
        
        // Generate response based on matched category
        if (matchedCategory === "erp") {
            if (query.includes("sap")) {
                return "SAP is the market leader in ERP systems with 57,299 companies using their solutions. SAP offers a comprehensive suite of enterprise applications including SAP S/4HANA, SAP Business One, and SAP Business ByDesign. Key industries using SAP include manufacturing, retail, and financial services.";
            } else if (query.includes("oracle")) {
                return "Oracle E-Business Suite is used by 2,360 companies for ERP functionality. Oracle offers integrated cloud applications and platform services, with Oracle Fusion Cloud ERP being their flagship product. Oracle ERP is particularly strong in financial management and supply chain operations.";
            } else if (query.includes("jd edwards")) {
                return "Oracle JD Edwards is used by 2,821 companies. JD Edwards EnterpriseOne is known for its flexibility and is popular in manufacturing, distribution, and construction industries. It offers modules for financial management, supply chain, and human capital management.";
            } else {
                return "ERP (Enterprise Resource Planning) systems are used by 57,299+ companies, with SAP being the market leader. Other popular ERP solutions include Sage (15,813 companies), Infor (8,430 companies), and Oracle JD Edwards (2,821 companies). ERP systems integrate core business processes like finance, HR, manufacturing, and supply chain into a single system.";
            }
        } else if (matchedCategory === "crm") {
            if (query.includes("salesforce")) {
                return "Salesforce dominates the CRM market with 17,304 companies using their platform. Salesforce offers Sales Cloud, Service Cloud, Marketing Cloud, and Commerce Cloud among other products. It's known for its cloud-based approach and extensive app ecosystem through AppExchange.";
            } else if (query.includes("dynamics")) {
                return "Microsoft Dynamics CRM is used by 3,317 companies. It integrates seamlessly with other Microsoft products like Office 365 and offers sales, customer service, and marketing automation capabilities. Dynamics 365 is Microsoft's latest offering that combines CRM and ERP functionality.";
            } else if (query.includes("sugarcrm")) {
                return "SugarCRM is used by 3,213 companies. It's known for its flexibility and customization options. SugarCRM offers both cloud and on-premises deployment options and focuses on sales automation, marketing automation, and customer support.";
            } else {
                return "CRM (Customer Relationship Management) systems are dominated by Salesforce with 17,304 companies. Microsoft Dynamics CRM (3,317 companies) and SugarCRM (3,213 companies) follow as distant competitors. CRM systems help businesses manage customer interactions, track sales opportunities, and improve customer service.";
            }
        } else if (matchedCategory === "cloud") {
            if (query.includes("aws") || query.includes("amazon")) {
                return "Amazon Web Services (AWS) is used by 16,957 companies and leads the cloud infrastructure market. AWS offers over 200 fully featured services including compute, storage, databases, analytics, networking, and AI/ML capabilities. It's known for its extensive global infrastructure and scalability.";
            } else if (query.includes("azure")) {
                return "Microsoft Azure is a major cloud platform with strong integration with Microsoft's enterprise software. Azure offers hybrid cloud capabilities, AI services, and a comprehensive set of compliance offerings. It's particularly popular among organizations already using Microsoft technologies.";
            } else if (query.includes("google")) {
                return "Google Cloud Platform (GCP) is used by 3,013 companies. GCP is known for its data analytics, machine learning capabilities, and container technologies. Google's global network infrastructure provides fast and reliable services for businesses of all sizes.";
            } else {
                return "In cloud services, Amazon leads with 32,531 companies using their platform, followed by SoftLayer (30,841) and Rackspace (29,225). Amazon Web Services (AWS) specifically is used by 16,957 companies. Cloud services provide on-demand computing resources including servers, storage, databases, networking, and software over the internet.";
            }
        } else if (matchedCategory === "database") {
            if (query.includes("oracle")) {
                return "Oracle dominates the database market with 119,655 companies using their database solutions. Oracle Database is known for its reliability, scalability, and security features. Oracle offers both on-premises and cloud database options, with Oracle Autonomous Database being their latest self-driving, self-securing, and self-repairing database solution.";
            } else if (query.includes("sql server")) {
                return "Microsoft SQL Server is used by 13,222 companies. SQL Server offers a comprehensive set of enterprise-grade data management and business intelligence tools. It's known for its integration with other Microsoft products and services.";
            } else if (query.includes("mysql")) {
                return "Oracle MySQL is used by 7,695 companies. MySQL is an open-source relational database management system that's known for its reliability, ease of use, and performance. It's particularly popular for web applications and is a core component of the LAMP stack.";
            } else {
                return "Oracle dominates data management with an overwhelming 119,655 companies, far ahead of Microsoft SQL Server (13,222) and Microsoft Access (9,174). Oracle's multiple database offerings solidify their leadership in enterprise data management. Database management systems store, retrieve, and manage data for organizations of all sizes.";
            }
        } else if (matchedCategory === "security") {
            return "Cybersecurity solutions are used by 10,617+ companies across various industries. Leading providers include Symantec, McAfee, Palo Alto Networks, and Cisco. Modern cybersecurity approaches include zero trust architecture, AI-powered threat detection, and comprehensive endpoint protection. As cyber threats evolve, organizations are increasingly investing in advanced security technologies and practices.";
        } else if (matchedCategory === "ai") {
            return "AI and Machine Learning technologies are being adopted by 5,000+ companies across industries like finance, healthcare, retail, and manufacturing. Popular AI platforms include TensorFlow, PyTorch, Microsoft Azure AI, and AWS SageMaker. Organizations are using AI for predictive analytics, natural language processing, computer vision, and process automation to gain competitive advantages and improve operational efficiency.";
        } else {
            // General response if no specific category is matched
            return "I can provide information about various technology applications including ERP systems, CRM platforms, cloud services, database management systems, cybersecurity solutions, and AI/ML technologies. Please specify which technology area you're interested in learning more about.";
        }
    }
});
