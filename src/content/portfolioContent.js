export const personalInfo = {
  name: 'Subarta Ghosh',
  title: 'Full Stack Developer',
  subtitle: 'MCA Student',
  location: 'VIT, Vellore',
  phone: '7319591361',
  email: 'subartaghosh6@gmail.com',
  linkedin: 'https://www.linkedin.com/in/subhh',
  github: 'https://github.com/subh-ghosh',
};

export const summary =
  'I build backend-heavy products that combine scalable APIs, modern full stack delivery, and practical AI features to solve real user and product problems.';

export const personalPitch =
  'I enjoy turning complex product ideas into reliable systems—especially when the work involves backend architecture, performance tuning, clean APIs, and intelligent features backed by data.';

export const heroHighlights = [
  'Spring Boot',
  'FastAPI',
  'React',
  'Redis',
  'Kafka',
  'AI Features',
];

export const quickStats = [
  { label: 'Latency Improvement', value: '61.2%' },
  { label: 'Reviews Processed', value: '191k+' },
  { label: 'CodeVita Rank', value: '#840' },
];

export const openTo = [
  'Backend engineering internships',
  'Full stack developer roles',
  'AI-enabled product teams',
];

export const currentFocus = [
  'Building API-first products with strong backend architecture',
  'Improving performance using caching, resilience, and observability',
  'Applying LLM and NLP workflows to useful product experiences',
];

export const techPillars = [
  'Java',
  'Python',
  'React',
  'PostgreSQL',
  'Docker',
  'OpenAI API',
];

