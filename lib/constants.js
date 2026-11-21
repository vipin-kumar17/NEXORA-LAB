export const SITE = { name: "Nexora Lab", url: "https://nexoralab.com", tagline: "Engineering Digital Experiences That Move Businesses Forward." };
const faq = (t) => [
  [`How long does ${t.toLowerCase()} take?`, "It depends on scope. After a discovery call we share a clear timeline with milestones before any work starts."],
  ["Can you work with our existing systems?", "Yes. We review your current stack and integrate with it, or plan a safe migration if that is the better option."],
  ["Will you support us after launch?", "Yes. We offer maintenance and support plans for fixes, updates and new features."],
];
export const services = [
  { slug: "website-development", icon: "Globe", title: "Website Development", short: "Fast, responsive business websites, landing pages and redesigns.", intro: "We build websites that load fast, look sharp on every screen and are easy for your team to update.", items: ["Business websites","Corporate websites","Landing pages","Portfolio websites","Custom websites","Responsive websites","Website redesign","High-performance websites"], tech: ["Next.js","React","Tailwind CSS","Vercel"], problem: "An outdated or slow website costs you visitors and trust." },
  { slug: "software-development", icon: "Code2", title: "Custom Software Development", short: "Web apps, SaaS platforms and internal tools built around your workflow.", intro: "When off-the-shelf tools do not fit, we build software that matches how your business actually works.", items: ["Business management software","Custom web applications","SaaS platforms","Internal business tools","Workflow management systems","Dashboard applications","Automation software"], tech: ["Node.js","React","PostgreSQL","MongoDB"], problem: "Spreadsheets and disconnected tools slow your team down." },
  { slug: "mobile-app-development", icon: "Smartphone", title: "Mobile App Development", short: "Android and iOS apps from one React Native codebase.", intro: "We design and build mobile apps with a clean interface and a reliable backend.", items: ["Android applications","iOS applications","Cross-platform applications","React Native applications","Mobile UI/UX","App backend development","App API integration"], tech: ["React Native","Node.js","REST APIs","MongoDB"], problem: "Your customers expect to reach you from their phone." },
  { slug: "crm-development", icon: "Users", title: "CRM Development", short: "Track leads, sales and support in one system built for you.", intro: "A custom CRM shaped around your sales process, not a generic one.", items: ["Customer management","Lead tracking","Sales pipeline","Customer support management","Automated follow-ups","Analytics dashboards","Custom CRM integrations"], tech: ["Node.js","PostgreSQL","React","REST APIs"], problem: "Leads fall through the cracks when data lives in many places." },
  { slug: "erp-development", icon: "Boxes", title: "ERP Development", short: "Inventory, finance, HR and orders connected in one platform.", intro: "We connect your departments in one system so decisions use the same up-to-date data.", items: ["Inventory management","Finance management","HR management","Order management","Business operations","Reporting dashboards","Department integration"], tech: ["Node.js","PostgreSQL","React","Docker"], problem: "Each department keeps its own records, and reports never match." },
  { slug: "ui-ux-design", icon: "PenTool", title: "UI/UX Design", short: "Research-led interfaces, prototypes and design systems.", intro: "Good design makes a product easy to understand and use. We design before we build.", items: ["User research","Wireframes","UI design","UX design","Prototypes","Design systems","Website redesign","Mobile app design"], tech: ["Figma","Design systems","Prototyping"], problem: "Users leave when a product is confusing." },
  { slug: "ecommerce-development", icon: "ShoppingCart", title: "E-commerce Development", short: "Online stores with payments, orders and admin dashboards.", intro: "We build stores that are quick to browse and simple to manage.", items: ["Online stores","Product management","Shopping carts","Checkout systems","Payment gateway integration","Order management","Admin dashboards","Custom e-commerce platforms"], tech: ["Next.js","Node.js","PostgreSQL","Payment gateways"], problem: "A slow or confusing checkout loses sales." },
  { slug: "api-development", icon: "Plug", title: "API Development & Integration", short: "Secure APIs and third-party integrations that connect your tools.", intro: "We build the backend layer that lets your apps and services talk to each other safely.", items: ["REST API development","Backend architecture","Third-party integrations","Authentication systems","API documentation","Database integration","Webhooks"], tech: ["Node.js","Express.js","PostgreSQL","MongoDB"], problem: "Your systems do not share data, so work gets repeated by hand." },
  { slug: "ai-automation", icon: "Bot", title: "AI & Business Automation", short: "Automate repetitive work with chatbots, AI APIs and workflows.", intro: "We add practical AI and automation to your existing processes using proven third-party AI services.", items: ["AI-powered business tools","Workflow automation","Chatbot integration","AI API integration","Data processing automation","Business process automation"], tech: ["Python","Node.js","AI APIs","REST APIs"], problem: "Manual, repetitive tasks eat hours every week." },
  { slug: "cloud-devops", icon: "Cloud", title: "Cloud & DevOps Solutions", short: "Deployment, CI/CD, containers and monitoring.", intro: "We get your application online and keep it stable, secure and easy to update.", items: ["Cloud deployment","Application hosting","CI/CD pipelines","Server configuration","Docker containerization","Performance monitoring","Infrastructure optimization"], tech: ["AWS","Docker","GitHub","Vercel"], problem: "Releases are risky and downtime is costly." },
  { slug: "maintenance-support", icon: "LifeBuoy", title: "Website Maintenance & Support", short: "Bug fixes, security updates and ongoing improvements.", intro: "We keep your website or app secure, fast and up to date after launch.", items: ["Bug fixing","Security updates","Performance optimization","Website updates","Technical support","Application monitoring","Feature improvements"], tech: ["Git","GitHub","Monitoring tools"], problem: "Unmaintained software slowly becomes slow and insecure." },
].map((s) => ({ ...s, faq: faq(s.title) }));
export const process = [
  ["Discovery & Strategy","We learn your goals, users and constraints."],["Planning & Architecture","We choose the stack and map the system."],["UI/UX Design","We design and test the interface."],["Development","We build in short, reviewable iterations."],["Testing & QA","We test across devices and edge cases."],["Deployment & Launch","We ship and watch the first days closely."],["Maintenance & Growth","We support and improve after launch."]];
