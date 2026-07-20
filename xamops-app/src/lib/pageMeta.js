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
    description: 'Automate cloud operations, reduce infrastructure costs, and optimize performance with Xamops, the cloud automation platform for FinOps, DevOps, and SRE teams.',
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
    description: 'Explore the Xamops cloud automation platform: purpose-built modules for FinOps, DevOps, SRE, SecOps, DBOps, and cloud cost analytics across AWS, Azure, and GCP.',
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
    title: 'Spot Automation Platform | Automate Spot Instance Management | Xamops',
    description: 'Reduce cloud costs and improve workload availability with the Xamops Spot Automation Platform. Automate spot instance management, optimize cloud infrastructure, and maximize operational efficiency.',
    keywords: 'spot automation, spot instance management, cloud compute optimization, cloud cost optimization, FinOps automation, compute savings, aws spot instances, cloud cost optimization platform, cloud cost management, aws cost optimization, cloud efficiency tools',
    canonical: `${BASE}/platform/spot-automation`,
    schemas: [
      wp('/platform/spot-automation', 'Spot Automation Platform | Automate Spot Instance Management | Xamops', 'Reduce cloud costs and improve workload availability with automated spot instance management.'),
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
          { '@type': 'Question', name: 'What is Spot Automation?', acceptedAnswer: { '@type': 'Answer', text: 'Spot Automation automatically manages spot instances by launching, monitoring, replacing, and optimizing workloads to reduce cloud costs while maintaining application availability.' } },
          { '@type': 'Question', name: 'How does Xamops reduce cloud costs?', acceptedAnswer: { '@type': 'Answer', text: 'Xamops continuously analyzes cloud resources, automates spot instance allocation, optimizes workloads, and eliminates unnecessary infrastructure spending.' } },
          { '@type': 'Question', name: 'Can Xamops automate cloud infrastructure?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Xamops automates infrastructure provisioning, scaling, monitoring, workload management, and resource optimization across cloud environments.' } },
          { '@type': 'Question', name: 'Is Xamops suitable for enterprise cloud environments?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The platform supports enterprise cloud automation with centralized management, governance, monitoring, and cost optimization.' } },
          { '@type': 'Question', name: 'How does Spot Automation improve workload reliability?', acceptedAnswer: { '@type': 'Answer', text: 'The platform automatically detects spot interruptions, replaces instances, balances workloads, and maintains application performance with minimal disruption.' } },
          { '@type': 'Question', name: 'Which teams benefit from Xamops Spot Automation?', acceptedAnswer: { '@type': 'Answer', text: 'DevOps, FinOps, Cloud Operations, Infrastructure Engineering, Platform Engineering, and Site Reliability Engineering (SRE) teams all benefit from automated cloud operations.' } },
        ],
      },
      org,
    ],
  },

  // ── Disk Rightsizing ───────────────────────────────────────────────
  '/platform/disk-rightsizing': {
    title: 'Disk Rightsizing | Optimize Cloud Storage Costs | Xamops',
    description: 'Optimize cloud storage and reduce unnecessary costs with Xamops Disk Rightsizing. Identify oversized volumes, improve storage utilization, and maximize cloud efficiency.',
    keywords: 'disk rightsizing, cloud storage optimization, cloud cost savings, FinOps, storage cost management, aws storage optimization, gcp storage optimization, cloud cost optimization, cloud cost management, infrastructure automation',
    canonical: `${BASE}/platform/disk-rightsizing`,
    schemas: [
      wp('/platform/disk-rightsizing', 'Disk Rightsizing | Optimize Cloud Storage Costs | Xamops', 'Identify oversized volumes, improve storage utilization, and maximize cloud efficiency.'),
      app('XamOps Disk Rightsizing', 'Automated cloud storage rightsizing to eliminate waste and reduce FinOps spend.',
        ['Storage utilization analysis','Automated rightsizing recommendations','Multi-cloud storage optimization','Cost anomaly detection']),
      {
        '@type': 'FAQPage',
        '@id': `${BASE}/platform/disk-rightsizing/#faq`,
        mainEntity: [
          { '@type': 'Question', name: 'What is Disk Rightsizing?', acceptedAnswer: { '@type': 'Answer', text: 'Disk Rightsizing is the process of reviewing cloud storage usage and suggesting the correct disk size according to real utilization. It cuts avoidable storage costs without sacrificing application performance.' } },
          { '@type': 'Question', name: 'How does Xamops Disk Rightsizing reduce cloud costs?', acceptedAnswer: { '@type': 'Answer', text: 'Xamops constantly monitors cloud storage usage and identifies oversized or underutilized disks, recommending the optimum storage configuration based on usage patterns.' } },
          { '@type': 'Question', name: 'Does Disk Rightsizing affect application performance?', acceptedAnswer: { '@type': 'Answer', text: 'No. Xamops recommendations are based on real storage utilization and performance metrics, enabling organizations to optimize storage while maintaining application reliability and performance.' } },
          { '@type': 'Question', name: 'Can Xamops identify unused cloud storage?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Xamops detects underutilized and oversized storage volumes, allowing organizations to reclaim unused capacity and reduce unnecessary cloud storage costs.' } },
        ],
      },
      org,
    ],
  },

  // ── DBOps ──────────────────────────────────────────────────────────
  '/platform/dbops': {
    title: 'SecOps Platform | AI-Powered Cloud Security Automation | Xamops',
    description: 'Strengthen cloud security with the Xamops SecOps Platform. Automate security operations, improve compliance, monitor cloud infrastructure, and optimize enterprise cloud management with AI-powered automation.',
    keywords: 'DBOps platform, database operations automation, cloud database management, aws rds optimization, azure sql automation, cloud database cost optimization, cloud infrastructure automation, infrastructure automation',
    canonical: `${BASE}/platform/dbops`,
    schemas: [
      wp('/platform/dbops', 'SecOps Platform | AI-Powered Cloud Security Automation | Xamops', 'Automate security operations, improve compliance, and optimize enterprise cloud management with AI-powered automation.'),
      app('XamOps DBOps', 'Database operations automation for cloud-managed databases across AWS, Azure, and GCP.',
        ['Automated DB scaling','Performance anomaly detection','Cost optimization recommendations','Multi-cloud DB support','DBA toil elimination']),
      {
        '@type': 'FAQPage',
        '@id': `${BASE}/platform/dbops/#faq`,
        mainEntity: [
          { '@type': 'Question', name: 'What is a SecOps Platform?', acceptedAnswer: { '@type': 'Answer', text: 'The SecOps Platform brings together the process of security and operations to enable automation in threat detection, monitoring, compliance, and incident response within cloud environments.' } },
          { '@type': 'Question', name: 'How does Xamops improve cloud security?', acceptedAnswer: { '@type': 'Answer', text: 'Xamops leverages automation using artificial intelligence, continuous monitoring, intelligent policy enforcement, and automated remediation for better cloud security.' } },
          { '@type': 'Question', name: 'Can Xamops automate cloud operations?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Xamops automates cloud infrastructure management, security operations, compliance, monitoring, and cloud optimization.' } },
          { '@type': 'Question', name: 'Which teams can benefit from Xamops?', acceptedAnswer: { '@type': 'Answer', text: 'DevOps, SecOps, FinOps, IT Operations, SRE, Cloud Engineering, and Infrastructure Management teams all benefit from the platform.' } },
        ],
      },
      org,
    ],
  },

  // ── SecOps ─────────────────────────────────────────────────────────
  '/platform/secops': {
    title: 'SecOps Platform | Security Operations Automation | Xamops',
    description: 'Strengthen your security operations with Xamops SecOps. Detect threats faster, automate security workflows, improve incident response, and protect your cloud infrastructure.',
    keywords: 'SecOps automation, cloud security management, cloud compliance automation, cloud misconfiguration detection, cloud security platform, aws security automation, azure cloud security monitoring, cloud monitoring platform, cloud monitoring services, gcp security monitoring',
    canonical: `${BASE}/platform/secops`,
    schemas: [
      wp('/platform/secops', 'SecOps Platform | Security Operations Automation | Xamops', 'Detect threats faster, automate security workflows, and improve incident response.'),
      app('XamOps SecOps', 'Cloud security operations automation for continuous compliance and misconfiguration remediation.',
        ['Continuous compliance monitoring','Misconfiguration detection','Automated remediation','Multi-cloud security','Policy-as-code enforcement']),
      {
        '@type': 'FAQPage',
        '@id': `${BASE}/platform/secops/#faq`,
        mainEntity: [
          { '@type': 'Question', name: 'What is SecOps?', acceptedAnswer: { '@type': 'Answer', text: 'SecOps (Security Operations) brings together security and IT operations teams to ensure constant monitoring, detection, investigation, and response to cyber attacks and securing cloud infrastructure.' } },
          { '@type': 'Question', name: 'What is a SecOps platform?', acceptedAnswer: { '@type': 'Answer', text: 'A SecOps Platform integrates security monitoring, threat detection, incident response, automation, and compliance management into one unified system.' } },
          { '@type': 'Question', name: 'Which cloud platforms are supported by Xamops SecOps?', acceptedAnswer: { '@type': 'Answer', text: 'Xamops supports major cloud providers, including Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP).' } },
          { '@type': 'Question', name: 'How does Xamops help with incident response?', acceptedAnswer: { '@type': 'Answer', text: 'Xamops provides real-time alerts, centralized security monitoring, automated workflows, and actionable insights that help security teams investigate and resolve incidents faster.' } },
        ],
      },
      org,
    ],
  },

  // ── Cost Analytics ─────────────────────────────────────────────────
  '/platform/cost-analytics': {
    title: 'Cost Analytics Platform | Cloud Cost Analytics & FinOps | Xamops',
    description: 'Gain complete visibility into cloud spending with Xamops Cost Analytics. Monitor costs, optimize cloud resources, improve budgeting, and simplify cloud financial management.',
    keywords: 'cloud cost analytics, FinOps insights, cloud cost management platform, cloud cost visibility, aws cost analytics, cloud cost reporting, FinOps dashboard, cloud cost optimization, cloud cost management, aws finops, cloud cost optimization platform, cloud cost optimization services, gcp cost optimization, azure cloud cost optimization, aws cloud cost management, google cloud cost optimization',
    canonical: `${BASE}/platform/cost-analytics`,
    schemas: [
      wp('/platform/cost-analytics', 'Cost Analytics Platform | Cloud Cost Analytics & FinOps | Xamops', 'Monitor costs, optimize cloud resources, and simplify cloud financial management.'),
      app('XamOps Cost Analytics', 'Real-time FinOps dashboards and cloud cost analytics for AWS, Azure, and GCP.',
        ['Real-time cost dashboards','Cost anomaly detection','Chargeback & showback','Rightsizing recommendations','Reserved instance management','Multicloud cost management']),
      {
        '@type': 'FAQPage',
        '@id': `${BASE}/platform/cost-analytics/#faq`,
        mainEntity: [
          { '@type': 'Question', name: 'What is a Cost Analytics Platform?', acceptedAnswer: { '@type': 'Answer', text: 'A Cost Analytics Platform helps businesses monitor, analyze, and optimize cloud spending by providing complete visibility into resource usage, cost allocation, budgeting, and cloud financial performance.' } },
          { '@type': 'Question', name: 'How does Xamops Cost Analytics help reduce cloud costs?', acceptedAnswer: { '@type': 'Answer', text: 'Xamops continuously analyzes cloud usage and spending patterns to identify idle resources, underutilized infrastructure, and unexpected cost increases.' } },
          { '@type': 'Question', name: 'Can Xamops monitor AWS, Azure, and Google Cloud costs together?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Xamops supports multi-cloud environments by bringing together cost data from AWS, Microsoft Azure, and Google Cloud into a single dashboard.' } },
          { '@type': 'Question', name: 'What is cloud cost allocation?', acceptedAnswer: { '@type': 'Answer', text: 'Cloud cost allocation is the process of assigning cloud expenses to specific teams, departments, applications, or projects using customizable tags and reporting.' } },
        ],
      },
      org,
    ],
  },

  // ── SRE Platform ──────────────────────────────────────────────────
  '/platform/sre': {
    title: 'SRE Automation Platform | AI-Powered Site Reliability Engineering | Xamops',
    description: 'Improve reliability, automate cloud operations, and optimize infrastructure with the Xamops SRE Automation Platform. Reduce downtime using AI-powered cloud automation and intelligent monitoring.',
    keywords: 'SRE automation platform, site reliability engineering, SLO management, incident automation, runbook automation, cloud reliability, AI SRE platform, cloud operations automation, cloud monitoring platform, administering monitoring cloud services, cloud monitoring services, cloud infrastructure automation',
    canonical: `${BASE}/platform/sre`,
    schemas: [
      wp('/platform/sre', 'SRE Automation Platform | AI-Powered Site Reliability Engineering | Xamops', 'Improve reliability and reduce downtime with AI-powered cloud automation.'),
      app('XamOps SRE Automation', 'AI-driven SRE automation platform for incident detection, SLO management, and runbook automation.',
        ['AI incident detection','Runbook automation','SLO tracking','On-call optimization','Chaos engineering','Root cause analysis']),
      {
        '@type': 'FAQPage',
        '@id': `${BASE}/platform/sre/#faq`,
        mainEntity: [
          { '@type': 'Question', name: 'What is an SRE Automation Platform?', acceptedAnswer: { '@type': 'Answer', text: 'An SRE Automation Platform helps organizations automate operational tasks, monitor infrastructure, improve reliability, and reduce downtime using intelligent workflows and AI-powered insights.' } },
          { '@type': 'Question', name: 'How does Xamops improve cloud reliability?', acceptedAnswer: { '@type': 'Answer', text: 'Xamops continuously monitors cloud infrastructure, automates incident response, optimizes workloads, and provides AI-driven recommendations to improve system reliability and application performance.' } },
          { '@type': 'Question', name: 'Which teams benefit from the Xamops SRE Automation Platform?', acceptedAnswer: { '@type': 'Answer', text: 'Site Reliability Engineers, DevOps teams, Cloud Operations teams, Infrastructure Engineers, IT Operations, and FinOps teams all benefit from the platform.' } },
          { '@type': 'Question', name: 'Is Xamops suitable for multi-cloud environments?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. Xamops provides centralized visibility and automation for AWS, Azure, Google Cloud, and hybrid cloud infrastructures.' } },
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
    title: 'DevOps Solutions | Automate Software Delivery & Cloud Operations | Xamops',
    description: 'Accelerate software delivery with Xamops DevOps Solutions. Automate CI/CD, improve cloud operations, optimize infrastructure, and deliver applications faster with confidence.',
    keywords: 'DevOps automation solutions, devops automation platform, cloud devops, CI/CD automation, infrastructure automation, kubernetes automation, devops workflow automation, cloud automation devops, azure devops automation, devops automation services, cloud infrastructure automation, enterprise cloud automation',
    canonical: `${BASE}/solutions/devops`,
    schemas: [
      wp('/solutions/devops', 'DevOps Solutions | Automate Software Delivery & Cloud Operations | Xamops', 'Automate CI/CD, improve cloud operations, and deliver applications faster.'),
      app('XamOps DevOps Automation', 'DevOps automation solutions for CI/CD, IaC, and Kubernetes across cloud environments.',
        ['CI/CD pipeline automation','Infrastructure-as-code','Kubernetes operations','Policy-as-code','Canary & blue/green deployments','Cost-aware deployments']),
      {
        '@type': 'FAQPage',
        '@id': `${BASE}/solutions/devops/#faq`,
        mainEntity: [
          { '@type': 'Question', name: 'What are DevOps solutions?', acceptedAnswer: { '@type': 'Answer', text: 'DevOps solutions are tools and practices that help development and operations teams work together to automate software delivery, infrastructure management, testing, monitoring, and deployment.' } },
          { '@type': 'Question', name: 'How do Xamops DevOps Solutions improve software delivery?', acceptedAnswer: { '@type': 'Answer', text: 'Xamops automates CI/CD pipelines, deployment workflows, infrastructure provisioning, and cloud monitoring, helping organizations release applications faster and reduce deployment errors.' } },
          { '@type': 'Question', name: 'Does Xamops support multi-cloud environments?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Xamops DevOps Solutions support AWS, Microsoft Azure, Google Cloud, and hybrid cloud environments from a centralized platform.' } },
        ],
      },
      org,
    ],
  },

  '/solutions/finops': {
    title: 'FinOps Platform for Cloud Cost Optimization | Xamops',
    description: 'Optimize cloud spending with the Xamops FinOps Platform. Improve cloud cost visibility, automate resource optimization, and maximize business value with intelligent cloud financial management.',
    keywords: 'FinOps solutions, cloud cost management, cloud cost optimization, FinOps platform, cloud cost reduction, reserved instance optimization, aws finops, azure finops, gcp finops, cloud cost optimization platform, FinOps automation platform, cloud cost management platform, multicloud management platform, aws cost optimization, cloud cost optimization services, google cloud cost optimization, azure cloud cost optimization, gcp cost optimization, cloud cost analytics',
    canonical: `${BASE}/solutions/finops`,
    schemas: [
      wp('/solutions/finops', 'FinOps Platform for Cloud Cost Optimization | Xamops', 'Improve cloud cost visibility and automate resource optimization.'),
      app('XamOps FinOps', 'Automated FinOps solutions for cloud cost management and optimization across AWS, Azure, and GCP.',
        ['Real-time cost visibility','Automated rightsizing','Reserved instance optimization','Chargeback automation','Cloud cost anomaly alerts','Guaranteed 30-40% cost reduction']),
      {
        '@type': 'FAQPage',
        '@id': `${BASE}/solutions/finops/#faq`,
        mainEntity: [
          { '@type': 'Question', name: 'What is a FinOps Platform?', acceptedAnswer: { '@type': 'Answer', text: 'A FinOps Platform helps organizations monitor, manage, and optimize cloud spending by bringing engineering, finance, and operations teams together for better financial accountability.' } },
          { '@type': 'Question', name: 'How does Xamops help reduce cloud costs?', acceptedAnswer: { '@type': 'Answer', text: 'Xamops identifies underutilized resources, monitors cloud usage, automates optimization, and provides recommendations to reduce unnecessary cloud expenses.' } },
          { '@type': 'Question', name: 'Can Xamops support multi-cloud environments?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Xamops is designed to manage cloud infrastructure across multiple cloud providers through centralized monitoring, automation, and cost management.' } },
        ],
      },
      org,
    ],
  },

  '/solutions/sre': {
    title: 'SRE Solutions | Improve Reliability with Cloud Automation | Xamops',
    description: 'Improve application reliability with Xamops SRE Solutions. Automate cloud operations, reduce downtime, optimize infrastructure, and enhance system performance with intelligent cloud management.',
    keywords: 'SRE solutions, site reliability engineering, cloud reliability, incident management, SLO tracking, cloud operations, reliability automation, SRE automation platform, cloud operations automation, administering monitoring cloud services',
    canonical: `${BASE}/solutions/sre`,
    schemas: [
      wp('/solutions/sre', 'SRE Solutions | Improve Reliability with Cloud Automation | Xamops', 'Automate cloud operations and reduce downtime with intelligent cloud management.'),
      app('XamOps SRE Solutions', 'SRE solutions for reliable cloud infrastructure with automated incident management and SLO tracking.',
        ['Automated incident management','SLO tracking','Chaos engineering','On-call optimization','Proactive anomaly detection']),
      {
        '@type': 'FAQPage',
        '@id': `${BASE}/solutions/sre/#faq`,
        mainEntity: [
          { '@type': 'Question', name: 'What are SRE Solutions?', acceptedAnswer: { '@type': 'Answer', text: 'SRE Solutions help organizations improve application reliability through automation, monitoring, incident management, and performance optimization.' } },
          { '@type': 'Question', name: 'How does Xamops improve service reliability?', acceptedAnswer: { '@type': 'Answer', text: 'Xamops continuously monitors cloud infrastructure, detects issues early, automates operational workflows, and helps teams resolve incidents faster.' } },
          { '@type': 'Question', name: 'Which teams benefit from Xamops SRE Solutions?', acceptedAnswer: { '@type': 'Answer', text: 'Site Reliability Engineers, DevOps teams, Cloud Operations teams, Infrastructure Engineers, FinOps teams, and IT Operations teams all benefit from Xamops.' } },
        ],
      },
      org,
    ],
  },

  // ── Blog post: Disk Rightsizing ───────────────────────────────────
  '/blog/disk-rightsizing-ebs': {
    title: 'Disk Rightsizing: The Cost Saving Everyone Ignores | XamOps Blog',
    description: 'Three moves that eliminate 30–40% of cloud storage waste: unattached EBS volumes, gp2 to gp3 migration, and over-provisioned disk rightsizing. With policy enforcement to prevent re-accumulation.',
    keywords: 'disk rightsizing ebs, aws storage optimization, ebs cost savings, gp2 gp3 migration, unattached ebs volumes, over-provisioned disk aws, cloud storage waste, finops storage, ec2 storage optimization, ebs volume rightsizing, cloud cost optimization',
    canonical: `${BASE}/blog/disk-rightsizing-ebs`,
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        '@id': `${BASE}/blog/disk-rightsizing-ebs/#post`,
        headline: 'Disk Rightsizing: The Cost Saving Everyone Ignores',
        description: 'Three moves that eliminate 30–40% of cloud storage waste, with the discipline to prevent it from coming back.',
        url: `${BASE}/blog/disk-rightsizing-ebs/`,
        datePublished: '2026-05-28',
        dateModified: '2026-05-28',
        author: { '@type': 'Person', name: 'Aditya Mehta', jobTitle: 'Co-founder, XamOps', worksFor: org },
        publisher: org,
        keywords: ['disk rightsizing', 'ebs storage', 'gp2 gp3 migration', 'unattached volumes', 'cloud storage waste', 'finops', 'aws cost optimization'],
        timeRequired: 'PT7M',
        wordCount: '1800',
        inLanguage: 'en-US',
        articleSection: 'FinOps',
        about: [
          { '@type': 'Thing', name: 'EBS Disk Rightsizing' },
          { '@type': 'Thing', name: 'Cloud Storage Optimization' },
          { '@type': 'Thing', name: 'FinOps' },
        ],
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE}/blog/disk-rightsizing-ebs/` },
      },
      wp('/blog/disk-rightsizing-ebs', 'Disk Rightsizing: The Cost Saving Everyone Ignores | XamOps Blog', 'Three moves to eliminate 30–40% of cloud storage waste and prevent re-accumulation.'),
      org,
    ],
  },

  // ── Blog post: EC2 Spot instances ────────────────────────────────
  '/blog/ec2-spot-instances-production': {
    title: 'EC2 Spot Instances in Production: Stop Fearing Interruptions | XamOps Blog',
    description: 'A practical guide for DevOps engineers on running Spot instances safely in production, with the five patterns that make interruptions a non-event and save 70% on compute.',
    keywords: 'ec2 spot instances production, spot instance interruption, aws spot instances guide, spot instances devops, spot instance best practices, aws compute savings, autoscaling spot instances, spot on-demand fallback, ec2 spot automation, cloud cost optimization',
    canonical: `${BASE}/blog/ec2-spot-instances-production`,
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        '@id': `${BASE}/blog/ec2-spot-instances-production/#post`,
        headline: 'EC2 Spot Instances in Production: How to Stop Fearing Interruptions and Save 70%',
        description: 'A practical guide for DevOps engineers on running Spot instances safely in production, with the five patterns that make interruptions a non-event.',
        url: `${BASE}/blog/ec2-spot-instances-production/`,
        datePublished: '2026-05-28',
        dateModified: '2026-05-28',
        author: { '@type': 'Person', name: 'Aditya Mehta', jobTitle: 'Co-founder, XamOps', worksFor: org },
        publisher: org,
        keywords: ['ec2 spot instances', 'spot interruption', 'production spot instances', 'aws compute savings', 'spot automation', 'on-demand vs spot'],
        timeRequired: 'PT10M',
        wordCount: '2200',
        inLanguage: 'en-US',
        articleSection: 'Spot',
        about: [
          { '@type': 'Thing', name: 'EC2 Spot Instances' },
          { '@type': 'Thing', name: 'Cloud Cost Optimization' },
          { '@type': 'Thing', name: 'AWS Auto Scaling' },
        ],
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE}/blog/ec2-spot-instances-production/` },
      },
      wp('/blog/ec2-spot-instances-production', 'EC2 Spot Instances in Production | XamOps Blog', 'Five patterns for running Spot safely in production and saving 70% on compute.'),
      org,
    ],
  },

  // ── Blog post: AWS cost spike ─────────────────────────────────────
  '/blog/aws-cost-spike-investigation': {
    title: "AWS Bill Jumped 40%? Here's How to Investigate It | XamOps Blog",
    description: 'A step-by-step checklist for DevOps engineers to diagnose and fix unexpected AWS cost spikes, before finance comes knocking again.',
    keywords: 'aws cost spike investigation, why did my aws bill increase, aws cost anomaly checklist, unexpected aws charges devops, aws cost explorer, aws finops, cloud cost optimization, aws billing investigation, ec2 cost spike, data transfer aws costs',
    canonical: `${BASE}/blog/aws-cost-spike-investigation`,
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        '@id': `${BASE}/blog/aws-cost-spike-investigation/#post`,
        headline: "Your AWS Bill Jumped 40% Last Month: Here's How to Actually Investigate It",
        description: 'A step-by-step checklist for DevOps engineers to diagnose and fix unexpected AWS cost spikes, before finance comes knocking again.',
        url: `${BASE}/blog/aws-cost-spike-investigation/`,
        datePublished: '2026-05-28',
        dateModified: '2026-05-28',
        author: { '@type': 'Person', name: 'Aditya Mehta', jobTitle: 'Co-founder, XamOps', worksFor: org },
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

  // ── Blog post: What Is XamOps ─────────────────────────────────────
  '/blog/what-is-xamops': {
    title: 'What Is XamOps? A Smarter Way to Reduce Cloud Costs | XamOps Blog',
    description: 'XamOps is a Cognitive Cloud Operating System for DevOps, FinOps, and SRE teams. Learn how it automates cloud operations, cuts costs, and unifies AWS, Azure, and GCP into one platform.',
    keywords: 'what is xamops, cloud cost optimization platform, cognitive cloud operating system, cloud automation software, devops finops sre platform, aws azure gcp management, cloud operations automation, reduce cloud costs, cloud infrastructure management, xamops review',
    canonical: `${BASE}/blog/what-is-xamops`,
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        '@id': `${BASE}/blog/what-is-xamops/#post`,
        headline: 'What Is XamOps? A Smarter Way to Reduce Cloud Costs and Simplify Cloud Operations',
        description: 'XamOps is a Cognitive Cloud Operating System that helps DevOps, FinOps, and SRE teams automate routine tasks, cut spending, and regain control across AWS, Azure, and GCP.',
        url: `${BASE}/blog/what-is-xamops/`,
        datePublished: '2026-06-22',
        dateModified: '2026-06-22',
        author: { '@type': 'Person', name: 'Aditya Mehta', jobTitle: 'Co-founder, XamOps', worksFor: org },
        publisher: org,
        keywords: ['xamops', 'cloud cost optimization', 'cloud automation', 'finops platform', 'devops platform', 'sre tools', 'spot automation', 'disk rightsizing', 'dbops', 'secops', 'multi-cloud management'],
        timeRequired: 'PT8M',
        wordCount: '1600',
        inLanguage: 'en-US',
        articleSection: 'Platform',
        about: [
          { '@type': 'Thing', name: 'XamOps Platform' },
          { '@type': 'Thing', name: 'Cloud Cost Optimization' },
          { '@type': 'Thing', name: 'Cloud Operations Automation' },
        ],
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE}/blog/what-is-xamops/` },
      },
      wp('/blog/what-is-xamops', 'What Is XamOps? | XamOps Blog', 'Cognitive Cloud OS for DevOps, FinOps, and SRE teams across AWS, Azure, and GCP.'),
      org,
    ],
  },

  // ── Blog post: Cloud Cost Optimization Strategies ────────────────
  '/blog/cloud-cost-optimization-strategies': {
    title: 'Cloud Cost Optimization in Noida: 10 Proven Strategies for FinOps Teams | XamOps Blog',
    description: 'Ten actionable cloud cost optimization strategies for FinOps teams: visibility, resource tagging, rightsizing, scheduling automation, reserved instances, budget alerts, storage optimization, collaboration, and predictive analytics.',
    keywords: 'cloud cost optimization strategies, finops best practices, cloud cost reduction, aws cost optimization, azure cost management, gcp cost control, resource rightsizing, cloud waste reduction, finops automation, cloud budget management, reserved instances savings plans',
    canonical: `${BASE}/blog/cloud-cost-optimization-strategies`,
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        '@id': `${BASE}/blog/cloud-cost-optimization-strategies/#post`,
        headline: 'Cloud Cost Optimization in Noida: 10 Proven Strategies for FinOps Teams',
        description: 'Ten actionable strategies to reduce cloud waste and maximize the value of every dollar spent, from resource tagging and rightsizing to predictive analytics.',
        url: `${BASE}/blog/cloud-cost-optimization-strategies/`,
        datePublished: '2026-06-24',
        dateModified: '2026-06-24',
        author: { '@type': 'Person', name: 'Aditya Mehta', jobTitle: 'Co-founder, XamOps', worksFor: org },
        publisher: org,
        keywords: ['cloud cost optimization', 'finops', 'rightsizing', 'reserved instances', 'cloud tagging', 'resource scheduling', 'cloud waste', 'cost forecasting', 'aws azure gcp'],
        timeRequired: 'PT10M',
        wordCount: '1900',
        inLanguage: 'en-US',
        articleSection: 'FinOps',
        about: [
          { '@type': 'Thing', name: 'Cloud Cost Optimization' },
          { '@type': 'Thing', name: 'FinOps' },
          { '@type': 'Thing', name: 'Cloud Resource Management' },
        ],
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE}/blog/cloud-cost-optimization-strategies/` },
      },
      wp('/blog/cloud-cost-optimization-strategies', '10 Cloud Cost Optimization Strategies | XamOps Blog', 'Proven FinOps strategies to reduce cloud waste across AWS, Azure, and GCP.'),
      org,
    ],
  },

  // ── Blog post: DevOps Automation Platform vs Traditional IT Operations ──
  '/blog/devops-automation-platform-vs-traditional-it-operations': {
    title: 'DevOps Automation Platform vs Traditional IT Operations | Xamops',
    description: 'Compare DevOps Automation Platforms with Traditional IT Operations. Learn how Xamops helps businesses in Noida, Delhi, and Lucknow automate cloud operations, reduce costs, and improve efficiency.',
    keywords: 'devops automation platform, traditional it operations, devops vs it operations, cloud automation noida, devops automation delhi, devops automation lucknow, cloud cost optimization, infrastructure as code, cloud governance, multi-cloud management',
    canonical: `${BASE}/blog/devops-automation-platform-vs-traditional-it-operations`,
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        '@id': `${BASE}/blog/devops-automation-platform-vs-traditional-it-operations/#post`,
        headline: 'DevOps Automation Platform vs Traditional IT Operations: Which Is Better for Businesses in Noida, Delhi, and Lucknow?',
        description: 'Compare DevOps Automation Platforms with Traditional IT Operations and learn how Xamops helps businesses in Noida, Delhi, and Lucknow automate cloud operations, reduce costs, and improve efficiency.',
        url: `${BASE}/blog/devops-automation-platform-vs-traditional-it-operations/`,
        datePublished: '2026-07-10',
        dateModified: '2026-07-10',
        author: { '@type': 'Person', name: 'Aditya Mehta', jobTitle: 'Co-founder, XamOps', worksFor: org },
        publisher: org,
        keywords: ['devops automation platform', 'traditional it operations', 'cloud automation noida', 'cloud automation delhi', 'cloud automation lucknow', 'infrastructure as code', 'cloud governance'],
        timeRequired: 'PT9M',
        wordCount: '1600',
        inLanguage: 'en-US',
        articleSection: 'DevOps',
        about: [
          { '@type': 'Thing', name: 'DevOps Automation' },
          { '@type': 'Thing', name: 'Cloud Operations' },
          { '@type': 'Thing', name: 'IT Operations' },
        ],
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE}/blog/devops-automation-platform-vs-traditional-it-operations/` },
      },
      {
        '@type': 'FAQPage',
        '@id': `${BASE}/blog/devops-automation-platform-vs-traditional-it-operations/#faq`,
        mainEntity: [
          { '@type': 'Question', name: 'What is a DevOps Automation Platform?', acceptedAnswer: { '@type': 'Answer', text: 'DevOps Automation Platform automates the process of software deployment, infrastructure provisioning, cloud monitoring, and cloud management for increased operational efficiency and reduced manual intervention.' } },
          { '@type': 'Question', name: 'How does Xamops help businesses reduce cloud costs?', acceptedAnswer: { '@type': 'Answer', text: 'Xamops assists businesses in discovering unused resources, maximizing cloud utilization, automating governance processes, and improving visibility in cloud infrastructure to minimize unnecessary cloud expenses.' } },
          { '@type': 'Question', name: 'Why are businesses in Noida adopting DevOps Automation Platforms?', acceptedAnswer: { '@type': 'Answer', text: 'Companies in Noida are leveraging DevOps automation solutions to increase the speed of software deployment, minimize infrastructure expenses, increase cloud security, and automate other IT operations.' } },
          { '@type': 'Question', name: 'Is a DevOps Automation Platform suitable for small and medium businesses?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Both small and medium businesses can leverage Xamops to automate cloud operations, maximize productivity, minimize IT management costs, and scale infrastructure.' } },
          { '@type': 'Question', name: 'How is a DevOps Automation Platform different from Traditional IT Operations?', acceptedAnswer: { '@type': 'Answer', text: 'IT Operations utilize manual methods and disparate tools whereas a DevOps Automation Platform automates deployments, cloud management, monitoring, governance, and cost optimization from a single platform.' } },
        ],
      },
      wp('/blog/devops-automation-platform-vs-traditional-it-operations', 'DevOps Automation Platform vs Traditional IT Operations | Xamops', 'Compare DevOps Automation Platforms with Traditional IT Operations for businesses in Noida, Delhi, and Lucknow.'),
      org,
    ],
  },

  // ── Blog post: FinOps Practices Multi-Cloud ──────────────────────
  '/blog/finops-practices-multi-cloud': {
    title: 'Best FinOps Practices for Multi-Cloud Environments | XamOps Blog',
    description: 'Seven proven FinOps practices for managing cloud costs across AWS, Azure, and GCP: ownership tagging, real-time monitoring, removing unused resources, automation, and cost forecasting.',
    keywords: 'finops practices, multi-cloud cost management, cloud cost optimization, finops platform, aws azure gcp cost control, cloud cost visibility, cloud waste reduction, finops automation, cloud resource tagging, cloud cost forecasting',
    canonical: `${BASE}/blog/finops-practices-multi-cloud`,
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        '@id': `${BASE}/blog/finops-practices-multi-cloud/#post`,
        headline: 'Best FinOps Practices for Multi-Cloud Environments',
        description: 'Seven practices that bring financial control back to teams running AWS, Azure, and GCP simultaneously, from ownership tagging to automated rightsizing.',
        url: `${BASE}/blog/finops-practices-multi-cloud/`,
        datePublished: '2026-06-24',
        dateModified: '2026-06-24',
        author: { '@type': 'Person', name: 'Aditya Mehta', jobTitle: 'Co-founder, XamOps', worksFor: org },
        publisher: org,
        keywords: ['finops', 'multi-cloud cost management', 'cloud cost optimization', 'cloud tagging', 'cloud automation', 'aws azure gcp', 'finops platform', 'cloud cost forecasting', 'cloud waste'],
        timeRequired: 'PT9M',
        wordCount: '1700',
        inLanguage: 'en-US',
        articleSection: 'FinOps',
        about: [
          { '@type': 'Thing', name: 'FinOps' },
          { '@type': 'Thing', name: 'Multi-Cloud Cost Management' },
          { '@type': 'Thing', name: 'Cloud Cost Optimization' },
        ],
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE}/blog/finops-practices-multi-cloud/` },
      },
      wp('/blog/finops-practices-multi-cloud', 'Best FinOps Practices for Multi-Cloud | XamOps Blog', 'Seven practices for financial control across AWS, Azure, and GCP.'),
      org,
    ],
  },

  // ── Blog post: Cloud Security Automation ─────────────────────────
  '/blog/cloud-security-automation': {
    title: 'What Is Cloud Security Automation and Why Is It Important? | XamOps Blog',
    description: 'Manual security monitoring breaks down at cloud scale. Learn what cloud security automation covers, why it matters for DevOps and FinOps teams, and how AI-powered tools are changing cloud operations.',
    keywords: 'cloud security automation, cloud security monitoring, automated cloud security, cloud operations automation, devops automation platform, cloud cost optimization, cloud infrastructure management, ai cloud automation, secops automation, cloud compliance automation',
    canonical: `${BASE}/blog/cloud-security-automation`,
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        '@id': `${BASE}/blog/cloud-security-automation/#post`,
        headline: 'What Is Cloud Security Automation and Why Is It Important?',
        description: 'Manual security monitoring breaks down at cloud scale. Here is what cloud security automation actually covers and why modern teams cannot afford to skip it.',
        url: `${BASE}/blog/cloud-security-automation/`,
        datePublished: '2026-06-24',
        dateModified: '2026-06-24',
        author: { '@type': 'Person', name: 'Aditya Mehta', jobTitle: 'Co-founder, XamOps', worksFor: org },
        publisher: org,
        keywords: ['cloud security automation', 'secops', 'cloud compliance', 'devops automation', 'cloud cost optimization', 'ai cloud automation', 'cloud monitoring', 'configuration drift'],
        timeRequired: 'PT7M',
        wordCount: '1400',
        inLanguage: 'en-US',
        articleSection: 'Security',
        about: [
          { '@type': 'Thing', name: 'Cloud Security Automation' },
          { '@type': 'Thing', name: 'Cloud Operations' },
          { '@type': 'Thing', name: 'DevOps Automation' },
        ],
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE}/blog/cloud-security-automation/` },
      },
      wp('/blog/cloud-security-automation', 'What Is Cloud Security Automation? | XamOps Blog', 'Why manual security fails at cloud scale and how automation fixes it.'),
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
                '@id': `${BASE}/blog/ec2-spot-instances-production/#post`,
                headline: 'EC2 Spot Instances in Production: How to Stop Fearing Interruptions and Save 70%',
                description: 'Five patterns for running EC2 Spot instances safely in production with a staged replacement loop.',
                url: `${BASE}/blog/ec2-spot-instances-production/`,
                datePublished: '2026-05-28',
                author: { '@type': 'Person', name: 'Aditya Mehta', jobTitle: 'Co-founder, XamOps' },
                publisher: org,
                keywords: ['ec2 spot instances', 'spot interruption', 'aws compute savings', 'spot automation'],
                timeRequired: 'PT10M',
              },
              {
                '@type': 'BlogPosting',
                '@id': `${BASE}/blog/aws-cost-spike-investigation/#post`,
                headline: "Your AWS Bill Jumped 40% Last Month: Here's How to Actually Investigate It",
                description: 'A step-by-step checklist for DevOps engineers to diagnose and fix unexpected AWS cost spikes.',
                url: `${BASE}/blog/aws-cost-spike-investigation/`,
                datePublished: '2026-05-28',
                author: { '@type': 'Person', name: 'Aditya Mehta', jobTitle: 'Co-founder, XamOps' },
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
                '@id': `${BASE}/blog/disk-rightsizing-ebs/#post`,
                headline: 'Disk Rightsizing: The Cost Saving Everyone Ignores',
                description: 'Three moves that eliminate 30–40% of cloud storage waste: unattached volumes, gp2 migration, and over-provisioned disks.',
                url: `${BASE}/blog/disk-rightsizing-ebs/`,
                datePublished: '2026-05-28',
                author: { '@type': 'Person', name: 'Aditya Mehta', jobTitle: 'Co-founder, XamOps' },
                publisher: org,
                keywords: ['disk rightsizing', 'ebs storage', 'gp2 gp3 migration', 'cloud storage waste', 'finops'],
                timeRequired: 'PT7M',
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
    title: 'XamOps Pricing: Cloud Automation & FinOps Platform Plans',
    description: 'Explore XamOps pricing plans for cloud automation, FinOps, DevOps, and SRE teams. Flexible plans for startups to enterprise. Start with a free 30-day cloud audit.',
    keywords: 'XamOps pricing, cloud automation pricing, FinOps platform pricing, cloud management platform pricing, enterprise cloud management, cloud cost optimization pricing',
    canonical: `${BASE}/pricing`,
    schemas: [
      wp('/pricing', 'XamOps Pricing: Cloud Automation & FinOps Platform Plans', 'Flexible pricing for cloud automation, FinOps, DevOps, and SRE teams.'),
      org,
    ],
  },

  // ── About ─────────────────────────────────────────────────────────
  '/customers': {
    title: 'Customer Stories: Cloud Cost Savings with XamOps | XamOps',
    description: 'See how DevOps, FinOps, and SRE teams use XamOps to cut cloud costs by 40%, automate operations, and gain real-time visibility across AWS, Azure, and GCP.',
    keywords: 'xamops customers, cloud cost optimization results, finops success stories, devops automation testimonials, cloud savings case studies, aws cost reduction, cloud operations automation results',
    canonical: `${BASE}/customers`,
    schemas: [wp('/customers', 'Customer Stories | XamOps', 'How teams use XamOps to cut cloud costs and automate operations.'), org],
  },

  '/security': {
    title: 'Security at XamOps: How We Protect Your Cloud Environment',
    description: 'XamOps uses TLS 1.2+, AES-256 encryption, IAM role federation, least-privilege access, and full audit logging. No credentials stored. SOC 2 audit in progress.',
    keywords: 'xamops security, cloud security practices, iam role federation, cloud data encryption, cloud audit logging, soc 2 cloud platform, gdpr cloud compliance, cloud security posture',
    canonical: `${BASE}/security`,
    schemas: [wp('/security', 'Security at XamOps | Cloud Data Protection', 'How XamOps protects your cloud environment with encryption, IAM federation, and audit logging.'), org],
  },

  '/about': {
    title: 'About XamOps: The AI-Powered Cloud Automation Company',
    description: 'Learn about XamOps, the team building the AI-powered cloud automation platform that helps enterprises automate FinOps, DevOps, and SRE operations at scale.',
    keywords: 'about XamOps, cloud automation company, AI cloud platform, enterprise cloud management, FinOps company, DevOps automation company, cloud infrastructure automation',
    canonical: `${BASE}/about`,
    schemas: [
      wp('/about', 'About XamOps: The AI-Powered Cloud Automation Company', 'The team building the AI-powered cloud automation platform.'),
      org,
    ],
  },

  // ── Demo ─────────────────────────────────────────────────────────
  '/demo': {
    title: 'Book a Demo: XamOps Cloud Automation & FinOps Platform',
    description: 'See XamOps in action. Book a personalized demo of the cloud automation platform and discover how to reduce cloud costs 30–40% and eliminate operational toil.',
    keywords: 'XamOps demo, cloud automation demo, FinOps platform demo, cloud cost optimization demo, book a demo, cloud management platform demo',
    canonical: `${BASE}/demo`,
    schemas: [
      wp('/demo', 'Book a Demo: XamOps Cloud Automation & FinOps Platform', 'See XamOps in action and discover how to reduce cloud costs 30–40%.'),
      org,
    ],
  },

  // ── Contact ───────────────────────────────────────────────────────
  '/contact': {
    title: 'Contact XamOps: Cloud Automation & FinOps Platform',
    description: "Get in touch with the XamOps team. Questions about cloud automation, FinOps, DevOps, or SRE? We're here to help.",
    keywords: 'contact XamOps, cloud automation support, FinOps platform contact, cloud management support',
    canonical: `${BASE}/contact`,
    schemas: [
      wp('/contact', 'Contact XamOps: Cloud Automation & FinOps Platform', 'Reach the XamOps team for cloud automation and FinOps inquiries.'),
      org,
    ],
  },
};

export const DEFAULT_META = PAGE_META['/'];
