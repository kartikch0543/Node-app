import React from "https://esm.sh/react@18.3.1";
import { createRoot } from "https://esm.sh/react-dom@18.3.1/client";
import htm from "https://esm.sh/htm@3.1.1";

const html = htm.bind(React.createElement);

const stats = [
  { value: "99.9%", label: "Reliable uptime focus" },
  { value: "Fast", label: "Lightweight page load" },
  { value: "Clean", label: "Submission-ready layout" },
];

const highlights = [
  {
    title: "Modern React UI",
    text: "Component-driven structure with a crisp presentation and smooth content flow.",
  },
  {
    title: "Small Project Friendly",
    text: "Simple enough to understand quickly, polished enough to leave a strong impression.",
  },
  {
    title: "Deployment Safe",
    text: "Served directly from Express without touching CI/CD or workflow configuration.",
  },
];

const steps = [
  "Clear intro section with strong visual hierarchy",
  "Feature cards for instant project understanding",
  "Submission-ready structure with a compact CTA footer",
];

function Badge({ children }) {
  return html`<span className="badge">${children}</span>`;
}

function SectionTitle({ eyebrow, title, body }) {
  return html`
    <div className="section-heading">
      <p>${eyebrow}</p>
      <h2>${title}</h2>
      <span>${body}</span>
    </div>
  `;
}

function App() {
  return html`
    <main className="page-shell">
      <section className="hero">
        <div className="hero-copy">
          <${Badge}>React + Express Showcase<//>
          <h1>Small project, sharper presentation.</h1>
          <p>
            This interface turns the starter app into a neat, modern showcase with
            a better first impression for review and submission.
          </p>
          <div className="hero-actions">
            <a href="#highlights" className="primary-btn">Explore UI</a>
            <a href="/health" className="ghost-btn">Health Check</a>
          </div>
        </div>

        <div className="hero-panel">
          <div className="glass-card spotlight">
            <span>Project Snapshot</span>
            <h3>Ready for deployment review</h3>
            <p>
              A lightweight frontend refresh with stronger layout, typography,
              spacing, and overall visual polish.
            </p>
          </div>

          <div className="stats-grid">
            ${stats.map(
              (item) => html`
                <article className="glass-card stat-card" key=${item.label}>
                  <strong>${item.value}</strong>
                  <span>${item.label}</span>
                </article>
              `,
            )}
          </div>
        </div>
      </section>

      <section className="content-section" id="highlights">
        <${SectionTitle}
          eyebrow="Why this works"
          title="A cleaner UI without changing your delivery pipeline"
          body="The update stays focused on appearance and usability, keeping the project structure easy to follow."
        />
        <div className="card-grid">
          ${highlights.map(
            (item) => html`
              <article className="feature-card" key=${item.title}>
                <h3>${item.title}</h3>
                <p>${item.text}</p>
              </article>
            `,
          )}
        </div>
      </section>

      <section className="content-section split-layout">
        <div className="roadmap-card">
          <${SectionTitle}
            eyebrow="Submission flow"
            title="Built to be easy to demo"
            body="Each section is short, readable, and visually separated so reviewers can grasp the project quickly."
          />
          <div className="steps-list">
            ${steps.map(
              (step, index) => html`
                <div className="step-row" key=${step}>
                  <span>${String(index + 1).padStart(2, "0")}</span>
                  <p>${step}</p>
                </div>
              `,
            )}
          </div>
        </div>

        <aside className="note-card">
          <p className="mini-label">Quick Note</p>
          <h3>Focused scope, better finish.</h3>
          <p>
            The goal here is not to overbuild. It is to make the existing project
            feel intentional, stable, and pleasant to review.
          </p>
        </aside>
      </section>
    </main>
  `;
}

createRoot(document.getElementById("root")).render(html`<${App} />`);
