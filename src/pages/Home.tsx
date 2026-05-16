import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const WHAT_I_DO = [
  {
    gradient: 'var(--gradient-main)',
    icon: '🔬',
    title: 'Research',
    desc: 'Applied and theoretical research — from problem formulation to peer-reviewed publication.',
  },
  {
    gradient: 'var(--gradient-warm)',
    icon: '💻',
    title: 'Development',
    desc: 'Full-stack software engineering, competitive programming, and open-source contributions.',
  },
  {
    gradient: 'var(--gradient-pink)',
    icon: '✍️',
    title: 'Writing',
    desc: 'Technical articles, tutorials, and insights published on Medium and academic venues.',
  },
];

export default function Home() {
  return (
    <main className="home page-wrap">
      {/* Decorative blobs */}
      <div className="blob blob-1" style={{ top: '8%', left: '-10%' }} />
      <div className="blob blob-2" style={{ top: '30%', right: '-8%' }} />
      <div className="blob blob-3" style={{ bottom: '15%', left: '30%' }} />

      {/* ── Hero ── */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-text">
            <p className="hero-greeting anim-0">Hi, I'm</p>
            <h1 className="hero-name anim-1">
              Ilija<br />
              <span className="gradient-text">Tavchioski</span>
            </h1>
            <p className="hero-role anim-2">Researcher &amp; Developer</p>
            <p className="hero-sub anim-3">
              I combine rigorous research with practical engineering — building
              things that matter and writing about what I learn along the way.
            </p>
            <div className="hero-cta anim-4">
              <Link to="/projects" className="btn btn-primary">View My Work</Link>
              <Link to="/contact"  className="btn btn-outline">Get In Touch</Link>
            </div>
          </div>

          <div className="hero-badge-wrap anim-2">
            <div className="hero-badge">
              <div className="badge-inner">
                <span className="badge-initials">IT</span>
                <span className="badge-label">Researcher &amp; Dev</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What I Do ── */}
      <section className="what-i-do">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">What I Do</span>
            <h2 className="section-title">Passion-driven work</h2>
            <p className="section-sub">
              At the intersection of academia and industry — exploring ideas and shipping them.
            </p>
          </div>

          <div className="wid-grid">
            {WHAT_I_DO.map(({ gradient, icon, title, desc }) => (
              <div key={title} className="glass-card wid-card">
                <div className="wid-icon" style={{ background: gradient }}>{icon}</div>
                <h3 className="wid-title">{title}</h3>
                <p className="wid-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
