# PDF Experiments Monorepo

This repository is a **technical playground and reference implementation** for experimenting with PDF-related libraries and email delivery using a **monorepo setup**.

The primary goal is **understanding**, not shipping features.

Specifically, this project explores:

- How different PDF libraries work internally
- How they are implemented in a modern React / Next.js environment
- When each library is appropriate (and when it is not)
- How to structure these concerns cleanly inside a monorepo
- How to send generated or existing PDFs via email using Resend

---

## Objectives

This project is intentionally experimental. It exists to answer the following questions:

- When should I use **react-pdf** vs **react-pdf/renderer**?
- Why does **pdfjs-dist** behave differently from react-pdf?
- What are the common setup and bundling issues with PDF workers?
- How does SSR affect PDF rendering in Next.js?
- Where does email delivery fit into the architecture?
- How do these concerns scale inside a monorepo?

---

## How to run the project

1. Run `pnpm install` in the root folder
2. To run the apps: 
    - Run `pnpm dev:web` to run the Nextjs app
    - Run `pnpm dev:api` to run the express server

--- 

## Libraries Being Tested

### 1. `react-pdf`

**Purpose**
- View existing PDF files inside React applications

**Key Characteristics**
- Built on top of `pdfjs-dist`
- Requires a PDF worker
- Best suited for **client-side rendering**
- Not ideal for SSR without careful configuration

**Use When**
- You need to display an existing PDF
- You need pagination, zooming, or page navigation
- You do not need to generate PDFs dynamically

---

### 2. `react-pdf/renderer`

**Purpose**
- Generate PDFs using React components

**Key Characteristics**
- Does **not** render PDFs in the browser DOM
- Produces PDF documents programmatically
- Can be used for downloads, email attachments, or server-side generation

**Use When**
- You need to generate PDFs dynamically (invoices, reports, certificates)
- You want a React-based abstraction for PDF creation
- PDFs will be downloaded or emailed rather than viewed inline

---

### 3. `pdfjs-dist`

**Purpose**
- Low-level PDF rendering engine maintained by Mozilla

**Key Characteristics**
- No React abstractions
- Requires manual worker configuration
- Maximum control, maximum responsibility

**Use When**
- You want full control over PDF rendering
- You are building a custom viewer
- You want to avoid abstractions like react-pdf

---

### 4. `resend`

**Purpose**
- Email delivery service used for sending PDFs

**Key Characteristics**
- Simple API
- Works well with server-side frameworks (Express, Node)
- Suitable for transactional emails with attachments

**Use When**
- Sending generated PDFs via email
- Handling transactional or system-generated emails

---

## Monorepo Structure

This project uses a **monorepo** to isolate concerns and keep responsibilities clear.

```text
nextjs-react-pdf/
├─ apps/
│  ├─ web/                 # Next.js (react-pdf experiments)
│  │  ├─ app/
│  │  ├─ public/
│  │  ├─ next.config.ts
│  │  ├─ package.json
│  │  └─ tsconfig.json
│  │
│  └─ api/                 # Express + Resend
│     ├─ src/
│     │  ├─ server.ts
│     │  ├─ routes/
│     │  └─ services/
│     ├─ package.json
│     └─ tsconfig.json
│
├─ packages/
│  ├─ pdf/                 # Shared PDF logic (Not yet implemented)
│  │  ├─ src/
│  │  │  ├─ createPdf.ts
│  │  │  └─ templates/
│  │  └─ package.json
│  │
│  └─ email/               # Shared Resend logic (Not yet implemented)
│     ├─ src/
│     │  ├─ sendEmail.ts
│     │  └─ templates/
│     └─ package.json
│
├─ pnpm-workspace.yaml
├─ package.json            # root scripts only
├─ tsconfig.base.json
└─ README.md
```

---

## Workspaces Explained

This monorepo uses **pnpm workspaces** to manage dependencies efficiently.

### Why Workspaces?

* Single dependency graph
* Faster installs
* No duplicate `node_modules`
* Clear separation of responsibilities

### Workspace Definitions

```yaml
packages:
  - apps/*
  - packages/*
```

Each workspace is:

* Independently runnable
* Logically isolated
* Still able to share dependencies and internal packages

---

## Apps

### `apps/web`

* Next.js application
* Used to test:

  * PDF viewing via `react-pdf`
  * Client-only rendering constraints
  * Public asset handling
  * SSR vs CSR behavior

This app is where most **rendering limitations and framework-level issues** are explored.

---

### `apps/api`

* Express backend application
* Used to test:

  * Email delivery via Resend
  * Server-side PDF generation
  * Backend workflows unsuitable for Next.js route handlers

This app focuses on **backend execution behavior and infrastructure-level concerns**.

---

## Packages (Optional / Future)

### `packages/shared`

Intended for:

* Shared PDF utilities
* Common types
* Reusable helpers

Not required for experimentation, but useful once patterns stabilize.

---

## Key Learnings This Repo Is Designed to Capture

* Why PDF rendering is fundamentally a **client-side concern**
* Why PDF generation fits better on the **server**
* Why workers break in SSR environments
* Why abstractions like react-pdf are convenient but limiting
* How monorepos reduce cognitive load when experimenting

---

## Non-Goals

This repository is **not** intended to:

* Be production-ready
* Serve as a final architecture
* Optimize bundle size
* Abstract away complexity prematurely

It is deliberately explicit and verbose to maximize learning.

---

## Summary

This monorepo is a **reference and learning artifact**.

If you are dealing with:

* PDFs in React
* SSR constraints
* Email delivery
* Monorepo organization

This project exists to help you understand **what breaks, why it breaks, and how to choose the right tool**.

