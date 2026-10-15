// Single source of truth for the portfolio. Mirrors public/AnandBhatResume.pdf.

export const profile = {
  name: 'Anand Bhat S',
  firstName: 'Anand',
  lastName: 'Bhat S',
  title: 'Senior AVP, Technology',
  tagline: 'Spring Boot · Microservices · Blockchain Settlement',
  company: 'Wells Fargo',
  location: 'Bengaluru, India',
  years: '12+',
  domain: 'BFSI',
  email: 'anandbhatmunna.s@gmail.com',
  phone: '+91 81448 83865',
  phoneHref: 'tel:+918144883865',
  linkedin: 'https://www.linkedin.com/in/anand-bhat-architect',
  linkedinHandle: 'anand-bhat-architect',
  github: 'https://github.com/myCodeBhatta',
  githubHandle: 'myCodeBhatta',
  website: 'https://www.anandbhat.co.in',
  resumePdf: '/AnandBhatResume.pdf',
  heroStack: ['Java', 'Spring Boot', 'Kafka', 'Coreblock', 'OpenShift', 'Azure', 'GCP'],
  roles: [
    'Senior AVP, Technology',
    'Java Spring Boot Engineer',
    'Microservices Architect',
    'Blockchain Settlement Builder',
    'Azure Certified Developer',
  ],
  about: [
    'Senior AVP, Technology with 12+ years in banking and fintech. At Wells Fargo, I design and build Java Spring Boot microservices and REST APIs inside core banking workflows, with Kafka for event streaming.',
    'I built the Tokenized Deposit application that settles transactions on the Coreblock blockchain, and work on Oracle core banking products (OBLM, OBPM) and ISO 20022 payments.',
    'Before moving into development, I spent eight years in quality engineering, designing Java automation frameworks from scratch for global banks. I deploy on OpenShift, Azure and Google Cloud Run, and use AI-assisted development daily (Claude, GitHub Copilot, Cursor, Devin), prototyping LLM workflows with LangChain and LangGraph.',
  ],
};

export const stats = [
  { value: 12, suffix: '+', label: 'Years in BFSI' },
  { value: 5, suffix: '', label: 'Companies' },
  { value: 5, suffix: '', label: 'Certifications' },
  { value: 5, suffix: '', label: 'Languages spoken' },
];

export const featuredProject = {
  name: 'Tokenized Deposit',
  org: 'Wells Fargo · Blockchain',
  stack: ['Java', 'Spring Boot', 'REST APIs', 'Coreblock', 'Kafka', 'On-chain Settlement'],
  points: [
    'Built a Spring Boot application that interacts with the Coreblock blockchain and settles tokenized-deposit transactions on the chain.',
    'Integrated the service with core banking workflows through REST APIs and Kafka events.',
  ],
  flow: [
    { label: 'Core Banking', sub: 'OBLM · OBPM' },
    { label: 'Kafka', sub: 'event stream' },
    { label: 'Spring Boot', sub: 'Tokenized Deposit svc' },
    { label: 'Coreblock', sub: 'on-chain settlement' },
  ],
};

export const techStack = [
  { key: 'core', label: 'Core', items: ['Java', 'Spring Boot', 'Microservices', 'REST APIs', 'Kafka', 'Python', 'JavaScript', 'JSON'] },
  { key: 'frontend', label: 'Frontend', items: ['React'] },
  { key: 'blockchain', label: 'Blockchain', items: ['Coreblock', 'Corda R3', 'Tokenized Deposits', 'On-chain Settlement'] },
  { key: 'cloud', label: 'Cloud / DevOps', items: ['OpenShift (OCP)', 'Azure', 'Google Cloud Run', 'Jenkins', 'IBM uDeploy', 'Splunk', 'Maven', 'Gradle'] },
  { key: 'data', label: 'Data', items: ['PostgreSQL', 'MongoDB', 'SQL'] },
  { key: 'testing', label: 'Testing', items: ['JUnit', 'TestNG', 'Rest Assured', 'BDD Cucumber', 'Selenium', 'Appium', 'UFT', 'SOAP UI', 'RIT'] },
  { key: 'ai', label: 'AI / LLM', items: ['Claude AI', 'GitHub Copilot', 'Cursor', 'Devin', 'LangChain', 'LangGraph'] },
  { key: 'banking', label: 'Banking', items: ['Oracle OBLM', 'Oracle OBPM', 'ISO 20022', 'Finacle', 'eBBS', 'T24', 'Pega'] },
  { key: 'tools', label: 'Tools', items: ['Git', 'GitHub', 'Bitbucket', 'Jira', 'ALM', 'AUTOSYS'] },
];

