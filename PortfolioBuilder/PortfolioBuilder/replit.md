# Sandeep Vyas Portfolio Website

## Overview
A modern, professional portfolio website for Sandeep Vyas - a Web Developer and Cybersecurity Enthusiast based in Ludhiana, Punjab. Built with React, TypeScript, and Tailwind CSS with a focus on clean design, smooth animations, and responsive layout.

## Current State
**Status:** MVP Complete - Portfolio with all sections functional

## Features
- **Hero Section**: Full-screen hero with animated gradient text, professional tagline, and call-to-action buttons
- **About Me**: Professional introduction with avatar placeholder and stats cards
- **Skills**: Three-category skill display (Frontend, Backend, Tools) with proficiency indicators
- **Projects**: Project showcase featuring ScamShield, Recipe Manager, and Portfolio site
- **Certifications**: Grid display of Python, Cybersecurity, Hacking Workshop, and Blockchain certifications
- **Education**: Timeline layout showing BCA education and secondary education
- **Contact**: Contact form with email/phone/location info and social links
- **Dark/Light Mode**: Full theme toggle support with localStorage persistence

## Project Architecture

### Frontend (`client/src/`)
- **pages/home.tsx**: Main portfolio page composing all sections
- **components/**: Reusable UI components
  - `theme-provider.tsx`: Dark/light mode context provider
  - `navigation.tsx`: Sticky header with mobile menu
  - `hero-section.tsx`: Full-screen hero with animations
  - `about-section.tsx`: About me with stats
  - `skills-section.tsx`: Technical skills display
  - `projects-section.tsx`: Project showcase cards
  - `certifications-section.tsx`: Certification grid
  - `education-section.tsx`: Timeline education display
  - `contact-section.tsx`: Contact form and info
  - `footer.tsx`: Page footer
- **components/ui/**: Shadcn UI components

### Backend (`server/`)
- **routes.ts**: API endpoints for contact form
- **storage.ts**: In-memory storage for contact messages

### Shared (`shared/`)
- **schema.ts**: TypeScript types and Zod schemas for data models

## API Endpoints
- `POST /api/contact`: Submit contact form message
- `GET /api/contact`: Retrieve all contact messages

## Design System
- **Typography**: Inter/DM Sans for body, Space Grotesk for headings
- **Colors**: Blue primary with purple accents (defined in CSS variables)
- **Animations**: Fade-in-up, bounce, gradient shift (Tailwind keyframes)
- **Icons**: Font Awesome via CDN, Lucide React for inline icons

## Tech Stack
- React 18 + TypeScript
- Tailwind CSS with custom animations
- Shadcn UI components
- TanStack Query for data fetching
- Wouter for routing
- Express.js backend
- Zod for validation

## Running the Project
The application runs on port 5000 with the `npm run dev` command which starts both the Express backend and Vite dev server.
