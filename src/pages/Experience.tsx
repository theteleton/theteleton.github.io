import React from 'react';
import './Experience.css';

interface Role {
  period: string;
  title: string;
  company: string;
  location: string;
  type: string;
  gradient: string;
  bullets: string[];
}

const ROLES: Role[] = [
  {
    period: '2023 – Present',
    title: 'Research Assistant',
    company: 'University / Institute Name',
    location: 'Slovenia',
    type: 'Full-time',
    gradient: 'var(--gradient-main)',
    bullets: [
      'Conducting research in machine learning and algorithm design.',
      'Publishing findings in peer-reviewed journals and conferences.',
      'Collaborating with international research partners.',
    ],
  },
  {
    period: '2022 – 2023',
    title: 'Software Engineer',
    company: 'Company Name',
    location: 'Remote',
    type: 'Full-time',
    gradient: 'var(--gradient-warm)',
    bullets: [
      'Built and maintained full-stack web applications using React and Node.js.',
      'Designed REST APIs consumed by mobile and web clients.',
      'Improved CI/CD pipelines, reducing deployment time by X%.',
    ],
  },
  {
    period: 'Summer 2021',
    title: 'Software Engineering Intern',
    company: 'Company Name',
    location: 'Slovenia',
    type: 'Internship',
    gradient: 'var(--gradient-pink)',
    bullets: [
      'Developed features for an internal data dashboard.',
      'Wrote automated tests improving coverage from X% to Y%.',
    ],
  },
];

export default function Experience() {
  return (
    <main className="experience page-wrap">
      <div className="blob blob-2" style={{ top: '10%', right: '-8%' }} />
      <div className="blob blob-3" style={{ bottom: '10%', left: '-5%' }} />

      <div className="container">
        <section className="page-header">
          <span className="section-badge">Experience</span>
          <h1 className="section-title">Work &amp; Research history</h1>
          <p className="section-sub">
            Positions I've held across academia and industry — building things,
            running experiments, and shipping software.
          </p>
        </section>

        <section className="exp-section">
          <div className="timeline">
            {ROLES.map(({ period, title, company, location, type, gradient, bullets }) => (
              <div key={title + period} className="timeline-item">
                <div className="timeline-marker" style={{ background: gradient }} />
                <div className="glass-card timeline-card">
                  <div className="tcard-header">
                    <div className="degree-badge" style={{ background: gradient }}>{type}</div>
                    <span className="tcard-period">{period}</span>
                  </div>
                  <h2 className="tcard-title">{title}</h2>
                  <p className="tcard-institution">🏢 {company} &mdash; {location}</p>
                  <ul className="tcard-highlights">
                    {bullets.map(b => (
                      <li key={b}>
                        <span className="highlight-dot" style={{ background: gradient }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