export const experience = [
  {
    role: 'Senior Assistant Vice President – Technology',
    company: 'Wells Fargo',
    period: 'May 2022 – Present',
    location: 'Bengaluru, India · Hybrid',
    current: true,
    stack: ['Java', 'Spring Boot', 'Kafka', 'React', 'Python', 'Coreblock', 'Oracle OBLM/OBPM', 'Jenkins', 'uDeploy'],
    points: [
      'Built the Tokenized Deposit Spring Boot application that settles transactions on the Coreblock blockchain.',
      'Design and build Java Spring Boot microservices and RESTful APIs inside core banking workflows, with Kafka for event streaming, React frontends and Python automation.',
      'Work on Oracle core banking products: OBLM (Liquidity Management) and OBPM (Payments).',
      'Automated CI/CD pipelines with Jenkins and IBM uDeploy.',
      'Use AI-assisted development (Claude, GitHub Copilot, Cursor, Devin) to speed up delivery; prototype LLM workflows with LangChain and LangGraph.',
    ],
  },
  {
    role: 'Lead Architect Specialist',
    company: 'Accenture',
    period: 'Dec 2020 – May 2022',
    location: 'Bengaluru, India · Remote',
    stack: ['Java', 'Spring Boot', 'OpenShift', 'BDD Cucumber', 'Rest Assured', 'Selenium', 'Jenkins'],
    points: [
      'Designed a Java automation framework from scratch for Standard Chartered Bank, covering REST API, UI and regression layers, cutting regression time from 1 day to 5 hours.',
      'Built Spring Boot mock servers to decouple upstream dependencies; automated REST services with BDD Cucumber and Rest Assured.',
      'Implemented headless browser automation for the DDX Portal using the Page Object Model (PhantomJS, Gradle).',
      'Developed and configured AUTOSYS batch jobs using JIL scripts.',
      'Led offshore/onsite knowledge transfer and owned deliverables from test strategy to summary reports.',
    ],
  },
  {
    role: 'Associate',
    company: 'Cognizant Technology Solutions',
    period: 'Jun 2019 – Dec 2020',
    location: 'Chennai, India',
    stack: ['Core Java', 'RESTful Web Services', 'Selenium', 'AUTOSYS', 'Core Banking', 'DB Operations'],
    points: [
      'Key contributor to Discover e-Wallets (Discover Bank US), from requirements gathering to go-live.',
      'Developed TSP cash logic for payment transactions in Singapore operations.',
      'Managed DB operations (image restore, REORG, RUNSTATS) using the Kiosk tool and supported production installs.',
      'Supported the South Africa production rollout, validating all major functionality within tight go-live timelines.',
    ],
  },
  {
    role: 'Consultant',
    company: 'Capgemini',
    period: 'Jul 2017 – Jun 2019',
    location: 'Chennai, India',
    stack: ['Core Java', 'Pega', 'SOAP UI', 'RIT', 'Selenium', 'Core Banking'],
    points: [
      "Led automation testing for Standard Chartered Bank's Discover Personal Loan project over a 24-month engagement.",
      'Designed API tests and web-services automation with SOAP UI and RIT, working with the development team.',
    ],
  },
  {
    role: 'Programmer Analyst',
    company: 'Cognizant Technology Solutions',
    period: 'Jul 2014 – May 2017',
    location: 'Chennai, India',
    stack: ['Selenium', 'UFT', 'Core Banking'],
    points: [
      'Automated tests for Discover Bank US with Selenium and UFT; validated team results and delivered client reports and daily progress summaries.',
    ],
  },
];

export const certifications = [
  { title: 'Azure Developer Associate', code: 'AZ-204', issuer: 'Microsoft', date: 'Oct 2024' },
  { title: 'Azure Fundamentals', code: 'AZ-900', issuer: 'Microsoft', date: 'Nov 2022' },
  { title: 'Full Stack Business Technology Architect', issuer: 'Accenture', date: 'Jan 2022' },
  { title: 'Technology Architect', issuer: 'Accenture', date: 'Aug 2021' },
  { title: 'L1 – Banking & Financial Services', issuer: 'Industry' },
];

export const education = {
  degree: 'B.Sc. Computer Technology',
  school: 'Sri Krishna Arts and Science College',
  university: 'Bharathiar University, Coimbatore',
  period: '2011 – 2014',
};

export const writing = [
  'LinkedIn explainers on ISO 20022 payment messages (PACS series)',
  'Spring Boot production lessons for 1,200+ followers',
];

export const achievements = [
  { title: 'Guiding Light & Pillar of the Month', detail: 'Awards at Accenture' },
  { title: 'Customer appreciation letters', detail: 'For service delivery' },
  { title: 'Training sessions', detail: 'Reduced team testing errors' },
];

export const misc = [
  { label: 'Languages', value: 'English, Tamil, Kannada, Konkani, Malayalam' },
  { label: 'Strengths', value: 'Leadership, teamwork, communication, attentive listening, multitasking' },
  { label: 'Interests', value: 'Photography, music, graphic design, travel, gaming' },
];

export const sections = [
  { id: 'about', label: 'About' },
  { id: 'project', label: 'Project' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'credentials', label: 'Credentials' },
  { id: 'contact', label: 'Contact' },
];
