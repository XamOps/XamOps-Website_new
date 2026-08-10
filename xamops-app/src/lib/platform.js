// ─────────────────────────────────────────────────────────────────────────────
// Single source of truth for the XamOps capability catalogue.
//
// Nav, footer, homepage and /platform all render from here, so a shipped
// feature only has to be described once.
//
//   providers  which clouds it covers today: ['aws','gcp','azure']
//   status     undefined = generally available
//              'beta' | 'pre-release' | 'in-progress'
//   to         set only when the capability has its own detail page
// ─────────────────────────────────────────────────────────────────────────────

export const STATUS_LABEL = {
  beta: 'Beta',
  'pre-release': 'Pre-release',
  'in-progress': 'In progress',
};

export const STATUS_BADGE = {
  beta: 'badge--warning',
  'pre-release': 'badge--info',
  'in-progress': 'badge--muted',
};

const ALL = ['aws', 'gcp', 'azure'];

export const GROUPS = [
  {
    id: 'platform',
    slug: 'multi-cloud',
    icon: 'Grid',
    name: 'Platform',
    tagline: 'One control plane for three clouds',
    body: 'A single operational surface across AWS, GCP and Azure, with the access controls and onboarding to roll it out across a whole organisation.',
    accent: 'var(--viz-1)',
    seo: {
      title: 'Multi-Cloud Management Platform for AWS, Azure & GCP | Xamops',
      description: 'One dashboard across AWS, GCP and Azure: unified and per-account views, guided onboarding, permission-gap detection, a command palette and role-based access down to the tab.',
      keywords: 'multi-cloud management platform, unified cloud dashboard, multicloud dashboard, cloud account onboarding, role-based access cloud, AWS GCP Azure single pane of glass, cloud management platform, enterprise cloud management',
    },
    problem: 'Three consoles, three logins, three mental models. Nobody can answer what the whole estate costs or whether it is healthy without stitching screenshots together.',
    features: [
      { name: 'Unified multi-cloud dashboard', providers: ALL,
        body: 'One view across AWS, GCP and Azure: spend, resource health and savings signals side by side instead of three consoles.' },
      { name: 'Per-account dashboards', providers: ALL,
        body: 'Dedicated live dashboards for each AWS, GCP and Azure account.' },
      { name: 'Guided account onboarding', providers: ALL,
        body: 'Connect AWS via CloudFormation IAM role, GCP via service account, Azure via Service Principal with a generated PowerShell script.' },
      { name: 'Permission-gap detection', providers: ALL,
        body: 'When a restricted IAM policy blocks a data source, the UI names the missing permission instead of showing an empty chart.' },
      { name: 'Command palette',
        body: 'Cmd+K jump-to-anything across accounts, resources and pages.' },
      { name: 'Role-based access and tab entitlements',
        body: 'Per-user visibility down to the individual tab, so finance, engineering and support each see only their surface.' },
    ],
  },
  {
    id: 'finops',
    slug: 'finops',
    icon: 'Cost',
    name: 'FinOps',
    tagline: 'Know the bill, then cut it',
    body: 'Cost visibility, forecasting and rightsizing across every account, with the allocation model finance teams need to actually assign spend.',
    accent: 'var(--viz-3)',
    seo: {
      title: 'FinOps Platform: Cloud Cost Management & Rightsizing | Xamops',
      description: 'Cloud cost explorer, ML forecasting, waste detection, compute and disk rightsizing, and reservation coverage across AWS, GCP and Azure, plus a pricing calculator and internal cost allocation labels.',
      keywords: 'FinOps platform, cloud cost management, cloud cost optimization, cloud cost explorer, cloud cost forecasting, cloud waste management, rightsizing recommendations, reserved instances savings plans CUD, cloud cost allocation, aws cost optimization, azure cost management, gcp cost optimization',
    },
    problem: 'The bill arrives after the money is spent, split across accounts nobody owns, in a format no engineer can act on.',
    features: [
      { name: 'Cost management', providers: ALL, to: '/platform/cost-analytics',
        body: 'Cost explorer with breakdowns by service, account, region and tag.' },
      { name: 'FinOps reports', providers: ALL,
        body: 'Scheduled, shareable cost reports delivered by email.' },
      { name: 'Cost forecasting',
        body: 'ML-based cost and usage forecasts with accuracy tracking against actuals.' },
      { name: 'Waste management', providers: ALL,
        body: 'Finds idle and orphaned resources: unattached volumes, unused IPs, stopped-but-billing instances.' },
      { name: 'Compute rightsizing', providers: ALL,
        body: 'Instance-level resize recommendations based on observed utilization.' },
      { name: 'Disk rightsizing', providers: ALL, to: '/platform/disk-rightsizing',
        body: 'Shrink or expand EBS, Persistent Disk and Azure Managed Disk with guided remediation.' },
      { name: 'Reservations and commitments', providers: ALL,
        body: 'Coverage, utilization and purchase recommendations for RIs, Savings Plans and CUDs.' },
      { name: 'Flex Compute', providers: ['aws'],
        body: 'Capacity and KPI view for elastic compute pools.' },
      { name: 'Pricing calculator', providers: ['aws'], status: 'in-progress',
        body: 'Build and price an architecture before you deploy, with a saveable estimate cart. AWS live, GCP and Azure in progress.' },
      { name: 'Resource labels',
        body: 'Internal team, department and project tagging for cost allocation without writing tags back to the cloud provider.' },
    ],
  },
  {
    id: 'cost-automation',
    slug: 'cost-automation',
    icon: 'Bolt',
    name: 'Cost automation',
    tagline: 'Savings that apply themselves',
    body: 'The recommendations act on their own. Schedules, spot conversion and autoscaling run continuously instead of waiting for a ticket.',
    accent: 'var(--viz-2)',
    seo: {
      title: 'Cloud Cost Automation: Instance Scheduling & Spot Instances | Xamops',
      description: 'Automate the savings instead of filing tickets. CloudSitter start/stop schedules, AutoSpotting for Auto Scaling Groups, spot-to-on-demand ratios and a Kubernetes autoscaling controller.',
      keywords: 'cloud cost automation, instance scheduling, start stop automation, spot instance automation, autospotting, EC2 spot instances, spot instance management, kubernetes autoscaling, HPA VPA management, cloud automation platform',
    },
    problem: 'Everyone knows dev boxes should sleep at night and batch jobs should run on spot. The change never gets made because it is nobody\'s sprint.',
    features: [
      { name: 'CloudSitter', providers: ALL,
        body: 'Schedule instance start/stop on a weekly grid with a projected savings figure before you commit.' },
      { name: 'AutoSpotting', providers: ALL, to: '/platform/spot-automation',
        body: 'Move Auto Scaling Groups onto spot capacity automatically, with savings history and one-click CloudFormation deploy.' },
      { name: 'ASG configuration', providers: ['aws'],
        body: 'Per-group spot-to-on-demand ratio and instance-type diversification.' },
      { name: 'Kubernetes autoscaling controller',
        body: 'HPA and VPA management, node optimization, rebalancing and pod rightsizing in-cluster.' },
    ],
  },
  {
    id: 'kubernetes',
    slug: 'kubernetes',
    icon: 'K8s',
    name: 'Kubernetes',
    tagline: 'Clusters and the databases behind them',
    body: 'Inventory, cost and health for EKS, GKE and AKS, collected by an in-cluster agent that also reaches into your data layer.',
    accent: 'var(--viz-5)',
    seo: {
      title: 'Kubernetes Cost & Cluster Management for EKS, GKE, AKS | Xamops',
      description: 'Cluster inventory and health across EKS, GKE and AKS with per-namespace cost, plus an in-cluster agent that collects Karpenter, OpenCost and Prometheus data and Postgres, MongoDB and Redis diagnostics.',
      keywords: 'kubernetes cost management, kubernetes cost optimization, EKS cost, GKE cost, AKS monitoring, per namespace cost, OpenCost, Karpenter, kubernetes cluster management, pod rightsizing, postgres query diagnostics, kubernetes observability',
    },
    problem: 'Cluster spend shows up as one enormous compute line item, and the database that is actually causing the latency sits outside every Kubernetes dashboard.',
    features: [
      { name: 'CloudK8s', providers: ALL,
        body: 'Cluster inventory and health across EKS, GKE and AKS.' },
      { name: 'Cluster detail', providers: ALL,
        body: 'Nodes, workloads and per-namespace cost for a single cluster.' },
      { name: 'In-cluster agent',
        body: 'Collects Kubernetes resources, Karpenter, OpenCost, Prometheus metrics and logs with no manual instrumentation.' },
      { name: 'Database diagnostics',
        body: 'Postgres query stats, index usage, vacuum and wait events, plus MongoDB and Redis health, gathered by the same agent.' },
    ],
  },
  {
    id: 'security',
    slug: 'security',
    icon: 'Sec',
    name: 'Security and compliance',
    tagline: 'Posture, attack surface, audit evidence',
    body: 'From misconfiguration findings through to a SOC 2 programme, including the topology view that shows how exposure actually connects.',
    accent: 'var(--viz-4)',
    seo: {
      title: 'Cloud Security Posture & Compliance Automation (CNAPP) | Xamops',
      description: 'Misconfiguration management across AWS, GCP and Azure, attack-surface scoring against an 86-control baseline, CNAPP-style vulnerability and identity coverage, SOC 2 programme tracking and network topology mapping.',
      keywords: 'cloud security posture management, CSPM, CNAPP, cloud compliance automation, SOC 2 compliance automation, attack surface management, cloud misconfiguration detection, cloud inventory, network topology visualization, cloud security automation, crypto mining detection',
    },
    problem: 'Findings pile up in three provider consoles with no owner, and the audit asks for evidence that lives in somebody\'s spreadsheet.',
    features: [
      { name: 'Security Center', providers: ALL, to: '/platform/secops',
        body: 'Misconfiguration and finding management per provider.' },
      { name: 'WAR (Workload Attack-surface Review)', providers: ALL,
        body: 'Scores infrastructure exposure to attackers and crypto-miners against an 86-control baseline.' },
      { name: 'XamSecure', providers: ['aws'],
        body: 'CNAPP-style module covering attack surface, threats, vulnerabilities, posture, inventory, API security, identities and threat policies.' },
      { name: 'ComplianceOps',
        body: 'Control browser with owners, evidence and documented exceptions.' },
      { name: 'SOC 2 program',
        body: 'Framework, control, policy, task, vendor and risk tracking in one hub, with policy publish and archive workflow.' },
      { name: 'Cloud inventory (Cloudlist)', providers: ALL,
        body: 'Searchable inventory of every discovered resource.' },
      { name: 'CloudMap', providers: ['aws', 'gcp'],
        body: 'Network topology visualization plus a design studio for architecture diagrams with export.' },
    ],
  },
  {
    id: 'observability',
    slug: 'observability',
    icon: 'Eye',
    name: 'Observability and reliability',
    tagline: 'From signal to root cause',
    body: 'Logs, metrics, traces and alerts in one module, with AI investigations that turn a detection event into a written RCA timeline.',
    accent: 'var(--viz-1)',
    seo: {
      title: 'Cloud Observability & AI SRE Root Cause Analysis | Xamops',
      description: 'Logs, metrics, traces and alerts in one module with guided agent setup, embedded Grafana dashboards, per-provider performance insights, AIOps anomaly detection and automated root-cause investigations.',
      keywords: 'cloud observability platform, AI SRE, automated root cause analysis, RCA timeline, AIOps, anomaly detection, cloud monitoring platform, distributed tracing, grafana embedding, alert routing, SRE automation platform',
    },
    problem: 'The alert fires, then three engineers open five tools and rebuild the same timeline by hand while the incident is still burning.',
    features: [
      { name: 'Observability', status: 'beta',
        body: 'Logs, metrics, traces and alerts in one module with guided agent setup.' },
      { name: 'Grafana embedding', providers: ['aws'],
        body: 'Bring your existing Grafana dashboards inside XamOps, with Terraform setup help.' },
      { name: 'Performance insights', providers: ALL,
        body: 'Utilization and bottleneck analysis per provider.' },
      { name: 'Alerts', providers: ALL,
        body: 'Alarm creation and alert routing per provider.' },
      { name: 'AI SRE investigations', status: 'pre-release', to: '/platform/sre',
        body: 'Automated root-cause investigations with an RCA timeline, triggered by detection events or manually.' },
      { name: 'AIOps',
        body: 'Anomaly detection and an AI advisor over your own telemetry.' },
    ],
  },
  {
    id: 'devops',
    slug: 'devops',
    icon: 'Term',
    name: 'DevOps',
    tagline: 'Delivery, code health, database ops',
    body: 'Pipeline metrics, a reusable Terraform library and a browser shell, sitting next to the infrastructure they deploy to.',
    accent: 'var(--viz-2)',
    seo: {
      title: 'DevOps Automation Platform: CI/CD, Terraform & CloudShell | Xamops',
      description: 'Pipeline run history and delivery metrics, SonarQube code quality, a reusable Terraform and script library, a browser terminal, GitHub integration and managed database operations in one place.',
      keywords: 'DevOps automation platform, CI/CD metrics, delivery metrics, terraform library, infrastructure as code templates, cloud shell, sonarqube integration, github integration, database operations automation, DbOps, devops automation services',
    },
    problem: 'Delivery data lives in the CI tool, code health in another dashboard, and the infrastructure both of them ship to is somewhere else entirely.',
    features: [
      { name: 'CI/CD pipelines',
        body: 'Pipeline run history and delivery metrics.' },
      { name: 'Code quality',
        body: 'SonarQube metrics alongside your infrastructure view.' },
      { name: 'DevOps-in-the-Box',
        body: 'Reusable Terraform and script library with placeholder templating.' },
      { name: 'CloudShell',
        body: 'Browser terminal into your environment with multiple tabs.' },
      { name: 'GitHub integration',
        body: 'Repository and token configuration for pipeline and code data.' },
      { name: 'DbOps', providers: ALL, to: '/platform/dbops',
        body: 'Managed database inventory, savings opportunities, query stats and health snapshots.' },
    ],
  },
  {
    id: 'mediaops',
    slug: 'mediaops',
    icon: 'Media',
    name: 'MediaOps',
    tagline: 'Transcode, stream, store',
    body: 'Media pipelines treated as first-class infrastructure, with the cost view that transcode and delivery workloads usually lack.',
    accent: 'var(--viz-3)',
    status: 'beta',
    seo: {
      title: 'MediaOps: Transcoding, Live Stream & Media Cost Management | Xamops',
      description: 'FFmpeg-based transcode jobs and batches with presets and live progress, live stream monitoring, media storage tiering and savings specific to transcode and delivery workloads. Currently in beta.',
      keywords: 'media transcoding platform, ffmpeg transcoding jobs, live stream monitoring, media storage tiering, media workload cost optimization, video pipeline automation, MediaOps',
    },
    problem: 'Transcode farms and egress are among the largest line items in a media business, and no general-purpose cloud tool breaks them out.',
    features: [
      { name: 'Transcoding jobs',
        body: 'FFmpeg-based transcode jobs and batches with presets and live progress.' },
      { name: 'Live streams',
        body: 'Stream monitoring.' },
      { name: 'Media storage',
        body: 'Storage footprint and tiering view.' },
      { name: 'Media cost savings',
        body: 'Savings specific to transcode and delivery workloads.' },
    ],
  },
];