export const why = [["Custom-built solutions","Made for your workflow, not adapted from a template."],["Modern technology stack","React, Next.js, Node.js and proven databases."],["Scalable architecture","Foundations that grow with your traffic and team."],["User-centric design","Interfaces tested against real tasks."],["Transparent communication","Clear scope, timelines and regular updates."],["Performance-driven","Speed is a feature we measure."],["Security-focused","Authentication, validation and safe defaults."],["Long-term support","We stay available after launch."]];
export const projects = [
  {
    name: "Legal Counsel Website",
    type: "Law Firm Website",
    desc: "Professional website for an advocate with practice areas, profile and consultation enquiry.",
    image: "/projects/manish.png",
    link: "https://advocate-webiste.vercel.app/",
  },
  {
    name: "IT Services & Hardware Website",
    type: "Business Website",
    desc: "Website for a computer hardware and networking company showcasing its IT services.",
    image: "/projects/nitin.png",
    link: "https://nitin-it-support-portfolio-website.vercel.app/",
  },
  {
    name: "Nana Ji Automobile",
    type: "Automobile Business Website",
    desc: "Business website for an automobile service and sales company.",
    image: "/projects/nana ji.png",
    link: "https://nanajigarage.netlify.app/",
  },
  {
    name: "Charan Vandam",
    type: "NGO Website",
    desc: "Website for an NGO sharing its mission, activities and ways to get involved.",
    image: "/projects/NGO.png",
    link: "https://ngo-website-flame-three.vercel.app/",
  },
];
export const tech = { Frontend: ["React","Next.js","JavaScript","Tailwind CSS"], Backend: ["Node.js","Express.js","REST APIs","Python"], Database: ["MongoDB","PostgreSQL","MySQL"], Mobile: ["React Native"], Infrastructure: ["Git","GitHub","Docker","AWS","Vercel"] };

export const socials = [
  { name: "LinkedIn", url: "#" },
  { name: "X", url: "#" },
  { name: "Instagram", url: "#" },
  { name: "Facebook", url: "#" },
];

export const contactInfo = {
  email: "ppvipin9@gmail.com",
  phone: "+91 8318801572",
};

export const whatsapp = {
  number: "918318801572", // country code ke saath, bina + , space ya dash ke
  message: "Hello Nexora Lab, I would like to discuss a project.",
};