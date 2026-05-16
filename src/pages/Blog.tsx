import React from 'react';
import { HiExternalLink } from 'react-icons/hi';
import { SiMedium } from 'react-icons/si';
import './Blog.css';

interface Post {
  date: string;
  title: string;
  excerpt: string;
  tags: string[];
  gradient: string;
  href: string;
}

const POSTS: Post[] = [
  {
    date: 'May 2025',
    title: 'Understanding Gradient Descent: An Intuitive Walkthrough',
    excerpt:
      'A step-by-step visual explanation of gradient descent and its variants, from batch SGD to Adam optimisers — written for practitioners.',
    tags: ['Machine Learning', 'Math', 'Tutorial'],
    gradient: 'var(--gradient-main)',
    href: '#',
  },
  {
    date: 'April 2025',
    title: 'Why Competitive Programming Made Me a Better Researcher',
    excerpt:
      'The skills you pick up grinding Codeforces problems transfer surprisingly well to research: decomposing complexity, finding edge cases, writing reproducible solutions.',
    tags: ['Competitive Programming', 'Research', 'Career'],
    gradient: 'var(--gradient-warm)',
    href: '#',
  },
  {
    date: 'March 2025',
    title: 'Building a Personal Portfolio with React & TypeScript',
    excerpt:
      'A practical guide to building and deploying a personal site on GitHub Pages using React, TypeScript, and react-router — the exact stack powering this site.',
    tags: ['React', 'TypeScript', 'Web Dev'],
    gradient: 'var(--gradient-pink)',
    href: '#',
  },
  {
    date: 'February 2025',
    title: 'Reading Research Papers Efficiently: My Workflow',
    excerpt:
      'How I go from abstract to deep understanding in a single sitting — skimming strategies, annotation tools, and how to connect new papers to your existing knowledge graph.',
    tags: ['Research', 'Productivity', 'Academia'],
    gradient: 'var(--gradient-teal)',
    href: '#',
  },
];

export default function Blog() {
  return (
    <main className="blog page-wrap">
      <div className="blob blob-2" style={{ top: '15%', right: '-8%' }} />
      <div className="blob blob-3" style={{ bottom: '10%', left: '-5%' }} />

      <div className="container">
        <section className="page-header">
          <span className="section-badge">Writing</span>
          <h1 className="section-title">Blog &amp; Articles</h1>
          <p className="section-sub">
            Thoughts on research, software engineering, and the overlap between them.
            Full articles are published on Medium.
          </p>
          <a
            href="https://medium.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline medium-btn"
          >
            <SiMedium /> View on Medium
          </a>
        </section>

        <div className="posts-list">
          {POSTS.map(({ date, title, excerpt, tags, gradient, href }) => (
            <a
              key={title}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card post-card"
            >
              <div className="post-accent" style={{ background: gradient }} />
              <div className="post-content">
                <div className="post-meta">
                  <span className="post-date">{date}</span>
                  <div className="post-tags">
                    {tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
                <h2 className="post-title">{title}</h2>
                <p className="post-excerpt">{excerpt}</p>
                <span className="post-read">
                  Read article <HiExternalLink />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
