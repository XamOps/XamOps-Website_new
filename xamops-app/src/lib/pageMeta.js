// Per-route meta: title, description, canonical, keywords, JSON-LD schemas

const BASE = 'https://xamops.com';
const LOGO = `${BASE}/logo.png`;
const OG_IMG = `${BASE}/og-image.jpg`;

const org = {
  '@type': 'Organization',
  '@id': `${BASE}/#organization`,
  name: 'XamOps',
  url: BASE,
  logo: { '@type': 'ImageObject', url: LOGO },
};

// WebPage wrapper helper
const wp = (path, name, desc) => ({
  '@type': 'WebPage',
  '@id': `${BASE}${path}`,
  url: `${BASE}${path}`,
  name,
  description: desc,
  inLanguage: 'en-US',
  isPartOf: { '@id': `${BASE}/#website` },
  publisher: org,
});

// SoftwareApplication helper
const app = (name, desc, features) => ({
  '@type': 'SoftwareApplication',
  name,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Cloud',
  description: desc,
  featureList: features,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', description: 'Free 30-day cloud audit' },
  provider: org,
});

export const PAGE_META = {

  // ── Homepage ───────────────────────────────────────────────────────
  '/': {
    title: 'Cloud FinOps & DevOps Automation Platform | Xamops',
    description: 'Automate cloud operations, reduce infrastructure costs, and optimize performance with Xamops — the cloud automation platform for FinOps, DevOps, and SRE teams.',
    keywords: 'cloud automation platform, FinOps platform, DevOps automation platform, cloud cost optimization, cloud management platform, SRE automation, AI cloud optimization',
    canonical: `${BASE}/`,
    schemas: [
      wp('/', 'Cloud FinOps & DevOps Automation Platform | Xamops', 'Automate cloud operations and reduce costs with Xamops.'),
      {
        '@type': 'WebSite',
        '@id': `${BASE}/#website`,
        url: BASE,
        name: 'XamOps',
        potentialAction: { '@type': 'SearchAction', target: { '@type': 'EntryPoint', urlTemplate: `${BASE}/search?q={search_term_string}` }, 'query-input': 'required name=search_term_string' },
      },
      app('Xamops Cloud Automation Platform', 'AI-powered cloud automation platform for FinOps, DevOps, and SRE teams.',
        ['Cloud cost optimization','FinOps automation','DevOps automation','SRE automation','Cloud monitoring','AI cloud operations','Multicloud management']),
    ],
  },

  // ── Platform ───────────────────────────────────────────────────────
  '/platform': {
    title: 'Cloud Automation Platform for FinOps, DevOps & SRE | Xamops',
    description: 'Explore the Xamops cloud automation platform — purpose-built modules for FinOps, DevOps, SRE, SecOps, DBOps, and cloud cost analytics.',
    keywords: 'cloud automation platform, cloud management platform, cloud operations automation, multicloud management, enterprise cloud management',
    canonical: `${BASE}/platform`,
    schemas: [
      wp('/platform', 'Cloud Automation Platform for FinOps, DevOps & SRE | Xamops', 'Purpose-built cloud automation modules for every cloud team.'),
      app('Xamops Platform', 'Cloud automation platform modules for FinOps, DevOps, SRE, SecOps, and DBOps.',
        ['Spot automation','Disk rightsizing','DBOps','SecOps','Cost analytics','SRE automation']),
    ],
  },

  // ── Spot Automation ────────────────────────────────────────────────
  '/platform/spot-automation': {
    title: 'Spot Automation for Cloud Cost Optimization & Savings | Xamops',
    description: 'Reduce cloud compute costs by up to 70% with Xamops Spot Automation. Intelligent spot instance management, automated scaling, and workload reliability for AWS, Azure, and GCP.',
    keywords: 'spot automation, spot instance management, cloud compute optimization, cloud cost optimization, FinOps automation, compute savings, aws spot instances',
    canonical: `${BASE}/platform/spot-automation`,
    schemas: [
      wp('/platform/spot-automation', 'Spot Automation for Cloud Cost Optimization | Xamops', 'Reduce cloud compute costs by up to 70% with intelligent spot automation.'),
      {
        '@type': 'TechArticle',
        '@id': `${BASE}/blog/how-spot-automation-saves-teams-70-percent-on-compute/#article`,
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE}/blog/how-spot-automation-saves-teams-70-percent-on-compute/` },
        headline: 'How Spot Automation Saves Teams 70% on Compute',
        description: 'Learn how Xamops Spot Automation helps engineering teams reduce cloud compute costs by up to 70% using intelligent workload optimization.',
        image: `${BASE}/images/spot-automation-cover.jpg`,
        author: { '@type': 'Person', name: 'Spot Engineering Team', jobTitle: 'Cloud Automation & FinOps Experts', worksFor: org },
        publisher: org,
        datePublished: '2026-04-28',
        dateModified: '2026-04-28',
        articleSection: 'Cloud Automation',
        keywords: ['spot automation','cloud cost optimization','compute savings','FinOps automation','spot instance management'],
        timeRequired: 'PT8M',
        inLanguage: 'en-US',
        url: `${BASE}/blog/how-spot-automation-saves-teams-70-percent-on-compute/`,
        potentialAction: { '@type': 'ReadAction', target: `${BASE}/blog/how-spot-automation-saves-teams-70-percent-on-compute/` },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'What is Spot Automation in cloud computing?', acceptedAnswer: { '@type': 'Answer', text: 'Spot Automation helps businesses optimize cloud infrastructure costs using intelligent spot instance management and automated scaling.' } },
          { '@type': 'Question', name: 'How much compute cost can Spot Automation save?', acceptedAnswer: { '@type': 'Answer', text: 'Xamops Spot Automation can help organizations reduce compute costs by up to 70% while maintaining workload reliability.' } },
          { '@type': 'Question', name: 'Which cloud providers does Xamops Spot Automation support?', acceptedAnswer: { '@type': 'Answer', text: 'Xamops Spot Automation supports AWS, Microsoft Azure, and Google Cloud Platform (GCP) spot and preemptible instances.' } },
        ],
      },
    ],
  },

  // ── Disk Rightsizing ───────────────────────────────────────────────
  '/platform/disk-rightsizing': {
    title: 'Disk Rightsizing for Cloud Cost & Storage Optimization | Xamops',
    description: 'Identify and eliminate oversized cloud storage volumes with Xamops Disk Rightsizing. Automated recommendations to reduce cloud storage waste and lower FinOps spend.',
    keywords: 'disk rightsizing, cloud storage optimization, cloud cost savings, FinOps, storage cost management, aws storage optimization, gcp storage optimization',
    canonical: `${BASE}/platform/disk-rightsizing`,
    schemas: [
      wp('/platform/disk-rightsizing', 'Disk Rightsizing for Cloud Cost & Storage Optimization | Xamops', 'Eliminate oversized cloud storage volumes and reduce FinOps spend.'),
      {
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'What is disk rightsizing in cloud computing?', acceptedAnswer: { '@type': 'Answer', text: 'Disk rightsizing is the process of identifying oversized or underutilized cloud storage volumes and optimizing them to reduce wasted cloud storage costs.' } },
          { '@type': 'Question', name: 'How does Xamops automate disk rightsizing?', acceptedAnswer: { '@type': 'Answer', text: 'Xamops analyzes storage utilization metrics, identifies underused volumes, and provides automated recommendations or auto-remediation to rightsize cloud storage.' } },
        ],
      },
    ],
  },

  // ── DBOps ──────────────────────────────────────────────────────────
  '/platform/dbops': {
    title: 'Database Operations Automation & DBOps Platform | Xamops',
    description: 'Automate database operations, reduce DBA toil, and optimize cloud database performance with Xamops DBOps. Supports AWS RDS, Aurora, GCP Cloud SQL, and Azure SQL.',
    keywords: 'DBOps platform, database operations automation, cloud database management, aws rds optimization, azure sql automation, cloud database cost optimization',
    canonical: `${BASE}/platform/dbops`,
    schemas: [
      wp('/platform/dbops', 'Database Operations Automation & DBOps Platform | Xamops', 'Automate database operations and optimize cloud database performance.'),
      { '@type': 'FAQPage', mainEntity: [
        { '@type': 'Question', name: 'What is DBOps?', acceptedAnswer: { '@type': 'Answer', text: 'DBOps (Database Operations) is the practice of applying DevOps and automation principles to database management to reduce toil, improve reliability, and optimize costs.' } },
        { '@type': 'Question', name: 'Which databases does Xamops DBOps support?', acceptedAnswer: { '@type': 'Answer', text: 'Xamops DBOps supports AWS RDS, Amazon Aurora, Google Cloud SQL, Azure SQL Database, and self-managed databases on cloud VMs.' } },
      ]},
    ],
  },

  // ── SecOps ─────────────────────────────────────────────────────────
  '/platform/secops': {
    title: 'SecOps Automation Platform for Cloud Security Management | Xamops',
    description: 'Automate cloud security operations with Xamops SecOps. Continuous compliance, misconfiguration detection, and automated remediation across AWS, Azure, and GCP.',
    keywords: 'SecOps automation, cloud security management, cloud compliance automation, cloud misconfiguration detection, cloud security platform, aws security automation',
    canonical: `${BASE}/platform/secops`,
    schemas: [
      wp('/platform/secops', 'SecOps Automation Platform for Cloud Security Management | Xamops', 'Automate cloud security operations and compliance.'),
      { '@type': 'FAQPage', mainEntity: [
        { '@type': 'Question', name: 'What is SecOps automation in the cloud?', acceptedAnswer: { '@type': 'Answer', text: 'SecOps automation uses AI and policy-as-code to continuously detect misconfigurations, enforce compliance, and auto-remediate security issues across cloud environments.' } },
      ]},
    ],
  },

  // ── Cost Analytics ─────────────────────────────────────────────────
  '/platform/cost-analytics': {
    title: 'Cloud Cost Analytics & FinOps Insights Platform | Xamops',
    description: 'Get full cloud cost visibility with Xamops Cost Analytics. Real-time FinOps dashboards, cost anomaly detection, chargeback, and savings recommendations across all clouds.',
    keywords: 'cloud cost analytics, FinOps insights, cloud cost management platform, cloud cost visibility, aws cost analytics, cloud cost reporting, finops dashboard',
    canonical: `${BASE}/platform/cost-analytics`,
    schemas: [
      wp('/platform/cost-analytics', 'Cloud Cost Analytics & FinOps Insights Platform | Xamops', 'Real-time FinOps dashboards and cloud cost visibility.'),
      { '@type': 'FAQPage', mainEntity: [
        { '@type': 'Question', name: 'What does a FinOps cost analytics platform do?', acceptedAnswer: { '@type': 'Answer', text: 'A FinOps cost analytics platform provides real-time visibility into cloud spending, detects cost anomalies, allocates costs by team or project, and surfaces optimization recommendations.' } },
        { '@type': 'Question', name: 'How does Xamops help with cloud cost management?', acceptedAnswer: { '@type': 'Answer', text: 'Xamops provides automated FinOps dashboards, cost anomaly alerts, rightsizing recommendations, and guaranteed 30–40% cloud cost reduction.' } },
      ]},
    ],
  },

  // ── SRE Platform ──────────────────────────────────────────────────
  '/platform/sre': {
    title: 'Site Reliability Engineering (SRE) Automation Platform | Xamops',
    description: 'Automate SRE workflows with Xamops. AI-driven incident detection, runbook automation, SLO management, and on-call optimization for reliable cloud infrastructure.',
    keywords: 'SRE automation platform, site reliability engineering, SLO management, incident automation, runbook automation, cloud reliability, AI SRE platform',
    canonical: `${BASE}/platform/sre`,
    schemas: [
      wp('/platform/sre', 'Site Reliability Engineering (SRE) Automation Platform | Xamops', 'Automate SRE workflows with AI-driven incident detection and SLO management.'),
      { '@type': 'FAQPage', mainEntity: [
        { '@type': 'Question', name: 'What is SRE automation?', acceptedAnswer: { '@type': 'Answer', text: 'SRE automation applies AI and policy-driven workflows to automate incident detection, runbook execution, SLO tracking, and on-call escalation for reliable cloud operations.' } },
      ]},
    ],
  },

  // ── Solutions ─────────────────────────────────────────────────────
  '/solutions': {
    title: 'Cloud Solutions for DevOps, FinOps & SRE Teams | Xamops',
    description: 'Explore Xamops cloud solutions tailored for DevOps, FinOps, and SRE teams. Reduce cloud costs, automate operations, and improve reliability at scale.',
    keywords: 'cloud solutions, DevOps solutions, FinOps solutions, SRE solutions, cloud automation solutions, enterprise cloud solutions',
    canonical: `${BASE}/solutions`,
    schemas: [ wp('/solutions', 'Cloud Solutions for DevOps, FinOps & SRE Teams | Xamops', 'Tailored cloud automation solutions for DevOps, FinOps, and SRE.') ],
  },

  '/solutions/devops': {
    title: 'DevOps Automation Solutions for Modern Cloud Teams | Xamops',
    description: 'Accelerate software delivery with Xamops DevOps automation solutions. CI/CD pipeline automation, infrastructure-as-code, Kubernetes management, and cloud-native DevOps tooling.',
    keywords: 'DevOps automation solutions, devops automation platform, cloud devops, CI/CD automation, infrastructure automation, kubernetes automation, devops workflow automation',
    canonical: `${BASE}/solutions/devops`,
    schemas: [
      wp('/solutions/devops', 'DevOps Automation Solutions for Modern Cloud Teams | Xamops', 'Accelerate delivery with CI/CD, IaC, and Kubernetes automation.'),
      { '@type': 'FAQPage', mainEntity: [
        { '@type': 'Question', name: 'What DevOps automation capabilities does Xamops provide?', acceptedAnswer: { '@type': 'Answer', text: 'Xamops provides CI/CD pipeline automation, infrastructure-as-code management, Kubernetes operations, policy-as-code enforcement, and progressive deployment strategies including canary and blue/green rollouts.' } },
      ]},
    ],
  },

  '/solutions/finops': {
    title: 'FinOps Solutions for Cloud Cost Management & Optimization | Xamops',
    description: 'Achieve guaranteed cloud cost reduction with Xamops FinOps solutions. Real-time cost visibility, automated rightsizing, reserved instance management, and 30–40% savings guarantee.',
    keywords: 'FinOps solutions, cloud cost management, cloud cost optimization, finops platform, cloud cost reduction, reserved instance optimization, aws finops, azure finops, gcp finops',
    canonical: `${BASE}/solutions/finops`,
    schemas: [
      wp('/solutions/finops', 'FinOps Solutions for Cloud Cost Management & Optimization | Xamops', 'Guaranteed 30–40% cloud cost reduction with automated FinOps.'),
      { '@type': 'FAQPage', mainEntity: [
        { '@type': 'Question', name: 'What FinOps savings can I expect with Xamops?', acceptedAnswer: { '@type': 'Answer', text: 'Xamops guarantees 30–40% monthly cloud cost reduction through automated rightsizing, spot automation, reserved instance optimization, and continuous FinOps recommendations.' } },
        { '@type': 'Question', name: 'What cloud providers does Xamops FinOps support?', acceptedAnswer: { '@type': 'Answer', text: 'Xamops FinOps supports AWS, Microsoft Azure, Google Cloud Platform, Oracle Cloud, and Yotta in a unified multicloud cost management dashboard.' } },
      ]},
    ],
  },

  '/solutions/sre': {
    title: 'SRE Solutions for Reliable Cloud Infrastructure | Xamops',
    description: 'Build and maintain reliable cloud infrastructure with Xamops SRE solutions. Automated incident management, SLO tracking, chaos engineering, and proactive reliability improvements.',
    keywords: 'SRE solutions, site reliability engineering, cloud reliability, incident management, SLO tracking, cloud operations, reliability automation',
    canonical: `${BASE}/solutions/sre`,
    schemas: [ wp('/solutions/sre', 'SRE Solutions for Reliable Cloud Infrastructure | Xamops', 'Automate SRE and build reliable cloud infrastructure at scale.') ],
  },

  // ── Blog ──────────────────────────────────────────────────────────
  '/blog': {
    title: 'Cloud Automation, FinOps & DevOps Insights Blog | Xamops',
    description: 'Expert insights on cloud automation, FinOps optimization, DevOps practices, SRE engineering, cloud cost management, and AI-powered cloud operations from the Xamops engineering team.',
    keywords: 'cloud automation blog, FinOps insights, DevOps blog, SRE blog, cloud cost optimization, cloud infrastructure, AI cloud operations',
    canonical: `${BASE}/blog`,
    schemas: [
      {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Blog',
            '@id': `${BASE}/blog/#blog`,
            mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE}/blog/` },
            headline: 'XamOps Blog | Cloud Automation, FinOps & Cognitive Cloud Insights',
            name: 'XamOps Blog',
            description: 'Expert insights on cloud automation, FinOps optimization, compute savings, disk rightsizing, and cognitive cloud operations from the XamOps engineering team.',
            url: `${BASE}/blog/`,
            inLanguage: 'en-US',
            publisher: org,
            keywords: ['cloud automation','FinOps','cloud cost optimization','compute savings','disk rightsizing','cognitive cloud OS','cloud infrastructure management'],
            about: [
              { '@type': 'Thing', name: 'Cloud Automation' },
              { '@type': 'Thing', name: 'FinOps Optimization' },
              { '@type': 'Thing', name: 'Cognitive Cloud Operations' },
            ],
            blogPost: [
              {
                '@type': 'BlogPosting',
                '@id': `${BASE}/blog/how-spot-automation-saves-teams-70-percent-on-compute/#post`,
                headline: 'How Spot Automation Saves Teams 70% on Compute',
                description: 'A walk-through of staged replacement, eviction handling, and minimum-regular-VM safety net for cloud compute optimization.',
                url: `${BASE}/blog/how-spot-automation-saves-teams-70-percent-on-compute/`,
                datePublished: '2026-04-28',
                author: { '@type': 'Person', name: 'Spot Engineering Team', jobTitle: 'Cloud Automation Experts' },
                publisher: org,
                keywords: ['spot automation','cloud compute optimization','FinOps automation','compute savings'],
                timeRequired: 'PT8M',
              },
              {
                '@type': 'BlogPosting',
                '@id': `${BASE}/blog/disk-rightsizing-the-cost-saving-everyone-ignores/#post`,
                headline: 'Disk Rightsizing: the Cost Saving Everyone Ignores',
                description: 'How disk rightsizing helps reduce cloud storage waste and improve FinOps efficiency.',
                url: `${BASE}/blog/disk-rightsizing-the-cost-saving-everyone-ignores/`,
                datePublished: '2026-04-14',
                author: { '@type': 'Person', name: 'FinOps Team', jobTitle: 'Cloud Cost Optimization Specialists' },
                publisher: org,
                keywords: ['disk rightsizing','cloud storage optimization','FinOps','cloud cost savings'],
                timeRequired: 'PT6M',
              },
              {
                '@type': 'BlogPosting',
                '@id': `${BASE}/blog/what-is-a-cognitive-cloud-os/#post`,
                headline: 'What is a Cognitive Cloud OS?',
                description: 'A definition, manifesto, and roadmap for the future of intelligent cloud operations.',
                url: `${BASE}/blog/what-is-a-cognitive-cloud-os/`,
                datePublished: '2026-04-02',
                author: { '@type': 'Person', name: 'Vision Team', jobTitle: 'Cloud Infrastructure Strategists' },
                publisher: org,
                keywords: ['cognitive cloud OS','cloud operations','AI cloud management','intelligent cloud infrastructure'],
                timeRequired: 'PT12M',
              },
            ],
          },
          {
            '@type': 'FAQPage',
            '@id': `${BASE}/blog/#faq`,
            mainEntity: [
              { '@type': 'Question', name: 'What topics does the XamOps blog cover?', acceptedAnswer: { '@type': 'Answer', text: 'The XamOps blog covers cloud automation, FinOps optimization, cloud infrastructure management, compute savings, disk rightsizing, and cognitive cloud operations.' } },
              { '@type': 'Question', name: 'How does cloud automation help reduce infrastructure costs?', acceptedAnswer: { '@type': 'Answer', text: 'Cloud automation helps reduce costs by optimizing compute resources, automating scaling, improving workload efficiency, and minimizing unnecessary cloud spending.' } },
              { '@type': 'Question', name: 'What is disk rightsizing in FinOps?', acceptedAnswer: { '@type': 'Answer', text: 'Disk rightsizing identifies oversized or underutilized cloud storage volumes and optimizes them to reduce wasted cloud storage costs.' } },
              { '@type': 'Question', name: 'Why is FinOps important for modern businesses?', acceptedAnswer: { '@type': 'Answer', text: 'FinOps improves cloud cost visibility, optimizes infrastructure usage, controls spending, and maximizes return on cloud investments.' } },
            ],
          },
          org,
        ],
      },
    ],
  },
};

export const DEFAULT_META = PAGE_META['/'];
