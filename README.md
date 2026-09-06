# Madeira Guest Desk

Madeira Guest Desk is a human-approved, multilingual guest-response service for independent accommodation providers in Madeira. It helps operators turn repetitive questions into consistent draft replies without allowing an automated system to contact guests on its own.

## Live service

- Website: https://madeiraguestdesk.pt
- Contact: hello@madeiraguestdesk.pt
- Founding pilot: €49 once for seven days
- Continuing service after the pilot: €99/month, only with explicit confirmation

## Problem and positioning

Independent accommodation teams repeatedly answer questions about check-in, access, parking, breakfast, transfers, cancellations and house rules. Large hospitality platforms can add cost and setup overhead. Madeira Guest Desk starts with a small, isolated workflow and local support.

The service is positioned as assisted operations, not autonomous guest communication:

1. Approved property information is organised into a response base.
2. Fictional or anonymised guest questions are used during the initial test.
3. Multilingual response drafts are prepared.
4. A person reviews, edits and decides whether anything should be sent.
5. Sensitive cases—payments, disputes, refunds and exceptions—are escalated to the operator.

## Minimum sellable offer

The seven-day founding pilot includes:

- a 30-minute diagnostic session;
- up to 25 approved questions and answers;
- Portuguese, English, Spanish and French;
- an isolated test mailbox and team walkthrough;
- a results review on day seven.

The test does not require access to the customer’s live inbox. Any later connection to real guest data requires a separate scope, access review and written privacy terms.

## Website

The public landing page is a server-rendered TypeScript application built with Vinext and React. It contains:

- product positioning and target customer;
- a three-step service workflow;
- pilot scope and pricing;
- safety and human-control principles;
- frequently asked questions;
- email and PayPal calls to action.

### Local development

Requirements: a current Node.js LTS release and npm.

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```

## Project structure

```text
app/
  globals.css      visual system and responsive layout
  layout.tsx       metadata and global document structure
  page.tsx         landing-page content and calls to action
public/            public assets
docs/              operating, validation, privacy and safety documentation
```

## Quality and ethical constraints

- No deceptive marketing, fake testimonials or fabricated performance claims.
- No automatic outbound guest messages in the founding pilot.
- No real inbox access during the isolated test.
- No guest data in public repositories, analytics or demonstrations.
- No price or availability confirmation without a current authorised source.
- No more than one follow-up after unanswered prospect outreach.
- Every opt-out is honoured.

## Current validation status

The offer, website, business email and payment link are live. A first batch of ten personalised business-development emails was sent on 6 September 2026. Sending outreach is not treated as validation: replies, qualified calls, paid pilots, delivery time and measured customer outcomes must be recorded before making demand or performance claims.

## Documentation

- [Operations](docs/OPERATIONS.md)
- [Privacy and safety](docs/PRIVACY-AND-SAFETY.md)
- [Validation framework](docs/VALIDATION.md)

## Owner

Created and operated by Juan Raul Pujol through Madeira Guest Desk in Funchal, Madeira.
