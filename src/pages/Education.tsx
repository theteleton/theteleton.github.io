import React from 'react';
import './Education.css';

interface Degree {
  period: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  gradient: string;
  highlights?: string[];
}

const DEGREES: Degree[] = [
  {
    period: '2022 – Present',
    degree: 'PhD',
    field: 'Computer Science',
    institution: 'University Name',
    location: 'Slovenia',
    gradient: 'var(--gradient-main)',
    highlights: [
      'Research focus: Machine Learning & Algorithms',
      'Advisor: Prof. Name',
      'Published N papers',
    ],
  },
  {
    period: '2020 – 2022',
    degree: "Master's",
    field: 'Computer Science',
    institution: 'University Name',
    location: 'Slovenia',
    gradient: 'var(--gradient-warm)',
    highlights: [
      'GPA: X.X / 10',
      'Thesis: Title of Thesis',
      'Graduated with honours',
    ],
  },
  {
    period: '2017 – 2020',
    degree: "Bachelor's",
    field: 'Computer Science',
    institution: 'University Name',
    location: 'Slovenia',
    gradient: 'var(--gradient-pink)',
    highlights: [
      'GPA: X.X / 10',
      'Thesis: Title of Thesis',
    ],
  },
];

interface Certificate {
  year: string;
  title: string;
  issuer: string;
  gradient: string;
}

const CERTIFICATES: Certificate[] = [
  { year: '2024', title: 'Certificate / Course Name', issuer: 'Issuing Organisation', gradient: 'var(--gradient-teal)' },
  { year: '2023', title: 'Certificate / Course Name', issuer: 'Issuing Organisation', gradient: 'var(--gradient-green)' },
  { year: '2022', title: 'Certificate / Course Name', issuer: 'Issuing Organisation', gradient: 'var(--gradient-orange)' },
];

export default function Education() {
  return (
    <main className="education page-wrap">
      <div className="blob blob-1" style={{ top: '8%', left: '-10%' }} />
      <div className="blob blob-2" style={{ bottom: '15%', right: '-8%' }} />

      <div className="container">
        <section className="page-header">
          <span className="section-badge">Education</span>
          <h1 className="section-title">Academic background</h1>
          <p className="section-sub">
            My formal education in computer science, from undergraduate studies through doctoral research.
          </p>
        </section>

        {/* Degrees timeline */}
        <section className="degrees-section">
          <div className="timeline">
            {DEGREES.map(({ period, degree, field, institution, location, gradient, highlights }) => (
              <div key={degree} className="timeline-item">
                <div className="timeline-marker" style={{ background: gradient }} />
                <div className="glass-card timeline-card">
                  <div className="tcard-header">
                    <div className="degree-badge" style={{ background: gradient }}>
                      {degree}
                    </div>
                    <span className="tcard-period">{period}</span>
                  </div>
                  <h2 className="tcard-title">{field}</h2>
                  <p className="tcard-institution">
                    🏛 {institution} &mdash; {location}
                  </p>
                  {highlights && (
                    <ul className="tcard-highlights">
                      {highlights.map(h => (
                        <li key={h}>
                          <span className="highlight-dot" style={{ background: gradient }} />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="certs-section">
          <span className="section-badge">Certifications</span>
          <h2 className="section-title">Courses &amp; Certificates</h2>
          <div className="certs-grid">
            {CERTIFICATES.map(({ year, title, issuer, gradient }) => (
              <div key={title} className="glass-card cert-card">
                <div className="cert-bar" style={{ background: gradient }} />
                <div className="cert-body">
                  <span className="cert-year">{year}</span>
                  <h3 className="cert-title">{title}</h3>
                  <p className="cert-issuer">{issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