export const projects = [
  {
    num: '01',
    name: 'Asphalt Prep',
    category: 'Adaptive Learning SaaS',
    image: '/p1.png',
    stack: 'Spring Boot 3 · PostgreSQL · Redis · Caffeine · Kafka · Docker',
    summary:
      'Built a scalable learning platform with modular backend architecture, observability, rate limiting, resilience patterns, and LLM-powered adaptive content.',
    challenge: 'Adaptive learning needed fast responses, resilient services, and personalized content at scale.',
    impact: 'Reduced latency, blocked abusive traffic, and improved stress-path reliability with production-style backend patterns.',
    metrics: [
      'Mean latency improved from 196.6ms to 76.4ms',
      'P95 latency improved by 81.1% across 22 endpoints',
      '14,687 abusive requests blocked during stress testing',
    ],
    liveUrl: 'https://asphaltprep.subartaghosh.co.in',
    repoUrl: 'https://github.com/subh-ghosh/ai-practice-platform',
  },
  {
    num: '02',
    name: 'StreamBase',
    category: 'Kafka Infrastructure Platform',
    image: '/STREAMBASE.png',
    stack: 'Node.js · Apache Kafka (KRaft) · Express · SQLite · AWS EC2 · Cloudflare',
    summary:
      'Engineered an open-source multi-tenant Kafka platform providing automated SCRAM-SHA-512 credential provisioning, ACL isolation, and real-time topic monitoring.',
    challenge: 'Developers face $50+/month commercial broker costs for sandbox and learning environments.',
    impact: 'Reduced API response latency by 66% and page load by 77% while sustaining 20 concurrent requests at 100% success rate.',
    metrics: [
      '66% API latency reduction (682ms to 230ms avg)',
      '77% page load speedup (1,461ms to 330ms avg)',
      '20 concurrent requests sustained at 100% success rate',
    ],
    liveUrl: 'https://streambase.subartaghosh.co.in',
    repoUrl: 'https://github.com/subh-ghosh/kafka-homebase',
  },
  {
    num: '03',
    name: 'Amazon Second Life Commerce (SLC)',
    category: 'HackOn With Amazon 6.0 Finalist',
    image: '/AMAZONSECONDLIFECOMMERCE.png',
    stack: 'AWS Lambda · Python · React · Netlify',
    summary:
      'Engineered an intelligent return-prevention and secondary marketplace routing system featuring 14 AWS Lambda microservices.',
    challenge: 'E-commerce returns generate massive economic loss and landfill waste through inefficient reverse logistics.',
    impact: 'Selected as HackOn With Amazon 6.0 Finalist for automated pre-purchase resolution and resale routing.',
    metrics: [
      'HackOn With Amazon 6.0 Finalist project',
      '14 AWS Lambda microservices architecture',
      'Automated resale, refurbishment & donation routing',
    ],
    liveUrl: 'https://slc-landing.netlify.app/',
    repoUrl: 'https://github.com/subh-ghosh/amazon-hackathon',
  },
  {
    num: '04',
    name: 'SignalShift',
    category: 'AI Feedback Analytics',
    image: '/p2.png',
    stack: 'FastAPI · React · scikit-learn · FAISS · OpenAI API',
    summary:
      'Designed an API-driven analytics platform for large-scale app reviews with sentiment modeling, topic analysis, summarization, and RAG-ready retrieval flows.',
    challenge: 'Large-scale customer review data needed structured analysis, summarization, and retrieval-friendly pipelines.',
    impact: 'Turned 191k+ raw reviews into actionable insights with ML scoring, topic modeling, and AI-assisted summaries.',
    metrics: [
      '34,700+ live app reviews processed across endpoints',
      '87.6% accuracy with 0.914 F1-score',
      '12 recurring issue categories extracted with NMF',
    ],
    repoUrl: 'https://github.com/subh-ghosh/signalshift',
  },
  {
    num: '05',
    name: 'FinShield AI',
    category: 'Enterprise AML Investigation',
    image: '/FINSHIELD.png',
    stack: 'Agentic AI · Python · FastAPI · React · Cloudflare Pages',
    summary:
      'Developed an enterprise AI-powered Anti-Money Laundering (AML) investigation platform for transaction anomaly detection and automated compliance reporting.',
    challenge: 'Financial investigators spend hours manually auditing complex cross-border transaction networks.',
    impact: 'Automated entity resolution, risk scoring, and evidence report generation using multi-agent AI workflows.',
    metrics: [
      'Multi-agent graph workflow for automated investigation',
      'Real-time risk scoring & network topology graph',
      'Automated SAR compliance report synthesis',
    ],
    liveUrl: 'https://finshield-ai.pages.dev/dashboard',
    repoUrl: 'https://github.com/subh-ghosh/finshield-ai',
  },
  {
    num: '06',
    name: 'Tredence HR Workflow Designer',
    category: 'Frontend Engineering Prototype',
    image: '/tredence.png',
    stack: 'React · TypeScript · React Flow · Tailwind CSS',
    summary:
      'Built an interactive drag-and-drop HR workflow designer demonstrating complex visual node pipelines, mock execution engine, and state management.',
    challenge: 'HR automation tools lack visual pipeline builders that validate complex multi-step approvals in real-time.',
    impact: 'Delivered a zero-backend visual pipeline builder with instant node execution testing and full state serialization.',
    metrics: [
      'Interactive React Flow node-based pipeline canvas',
      'Local execution testing with step-by-step state logs',
      'Zero-dependency modular frontend architecture',
    ],
    liveUrl: 'https://tredence-hr-workflow-designer.pages.dev/',
    repoUrl: 'https://github.com/subh-ghosh/tredence-hr-workflow-designer',
  },
  {
    num: '07',
    name: 'CivicOS / Vibe2Ship',
    category: 'Hyperlocal Governance Platform',
    image: '/civicos.png',
    stack: 'React · Firebase · Google Maps API · Tailwind CSS',
    summary:
      'Built a community-driven civic problem solving web app for reporting, tracking, and resolving localized urban infrastructure issues.',
    challenge: 'Municipal problem reporting suffers from low engagement and lack of real-time resolution transparency.',
    impact: 'Created a map-integrated civic platform connecting citizens with municipal task force resolution workflows.',
    metrics: [
      'Interactive geotagged issue reporting on Google Maps',
      'Real-time resolution status tracking & upvoting',
      'Built & shipped during Vibe2Ship Hackathon',
    ],
    liveUrl: 'https://vibe2ship-civicos-1efcb.web.app/',
    repoUrl: 'https://github.com/subh-ghosh/vibe2ship-hackathon',
  },
  {
    num: '08',
    name: 'Autonomous Fire Detection and Response System',
    category: 'Embedded Systems & IoT',
    image: '/p3.png',
    stack: 'ESP32 · Arduino · C++ · Sensors · Blynk IoT',
    summary:
      'Built a fire-detection robot with probabilistic flame classification, servo-controlled suppression, and IoT-assisted monitoring.',
    challenge: 'Static threshold-based fire detection was unreliable for a moving autonomous robot.',
    impact: 'Improved detection logic with probabilistic classification and added real-time monitoring for safer autonomous response.',
    metrics: [
      'Gaussian-based detection replaced static thresholds',
      'Linear regression modeled stopping distance',
      'Real-time alerts integrated through Blynk monitoring',
    ],
    repoUrl: 'https://github.com/subh-ghosh/arduino-based-automated-fire-fighting-robot',
  },
];

