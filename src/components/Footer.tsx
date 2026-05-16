import React from 'react';
import { Link } from 'react-router-dom';
import {
  SiGithub, SiLinkedin, SiGooglescholar, SiResearchgate,
  SiMedium, SiCodeforces,
} from 'react-icons/si';
import './Footer.css';

const SOCIAL = [
  { icon: <SiGithub />,        label: 'GitHub',        href: 'https://github.com/theteleton' },
  { icon: <SiLinkedin />,      label: 'LinkedIn',      href: '#' },
  { icon: <SiGooglescholar />, label: 'Scholar',       href: '#' },
  { icon: <SiResearchgate />,  label: 'ResearchGate',  href: '#' },
  { icon: <SiMedium />,        label: 'Medium',        href: '#' },
  { icon: <SiCodeforces />,    label: 'Codeforces',    href: '#' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner container">
        <Link to="/" className="footer-logo">
          <span className="logo-bracket">&lt;</span>IT
          <span className="logo-bracket">/&gt;</span>
        </Link>

        <div className="footer-social">
          {SOCIAL.map(({ icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon"
              aria-label={label}
              title={label}
            >
              {icon}
            </a>
          ))}
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Ilija Tavchioski. Built with React & TypeScript.
        </p>
      </div>
    </footer>
  );
}
