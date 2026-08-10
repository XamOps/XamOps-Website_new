// ─────────────────────────────────────────────────────────────────────────────
// In-depth copy for each capability, plus per-group FAQs.
//
// Kept separate from platform.js so the catalogue stays readable: that file
// answers "what exists", this one answers "how does it actually work".
// Keyed by the exact capability name in GROUPS.
//
//   detail   two or three sentences of substance
//   bullets  concrete things the module does
// ─────────────────────────────────────────────────────────────────────────────

export const DETAIL = {

  // ── Platform ──────────────────────────────────────────────────────
  'Unified multi-cloud dashboard': {
    detail: 'Every connected AWS, GCP and Azure account rolls up into one view, so spend, resource health and savings signals sit next to each other instead of behind three separate logins. The point is a single number you can trust for the whole estate, and one place to notice when it moves.',
    bullets: [
      'Total and per-provider spend in a single roll-up',
      'Resource health and savings signals on the same screen',
      'No context switching between provider consoles',
    ],
  },
  'Per-account dashboards': {
    detail: 'Aggregate views hide the account that is actually causing the problem, so every connected account also gets its own live dashboard. Drill from the estate-wide number into the specific account, then into the resources inside it.',
    bullets: [
      'A dedicated dashboard per AWS, GCP and Azure account',
      'Live data rather than a nightly export',
      'Drill-down path from estate roll-up to single resource',
    ],
  },
  'Guided account onboarding': {
    detail: 'Connecting a cloud account is the step where most platform rollouts stall, so each provider gets a guided path with the artefact it expects. AWS uses a CloudFormation stack to create the IAM role, GCP uses a service account, and Azure uses a Service Principal set up by a generated PowerShell script.',
    bullets: [
      'AWS: CloudFormation template creates the IAM role',
      'GCP: service account credentials',
      'Azure: Service Principal via a generated PowerShell script',
    ],
  },
  'Permission-gap detection': {
    detail: 'Least-privilege policies and full visibility pull in opposite directions, and the usual result is a chart that renders empty with no explanation. Instead of failing silently, the UI names the exact permission the data source needs so whoever owns the policy can act on it.',
    bullets: [
      'Names the missing IAM permission, not just "no data"',
      'Works per data source, so partial access still shows partial data',
      'Turns a support ticket into a self-serve fix',
    ],
  },
  'Command palette': {
    detail: 'A platform this wide gets slow to navigate by clicking. Cmd+K opens a jump-to-anything palette that searches across accounts, resources and pages, so getting to a specific volume or dashboard is a few keystrokes rather than a hunt through menus.',
    bullets: [
      'Cmd+K from anywhere in the product',
      'Searches accounts, resources and pages together',
      'Keyboard-first navigation for daily operators',
    ],
  },
  'Role-based access and tab entitlements': {
    detail: 'Finance, engineering and support each need a different slice of the same platform, and giving everyone everything is how rollouts get blocked by a security review. Entitlements go down to the individual tab, so each role sees only its own surface.',
    bullets: [
      'Per-user visibility controlled at tab level',
      'Separate surfaces for finance, engineering and support',
      'Least-privilege access without running separate tools',
    ],
  },

  // ── FinOps ────────────────────────────────────────────────────────
  'Cost management': {
    detail: 'A cost explorer that breaks spend down by service, account, region and tag across all three providers, so a number can always be traced back to the thing that generated it. This is the base layer the rest of FinOps depends on: you cannot rightsize or forecast what you cannot attribute.',
    bullets: [
      'Breakdowns by service, account, region and tag',
      'AWS, GCP and Azure in the same explorer',
      'Trace any total back to the underlying resources',
    ],
  },
  'FinOps reports': {
    detail: 'Cost conversations happen on a monthly cadence with people who will not log into a cloud console. Reports are scheduled and delivered by email, so budget owners get their numbers without being given platform access.',
    bullets: [
      'Scheduled on a recurring cadence',
      'Shareable with stakeholders outside the platform',
      'Covers AWS, GCP and Azure spend',
    ],
  },
  'Cost forecasting': {
    detail: 'Forecasts are only useful if you know how wrong the last one was. Cost and usage projections are generated from your own history, and accuracy is tracked against actuals so the forecast earns trust over time instead of being quietly ignored.',
    bullets: [
      'ML-based cost and usage projections',
      'Accuracy tracked against actual spend',
      'Supports budget planning rather than guesswork',
    ],
  },
  'Waste management': {
    detail: 'A meaningful share of most cloud bills is resources nobody is using: volumes detached from a deleted instance, reserved IPs pointing at nothing, instances stopped but still billing for attached storage. These get found and listed so they can be cleaned up as routine work.',
    bullets: [
      'Unattached volumes and orphaned snapshots',
      'Unused reserved IP addresses',
      'Stopped instances still generating charges',
    ],
  },
  'Compute rightsizing': {
    detail: 'Instance sizes are usually chosen once, defensively, and then never revisited. Recommendations are generated per instance from observed utilization, so the resize decision is based on how the workload actually behaves rather than what someone assumed at launch.',
    bullets: [
      'Per-instance recommendations from real utilization',
      'Projected saving attached to each recommendation',
      'Available across AWS, GCP and Azure',
    ],
  },
  'Disk rightsizing': {
    detail: 'Storage is the quietest form of cloud waste because volumes only ever grow. XamOps recommends the right size for EBS, Persistent Disk and Azure Managed Disk volumes and walks through the remediation, including the filesystem work that makes a resize safe.',
    bullets: [
      'Shrink or expand based on observed usage',
      'EBS, Persistent Disk and Azure Managed Disk',
      'Guided remediation including filesystem expansion',
    ],
  },
  'Reservations and commitments': {
    detail: 'Commitment discounts are the largest single lever on a cloud bill and the easiest to get wrong in both directions. Coverage and utilization are tracked for existing Reserved Instances, Savings Plans and CUDs, with purchase recommendations for the gap.',
    bullets: [
      'Coverage and utilization for existing commitments',
      'Purchase recommendations sized to real usage',
      'RIs, Savings Plans and CUDs in one view',
    ],
  },
  'Flex Compute': {
    detail: 'Elastic compute pools need to be judged on capacity and efficiency rather than a raw instance count. Flex Compute gives a capacity and KPI view of those pools so scaling behaviour is visible alongside its cost.',
    bullets: [
      'Capacity view across elastic compute pools',
      'KPIs for pool efficiency',
      'Currently AWS',
    ],
  },
  'Pricing calculator': {
    detail: 'The cheapest time to fix an architecture cost is before it is deployed. Build a proposed architecture, price it, and keep the result in a saveable estimate cart so options can be compared and shared instead of rebuilt from scratch each time.',
    bullets: [
      'Price an architecture before you deploy it',
      'Saveable estimate cart for comparing options',
      'AWS available now, GCP and Azure in progress',
    ],
  },
  'Resource labels': {
    detail: 'Cost allocation usually stalls on tagging, because writing tags back into a production account needs change approval. XamOps keeps team, department and project labels internally, so allocation can start immediately without touching provider tags.',
    bullets: [
      'Team, department and project labels',
      'No writes back to the cloud provider',
      'Allocate cost without a tagging project first',
    ],
  },

  // ── Cost automation ───────────────────────────────────────────────
  CloudSitter: {
    detail: 'Non-production infrastructure rarely needs to run overnight or at weekends, but the schedule never gets implemented because it is nobody\'s priority. CloudSitter sets start/stop windows on a weekly grid and shows the projected saving before you commit to it.',
    bullets: [
      'Weekly grid for start/stop windows',
      'Projected saving shown before you apply the schedule',
      'AWS, GCP and Azure',
    ],
  },
  AutoSpotting: {
    detail: 'Spot capacity is the biggest discount in cloud compute and the one teams avoid because interruptions look risky. AutoSpotting moves Auto Scaling Groups onto spot automatically and keeps a savings history, and it deploys through a one-click CloudFormation stack.',
    bullets: [
      'Converts Auto Scaling Groups to spot capacity',
      'Savings history per group over time',
      'One-click CloudFormation deployment',
    ],
  },
  'ASG configuration': {
    detail: 'Blanket spot conversion is the wrong answer for a group serving live traffic. Each Auto Scaling Group gets its own spot-to-on-demand ratio and instance-type diversification, so the risk profile is set per workload rather than globally.',
    bullets: [
      'Per-group spot to on-demand ratio',
      'Instance-type diversification to reduce interruption risk',
      'Currently AWS',
    ],
  },
  'Kubernetes autoscaling controller': {
    detail: 'Cluster efficiency depends on decisions at several layers at once: pod requests, replica counts and the node pool underneath. The controller manages HPA and VPA, optimizes and rebalances nodes, and rightsizes pods from inside the cluster.',
    bullets: [
      'HPA and VPA management',
      'Node optimization and rebalancing',
      'Pod rightsizing based on real usage',
    ],
  },

  // ── Kubernetes ────────────────────────────────────────────────────
  CloudK8s: {
    detail: 'Managed Kubernetes tends to sprawl across accounts and regions until nobody has the full list. CloudK8s inventories every EKS, GKE and AKS cluster with its health, giving one place to see what exists and what is degraded.',
    bullets: [
      'Inventory across EKS, GKE and AKS',
      'Health status per cluster',
      'Multi-account and multi-region coverage',
    ],
  },
  'Cluster detail': {
    detail: 'Cluster spend arrives as one large compute line item, which tells you nothing about which team caused it. Cluster detail breaks a single cluster into its nodes and workloads and attributes cost per namespace.',
    bullets: [
      'Node and workload inventory for one cluster',
      'Per-namespace cost attribution',
      'EKS, GKE and AKS',
    ],
  },
  'In-cluster agent': {
    detail: 'Getting Kubernetes data usually means wiring up several exporters by hand and maintaining them afterwards. The agent collects Kubernetes resources along with Karpenter, OpenCost and Prometheus metrics and logs, with no manual instrumentation step.',
    bullets: [
      'Collects Kubernetes resources, metrics and logs',
      'Reads Karpenter, OpenCost and Prometheus data',
      'No manual instrumentation required',
    ],
  },
  'Database diagnostics': {
    detail: 'The database is often the real cause of a latency incident, but it sits outside every Kubernetes dashboard. The same agent gathers Postgres query statistics, index usage, vacuum activity and wait events, plus MongoDB and Redis health.',
    bullets: [
      'Postgres query stats, index usage, vacuum and wait events',
      'MongoDB and Redis health',
      'Collected by the agent already in your cluster',
    ],
  },

  // ── Security and compliance ───────────────────────────────────────
  'Security Center': {
    detail: 'Findings spread across three provider consoles get triaged by nobody, because there is no shared queue and no owner. Security Center consolidates misconfigurations and findings per provider into one place where they can be worked through.',
    bullets: [
      'Misconfiguration and finding management',
      'One queue across AWS, GCP and Azure',
      'Findings you can assign and track',
    ],
  },
  'WAR (Workload Attack-surface Review)': {
    detail: 'A list of findings does not tell you how exposed you actually are. WAR scores infrastructure exposure to attackers and crypto-miners against an 86-control baseline, producing a number that can be tracked over time and reported upward.',
    bullets: [
      '86-control exposure baseline',
      'Scores attacker and crypto-miner exposure',
      'Comparable score to track across releases',
    ],
  },
  XamSecure: {
    detail: 'A CNAPP-style module that covers the areas a dedicated cloud security product would: attack surface, threats, vulnerabilities, posture, inventory, API security, identities and threat policies. It exists so cloud security does not have to be a separate procurement.',
    bullets: [
      'Attack surface, threats and vulnerabilities',
      'Posture, inventory and API security',
      'Identity coverage and threat policies',
    ],
  },
  ComplianceOps: {
    detail: 'Audits fail on evidence and ownership rather than on controls nobody thought of. ComplianceOps is a control browser where each control carries its owner, its evidence and any documented exception.',
    bullets: [
      'Browse controls with named owners',
      'Evidence attached to each control',
      'Documented exceptions rather than silent gaps',
    ],
  },
  'SOC 2 program': {
    detail: 'Running SOC 2 out of spreadsheets is where most first audits go wrong. The programme hub tracks frameworks, controls, policies, tasks, vendors and risks together, with a publish and archive workflow so policy versions have a history.',
    bullets: [
      'Framework, control, policy, task, vendor and risk tracking',
      'Policy publish and archive workflow',
      'One hub instead of a spreadsheet set',
    ],
  },
  'Cloud inventory (Cloudlist)': {
    detail: 'Most security questions start as an inventory question: where is this resource, and how many others look like it. Cloudlist is a searchable inventory of every discovered resource across all three providers.',
    bullets: [
      'Searchable across every discovered resource',
      'AWS, GCP and Azure in one index',
      'Answers scope questions during an incident',
    ],
  },
  CloudMap: {
    detail: 'Exposure is a property of how things connect, which a table cannot show. CloudMap visualizes network topology and adds a design studio for architecture diagrams that can be exported for reviews and documentation.',
    bullets: [
      'Network topology visualization',
      'Design studio for architecture diagrams',
      'Exportable for reviews and documentation',
    ],
  },

  // ── Observability and reliability ─────────────────────────────────
  Observability: {
    detail: 'Logs, metrics, traces and alerts in one module, with guided setup for the collection agent so instrumentation is not a project in itself. Currently in beta and in use with customers.',
    bullets: [
      'Logs, metrics, traces and alerts together',
      'Guided agent setup',
      'Currently beta',
    ],
  },
  'Grafana embedding': {
    detail: 'Teams that already have good Grafana dashboards should not be asked to rebuild them. Existing dashboards embed directly inside XamOps, with help for the Terraform setup.',
    bullets: [
      'Bring existing Grafana dashboards in as-is',
      'Terraform setup assistance',
      'Currently AWS',
    ],
  },
  'Performance insights': {
    detail: 'Utilization and bottleneck analysis per provider, so a slow service can be traced to the resource that is constraining it. This is the layer that turns a cost or latency symptom into a specific thing to change.',
    bullets: [
      'Utilization analysis per provider',
      'Bottleneck identification',
      'AWS, GCP and Azure',
    ],
  },
  Alerts: {
    detail: 'Alarms are created and alert routing configured per provider from one place, so alerting rules do not have to be maintained separately in each console. Signals land with the people who can act on them.',
    bullets: [
      'Alarm creation per provider',
      'Alert routing to the right owners',
      'AWS, GCP and Azure',
    ],
  },
  'AI SRE investigations': {
    detail: 'The expensive part of an incident is the manual reconstruction of what happened. Investigations run automatically from a detection event or on demand, and produce a root-cause analysis with a timeline instead of a raw pile of logs. Currently pre-release.',
    bullets: [
      'Triggered by detection events or started manually',
      'Produces an RCA with an event timeline',
      'Currently pre-release',
    ],
  },
  AIOps: {
    detail: 'Anomaly detection and an AI advisor that work over your own telemetry rather than a generic model of what a healthy system looks like. The value is catching the deviation that no static threshold was written for.',
    bullets: [
      'Anomaly detection on your own telemetry',
      'AI advisor for what to do next',
      'Complements static alert thresholds',
    ],
  },

  // ── DevOps ────────────────────────────────────────────────────────
  'CI/CD pipelines': {
    detail: 'Delivery data usually lives in the CI tool, separated from the infrastructure it deploys to. Pipeline run history and delivery metrics sit next to the cloud resources they change, so a deployment can be correlated with what happened afterwards.',
    bullets: [
      'Pipeline run history',
      'Delivery metrics over time',
      'Alongside the infrastructure being deployed',
    ],
  },
  'Code quality': {
    detail: 'SonarQube metrics displayed alongside your infrastructure view, so code health is part of the same operational picture as cost and reliability rather than a dashboard only the dev team opens.',
    bullets: [
      'SonarQube metrics in context',
      'Code health next to infrastructure health',
      'One place for engineering leadership to look',
    ],
  },
  'DevOps-in-the-Box': {
    detail: 'Most teams rewrite the same Terraform and shell scripts on every project. This is a reusable library of both, with placeholder templating so a module can be adapted to a new environment instead of copied and edited by hand.',
    bullets: [
      'Reusable Terraform and script library',
      'Placeholder templating for new environments',
      'Stop rewriting the same infrastructure code',
    ],
  },
  CloudShell: {
    detail: 'A browser terminal into your environment with multiple tabs, for the moments when the fastest path is a command rather than a UI. No local credential setup needed to get a shell.',
    bullets: [
      'Browser-based terminal',
      'Multiple concurrent tabs',
      'No local credential configuration',
    ],
  },
  'GitHub integration': {
    detail: 'Repository and token configuration that feeds the pipeline and code-quality views. Connect once and the delivery and code health data follows.',
    bullets: [
      'Repository connection and token management',
      'Feeds pipeline and code quality data',
      'Configured once per repository',
    ],
  },
  DbOps: {
    detail: 'Managed databases get the same treatment as the rest of the estate: a full inventory, savings opportunities, query statistics and health snapshots. Routine database work stops depending on a specialist being available.',
    bullets: [
      'Inventory of every managed database',
      'Savings opportunities per instance',
      'Query statistics and health snapshots',
    ],
  },

  // ── MediaOps ──────────────────────────────────────────────────────
  'Transcoding jobs': {
    detail: 'FFmpeg-based transcode jobs and batches with reusable presets and live progress, so a media pipeline is something you can operate and observe rather than a queue you hope is moving.',
    bullets: [
      'FFmpeg-based jobs and batches',
      'Reusable presets',
      'Live progress per job',
    ],
  },
  'Live streams': {
    detail: 'Stream monitoring, so live delivery problems are visible while the stream is still running rather than in a post-mortem.',
    bullets: [
      'Monitoring for live streams',
      'Problems visible during the event',
    ],
  },
  'Media storage': {
    detail: 'Media libraries grow without bound and rarely get tiered. A storage footprint and tiering view shows what is being kept on expensive storage and what could move.',
    bullets: [
      'Storage footprint across media assets',
      'Tiering view for cost reduction',
    ],
  },
  'Media cost savings': {
    detail: 'Transcode and delivery are among the largest line items in a media business, and general-purpose cloud tools do not break them out. Savings here are specific to those workloads.',
    bullets: [
      'Savings specific to transcode workloads',
      'Delivery and egress cost visibility',
    ],
  },
};

