import React from 'react';
import {
  SiGithub, SiLinkedin, SiGooglescholar, SiResearchgate,
  SiMedium, SiCodeforces,
} from 'react-icons/si';
import './About.css';

const PROFILES = [
  {
    icon: <SiGithub />,
    label: 'GitHub',
    handle: '@theteleton',
    desc: 'Source code & open-source projects.',
    href: 'https://github.com/theteleton',
    gradient: 'var(--gradient-main)',
  },
  {
    icon: <SiLinkedin />,
    label: 'LinkedIn',
    handle: 'Ilija Tavchioski',
    desc: 'Professional background & networking.',
    href: '#',
    gradient: 'linear-gradient(135deg, #0077b5 0%, #00a0dc 100%)',
  },
  {
    icon: <SiGooglescholar />,
    label: 'Google Scholar',
    handle: 'Ilija Tavchioski',
    desc: 'Academic publications & citations.',
    href: '#',
    gradient: 'linear-gradient(135deg, #4285f4 0%, #34a853 100%)',
  },
  {
    icon: <SiResearchgate />,
    label: 'ResearchGate',
    handle: 'Ilija Tavchioski',
    desc: 'Research projects & collaborations.',
    href: '#',
    gradient: 'linear-gradient(135deg, #00d2b6 0%, #00a89d 100%)',
  },
  {
    icon: <SiMedium />,
    label: 'Medium',
    handle: '@theteleton',
    desc: 'Articles, tutorials & writing.',
    href: '#',
    gradient: 'linear-gradient(135deg, #333 0%, #555 100%)',
  },
  {
    icon: <SiCodeforces />,
    label: 'Codeforces',
    handle: 'theteleton',
    desc: 'Competitive programming & contests.',
    href: '#',
    gradient: 'linear-gradient(135deg, #1890ff 0%, #096dd9 100%)',
  },
  {
    icon: <span className="sicris-text">Si</span>,
    label: 'SICRIS',
    handle: 'Ilija Tavchioski',
    desc: 'Slovenian research information system.',
    href: '#',
    gradient: 'linear-gradient(135deg, #667eea 0%, #f5576c 100%)',
  },
];

const SKILLS = [
  {
    category: 'Research',
    gradient: 'var(--gradient-main)',
    items: ['Machine Learning', 'Data Science', 'Algorithm Design', 'Statistical Analysis', 'Academic Writing'],
  },
  {
    category: 'Frontend',
    gradient: 'var(--gradient-warm)',
    items: ['React', 'TypeScript', 'HTML / CSS', 'Responsive Design'],
  },
  {
    category: 'Backend',
    gradient: 'var(--gradient-pink)',
    items: ['Python', 'Node.js', 'REST APIs', 'SQL / NoSQL'],
  },
  {
    category: 'Tools',
    gradient: 'var(--gradient-teal)',
    items: ['Git / GitHub', 'Docker', 'Linux', 'LaTeX'],
  },
];

export default function About() {
  return (
    <main className="about page-wrap">
      <div className="blob blob-1" style={{ top: '10%', right: '-5%' }} />
      <div className="blob blob-2" style={{ bottom: '20%', left: '-8%' }} />

      <div className="container">
        {/* Header */}
        <section className="page-header">
          <span className="section-badge">About Me</span>
          <h1 className="section-title">The person behind the work</h1>
          <p className="section-sub">
            Researcher, developer, and competitive programmer based in Slovenia.
            I love solving hard problems — on paper and in code. See the{' '}
            <a href="#/education" style={{ color: 'var(--gold-1)' }}>Education</a>,{' '}
            <a href="#/experience" style={{ color: 'var(--gold-1)' }}>Experience</a>, and{' '}
            <a href="#/research" style={{ color: 'var(--gold-1)' }}>Research</a> pages for more.
          </p>
        </section>

        {/* Bio */}
        <section className="bio-section">
          <div className="bio-grid">
            <div className="bio-text glass-card">
              <h2 className="bio-heading">Hello there 👋</h2>
              <p>
                I'm <strong>Ilija Tavchioski</strong>, a researcher and software developer
                with a passion for applying rigorous thinking to real-world problems.
                My work spans machine learning, algorithm design, and full-stack engineering.
              </p>
              <p>
                When I'm not writing papers or shipping code, you'll find me on competitive
                programming platforms, reading about new advances in AI, or sharing
                what I've learned on Medium.
              </p>
              <p>
                I'm always open to interesting research collaborations, engineering challenges,
                and meaningful conversations. Feel free to reach out!
              </p>
            </div>

            <div className="bio-stats">
              {[
                { value: 'Research',     label: 'Primary focus' },
                { value: 'Dev',          label: 'Always shipping' },
                { value: 'Open Source',  label: 'Community driven' },
                { value: 'Global',       label: 'Remote friendly' },
              ].map(({ value, label }) => (
                <div key={label} className="glass-card stat-card">
                  <span className="stat-value gradient-text">{value}</span>
                  <span className="stat-label">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social profiles */}
        <section className="about-profiles-section">
          <span className="section-badge">Find me on</span>
          <h2 className="section-title">Social &amp; Academic profiles</h2>
          <div className="about-profiles-grid">
            {PROFILES.map(({ icon, label, handle, desc, href, gradient }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card about-profile-card"
              >
                <div className="about-profile-icon" style={{ background: gradient }}>
                  {icon}
                </div>
                <div className="about-profile-info">
                  <span className="about-profile-label">{label}</span>
                  <span className="about-profile-handle">{handle}</span>
                  <p className="about-profile-desc">{desc}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="skills-section">
          <span className="section-badge">Skills</span>
          <h2 className="section-title">What I work with</h2>
          <div className="skills-grid">
            {SKILLS.map(({ category, gradient, items }) => (
              <div key={category} className="glass-card skill-card">
                <div className="skill-header" style={{ background: gradient }}>
                  <span className="skill-category">{category}</span>
                </div>
                <ul className="skill-list">
                  {items.map(item => (
                    <li key={item} className="skill-item">
                      <span className="skill-dot" style={{ background: gradient }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
