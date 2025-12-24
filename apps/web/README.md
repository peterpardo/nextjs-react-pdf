# React PDF Testing Playground

This repository is a **sandbox project** for experimenting with **PDF viewing and generation in React/Next.js**, as well as **email delivery with PDF attachments**.

## Purpose

The goal of this repository is to understand:

- How different PDF-related libraries behave in a modern React/Next.js setup
- The trade-offs between rendering PDFs in-app versus using native browser capabilities
- Common setup issues, limitations, and best practices

This is **not** a production-ready implementation—it is strictly for learning and experimentation.

## Packages Used

- `react-pdf` – for rendering existing PDF files in the browser
- `@react-pdf/renderer` – for generating PDFs using React components
- `pdfjs-dist` – required dependency for `react-pdf`
- `resend` – for sending emails (including PDFs as attachments)

## What Is Being Tested

### PDF Viewing

- Rendering PDFs using `react-pdf`
- Viewing PDFs via:

  - `<iframe>`
  - `<a>` tag (native browser viewer)

### PDF Generation

- Creating PDFs using `@react-pdf/renderer`
- Testing images, layout, and styling limitations

### Email Delivery

- Sending generated PDFs via email using **Resend**

## Notes

- This project intentionally keeps things minimal to isolate behavior and errors.
- Some approaches may be intentionally redundant to compare outcomes.
- Expect rough edges—this repo documents **what works, what breaks, and why**.
