export interface LiveLink {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  slug: string;
  name: string;
  tags: string[];
  desc: string;
  type: string;
  imgMain: string;
  imgSub: string;
  metrics?: { label: string; value: string }[];
  tagline: string;
  features: string[];
  businessImpact: string;
  techStack: string;
  liveLink?: string | LiveLink[];
}

export const projects: Project[] = [
  {
    id: "01",
    slug: "atlas-metal-vendor-management",
    name: "Atlas Metal Vendor System",
    tags: ["React.js", "Firebase", "Node.js", "Access Control"],
    desc: "A full-featured vendor management platform built 80% independently. Integrated real-time chat, inquiry workflows, and role-based access control for a metals trading business.",
    type: "B2B Platform · Enterprise",
    imgMain: "/projects/atlas_main.jpg",
    imgSub: "/projects/atlas_sub.jpg",
    metrics: [
      { label: "VENDOR ONBOARDING", value: "↓ 40%" },
      { label: "REAL-TIME SYNC", value: "↑ 99.9%" }
    ],
    tagline: "A unified B2B platform for vendor operations, communication, and inventory control.",
    features: [
      "Role-based access control for internal teams and external vendors",
      "Real-time vendor communication via Firebase-powered chat",
      "Structured inquiry management and vendor response workflows",
      "Material and stock management with live inventory visibility",
      "Order tracking and fulfillment process management"
    ],
    businessImpact: "Reduced vendor response time substantially and accelerated material and order management processes by approximately 70%. Improved data accuracy and operational efficiency across the procurement workflow.",
    techStack: "React.js · Firebase Realtime DB · Node.js · Role-based Auth",
    liveLink: "https://pms.atlasmetalind.com"
  },
  {
    id: "02",
    slug: "sunshine-college-erp",
    name: "Sunshine Group",
    tags: ["Next.js", "Firebase", "Google Maps API", "Tailwind CSS"],
    desc: "Delivered two distinct yet complementary digital solutions for the Sunshine Education Group — a comprehensive ERP system to modernize internal college operations, and a fully responsive public-facing platform for their international study abroad consultancy. Together, these platforms serve thousands of students — from managing day-to-day institutional activities to guiding learners toward universities across 8+ countries.",
    type: "ERP & Global Education",
    imgMain: "/projects/sunshine_main.jpg",
    imgSub: "/projects/sunshine_sub.jpg",
    metrics: [
      { label: "COUNTRIES COVERED", value: "8+" },
      { label: "STUDENT BASE", value: "5K+" }
    ],
    tagline: "Digitizing institutional operations and empowering global education aspirations.",
    features: [
      "Admission inquiry management and automation of administrative workflows",
      "Institutional events management and student transportation module with live GPS tracking",
      "Firebase Realtime Database integration for instant data synchronization",
      "Developed a professional digital presence for international study abroad consultancy",
      "Performance and SEO optimization using Next.js SSR and Tailwind CSS",
      "Fully responsive design for consultancy services and academic destinations"
    ],
    businessImpact: "Modernized administrative operations for 5,000+ students and established a credible digital presence for the Sunshine Study Abroad brand, enabling effective outreach to prospective students across 8+ countries.",
    techStack: "Next.js · React.js · Firebase · Google Maps API · Tailwind CSS",
    liveLink: [
      { label: "Sunshine Study Abroad", url: "https://www.sunshinestudyabroad.in" },
      { label: "SIS Stage Platform", url: "https://stage-web.tsis.edu.in" },
      { label: "SIS ERP System", url: "https://erp.tsis.edu.in" },
      { label: "Sunshine College ERP", url: "https://erp.sunshinecollege.ac.in" }
    ]
  },
  {
    id: "03",
    slug: "law-firm-case-management",
    name: "Law Firm Case Management System",
    tags: ["React.js", "Node.js", "Role-based Auth", "REST APIs"],
    desc: "Designed and implemented a centralized Case Management System for a multi-branch law firm, enabling structured management of legal files and sensitive documents across all office locations.",
    type: "Legal Tech · Document Management",
    imgMain: "/projects/law_main.jpg",
    imgSub: "/projects/law_sub.jpg",
    metrics: [
      { label: "DOC RETRIEVAL", value: "↓ 60%" },
      { label: "SECURITY AUDIT", value: "PASSED" }
    ],
    tagline: "Centralized legal file management with enterprise-grade data security.",
    features: [
      "Unified repository for legal cases and associated documentation",
      "Branch-wise segregation and structured organization of legal records",
      "Comprehensive user and role-based access management",
      "Controlled, secure access to confidential legal documents",
      "Real-time case status tracking and progress monitoring"
    ],
    businessImpact: "Significantly improved the organization of legal records across branches, enhanced data security for sensitive client documentation, and reduced time spent locating and managing case files.",
    techStack: "React.js · Node.js · REST APIs · Role-based Auth",
    liveLink: "https://ulf.co.in"
  },
  {
    id: "04",
    slug: "unique-finance-erp",
    name: "ERP System — Unique Finance",
    tags: ["D3.js", "Chart.js", "React.js", "MongoDB"],
    desc: "Engineered a full-scale ERP solution for a finance company to consolidate customer management, loan operations, and collection processes into a single, data-driven platform.",
    type: "FinTech · Data Visualization",
    imgMain: "/projects/finance_main.jpg",
    imgSub: "/projects/finance_sub.jpg",
    metrics: [
      { label: "REPORTING SPEED", value: "↑ 80%" },
      { label: "DATA ACCURACY", value: "100%" }
    ],
    tagline: "An integrated financial management platform built for scale and clarity.",
    features: [
      "Centralized customer data management and profile administration",
      "Customer-wise loan creation, disbursement, and lifecycle tracking",
      "Loan growth and performance analytics with actionable dashboards",
      "Daily and monthly collection management and reconciliation",
      "Comprehensive loan and collection reporting suite",
      "Advanced data visualization using D3.js and Chart.js",
      "Multi-dimensional filtering by area, city, and individual customer",
      "Responsive corporate website developed with modern front-end technologies"
    ],
    businessImpact: "Enhanced financial visibility and reporting accuracy across the organization, reduced manual effort in collections management, and established a professional digital presence to support business development.",
    techStack: "React.js · D3.js · Chart.js · Node.js · MongoDB · REST APIs",
    liveLink: "https://unique-finance.vercel.app"
  },
  {
    id: "05",
    slug: "inquiry-management-system",
    name: "Inquiry Management System",
    tags: ["React.js", "Node.js", "REST APIs"],
    desc: "Developed a comprehensive Inquiry Management System designed to optimize the end-to-end customer acquisition process. The platform centralizes inquiry tracking and enforces accountability.",
    type: "CRM · Sales Management",
    imgMain: "/projects/lead_main.jpg",
    imgSub: "/projects/lead_sub.jpg",
    metrics: [
      { label: "CONVERSION RATE", value: "↑ 35%" },
      { label: "RESPONSE TIME", value: "↓ 50%" }
    ],
    tagline: "Streamlining the sales pipeline from inquiry to conversion.",
    features: [
      "Structured product inquiry registration and real-time tracking",
      "Systematic allocation of inquiries to designated sales executives",
      "Follow-up scheduling and status management across the inquiry lifecycle",
      "Defined inquiry-to-sale conversion workflow with audit trails",
      "Granular role-based access control for Admin, Manager, and Sales Executive roles",
      "Secure authentication and authorization protocols"
    ],
    businessImpact: "Reduced inquiry response time and improved sales conversion rates by establishing a structured, accountable process for managing customer interactions across the organization.",
    techStack: "React.js · Node.js · REST APIs · Role-based Auth",
    liveLink: "https://lead-management-coral.vercel.app"
  },
  {
    id: "06",
    slug: "jewellery-b2b-platforms",
    name: "Jewellery B2B Platforms",
    tags: ["React.js", "WhatsApp API", "MongoDB"],
    desc: "Designed and developed complete digital ecosystems for two established jewellery businesses, each comprising a vendor-facing showcase platform and a dedicated CRM.",
    type: "E-Commerce · CRM",
    imgMain: "/projects/gold_main.jpg",
    imgSub: "/projects/gold_sub.jpg",
    metrics: [
      { label: "AUTOMATED ALERTS", value: "10K+" },
      { label: "MANUAL INQUIRIES", value: "↓ 70%" }
    ],
    tagline: "End-to-end digital infrastructure for B2B jewellery commerce and vendor engagement.",
    features: [
      "Responsive B2B jewellery showcase websites with product catalogues",
      "Vendor inquiry submission system for individual jewellery items",
      "Custom CRM for product, poster, and collection management",
      "Inventory and catalogue updates managed directly by client teams",
      "Meta WhatsApp Business API integration for automated vendor communication",
      "Centralized vendor inquiry tracking and management"
    ],
    businessImpact: "Established a strong digital presence for both businesses, streamlined vendor communication through automated WhatsApp notifications, and reduced manual inquiry handling through a structured CRM workflow.",
    techStack: "React.js · Node.js · Meta WhatsApp Business API · MongoDB · REST APIs",
    liveLink: [
      { label: "RN Bangles (Showcase)", url: "https://rnbangles.com" },
      { label: "RN Bangles (Portal)", url: "https://account.rnbangles.com" },
      { label: "RS Gold", url: "https://rsgold.in" },
      { label: "Shubh Mahalaxmi", url: "https://shubhmahalaxmisales.in" },
      { label: "Mahalaxmi Fancy Mala", url: "https://mahalaxmifancymala.com" },
      { label: "Mahalaxmi Admin", url: "https://admin.mahalaxmifancymala.com" }
    ]
  },
  {
    id: "07",
    slug: "cloud-accounting-software",
    name: "Cloud-Based Accounting Software",
    tags: ["React.js", "Node.js", "WhatsApp API"],
    desc: "Developed a cloud-based accounting application to digitize and automate an organization's core financial processes, integrating WhatsApp API for vendor payment reminders.",
    type: "FinTech · Accounting",
    imgMain: "/projects/accounting_main.jpg",
    imgSub: "/projects/accounting_sub.jpg",
    metrics: [
      { label: "LATE PAYMENTS", value: "↓ 45%" },
      { label: "FINANCIAL CLARITY", value: "100%" }
    ],
    tagline: "Automating financial operations with precision and compliance.",
    features: [
      "Accounts payable and receivable management",
      "Payroll processing and employee financial record-keeping",
      "General ledger management and financial reporting",
      "Cloud-based architecture enabling remote access and multi-user collaboration",
      "Automated vendor billing and payment reminders via Meta WhatsApp Business API"
    ],
    businessImpact: "Reduced manual bookkeeping overhead, minimized late payment incidents through proactive automated reminders, and provided the organization with real-time financial clarity accessible from any location.",
    techStack: "React.js · Node.js · MongoDB · Meta WhatsApp Business API · REST APIs",
    liveLink: [
      { label: "User Portal", url: "https://account.icebit.in" },
      { label: "Admin Console", url: "https://account-admin.icebit.in" }
    ]
  },
  {
    id: "08",
    slug: "digital-nest",
    name: "Digital Nest",
    tags: ["React.js", "Next.js", "Tailwind CSS", "Vercel"],
    desc: "Digital Nest is a professional IT agency co-founded and operated by a collective of experienced developers and IT professionals. The agency is built on a straightforward principle — assembling over-qualified, passionate individuals who build digital products that genuinely work.",
    type: "IT Agency · Co-founder",
    imgMain: "/projects/dnest.jpeg",
    imgSub: "/projects/dnest.jpeg",
    metrics: [
      { label: "AGENCY FOUNDED", value: "2024" },
      { label: "CLIENT PROJECTS", value: "12+" }
    ],
    tagline: "Co-founding and engineering a high-end freelance collective built to deliver real results.",
    features: [
      "End-to-end web application design and development",
      "Custom software solutions for businesses across industries",
      "Front-end engineering with a strong emphasis on performance and UX",
      "Client-focused delivery with a high standard of code quality and design",
      "Collaborative, remote-first execution across projects"
    ],
    businessImpact: "Established a credible, professional digital presence for the agency and contributed to building a service model that enables high-quality software delivery for clients across multiple domains.",
    techStack: "React.js · Next.js · Tailwind CSS · Vercel",
    liveLink: "https://dgitalnest.vercel.app"
  },
  // {
  //   id: "09",
  //   slug: "icebit-technologies",
  //   name: "Icebit Technologies",
  //   tags: ["Next.js", "React.js", "Tailwind CSS", "Node.js"],
  //   desc: "Designed and developed the official corporate website for Icebit Technologies Pvt. Ltd. — the company's primary digital presence representing its full range of IT services and brand identity.",
  //   type: "Corporate Website · CRM",
  //   imgMain: "/projects/icebit_main.jpg",
  //   imgSub: "/projects/icebit_sub1.png",
  //   metrics: [
  //     { label: "SERVICES COVERED", value: "8+" },
  //     { label: "CONTENT AGILITY", value: "↑ 70%" }
  //   ],
  //   tagline: "Engineering the digital face of a leading IT solutions company — end to end.",
  //   features: [
  //     "Modern UI with cinematic video backgrounds and smooth scroll interactions",
  //     "Services showcase covering UI/UX, Mobile, and Enterprise development",
  //     "Featured projects section highlighting key client work and delivery history",
  //     "Dedicated internal CRM for real-time website updates without developer dependency",
  //     "Role-based access control for secure team-wide content administration",
  //     "Built with Next.js for superior performance, SEO, and fast page loads"
  //   ],
  //   businessImpact: "Delivered a polished, professional digital presence that accurately represents Icebit Technologies. The paired CRM empowers the internal team to keep the website current — reducing turnaround time significantly.",
  //   techStack: "Next.js · React.js · Tailwind CSS · Node.js · REST APIs · Role-based Auth · Vercel",
  //   liveLink: [
  //     { label: "Official Website", url: "https://icebit.in" },
  //     { label: "CRM Panel", url: "https://admin.icebit.in" }
  //   ]
  // }
];
