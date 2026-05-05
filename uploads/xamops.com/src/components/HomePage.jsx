import React from 'react';
import Hero from './Hero.jsx';
import LogoBar from './LogoBar.jsx';
import PlatformStrip from './PlatformStrip.jsx';
import TextSection from './TextSection.jsx';
import HorizontalScroll from './HorizontalScroll.jsx';
import ComingSoon from './ComingSoon.jsx';
import Metrics from './Metrics.jsx';
import FinalCTA from './FinalCTA.jsx';
import {
  SpotVisual, DiskVisual, DBVisual, SecOpsVisual, CostVisual, SREVisual,
} from './Visuals.jsx';

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoBar />
      <PlatformStrip />

      <TextSection
        index={1}
        eyebrow="Spot Automation"
        title={[{ text: '70% savings' }, { text: 'on compute,' }, { text: 'automated.', accent: true }]}
        body="AutoSpotting replaces on-demand instances with spot capacity across AWS Auto Scaling Groups, GCP Managed Instance Groups and Azure VMSS. Per-instance SKU rules, eviction handling, and a guaranteed minimum of regular VMs."
        metric={[['Avg savings', '68%'], ['Eviction', '0.34%'], ['Coverage', '92%']]}
        visual={<SpotVisual />}
      />
      <TextSection
        index={2}
        eyebrow="Disk Rightsizing"
        title={[{ text: 'Stop paying for' }, { text: 'disk you don’t', accent: true }, { text: 'use.' }]}
        dark
        side="left"
        body="No other platform automates this. Continuous volume monitoring, recommendations, and safe automated resize for AWS EBS, GCP Persistent Disk and Azure Managed Disks — including filesystem expansion."
        metric={[['Avg reduction', '38%'], ['Volumes', '12,400+'], ['Downtime', '0s']]}
        visual={<DiskVisual />}
      />
      <TextSection
        index={3}
        eyebrow="DBOps"
        title={[{ text: 'Database operations' }, { text: 'on autopilot.', accent: true }]}
        body="Automated scaling, backup verification, performance optimization, and patch windows — across RDS, Cloud SQL, Cosmos and beyond. Stop being on-call for routine database work."
        metric={[['Manual pages', '0'], ['Routines', '12/day'], ['DBs', '340+']]}
        visual={<DBVisual />}
      />
      <TextSection
        index={4}
        eyebrow="SecOps"
        title={[{ text: 'Security automation' }, { text: 'that ships with', accent: true }, { text: 'your code.' }]}
        dark
        side="left"
        body="Continuous CIS posture checks, drift detection, and automated remediation that runs alongside CI/CD instead of after the fact. Multi-cloud coverage, single policy plane."
        metric={[['CIS coverage', '94%'], ['Critical', '0'], ['MTTR', '4m']]}
        visual={<SecOpsVisual />}
      />

      <HorizontalScroll />

      <TextSection
        index={5}
        eyebrow="Cost Analytics"
        title={[{ text: 'See exactly' }, { text: 'what you spend.' }, { text: 'Cut the rest.', accent: true }]}
        body="Real-time savings dashboards, daily aggregations, reservation/commitment coverage for RIs, CUDs and Savings Plans, and forecasting that engineering managers actually trust."
        metric={[['Coverage', '80%'], ['Forecast Δ', '±2%'], ['Reports', 'Live']]}
        visual={<CostVisual />}
      />
      <TextSection
        index={6}
        eyebrow="SRE Investigation"
        title={[{ text: 'From alert to' }, { text: 'root cause.', accent: true }, { text: 'Faster.' }]}
        side="left"
        body="AI-assisted log triage, anomaly detection, and an investigation timeline that stitches metrics, logs and traces. Native OpenObserve integration, with auto-detected incident feeds."
        metric={[['Faster RCAs', '11×'], ['Logs/sec', '1.2M'], ['Recall', '98%']]}
        visual={<SREVisual />}
      />

      <ComingSoon />
      <Metrics />
      <FinalCTA />
    </>
  );
}
