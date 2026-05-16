import React from 'react';
import { SiGooglescholar, SiResearchgate } from 'react-icons/si';
import { HiExternalLink } from 'react-icons/hi';
import './Research.css';

interface Paper {
  year: string;
  title: string;
  venue: string;
  authors: string;
  gradient: string;
  link?: string;
}

const PAPERS: Paper[] = [
  {
    year: '2025',
    title: 'Title of Your Most Recent Paper',
    venue: 'Conference / Journal Name (VENUE\'25)',
    authors: 'Ilija Tavchioski, Co-Author A, Co-Author B',
    gradient: 'var(--gradient-main)',
    link: '#',
  },
  {
    year: '2024',
    title: 'Title of Another Paper',
    venue: 'Conference / Journal Name (VENUE\'24)',
    authors: 'Ilija Tavchioski, Co-Author A',
    gradient: 'var(--gradient-warm)',
    link: '#',
  },
  {
    year: '2023',
    title: 'Title of Earlier Work',
    venue: 'Workshop / Conference Name',
    authors: 'Ilija Tavchioski, Co-Author B, Co-Author C',
    gradient: 'var(--gradient-pink)',
    link: '#',
  },
];

const INTERESTS = [
  { icon: '🤖', title: 'Machine Learning', desc: 'Supervised and unsupervised learning, neural architectures, model efficiency.' },
  { icon: '📊', title: 'Data Science', desc: 'Statistical modelling, data pipelines, and large-scale analytics.' },
  { icon: '🧮', title: 'Algorithms', desc: 'Combinatorial optimisation, graph theory, and competitive programming.' },
  { icon: '📝', title: 'NLP', desc: 'Text classification, information extraction, and language modelling.' },
];

export default function Research() {
  return (
    <main className="research page-wrap">
      <div className="blob blob-1" style={{ top: '5%', left: '-8%' }} />
      <div className="blob blob-2" style={{ bottom: '20%', right: '-5%' }} />

      <div className="container">
        <section className="page-header">
          <span className="section-badge">Research</span>
          <h1 className="section-title">Research &amp; Publications</h1>
          <p className="section-sub">
            My academic work, publications, and research interests.
            Find me on Google Scholar and ResearchGate for the full list.
          </p>
          <div className="research-profile-links">
            <a href="#" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <SiGooglescholar /> Google Scholar
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <SiResearchgate /> ResearchGate
            </a>
          </div>
        </section>

        {/* Research interests */}
        <section className="interests-section">
          <span className="section-badge">Interests</span>
          <h2 className="section-title">Research areas</h2>
          <div className="interests-grid">
            {INTERESTS.map(({ icon, title, desc }) => (
              <div key={title} className="glass-card interest-card">
                <span className="interest-icon">{icon}</span>
                <h3 className="interest-title">{title}</h3>
                <p className="interest-desc">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Publications */}
        <section className="papers-section">
          <span className="section-badge">Publications</span>
          <h2 className="section-title">Selected papers</h2>
          <div className="papers-list">
            {PAPERS.map(({ year, title, venue, authors, gradient, link }) => (
              <div key={title} className="glass-card paper-card">
                <div className="paper-accent" style={{ background: gradient }} />
                <div className="paper-body">
                  <div className="paper-meta">
                    <span className="paper-year">{year}</span>
                    <span className="paper-venue">{venue}</span>
                  </div>
                  <h3 className="paper-title">{title}</h3>
                  <p className="paper-authors">{authors}</p>
                  {link && (
                    <a href={link} target="_blank" rel="noopener noreferrer" className="paper-link">
                      <HiExternalLink /> View paper
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