export const detailFor = (name) => DETAIL[name] || null;

// ─────────────────────────────────────────────────────────────────────────────
// Per-group FAQs. Rendered on the group page and emitted as FAQPage schema,
// so keep the answers factual and self-contained.
// ─────────────────────────────────────────────────────────────────────────────
export const GROUP_FAQS = {
  platform: [
    ['Which clouds does XamOps connect to?',
      'AWS, GCP and Azure. Each provider has a guided onboarding path: a CloudFormation stack creates the IAM role on AWS, GCP uses a service account, and Azure uses a Service Principal configured by a generated PowerShell script.'],
    ['Do we have to give XamOps broad permissions?',
      'No. XamOps works with restricted policies, and when a policy blocks a particular data source the interface names the specific missing permission instead of rendering an empty chart. You can start narrow and widen access only where you want the extra visibility.'],
    ['Can different teams see different parts of the platform?',
      'Yes. Role-based access controls visibility down to the individual tab, so finance, engineering and support each see only the surface relevant to them.'],
    ['How do people navigate a platform this large?',
      'A Cmd+K command palette jumps to anything across accounts, resources and pages, so daily operators do not need to click through menus.'],
  ],
  finops: [
    ['How is this different from the native cost tools?',
      'Native tools stop at reporting one provider. XamOps puts AWS, GCP and Azure in one explorer, adds forecasting with accuracy tracked against actuals, and connects each finding to a remediation, including rightsizing and commitment purchases.'],
    ['Can we allocate cost without a tagging project first?',
      'Yes. Resource labels let you assign team, department and project ownership inside XamOps without writing tags back to the cloud provider, so allocation can start before a tagging standard is agreed and rolled out.'],
    ['What kinds of waste does XamOps find?',
      'Idle and orphaned resources such as unattached volumes, unused reserved IP addresses and instances that are stopped but still generating charges, alongside oversized compute and storage identified by rightsizing.'],
    ['Does it cover reservations and Savings Plans?',
      'Yes. Coverage and utilization are tracked for existing Reserved Instances, Savings Plans and CUDs, with purchase recommendations sized against real usage.'],
    ['Can we price an architecture before building it?',
      'The pricing calculator lets you build and price a proposed architecture and keep it in a saveable estimate cart. AWS is live today, with GCP and Azure in progress.'],
  ],
  'cost-automation': [
    ['What is the difference between FinOps and cost automation here?',
      'FinOps finds and quantifies the savings. Cost automation applies them: CloudSitter runs start/stop schedules, AutoSpotting converts Auto Scaling Groups to spot capacity, and the Kubernetes controller rightsizes continuously, all without a ticket.'],
    ['Is moving to spot capacity risky for production?',
      'Risk is configured per workload rather than globally. Each Auto Scaling Group has its own spot-to-on-demand ratio and instance-type diversification, so latency-sensitive groups keep a guaranteed floor of on-demand capacity.'],
    ['Do we see the saving before making a change?',
      'Yes. CloudSitter shows a projected savings figure for a schedule before you commit to it, and AutoSpotting keeps a savings history per group after conversion.'],
    ['How is AutoSpotting deployed?',
      'Through a one-click CloudFormation deployment, with savings history reported back into XamOps.'],
  ],
  kubernetes: [
    ['What do we have to install?',
      'One in-cluster agent. It collects Kubernetes resources plus Karpenter, OpenCost and Prometheus metrics and logs, with no manual instrumentation step, and the same agent gathers database diagnostics.'],
    ['Can we see cost per team or per namespace?',
      'Yes. Cluster detail attributes cost per namespace alongside node and workload inventory, so a shared cluster can be split across the teams using it.'],
    ['Which managed Kubernetes services are supported?',
      'EKS, GKE and AKS, inventoried together in CloudK8s with health status per cluster.'],
    ['Does it help with database problems inside the cluster?',
      'The agent collects Postgres query statistics, index usage, vacuum activity and wait events, plus MongoDB and Redis health, so the data layer is visible in the same place as the workloads.'],
  ],
  security: [
    ['Is this a CSPM or a CNAPP?',
      'Both, depending on the module. Security Center handles misconfiguration and finding management across all three providers, while XamSecure is CNAPP-style, covering attack surface, threats, vulnerabilities, posture, inventory, API security, identities and threat policies on AWS.'],
    ['What does the attack-surface score measure?',
      'WAR scores how exposed your infrastructure is to attackers and crypto-miners against an 86-control baseline, producing a number you can track over time rather than an unranked list of findings.'],
    ['Does XamOps help with SOC 2?',
      'Yes. The SOC 2 programme tracks frameworks, controls, policies, tasks, vendors and risks in one hub with a policy publish and archive workflow, and ComplianceOps records the owner, evidence and any documented exception for each control.'],
    ['Can we see how exposure connects across the network?',
      'CloudMap visualizes network topology and includes a design studio for architecture diagrams with export, which is usually how an exposure path becomes obvious.'],
  ],
  observability: [
    ['Do we have to replace our existing dashboards?',
      'No. Existing Grafana dashboards embed directly inside XamOps, with help for the Terraform setup, so you can adopt the platform without rebuilding what already works.'],
    ['What does an AI SRE investigation actually produce?',
      'A root-cause analysis with an event timeline, triggered either by a detection event or manually, instead of leaving an engineer to reconstruct the sequence by hand. This module is currently pre-release.'],
    ['How is AIOps different from normal alerting?',
      'Alerts fire on thresholds someone wrote in advance. AIOps runs anomaly detection over your own telemetry and adds an AI advisor, which catches deviations nobody thought to write a rule for.'],
    ['Is the observability module production-ready?',
      'It is currently in beta and in customers\' hands. Logs, metrics, traces and alerts are in one module with guided agent setup.'],
  ],
  devops: [
    ['Why put delivery data in a cloud platform?',
      'Because a deployment and its consequences are usually investigated separately. Pipeline history, delivery metrics and SonarQube code quality sit next to the infrastructure being deployed, so a change can be correlated with what happened after it.'],
    ['What is DevOps-in-the-Box?',
      'A reusable library of Terraform and scripts with placeholder templating, so a module can be adapted to a new environment instead of the same infrastructure code being rewritten on every project.'],
    ['Do engineers get shell access?',
      'CloudShell provides a browser terminal into your environment with multiple tabs, with no local credential configuration required.'],
    ['What does DbOps cover?',
      'Managed database inventory, savings opportunities, query statistics and health snapshots across AWS, GCP and Azure.'],
  ],
  mediaops: [
    ['What is MediaOps for?',
      'Media pipelines treated as infrastructure. Transcode and delivery are among the largest line items in a media business, and general-purpose cloud tooling does not break them out. MediaOps is currently in beta.'],
    ['How does transcoding work?',
      'FFmpeg-based jobs and batches with reusable presets and live progress per job.'],
    ['Does it show media-specific cost?',
      'Yes. Media cost savings are specific to transcode and delivery workloads, alongside a storage footprint and tiering view.'],
  ],
};

export const faqsFor = (groupId) => GROUP_FAQS[groupId] || [];
