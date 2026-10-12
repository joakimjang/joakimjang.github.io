:root {
  --bg: #f4f1ea;
  --paper: #f8f6f1;
  --ink: #111111;
  --muted: #5e5a56;
  --line: rgba(17, 17, 17, 0.16);
  --card: #ffffff;
  --accent: #0d1f2d;
  --accent-soft: #dfeaf1;
  --gold: #d9b26f;
  --shadow: 0 18px 45px rgba(17, 17, 17, 0.08);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: var(--bg);
  color: var(--ink);
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.5;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
select,
textarea {
  font: inherit;
}

img {
  max-width: 100%;
  display: block;
}

.topbar {
  width: min(1200px, calc(100% - 48px));
  margin: 0 auto;
  padding: 22px 0 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  border-bottom: 1px solid var(--line);
}

.brand-group {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-mark {
  width: 42px;
  height: 42px;
  border: 1px solid #0d0d0d;
  display: grid;
  place-items: center;
  font-weight: 700;
  font-size: 1.05rem;
  background: #f0efe8;
}

.brand-name,
.brand-sub {
  display: block;
}

.brand-name {
  font-size: 0.97rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 700;
}

.brand-sub {
  font-size: 0.75rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 700;
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 24px;
  font-size: 0.95rem;
  color: var(--muted);
}

.main-nav a {
  position: relative;
}

.main-nav a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 100%;
  height: 1px;
  background: var(--ink);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.2s ease;
}

.main-nav a:hover::after {
  transform: scaleX(1);
}

.primary-btn,
.primary-link,
.action-btn {
  background: var(--ink);
  color: #fff;
  border: 1px solid var(--ink);
  padding: 0.82rem 1.35rem;
  cursor: pointer;
  transition: 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.primary-btn:hover,
.primary-link:hover,
.action-btn:hover {
  background: var(--accent);
}

.menu-btn {
  display: none;
  border: 1px solid var(--ink);
  background: transparent;
  width: 44px;
  height: 44px;
  font-size: 1.4rem;
  cursor: pointer;
}

.section-shell {
  width: min(1200px, calc(100% - 48px));
  margin: 0 auto;
}

.hero {
  padding: 64px 0 40px;
}

.eyebrow {
  margin: 0 0 18px;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-size: 0.72rem;
  color: var(--muted);
}

.hero-copy {
  max-width: 840px;
}

.hero-copy h1 {
  margin: 0 0 20px;
  font-size: clamp(2.6rem, 5vw, 5rem);
  line-height: 0.97;
  letter-spacing: -0.05em;
}

.lead {
  max-width: 760px;
  margin: 0;
  font-size: 1.12rem;
  color: var(--muted);
}

.cta-row {
  margin-top: 28px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.primary-link,
.secondary-link {
  font-weight: 600;
}

.secondary-link {
  border: 1px solid rgba(17, 17, 17, 0.2);
  background: transparent;
  padding: 0.82rem 1.35rem;
}

.process {
  padding: 18px 0 12px;
}

.step-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.step-card {
  min-height: 160px;
  background: rgba(255, 255, 255, 0.3);
  border: 1px solid var(--line);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px 18px;
}

.step-number {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 18px;
}

.step-title {
  font-size: 1.4rem;
  font-weight: 700;
}

.two-way,
.modular,
.how-it-works,
.approach,
.contact-form-section {
  padding-top: 90px;
}

.section-header {
  max-width: 860px;
  margin-bottom: 30px;
}

.section-header.centered {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.section-header h2 {
  margin: 0 0 16px;
  font-size: clamp(2rem, 3vw, 3.2rem);
  letter-spacing: -0.05em;
  line-height: 1.05;
}

.section-header p {
  margin: 0;
  color: var(--muted);
  font-size: 1.05rem;
}

.business-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 28px;
}

.business-card {
  background: var(--card);
  border: 1px solid var(--line);
  padding: 28px 26px 22px;
  box-shadow: var(--shadow);
}

.business-card.strong {
  background: #eef2f7;
}

.arrow {
  font-size: 2.2rem;
  margin-bottom: 12px;
}

.business-card h3 {
  margin: 0 0 8px;
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--muted);
}

.business-card h4 {
  margin: 0 0 14px;
  font-size: 2rem;
  letter-spacing: -0.04em;
}

.business-card p {
  margin: 0 0 18px;
  color: var(--muted);
}

.business-card ul {
  margin: 0 0 24px;
  padding-left: 20px;
  color: var(--ink);
  line-height: 1.8;
}

.text-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
}

.modular-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 22px;
}

.service-card {
  background: rgba(255, 255, 255, 0.55);
  border: 1px solid var(--line);
  padding: 22px 18px 20px;
}

.service-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border: 1px solid var(--ink);
  margin-bottom: 20px;
  font-size: 1.8rem;
}

