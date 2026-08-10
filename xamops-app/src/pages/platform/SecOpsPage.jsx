import PageHero from '../../components/shared/PageHero';
import CopySection from '../../components/shared/CopySection';
import FeatureGrid from '../../components/shared/FeatureGrid';
import FAQList from '../../components/shared/FAQList';
import CTABanner from '../../components/shared/CTABanner';
import Cloud3 from '../../components/shared/Cloud3';
import SecOpsVisual from '../../components/visuals/SecOpsVisual';

const SUPPORTED_CLOUDS = ['Amazon Web Services (AWS)', 'Microsoft Azure', 'Google Cloud Platform (GCP)'];
const IDEAL_FOR = [
  'Security Operations (SOC) Teams', 'Cloud Security Engineers', 'DevOps Teams', 'DevSecOps Teams',
  'IT Operations Teams', 'Security Analysts', 'Cloud Architects', 'CISOs and CTOs',
  'Enterprises managing AWS, Azure, Google Cloud, or hybrid cloud environments',
];

const FAQS = [
  { q: 'What is SecOps?', a: 'SecOps (Security Operations) is the method that brings together security and IT operations teams and ensures constant monitoring, detection, investigation, and response to cyber attacks as well as securing cloud infrastructure and applications.' },
  { q: 'What is a SecOps platform?', a: 'The SecOps Platform integrates security monitoring, threat detection, incident response, automation, and compliance management into one unified system that enables security optimization and reduction of manual efforts.' },
  { q: 'How does Xamops SecOps improve cloud security?', a: 'Xamops delivers cloud environment monitoring, threat detection, security workflow automation, risk detection, and incident response capabilities for security teams.' },
  { q: 'How does SecOps differ from DevSecOps?', a: 'SecOps concentrates on security incident monitoring, detection, and response during day-to-day operations, whereas DevSecOps incorporates security into the whole software development lifecycle.' },
  { q: 'Can Xamops SecOps automate security operations?', a: 'Yes. Xamops automates repetitive security tasks such as alert handling, incident workflows, security monitoring, and operational processes, helping teams reduce manual effort and improve response times.' },
  { q: 'Which cloud platforms are supported by Xamops SecOps?', a: `Xamops supports major cloud providers, including ${SUPPORTED_CLOUDS.join(', ')}, enabling organizations to manage cloud security across multi-cloud environments from a single platform.` },
  { q: 'How does Xamops help with incident response?', a: 'Xamops provides real-time alerts, centralized security monitoring, automated workflows, and actionable insights that help security teams investigate and resolve incidents faster.' },
  { q: 'How does Xamops support compliance?', a: 'Xamops continuously monitors cloud environments for policy violations, security risks, and configuration issues, helping organizations maintain compliance and improve governance.' },
  { q: 'Who should use Xamops SecOps?', a: `Xamops SecOps is ideal for: ${IDEAL_FOR.join(', ')}.` },
  { q: 'Why is cloud security monitoring important?', a: 'The cloud environment is dynamic, with constant change across applications, users, and resources. Continuous security monitoring lets organizations identify threats early and reduce security risks.' },
  { q: 'How does Xamops help organizations strengthen their security posture?', a: 'Xamops provides constant visibility of the cloud environment, detects vulnerabilities and misconfigurations, carries out security activities automatically, and gives recommendations that help businesses improve cloud security posture.' },
];

export default function SecOpsPage() {
  return (
    <>
      <PageHero
        eyebrow="Platform · SecOps"
        title={[{ text: 'SecOps Platform for' }, { text: 'Smarter Cloud Security', accent: true }]}
        body="With the growth of cloud environments, security teams face challenges in threat detection, incident response, and compliance. Xamops SecOps integrates security operations into one solution."
      />
      <section className="sec-light pb-10">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10"><SecOpsVisual /></div>
      </section>
      <CopySection
        paragraphs={[
          'By integrating all of the security operations into one solution, Xamops SecOps allows you to detect threats, automate your security operations process, identify risks in your cloud, and respond to incidents in a timely manner. With Xamops, you can improve your cloud security posture with visibility, automation, and security insights easily.',
          'No matter whether your workloads are in AWS, Microsoft Azure, Google Cloud, or other cloud environments, Xamops helps you create efficient security operations.',
        ]}
        wide
      />
      <CopySection
        dark
        heading="Protect Your Cloud Environment with Intelligent Security Operations"
        paragraphs={[
          "Today's cloud computing systems produce hundreds or even thousands of security incidents on a daily basis. Without a unified approach to monitoring, it is impossible to detect critical threats.",
          'Xamops SecOps helps businesses simplify cloud security through full visibility into security incidents, vulnerabilities, and infrastructure. With Xamops, you can:',
        ]}
        checklist={[
          'Monitor cloud security from a single dashboard', 'Detect security threats in real time', 'Automate routine security operations',
          'Improve incident response times', 'Strengthen cloud security posture', 'Identify configuration risks',
          'Support compliance and governance initiatives', 'Reduce manual security efforts',
        ]}
        wide
      />
      <FeatureGrid
        title="Key features of the Xamops SecOps Platform"
        items={[
          ['Centralized Security Monitoring', 'Monitor cloud infrastructure, workloads, applications and security incidents on AWS, Azure, and GCP within one single pane of glass.'],
          ['Automated Security Operations', 'Save time and effort by automating repeatable security processes such as alert management and incident management.'],
          ['Real-Time Threat Detection', 'Continuously monitor your cloud environment to detect malicious activity, suspicious behavior, and unauthorized access attempts.'],
          ['Security Alerts and Incident Management', 'Receive real-time alerts with contextual information that helps your security teams address incidents promptly.'],
          ['Cloud Security Posture Management', 'Detect security weaknesses, vulnerabilities, risk exposures, and policy violations that can expand your attack surface.'],
          ['Compliance Monitoring', 'Help your organization stay compliant with security standards through continuous monitoring for security violations.'],
        ]}
      />
      <CopySection
        heading="Why Organizations Choose Xamops SecOps"
        paragraphs={['Security operations require continuous monitoring, rapid response, and efficient collaboration between security and operations teams. Organizations use Xamops SecOps to:']}
        checklist={[
          'Detect cloud security threats quickly', 'Enhance incident response capability', 'Eliminate manual cloud security processes',
          'Automate cloud security activities', 'Increase cloud security visibility', 'Comply with security regulations better',
          'Enable DevSecOps projects', 'Secure cloud resources', 'Boost efficiency', 'Decrease security risks',
        ]}
        wide
      />
      <Cloud3 items={SUPPORTED_CLOUDS.map((c) => c.toLowerCase())} />
      <FAQList faqs={FAQS} />
      <CTABanner heading="Drift catches you. Or XamOps does first." />
    </>
  );
}
