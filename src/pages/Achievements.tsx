import React from 'react';
import './Achievements.css';

interface Achievement {
  year: string;
  title: string;
  issuer: string;
  desc: string;
  gradient: string;
  icon: string;
}

const ACHIEVEMENTS: Achievement[] = [
  {
    year: '2025',
    title: 'Achievement / Award Name',
    issuer: 'Organisation / Institution',
    desc: 'Brief description of what this award is for and what it means to you.',
    gradient: 'var(--gradient-main)',
    icon: '🏆',
  },
  {
    year: '2024',
    title: 'Competitive Programming Contest — Rank X',
    issuer: 'Codeforces / ICPC / etc.',
    desc: 'Brief description of the contest and your result.',
    gradient: 'var(--gradient-warm)',
    icon: '🥇',
  },
  {
    year: '2024',
    title: 'Best Paper Award',
    issuer: 'Conference Name',
    desc: 'Awarded for outstanding contribution at the conference.',
    gradient: 'var(--gradient-pink)',
    icon: '📄',
  },
  {
    year: '2023',
    title: 'Scholarship / Grant Name',
    issuer: 'Funding Body',
    desc: 'Brief description of the scholarship and its scope.',
    gradient: 'var(--gradient-teal)',
    icon: '🎓',
  },
  {
    year: '2022',
    title: 'Hackathon — 1st Place',
    issuer: 'Event / Organisation Name',
    desc: 'Brief description of the hackathon challenge and solution.',
    gradient: 'var(--gradient-green)',
    icon: '💡',
  },
  {
    year: '2021',
    title: 'Achievement / Award Name',
    issuer: 'Organisation / Institution',
    desc: 'Brief description of what this award recognises.',
    gradient: 'var(--gradient-orange)',
    icon: '⭐',
  },
];

export default function Achievements() {
  return (
    <main className="achievements page-wrap">
      <div className="blob blob-1" style={{ top: '8%', right: '-5%' }} />
      <div className="blob blob-3" style={{ bottom: '10%', left: '-8%' }} />

      <div className="container">
        <section className="page-header">
          <span className="section-badge">Achievements</span>
          <h1 className="section-title">Awards &amp; Recognition</h1>
          <p className="section-sub">
            Milestones, awards, scholarships, and competitive results across
            research, software engineering, and academia.
          </p>
        </section>

        <section className="achievements-section">
          <div className="achievements-grid">
            {ACHIEVEMENTS.map(({ year, title, issuer, desc, gradient, icon }) => (
              <div key={title + year} className="glass-card achievement-card">
                <div className="ach-icon-wrap" style={{ background: gradient }}>
                  <span>{icon}</span>
                </div>
                <div className="ach-body">
                  <div className="ach-meta">
                    <span className="ach-year">{year}</span>
                    <span className="ach-issuer">{issuer}</span>
                  </div>
                  <h3 className="ach-title">{title}</h3>
                  <p className="ach-desc">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
