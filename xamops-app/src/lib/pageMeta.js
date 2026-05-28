const BASE = 'https://xamops.com';
const LOGO = `${BASE}/logo.png`;
const OG_IMG = `${BASE}/og-image.jpg`;

const org = {
  '@type': 'Organization',
  '@id': `${BASE}/#organization`,
  name: 'XamOps',
  url: BASE,
  logo: { '@type': 'ImageObject', url: LOGO },
  description: 'XamOps delivers intelligent cloud automation and FinOps solutions to help organizations optimize cloud operations, reduce infrastructure costs, and improve operational efficiency.',
  sameAs: ['https://www.linkedin.com/company/xamops'],
  knowsAbout: ['Cloud Automation','FinOps','Cloud Infrastructure','Cloud Cost Optimization','AI Operations'],
};

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
    keywords: 'cloud automation platform, FinOps platform, DevOps automation platform, cloud cost optimization, cloud management platform, cloud operations automation, SRE automation platform, AI cloud optimization platform, cloud infrastructure automation, enterprise cloud automation, cloud optimization platform, cloud cost management, infrastructure automation, AI powered cloud automation, cloud efficiency tools, cloud monitoring platform, enterprise cloud management, automated cloud operations, FinOps automation platform, cloud cost optimization platform, DevOps automation solutions, cloud infrastructure management platform, AI cloud operations platform, multicloud management platform, cloud cost management platform, devops automation services, aws cost optimization, aws finops, cloud cost optimization services',
    canonical: `${BASE}/`,
    schemas: [
      wp('/', 'Cloud FinOps & DevOps Automation Platform | Xamops', 'Automate cloud operations and reduce costs with Xamops.'),
      {
        '@type': 'WebSite',
        '@id': `${BASE}/#website`,
        url: BASE,
        name: 'XamOps',
        potentialAction: {
          '@type': 'SearchAction',
          target: { '@type': 'EntryPoint', urlTemplate: `${BASE}/search?q={search_term_string}` },
          'query-input': 'required name=search_term_string',
        },
      },
      app(
        'XamOps Cloud Automation Platform',
        'AI-powered cloud automation platform for FinOps, DevOps, and SRE teams.',
        [
          'Cloud cost optimization','FinOps automation','DevOps automation platform','SRE automation',
          'Cloud monitoring platform','AI cloud operations','Multicloud management platform',
          'Cloud infrastructure automation','Enterprise cloud management','Cloud cost management',
          'Automated cloud operations','Cloud optimization platform',
        ]
      ),
      org,
    ],
  },

  // ── Platform ───────────────────────────────────────────────────────
  '/platform': {
    title: 'Cloud Automation Platform for FinOps, DevOps & SRE | Xamops',
    description: 'Explore the Xamops cloud automation platform — purpose-built modules for FinOps, DevOps, SRE, SecOps, DBOps, and cloud cost analytics across AWS, Azure, and GCP.',
    keywords: 'cloud automation platform, cloud management platform, cloud operations automation, multicloud management platform, enterprise cloud management, cloud infrastructure automation, cloud infrastructure management platform, cloud monitoring platform, cloud optimization platform, infrastructure automation, automated cloud operations, enterprise cloud automation, AI cloud operations platform',
    canonical: `${BASE}/platform`,
    schemas: [
      wp('/platform', 'Cloud Automation Platform for FinOps, DevOps & SRE | Xamops', 'Purpose-built cloud automation modules for every cloud team.'),
      app('XamOps Platform', 'Cloud automation platform modules for FinOps, DevOps, SRE, SecOps, and DBOps.',
        ['Spot automation','Disk rightsizing','DBOps','SecOps','Cost analytics','SRE automation','Cloud monitoring']),
      org,
    ],
  },

  // ── Spot Automation ────────────────────────────────────────────────
  '/platform/spot-automation': {
    title: 'Spot Automation for Cloud Cost Optimization & Savings | Xamops',
    description: 'Reduce cloud compute costs by up to 70% with Xamops Spot Automation. Intelligent spot instance management, automated failover, and workload reliability across AWS, Azure, and GCP.',
    keywords: 'spot automation, spot instance management, cloud compute optimization, cloud cost optimization, FinOps automation, compute savings, aws spot instances, cloud cost optimization platform, cloud cost management, aws cost optimization, cloud efficiency tools',
    canonical: `${BASE}/platform/spot-automation`,
    schemas: [
      wp('/platform/spot-automation', 'Spot Automation for Cloud Cost Optimization & Savings | Xamops', 'Reduce cloud compute costs by up to 70% with intelligent spot automation.'),
      {
        '@type': 'TechArticle',
        '@id': `${BASE}/blog/how-spot-automation-saves-teams-70-percent-on-compute/#article`,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `${BASE}/blog/how-spot-automation-saves-teams-70-percent-on-compute/`,
        },
        headline: 'How Spot Automation Saves Teams 70% on Compute',
        description: 'Learn how XamOps Spot Automation helps engineering teams reduce cloud compute costs by up to 70% using intelligent workload optimization and automated infrastructure scaling.',
        image: `${BASE}/images/spot-automation-cover.jpg`,
        author: {
          '@type': 'Person',
          name: 'Spot Engineering Team',
          jobTitle: 'Cloud Automation & FinOps Experts',
          worksFor: org,
          description: 'Experts in cloud automation, spot instance optimization, and FinOps strategies.',
        },
        publisher: org,
        datePublished: '2026-04-28',
        dateModified: '2026-04-28',
        articleSection: 'Cloud Automation',
        keywords: ['spot automation','cloud cost optimization','compute savings','FinOps automation','spot instance management'],
        timeRequired: 'PT8M',
        wordCount: '1450',
        inLanguage: 'en-US',
        url: `${BASE}/blog/how-spot-automation-saves-teams-70-percent-on-compute/`,
        about: [
          { '@type': 'Thing', name: 'Cloud Cost Optimization' },
          { '@type': 'Thing', name: 'Spot Automation' },
        ],
        potentialAction: { '@type': 'ReadAction', target: `${BASE}/blog/how-spot-automation-saves-teams-70-percent-on-compute/` },
      },
      {
        '@type': 'FAQPage',
        '@id': `${BASE}/platform/spot-automation/#faq`,
        mainEntity: [
          { '@type': 'Question', name: 'What is Spot Automation in cloud computing?', acceptedAnswer: { '@type': 'Answer', text: 'Spot Automation optimizes cloud infrastructure costs using intelligent spot instance management and automated scaling, reducing compute spend by up to 70%.' } },
          { '@type': 'Question', name: 'How much can Spot Automation save on cloud costs?', acceptedAnswer: { '@type': 'Answer', text: 'XamOps Spot Automation can reduce compute costs by up to 70% while maintaining workload reliability through intelligent eviction handling and fallback strategies.' } },
          { '@type': 'Question', name: 'Which cloud providers does XamOps Spot Automation support?', acceptedAnswer: { '@type': 'Answer', text: 'XamOps Spot Automation supports AWS, Microsoft Azure, and Google Cloud Platform (GCP) spot and preemptible instances.' } },
        ],
      },
      org,
    ],
  },

  // ── Disk Rightsizing ───────────────────────────────────────────────
  '/platform/disk-rightsizing': {
    title: 'Disk Rightsizing for Cloud Cost & Storage Optimization | Xamops',
    description: 'Identify and eliminate oversized cloud storage volumes with Xamops Disk Rightsizing. Automated recommendations to cut storage waste, lower FinOps spend, and optimize cloud costs.',
    keywords: 'disk rightsizing, cloud storage optimization, cloud cost savings, FinOps, storage cost management, aws storage optimization, gcp storage optimization, cloud cost optimization, cloud cost management, infrastructure automation',
    canonical: `${BASE}/platform/disk-rightsizing`,
    schemas: [
      wp('/platform/disk-rightsizing', 'Disk Rightsizing for Cloud Cost & Storage Optimization | Xamops', 'Eliminate oversized cloud storage volumes and reduce FinOps spend.'),
      app('XamOps Disk Rightsizing', 'Automated cloud storage rightsizing to eliminate waste and reduce FinOps spend.',
        ['Storage utilization analysis','Automated rightsizing recommendations','Multi-cloud storage optimization','Cost anomaly detection']),
      {
        '@type': 'FAQPage',
        '@id': `${BASE}/platform/disk-rightsizing/#faq`,
        mainEntity: [
          { '@type': 'Question', name: 'What is disk rightsizing in cloud computing?', acceptedAnswer: { '@type': 'Answer', text: 'Disk rightsizing identifies oversized or underutilized cloud storage volumes and optimizes them to reduce wasted cloud storage costs.' } },
          { '@type': 'Question', name: 'How does Xamops automate disk rightsizing?', acceptedAnswer: { '@type': 'Answer', text: 'XamOps analyzes storage utilization metrics, identifies underused volumes, and provides automated recommendations or auto-remediation to rightsize cloud storage.' } },
          { '@type': 'Question', name: 'How much can disk rightsizing save on cloud storage costs?', acceptedAnswer: { '@type': 'Answer', text: 'Organizations typically reduce cloud storage costs by 20–40% by eliminating oversized volumes, unused snapshots, and unattached disks through automated rightsizing.' } },
        ],
      },
      org,
    ],
  },

  // ── DBOps ──────────────────────────────────────────────────────────
  '/platform/dbops': {
    title: 'Database Operations Automation & DBOps Platform | Xamops',
    description: 'Automate database operations, reduce DBA toil, and optimize cloud database performance with Xamops DBOps. Supports AWS RDS, Aurora, GCP Cloud SQL, and Azure SQL.',
    keywords: 'DBOps platform, database operations automation, cloud database management, aws rds optimization, azure sql automation, cloud database cost optimization, cloud infrastructure automation, infrastructure automation',
    canonical: `${BASE}/platform/dbops`,
    schemas: [
      wp('/platform/dbops', 'Database Operations Automation & DBOps Platform | Xamops', 'Automate database operations and optimize cloud database performance.'),
      app('XamOps DBOps', 'Database operations automation for cloud-managed databases across AWS, Azure, and GCP.',
        ['Automated DB scaling','Performance anomaly detection','Cost optimization recommendations','Multi-cloud DB support','DBA toil elimination']),
      {
        '@type': 'FAQPage',
        '@id': `${BASE}/platform/dbops/#faq`,
        mainEntity: [
          { '@type': 'Question', name: 'What is DBOps?', acceptedAnswer: { '@type': 'Answer', text: 'DBOps applies DevOps and automation principles to database management to reduce toil, improve reliability, and optimize costs.' } },
          { '@type': 'Question', name: 'Which databases does Xamops DBOps support?', acceptedAnswer: { '@type': 'Answer', text: 'XamOps DBOps supports AWS RDS, Amazon Aurora, Google Cloud SQL, Azure SQL Database, and self-managed databases on cloud VMs.' } },
          { '@type': 'Question', name: 'How does DBOps automation reduce cloud database costs?', acceptedAnswer: { '@type': 'Answer', text: 'DBOps automation identifies idle databases, right-sizes instance types, manages backups efficiently, and recommends reserved instance purchases to reduce cloud database spend.' } },
        ],
      },
      org,
    ],
  },

  // ── SecOps ─────────────────────────────────────────────────────────
  '/platform/secops': {
    title: 'SecOps Automation Platform for Cloud Security Management | Xamops',
    description: 'Automate cloud security operations with Xamops SecOps. Continuous compliance monitoring, misconfiguration detection, and automated remediation across AWS, Azure, and GCP.',
    keywords: 'SecOps automation, cloud security management, cloud compliance automation, cloud misconfiguration detection, cloud security platform, aws security automation, azure cloud security monitoring, cloud monitoring platform, cloud monitoring services, gcp security monitoring',
    canonical: `${BASE}/platform/secops`,
    schemas: [
      wp('/platform/secops', 'SecOps Automation Platform for Cloud Security Management | Xamops', 'Automate cloud security operations, compliance, and remediation.'),
      app('XamOps SecOps', 'Cloud security operations automation for continuous compliance and misconfiguration remediation.',
        ['Continuous compliance monitoring','Misconfiguration detection','Automated remediation','Multi-cloud security','Policy-as-code enforcement']),
      {
        '@type': 'FAQPage',
        '@id': `${BASE}/platform/secops/#faq`,
        mainEntity: [
          { '@type': 'Question', name: 'What is SecOps automation in the cloud?', acceptedAnswer: { '@type': 'Answer', text: 'SecOps automation uses AI and policy-as-code to continuously detect misconfigurations, enforce compliance, and auto-remediate security issues across cloud environments.' } },
          { '@type': 'Question', name: 'Which compliance frameworks does Xamops SecOps support?', acceptedAnswer: { '@type': 'Answer', text: 'XamOps SecOps supports CIS Benchmarks, SOC 2, ISO 27001, PCI-DSS, HIPAA, and custom policy frameworks across AWS, Azure, and GCP.' } },
          { '@type': 'Question', name: 'How does cloud SecOps automation improve security posture?', acceptedAnswer: { '@type': 'Answer', text: 'Cloud SecOps automation continuously scans for misconfigurations, enforces least-privilege policies, and auto-remediates issues before they become incidents — reducing mean time to remediate (MTTR) by over 80%.' } },
        ],
      },
      org,
    ],
  },

  // ── Cost Analytics ─────────────────────────────────────────────────
  '/platform/cost-analytics': {
    title: 'Cloud Cost Analytics & FinOps Insights Platform | Xamops',
    description: 'Get full cloud cost visibility with Xamops Cost Analytics. Real-time FinOps dashboards, cost anomaly detection, chargeback, and automated savings recommendations across AWS, Azure, and GCP.',
    keywords: 'cloud cost analytics, FinOps insights, cloud cost management platform, cloud cost visibility, aws cost analytics, cloud cost reporting, FinOps dashboard, cloud cost optimization, cloud cost management, aws finops, cloud cost optimization platform, cloud cost optimization services, gcp cost optimization, azure cloud cost optimization, aws cloud cost management, google cloud cost optimization',
    canonical: `${BASE}/platform/cost-analytics`,
    schemas: [
      wp('/platform/cost-analytics', 'Cloud Cost Analytics & FinOps Insights Platform | Xamops', 'Real-time FinOps dashboards and multicloud cost visibility.'),
      app('XamOps Cost Analytics', 'Real-time FinOps dashboards and cloud cost analytics for AWS, Azure, and GCP.',
        ['Real-time cost dashboards','Cost anomaly detection','Chargeback & showback','Rightsizing recommendations','Reserved instance management','Multicloud cost management']),
      {
        '@type': 'FAQPage',
        '@id': `${BASE}/platform/cost-analytics/#faq`,
        mainEntity: [
          { '@type': 'Question', name: 'What does a FinOps cost analytics platform do?', acceptedAnswer: { '@type': 'Answer', text: 'A FinOps cost analytics platform provides real-time visibility into cloud spending, detects cost anomalies, allocates costs by team or project, and surfaces optimization recommendations.' } },
          { '@type': 'Question', name: 'How does Xamops help with cloud cost management?', acceptedAnswer: { '@type': 'Answer', text: 'XamOps provides automated FinOps dashboards, cost anomaly alerts, rightsizing recommendations, and a guaranteed 30–40% cloud cost reduction.' } },
          { '@type': 'Question', name: 'Which clouds does Xamops cost analytics support?', acceptedAnswer: { '@type': 'Answer', text: 'XamOps Cost Analytics supports AWS, Microsoft Azure, Google Cloud Platform, Oracle Cloud, and Yotta in a unified multicloud FinOps dashboard.' } },
        ],
      },
      org,
    ],
  },

  // ── SRE Platform ──────────────────────────────────────────────────
  '/platform/sre': {
    title: 'Site Reliability Engineering (SRE) Automation Platform | Xamops',
    description: 'Automate SRE workflows with Xamops. AI-driven incident detection, runbook automation, SLO management, and on-call optimization for reliable cloud infrastructure.',
    keywords: 'SRE automation platform, site reliability engineering, SLO management, incident automation, runbook automation, cloud reliability, AI SRE platform, cloud operations automation, cloud monitoring platform, administering monitoring cloud services, cloud monitoring services, cloud infrastructure automation',
    canonical: `${BASE}/platform/sre`,
    schemas: [
      wp('/platform/sre', 'Site Reliability Engineering (SRE) Automation Platform | Xamops', 'Automate SRE with AI-driven incident detection and SLO management.'),
      app('XamOps SRE Automation', 'AI-driven SRE automation platform for incident detection, SLO management, and runbook automation.',
        ['AI incident detection','Runbook automation','SLO tracking','On-call optimization','Chaos engineering','Root cause analysis']),
      {
        '@type': 'FAQPage',
        '@id': `${BASE}/platform/sre/#faq`,
        mainEntity: [
          { '@type': 'Question', name: 'What is SRE automation?', acceptedAnswer: { '@type': 'Answer', text: 'SRE automation applies AI and policy-driven workflows to automate incident detection, runbook execution, SLO tracking, and on-call escalation for reliable cloud operations.' } },
          { '@type': 'Question', name: 'How does Xamops improve cloud reliability?', acceptedAnswer: { '@type': 'Answer', text: 'XamOps uses proactive anomaly detection, automated runbook execution, and AI-powered root cause analysis to improve MTTR and eliminate operational toil for SRE teams.' } },
          { '@type': 'Question', name: 'What is an SLO and how does Xamops manage it?', acceptedAnswer: { '@type': 'Answer', text: 'An SLO (Service Level Objective) defines reliability targets for your services. XamOps continuously tracks SLOs, alerts on burn rate, and triggers automated responses to protect error budgets.' } },
        ],
      },
      org,
    ],
  },

  // ── Solutions ─────────────────────────────────────────────────────
  '/solutions': {
    title: 'Cloud Solutions for DevOps, FinOps & SRE Teams | Xamops',
    description: 'Explore Xamops cloud solutions tailored for DevOps, FinOps, and SRE teams. Reduce cloud costs, automate operations, and improve reliability at enterprise scale.',
    keywords: 'cloud solutions, DevOps solutions, FinOps solutions, SRE solutions, cloud automation solutions, enterprise cloud solutions, enterprise cloud management, cloud management platform, multicloud management platform',
    canonical: `${BASE}/solutions`,
    schemas: [
      wp('/solutions', 'Cloud Solutions for DevOps, FinOps & SRE Teams | Xamops', 'Tailored cloud automation solutions for DevOps, FinOps, and SRE.'),
      org,
    ],
  },

  '/solutions/devops': {
    title: 'DevOps Automation Solutions for Modern Cloud Teams | Xamops',
    description: 'Accelerate software delivery with Xamops DevOps automation solutions. CI/CD pipeline automation, infrastructure-as-code, Kubernetes management, and cloud-native tooling for enterprise teams.',
    keywords: 'DevOps automation solutions, devops automation platform, cloud devops, CI/CD automation, infrastructure automation, kubernetes automation, devops workflow automation, cloud automation devops, azure devops automation, devops automation services, cloud infrastructure automation, enterprise cloud automation',
    canonical: `${BASE}/solutions/devops`,
    schemas: [
      wp('/solutions/devops', 'DevOps Automation Solutions for Modern Cloud Teams | Xamops', 'Accelerate delivery with CI/CD, IaC, and Kubernetes automation.'),
      app('XamOps DevOps Automation', 'DevOps automation solutions for CI/CD, IaC, and Kubernetes across cloud environments.',
        ['CI/CD pipeline automation','Infrastructure-as-code','Kubernetes operations','Policy-as-code','Canary & blue/green deployments','Cost-aware deployments']),
      {
        '@type': 'FAQPage',
        '@id': `${BASE}/solutions/devops/#faq`,
        mainEntity: [
          { '@type': 'Question', name: 'What DevOps automation capabilities does Xamops provide?', acceptedAnswer: { '@type': 'Answer', text: 'XamOps provides CI/CD pipeline automation, infrastructure-as-code management, Kubernetes operations, policy-as-code enforcement, and progressive deployment strategies including canary and blue/green rollouts.' } },
          { '@type': 'Question', name: 'How does Xamops DevOps automation differ from traditional CI/CD tools?', acceptedAnswer: { '@type': 'Answer', text: 'XamOps goes beyond pipeline automation with AI-driven drift detection, cost-aware deployments, and automated compliance checks baked into every deployment workflow.' } },
        ],
      },
      org,
    ],
  },

  '/solutions/finops': {
    title: 'FinOps Solutions for Cloud Cost Management & Optimization | Xamops',
    description: 'Achieve guaranteed 30–40% cloud cost reduction with Xamops FinOps solutions. Real-time cost visibility, automated rightsizing, reserved instance optimization, and multicloud cost management.',
    keywords: 'FinOps solutions, cloud cost management, cloud cost optimization, FinOps platform, cloud cost reduction, reserved instance optimization, aws finops, azure finops, gcp finops, cloud cost optimization platform, FinOps automation platform, cloud cost management platform, multicloud management platform, aws cost optimization, cloud cost optimization services, google cloud cost optimization, azure cloud cost optimization, gcp cost optimization, cloud cost analytics',
    canonical: `${BASE}/solutions/finops`,
    schemas: [
      wp('/solutions/finops', 'FinOps Solutions for Cloud Cost Management & Optimization | Xamops', 'Guaranteed 30–40% cloud cost reduction with automated FinOps.'),
      app('XamOps FinOps', 'Automated FinOps solutions for cloud cost management and optimization across AWS, Azure, and GCP.',
        ['Real-time cost visibility','Automated rightsizing','Reserved instance optimization','Chargeback automation','Cloud cost anomaly alerts','Guaranteed 30-40% cost reduction']),
      {
        '@type': 'FAQPage',
        '@id': `${BASE}/solutions/finops/#faq`,
        mainEntity: [
          { '@type': 'Question', name: 'What FinOps savings can I expect with Xamops?', acceptedAnswer: { '@type': 'Answer', text: 'XamOps guarantees 30–40% monthly cloud cost reduction through automated rightsizing, spot automation, reserved instance optimization, and continuous FinOps recommendations.' } },
          { '@type': 'Question', name: 'What cloud providers does Xamops FinOps support?', acceptedAnswer: { '@type': 'Answer', text: 'XamOps FinOps supports AWS, Microsoft Azure, Google Cloud Platform, Oracle Cloud, and Yotta in a unified multicloud cost management dashboard.' } },
          { '@type': 'Question', name: 'What is a FinOps platform?', acceptedAnswer: { '@type': 'Answer', text: 'A FinOps platform provides cloud cost visibility, budget alerts, rightsizing recommendations, chargeback, and automated savings actions to help organizations control and optimize cloud spend.' } },
        ],
      },
      org,
    ],
  },

  '/solutions/sre': {
    title: 'SRE Solutions for Reliable Cloud Infrastructure | Xamops',
    description: 'Build and maintain reliable cloud infrastructure with Xamops SRE solutions. Automated incident management, SLO tracking, chaos engineering, and proactive reliability improvements.',
    keywords: 'SRE solutions, site reliability engineering, cloud reliability, incident management, SLO tracking, cloud operations, reliability automation, SRE automation platform, cloud operations automation, administering monitoring cloud services',
    canonical: `${BASE}/solutions/sre`,
    schemas: [
      wp('/solutions/sre', 'SRE Solutions for Reliable Cloud Infrastructure | Xamops', 'Automate SRE and build reliable cloud infrastructure at scale.'),
      app('XamOps SRE Solutions', 'SRE solutions for reliable cloud infrastructure with automated incident management and SLO tracking.',
        ['Automated incident management','SLO tracking','Chaos engineering','On-call optimization','Proactive anomaly detection']),
      {
        '@type': 'FAQPage',
        '@id': `${BASE}/solutions/sre/#faq`,
        mainEntity: [
          { '@type': 'Question', name: 'What SRE capabilities does Xamops provide?', acceptedAnswer: { '@type': 'Answer', text: 'XamOps provides automated incident management, SLO tracking, error budget monitoring, chaos engineering, and AI-driven root cause analysis for SRE teams.' } },
          { '@type': 'Question', name: 'How does Xamops reduce on-call toil for SRE teams?', acceptedAnswer: { '@type': 'Answer', text: 'XamOps automates runbook execution for common incidents, suppresses alert noise through AI correlation, and resolves recurring issues autonomously — reducing on-call pages by up to 60%.' } },
        ],
      },
      org,
    ],
  },

  // ── Blog post: AWS cost spike ─────────────────────────────────────
  '/blog/aws-cost-spike-investigation': {
    title: "AWS Bill Jumped 40%? Here's How to Investigate It | XamOps Blog",
    description: 'A step-by-step checklist for DevOps engineers to diagnose and fix unexpected AWS cost spikes — before finance comes knocking again.',
    keywords: 'aws cost spike investigation, why did my aws bill increase, aws cost anomaly checklist, unexpected aws charges devops, aws cost explorer, aws finops, cloud cost optimization, aws billing investigation, ec2 cost spike, data transfer aws costs',
    canonical: `${BASE}/blog/aws-cost-spike-investigation`,
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        '@id': `${BASE}/blog/aws-cost-spike-investigation/#post`,
        headline: "Your AWS Bill Jumped 40% Last Month — Here's How to Actually Investigate It",
        description: 'A step-by-step checklist for DevOps engineers to diagnose and fix unexpected AWS cost spikes — before finance comes knocking again.',
        url: `${BASE}/blog/aws-cost-spike-investigation/`,
        datePublished: '2026-05-28',
        dateModified: '2026-05-28',
        author: { '@type': 'Person', name: 'XamOps FinOps Team', jobTitle: 'Cloud Cost Optimization Specialists', worksFor: org },
        publisher: org,
        keywords: ['aws cost spike', 'aws bill increase', 'cloud cost investigation', 'devops finops', 'aws cost explorer', 'ec2 cost', 'data transfer aws', 'spot fallback', 'orphaned resources'],
        timeRequired: 'PT9M',
        wordCount: '2000',
        inLanguage: 'en-US',
        articleSection: 'FinOps',
        about: [
          { '@type': 'Thing', name: 'AWS Cost Management' },
          { '@type': 'Thing', name: 'Cloud Cost Optimization' },
          { '@type': 'Thing', name: 'FinOps' },
        ],
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `${BASE}/blog/aws-cost-spike-investigation/`,
        },
      },
      wp('/blog/aws-cost-spike-investigation', "AWS Bill Jumped 40%? Investigate It | XamOps Blog", 'Step-by-step AWS cost spike investigation checklist for DevOps engineers.'),
      org,
    ],
  },

  // ── Blog ──────────────────────────────────────────────────────────
  '/blog': {
    title: 'Cloud Automation, FinOps & DevOps Insights Blog | Xamops',
    description: 'Expert insights on cloud automation, FinOps optimization, DevOps practices, SRE engineering, cloud cost management, and AI-powered cloud operations from the Xamops engineering team.',
    keywords: 'cloud automation blog, FinOps insights, DevOps blog, SRE blog, cloud cost optimization, cloud infrastructure, AI cloud operations, cloud monitoring, cloud cost management, cloud infrastructure automation',
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
            description: 'Explore expert insights on cloud automation, FinOps optimization, compute savings, disk rightsizing, and cognitive cloud operations from the XamOps engineering team.',
            url: `${BASE}/blog/`,
            inLanguage: 'en-US',
            publisher: org,
            keywords: [
              'cloud automation','FinOps','cloud cost optimization','compute savings',
              'disk rightsizing','cognitive cloud OS','cloud infrastructure management',
              'cloud operations','AI cloud operations',
            ],
            about: [
              { '@type': 'Thing', name: 'Cloud Automation' },
              { '@type': 'Thing', name: 'FinOps Optimization' },
              { '@type': 'Thing', name: 'Cognitive Cloud Operations' },
            ],
            blogPost: [
              {
                '@type': 'BlogPosting',
                '@id': `${BASE}/blog/aws-cost-spike-investigation/#post`,
                headline: "Your AWS Bill Jumped 40% Last Month — Here's How to Actually Investigate It",
                description: 'A step-by-step checklist for DevOps engineers to diagnose and fix unexpected AWS cost spikes.',
                url: `${BASE}/blog/aws-cost-spike-investigation/`,
                datePublished: '2026-05-28',
                author: { '@type': 'Person', name: 'XamOps FinOps Team', jobTitle: 'Cloud Cost Optimization Specialists' },
                publisher: org,
                keywords: ['aws cost spike', 'aws bill increase', 'finops', 'devops', 'cloud cost investigation'],
                timeRequired: 'PT9M',
              },
              {
                '@type': 'BlogPosting',
                '@id': `${BASE}/blog/how-spot-automation-saves-teams-70-percent-on-compute/#post`,
                headline: 'How Spot Automation Saves Teams 70% on Compute',
                description: 'A walk-through of the staged replacement loop, eviction handling, and minimum-regular-VM safety net for cloud compute optimization.',
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
                description: 'Learn how disk rightsizing helps reduce cloud storage waste and improve FinOps efficiency by optimizing unused storage resources.',
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
                description: 'A definition, manifesto, and roadmap for the future of intelligent cloud operations and automation.',
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
              { '@type': 'Question', name: 'How does cloud automation help reduce infrastructure costs?', acceptedAnswer: { '@type': 'Answer', text: 'Cloud automation helps reduce infrastructure costs by optimizing compute resources, automating scaling, improving workload efficiency, and minimizing unnecessary cloud spending.' } },
              { '@type': 'Question', name: 'What is disk rightsizing in FinOps?', acceptedAnswer: { '@type': 'Answer', text: 'Disk rightsizing is the process of identifying oversized or underutilized cloud storage volumes and optimizing them to reduce wasted cloud storage costs.' } },
              { '@type': 'Question', name: 'Why is FinOps important for modern businesses?', acceptedAnswer: { '@type': 'Answer', text: 'FinOps helps businesses improve cloud cost visibility, optimize infrastructure usage, control spending, and maximize return on cloud investments.' } },
            ],
          },
          org,
        ],
      },
    ],
  },

  // ── Pricing ──────────────────────────────────────────────────────
  '/pricing': {
    title: 'XamOps Pricing — Cloud Automation & FinOps Platform Plans',
    description: 'Explore XamOps pricing plans for cloud automation, FinOps, DevOps, and SRE teams. Flexible plans for startups to enterprise. Start with a free 30-day cloud audit.',
    keywords: 'XamOps pricing, cloud automation pricing, FinOps platform pricing, cloud management platform pricing, enterprise cloud management, cloud cost optimization pricing',
    canonical: `${BASE}/pricing`,
    schemas: [
      wp('/pricing', 'XamOps Pricing — Cloud Automation & FinOps Platform Plans', 'Flexible pricing for cloud automation, FinOps, DevOps, and SRE teams.'),
      org,
    ],
  },

  // ── About ─────────────────────────────────────────────────────────
  '/about': {
    title: 'About XamOps — The AI-Powered Cloud Automation Company',
    description: 'Learn about XamOps — the team building the AI-powered cloud automation platform that helps enterprises automate FinOps, DevOps, and SRE operations at scale.',
    keywords: 'about XamOps, cloud automation company, AI cloud platform, enterprise cloud management, FinOps company, DevOps automation company, cloud infrastructure automation',
    canonical: `${BASE}/about`,
    schemas: [
      wp('/about', 'About XamOps — The AI-Powered Cloud Automation Company', 'The team building the AI-powered cloud automation platform.'),
      org,
    ],
  },

  // ── Demo ─────────────────────────────────────────────────────────
  '/demo': {
    title: 'Book a Demo — XamOps Cloud Automation & FinOps Platform',
    description: 'See XamOps in action. Book a personalized demo of the cloud automation platform and discover how to reduce cloud costs 30–40% and eliminate operational toil.',
    keywords: 'XamOps demo, cloud automation demo, FinOps platform demo, cloud cost optimization demo, book a demo, cloud management platform demo',
    canonical: `${BASE}/demo`,
    schemas: [
      wp('/demo', 'Book a Demo — XamOps Cloud Automation & FinOps Platform', 'See XamOps in action and discover how to reduce cloud costs 30–40%.'),
      org,
    ],
  },

  // ── Contact ───────────────────────────────────────────────────────
  '/contact': {
    title: 'Contact XamOps — Cloud Automation & FinOps Platform',
    description: "Get in touch with the XamOps team. Questions about cloud automation, FinOps, DevOps, or SRE? We're here to help.",
    keywords: 'contact XamOps, cloud automation support, FinOps platform contact, cloud management support',
    canonical: `${BASE}/contact`,
    schemas: [
      wp('/contact', 'Contact XamOps — Cloud Automation & FinOps Platform', 'Reach the XamOps team for cloud automation and FinOps inquiries.'),
      org,
    ],
  },
};

export const DEFAULT_META = PAGE_META['/'];
