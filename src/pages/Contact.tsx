import React, { useState } from 'react';
import {
  SiGithub, SiLinkedin, SiGooglescholar, SiResearchgate,
  SiMedium, SiCodeforces, SiX,
} from 'react-icons/si';
import { HiMail } from 'react-icons/hi';
import './Contact.css';

interface Profile {
  icon: React.ReactNode;
  label: string;
  handle: string;
  desc: string;
  href: string;
  gradient: string;
}

const PROFILES: Profile[] = [
  {
    icon: <SiGithub />,
    label: 'GitHub',
    handle: '@theteleton',
    desc: 'Source code, open-source projects, and contributions.',
    href: 'https://github.com/theteleton',
    gradient: 'var(--gradient-main)',
  },
  {
    icon: <SiLinkedin />,
    label: 'LinkedIn',
    handle: 'Ilija Tavchioski',
    desc: 'Professional background, experience, and networking.',
    href: '#',
    gradient: 'linear-gradient(135deg, #0077b5 0%, #00a0dc 100%)',
  },
  {
    icon: <SiGooglescholar />,
    label: 'Google Scholar',
    handle: 'Ilija Tavchioski',
    desc: 'Academic publications, citations, and research profile.',
    href: '#',
    gradient: 'linear-gradient(135deg, #4285f4 0%, #34a853 100%)',
  },
  {
    icon: <SiResearchgate />,
    label: 'ResearchGate',
    handle: 'Ilija Tavchioski',
    desc: 'Research projects, preprints, and academic collaborations.',
    href: '#',
    gradient: 'linear-gradient(135deg, #00d2b6 0%, #00a89d 100%)',
  },
  {
    icon: <SiMedium />,
    label: 'Medium',
    handle: '@theteleton',
    desc: 'Articles, tutorials, and technical writing.',
    href: '#',
    gradient: 'linear-gradient(135deg, #333 0%, #555 100%)',
  },
  {
    icon: <SiCodeforces />,
    label: 'Codeforces',
    handle: 'theteleton',
    desc: 'Competitive programming — algorithms, contests, solutions.',
    href: '#',
    gradient: 'linear-gradient(135deg, #1890ff 0%, #096dd9 100%)',
  },
  {
    icon: <SiX />,
    label: 'X',
    handle: '@theteleton',
    desc: 'Thoughts, updates & quick takes.',
    href: '#',
    gradient: 'linear-gradient(135deg, #000 0%, #333 100%)',
  },
  {
    icon: <span className="sicris-text">Si</span>,
    label: 'SICRIS',
    handle: 'Ilija Tavchioski',
    desc: 'Slovenian Current Research Information System profile.',
    href: '#',
    gradient: 'linear-gradient(135deg, #667eea 0%, #f5576c 100%)',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <main className="contact page-wrap">
      <div className="blob blob-1" style={{ top: '8%', right: '-5%' }} />
      <div className="blob blob-2" style={{ bottom: '15%', left: '-8%' }} />

      <div className="container">
        <section className="page-header">
          <span className="section-badge">Contact</span>
          <h1 className="section-title">Let's connect</h1>
          <p className="section-sub">
            Whether it's a research collaboration, a project idea, or just a hello —
            I'm always happy to hear from you.
          </p>
        </section>

        {/* Profiles grid */}
        <section className="profiles-section">
          <span className="section-badge">Find me on</span>
          <div className="profiles-grid">
            {PROFILES.map(({ icon, label, handle, desc, href, gradient }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card profile-card"
              >
                <div className="profile-icon-wrap" style={{ background: gradient }}>
                  {icon}
                </div>
                <div className="profile-info">
                  <span className="profile-label">{label}</span>
                  <span className="profile-handle">{handle}</span>
                  <p className="profile-desc">{desc}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Contact form */}
        <section className="form-section">
          <span className="section-badge">Send a message</span>
          <h2 className="section-title" style={{ fontSize: '2rem' }}>
            Or drop me an email
          </h2>
          <div className="glass-card form-card">
            {sent ? (
              <div className="form-success">
                <span>✅</span>
                <h3>Message received!</h3>
                <p>Thanks for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="name">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="What's on your mind?"
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-actions">
                  <button type="submit" className="btn btn-primary">
                    <HiMail /> Send Message
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