.service-number {
  color: var(--muted);
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.service-card h3 {
  margin: 0 0 12px;
  font-size: 1.7rem;
  letter-spacing: -0.04em;
}

.service-card p {
  margin: 0 0 18px;
  color: var(--muted);
}

.service-card small {
  display: block;
  color: var(--ink);
  font-weight: 700;
}

.module-note {
  text-align: center;
  color: var(--muted);
  margin: 28px auto 0;
  max-width: 900px;
}

.steps-vertical {
  display: grid;
  gap: 18px;
}

.workflow-step {
  border-top: 1px solid var(--line);
  padding-top: 18px;
}

.step-wrap {
  display: flex;
  align-items: flex-start;
  gap: 22px;
}

.workflow-count {
  display: inline-flex;
  width: 52px;
  height: 52px;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  border: 1px solid var(--ink);
  background: rgba(255, 255, 255, 0.4);
}

.workflow-step h3 {
  margin: 0 0 6px;
  font-size: 1.8rem;
  letter-spacing: -0.04em;
}

.workflow-step p {
  margin: 0;
  color: var(--muted);
}

.consultation-wrap {
  margin-top: 32px;
  text-align: center;
}

.action-btn {
  font-size: 1rem;
  padding: 0.95rem 1.7rem;
}

.approach-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.approach-card {
  background: #f6f5f0;
  border: 1px solid var(--line);
  padding: 24px 20px;
}

.approach-tag {
  display: inline-block;
  font-weight: 700;
  color: var(--muted);
  margin-bottom: 18px;
  letter-spacing: 0.12em;
}

.approach-card h3 {
  margin: 0 0 10px;
  font-size: 2rem;
  letter-spacing: -0.04em;
}

.approach-card p {
  margin: 0;
  color: var(--muted);
}

.contact-form-section {
  padding-bottom: 90px;
}

.inquiry-form {
  background: rgba(255, 255, 255, 0.45);
  border: 1px solid var(--line);
  padding: 26px;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}

.form-grid-full {
  margin-top: 20px;
  grid-template-columns: 1fr;
}

.inquiry-form label {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-weight: 600;
}

.inquiry-form input,
.inquiry-form select,
.inquiry-form textarea {
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid var(--line);
  padding: 0.9rem 1rem;
  color: var(--ink);
}

.inquiry-form textarea {
  min-height: 120px;
  resize: vertical;
}

.services-row {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  margin-top: 24px;
  margin-bottom: 12px;
}

.checkbox-group {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  flex-direction: row !important;
  font-weight: 500 !important;
}

.checkbox-group input {
  width: 18px;
  height: 18px;
}

.form-footer {
  margin-top: 26px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  flex-wrap: wrap;
}

.form-footer p {
  margin: 0;
  max-width: 650px;
  color: var(--muted);
}

.form-summary {
  margin-top: 24px;
  border-top: 1px solid var(--line);
  padding-top: 18px;
  min-height: 46px;
  color: var(--ink);
  white-space: pre-line;
}

.site-footer {
  width: min(1200px, calc(100% - 48px));
  margin: 0 auto;
  padding: 30px 0 54px;
  border-top: 1px solid var(--line);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
  flex-wrap: wrap;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 18px;
  flex-wrap: wrap;
}

.footer-brand-group {
  align-items: center;
}

.footer-brand p,
.footer-meta p {
  margin: 0;
  color: var(--muted);
}

.footer-cta a {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  border: 1px solid var(--ink);
  padding: 0.82rem 1.2rem;
}

.footer-meta {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.footer-line {
  font-weight: 700;
  color: var(--ink) !important;
}

.copyright {
  margin-top: 8px !important;
}

@media (max-width: 980px) {
  .main-nav {
    display: none;
  }

  .menu-btn {
    display: inline-block;
  }

  .main-nav.mobile-open {
    position: absolute;
    top: 78px;
    left: 24px;
    right: 24px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: rgba(255, 255, 255, 0.95);
    border: 1px solid var(--line);
    padding: 18px 14px;
    box-shadow: var(--shadow);
  }

  .step-grid,
  .business-grid,
  .modular-grid,
  .approach-grid,
  .form-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 700px) {
  .topbar {
    width: min(100% - 28px, 1200px);
  }

  .section-shell,
  .site-footer {
    width: min(100% - 28px, 1200px);
  }

  .step-grid,
  .business-grid,
  .modular-grid,
  .approach-grid,
  .form-grid {
    grid-template-columns: 1fr;
  }

  .hero {
    padding-top: 42px;
  }

  .hero-copy h1 {
    line-height: 1;
  }

  .cta-row,
  .form-footer,
  .site-footer {
    flex-direction: column;
    align-items: flex-start;
  }

  .primary-btn,
  .primary-link,
  .action-btn,
  .secondary-link,
  .footer-cta a {
    width: 100%;
  }
}