export const skillGroups = [
  {
    num: '01',
    title: 'Backend & APIs',
    desc: 'Spring Boot, FastAPI, Node.js, Express.js, REST APIs, asynchronous processing, and modular service design.',
  },
  {
    num: '02',
    title: 'Frontend',
    desc: 'React.js, JavaScript, HTML5, and CSS3 for responsive, component-driven user interfaces.',
  },
  {
    num: '03',
    title: 'Data & Infrastructure',
    desc: 'PostgreSQL, MySQL, MongoDB, Docker, Render, Vercel, GitHub Actions, and Git-based workflows.',
  },
  {
    num: '04',
    title: 'Performance & AI',
    desc: 'Redis, Caffeine, Kafka, Resilience4j, Bucket4j, Prometheus, Grafana, FAISS, TF-IDF, NMF, and RAG-ready pipelines.',
  },
];

export const focusAreas = [
  {
    title: 'Scalable systems',
    body: 'I build backend services with caching, observability, and resilience for measurable performance gains.',
  },
  {
    title: 'Applied AI',
    body: 'I integrate LLM features, NLP pipelines, and retrieval workflows into practical product experiences.',
  },
  {
    title: 'Core CS depth',
    body: 'My strong foundation in DSA, OOP, DBMS, and operating systems drives reliable engineering decisions.',
  },
];

export const education = [
  {
    institution: 'Vellore Institute of Technology',
    years: '2025 – 2027',
    degree: 'Master of Computer Applications (MCA)',
    city: 'Vellore',
    detail: 'CGPA: 9.17/10',
  },
  {
    institution: 'University of Calcutta',
    years: '2022 – 2025',
    degree: 'B.Sc. (Hons) Computer Science',
    city: 'Kolkata',
    detail: 'Undergraduate foundation in computer science',
  },
  {
    institution: 'Senior Secondary (CBSE - PCM)',
    years: '2021 – 2022',
    degree: 'Higher secondary education',
    city: 'India',
    detail: 'Mathematics and science track',
  },
  {
    institution: 'Secondary (ICSE)',
    years: '2019 – 2020',
    degree: 'School education',
    city: 'India',
    detail: 'Strong early academic base',
  },
];

export const achievements = [
  {
    count: 'Finalist',
    org: 'HackOn With Amazon 6.0',
    desc: 'National Finalist for Second Life Commerce (SLC) return-prevention architecture.',
  },
  {
    count: '#840',
    org: 'TCS CodeVita Season 13',
    desc: 'Secured Global Rank 840 in a competitive coding contest.',
    url: 'https://drive.google.com/file/d/1R1OpK8fAwlc-Av4RmH10g2VHKzcmHDri',
  },
  {
    count: 'SQL',
    org: 'HackerRank Advanced Certification',
    desc: 'Certified in advanced SQL problem solving and database query skills.',
    url: 'https://www.hackerrank.com/certificates/7119e7ec41bc',
  },
];

export const faqs = [
  {
    q: 'What kind of roles am I targeting?',
    a: 'I am targeting full stack and backend-heavy software engineering roles where scalable APIs, system design, performance optimization, and AI-powered product features matter.',
  },
  {
    q: 'What stack do I work with most?',
    a: 'I primarily work with Java, Spring Boot, Python, FastAPI, React, SQL, Redis, Kafka, Docker, and monitoring tools like Prometheus and Grafana.',
  },
  {
    q: 'Do I have proof of impact for my work?',
    a: 'Yes, my projects include quantified wins such as 61.2% faster mean latency, 81.1% lower P95 latency, 191k+ reviews processed, and strong ML evaluation metrics.',
  },
  {
    q: 'Am I working on AI and data-focused products too?',
    a: 'Yes. My recent work includes LLM-based summarization, adaptive content generation, sentiment analysis, topic modeling, FAISS retrieval, and RAG-ready architectures.',
  },
  {
    q: 'What is my current academic status?',
    a: 'I am currently pursuing my MCA at Vellore Institute of Technology with a CGPA of 9.17/10.',
  },
  {
    q: 'How can recruiters or collaborators reach out?',
    a: 'The best channels to reach me are email, LinkedIn, or GitHub, all of which are linked in the contact section of this portfolio.',
  },
];