export const PROVIDER_LABEL = { aws: 'AWS', gcp: 'GCP', azure: 'Azure' };

export const groupById = (id) => GROUPS.find((g) => g.id === id);
export const groupBySlug = (slug) => GROUPS.find((g) => g.slug === slug);

export const groupPath = (g) => `/platform/${g.slug}`;

/** Stable anchor id for a capability, e.g. "Cloud inventory (Cloudlist)" → cloud-inventory-cloudlist */
export const featureSlug = (name) =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

/** Every provider a group touches, deduped across its capabilities. */
export const groupProviders = (g) => {
  const seen = new Set();
  g.features.forEach((f) => f.providers?.forEach((p) => seen.add(p)));
  return ['aws', 'gcp', 'azure'].filter((p) => seen.has(p));
};

export const FEATURE_COUNT = GROUPS.reduce((n, g) => n + g.features.length, 0);

/** Capabilities that have their own detail page, in catalogue order. */
export const PAGED_FEATURES = GROUPS.flatMap((g) =>
  g.features.filter((f) => f.to).map((f) => ({ ...f, group: g.name, accent: g.accent }))
);

/** Everything still on the way, for roadmap sections. */
export const UPCOMING = GROUPS.flatMap((g) =>
  g.features.filter((f) => f.status).map((f) => ({ ...f, group: g.name, accent: g.accent }))
);
