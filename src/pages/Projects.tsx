import React from 'react';
import { SiGithub } from 'react-icons/si';
import { HiExternalLink } from 'react-icons/hi';
import './Projects.css';

interface Project {
  title: string;
  desc: string;
  tags: string[];
  gradient: string;
  github?: string;
  live?: string;
}

const PROJECTS: Project[] = [
  {
    title: 'Research Project Alpha',
    desc: 'Applied machine learning techniques to tackle a novel classification problem, achieving state-of-the-art results on benchmark datasets.',
    tags: ['Python', 'PyTorch', 'Research', 'ML'],
    gradient: 'var(--gradient-main)',
    github: 'https://github.com/theteleton',
  },
  {
    title: 'Competitive Programming Solutions',
    desc: 'A curated collection of algorithmic solutions to competitive programming problems across various platforms and difficulty levels.',
    tags: ['C++', 'Algorithms', 'Data Structures'],
    gradient: 'var(--gradient-warm)',
    github: 'https://github.com/theteleton',
  },
  {
    title: 'Full-Stack Web App',
    desc: 'End-to-end web application built with React, TypeScript, and a Node.js backend, featuring real-time updates and a responsive UI.',
    tags: ['React', 'TypeScript', 'Node.js', 'REST API'],
    gradient: 'var(--gradient-pink)',
    github: 'https://github.com/theteleton',
    live: '#',
  },
  {
    title: 'Data Analysis Pipeline',
    desc: 'Automated ETL pipeline for processing large datasets, with statistical analysis and interactive visualisation dashboards.',
    tags: ['Python', 'Pandas', 'Matplotlib', 'SQL'],
    gradient: 'var(--gradient-teal)',
    github: 'https://github.com/theteleton',
  },
  {
    title: 'Open-Source Contribution',
    desc: 'Meaningful contributions to open-source projects — bug fixes, new features, and documentation improvements.',
    tags: ['Open Source', 'Git', 'Collaboration'],
    gradient: 'var(--gradient-green)',
    github: 'https://github.com/theteleton',
  },
  {
    title: 'Academic Tool',
    desc: 'A utility built to assist with a specific research workflow, reducing manual effort and improving reproducibility.',
    tags: ['Python', 'Research', 'Automation'],
    gradient: 'var(--gradient-orange)',
    github: 'https://github.com/theteleton',
  },
];

export default function Projects() {
  return (
    <main className="projects page-wrap">
      <div className="blob blob-1" style={{ top: '5%', left: '-10%' }} />
      <div className="blob blob-3" style={{ bottom: '10%', right: '-5%' }} />

      <div className="container">
        <section className="page-header">
          <span className="section-badge">Work</span>
          <h1 className="section-title">Projects &amp; Research</h1>
          <p className="section-sub">
            A selection of things I've built, researched, or contributed to.
            Update links and descriptions with your real projects.
          </p>
        </section>

        <div className="projects-grid">
          {PROJECTS.map(({ title, desc, tags, gradient, github, live }) => (
            <article key={title} className="glass-card project-card">
              <div className="project-banner" style={{ background: gradient }} />
              <div className="project-body">
                <h2 className="project-title">{title}</h2>
                <p className="project-desc">{desc}</p>
                <div className="project-tags">
                  {tags.map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  {github && (
                    <a href={github} target="_blank" rel="noopener noreferrer" className="proj-link">
                      <SiGithub /> Code
                    </a>
                  )}
                  {live && (
                    <a href={live} target="_blank" rel="noopener noreferrer" className="proj-link proj-link-live">
                      <HiExternalLink /> Live
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
