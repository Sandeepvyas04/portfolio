# Design Guidelines: Sandeep Vyas Portfolio Website

## Design Approach
**Reference-Based Design** drawing inspiration from modern developer portfolios (Linear's minimalism, Stripe's professionalism) combined with youthful energy appropriate for an emerging developer. Focus on clean typography, generous spacing, and subtle sophistication.

## Core Design Elements

### Typography System
- **Primary Font**: Inter or DM Sans (Google Fonts) - modern, highly legible
- **Accent Font**: Space Grotesk for headings - adds character without sacrificing professionalism
- **Hierarchy**:
  - Hero Name: text-6xl to text-8xl, font-bold, tracking-tight
  - Section Headings: text-4xl to text-5xl, font-bold
  - Subheadings: text-2xl, font-semibold
  - Body Text: text-base to text-lg, leading-relaxed
  - Metadata/Labels: text-sm, uppercase tracking-wide

### Layout System
**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistency
- Section padding: py-20 to py-32 (desktop), py-12 to py-16 (mobile)
- Component spacing: gap-8 to gap-12 for grids
- Container max-width: max-w-7xl with px-6 to px-8
- Content max-width: max-w-4xl for text-heavy sections

## Section-by-Section Design

### 1. Hero Section (Full Viewport Height)
**Layout**: Centered content with full-height treatment (min-h-screen)
**Structure**:
- Large hero image background (abstract tech/coding workspace with slight overlay for text readability)
- Name display with animated gradient text effect placeholder
- Tagline: "Web Developer | Cybersecurity Enthusiast | BCA Student"
- Two-button CTA group: "View Projects" (primary) + "Download Resume" (secondary with blurred background)
- Scroll indicator at bottom (animated bounce)

**Image**: Modern workspace setup or abstract tech visualization - professional but approachable. Subtle gradient overlay to ensure text contrast.

### 2. About Me Section
**Layout**: Two-column grid (lg:grid-cols-2) with image + text
**Structure**:
- Left: Professional headshot placeholder or illustration (rounded-2xl, shadow-xl)
- Right: Heading + 3-4 paragraphs telling story (BCA student → web dev passion → cybersecurity interest → career goals)
- Include stats bar below: "20+ Projects Built" | "5+ Certifications" | "Based in Ludhiana"

### 3. Skills Section
**Layout**: Multi-column approach
**Structure**:
- Section heading with brief intro
- Skills organized in 3 categories using grid-cols-1 md:grid-cols-3:
  1. **Frontend**: HTML, CSS, JavaScript (with proficiency indicators - use pill badges with different sizes)
  2. **Backend**: Python, Flask, C/C++ 
  3. **Tools & Others**: Linux, VS Code, PyCharm, Cisco Packet Tracer, CorelDraw
- Each skill as card with icon (Font Awesome CDN), name, and visual strength indicator (not percentage bars - use dot/circle filled states)

### 4. Projects Showcase
**Layout**: Featured project grid (grid-cols-1 md:grid-cols-2) 
**Structure**:
- Large project cards with:
  - Project thumbnail/screenshot placeholder (aspect-video, object-cover)
  - Title (text-2xl font-bold)
  - Brief description (2-3 lines)
  - Tech stack pills (inline-flex gap-2 with small badges)
  - Two action buttons: "View Demo" + "GitHub" (icon buttons)
  - Hover effect: lift card with shadow increase

**Featured Projects**:
1. **ScamShield** - Hero project with larger card treatment
2. **Recipe Manager** - Standard card
3. **Portfolio Website** (this site) - Meta-reference, standard card

### 5. Certifications Section
**Layout**: Horizontal scrolling card carousel (md: static grid-cols-2 lg:grid-cols-4)
**Structure**:
- Certificate cards with:
  - Icon/badge graphic placeholder
  - Certificate name (font-semibold)
  - Issuing organization
  - Date
- Cards have subtle border, rounded corners (rounded-xl)

### 6. Experience/Education Combined
**Layout**: Timeline design (vertical line with alternating content)
**Structure**:
- BCA Education (2023-Present) with institution details
- Training/Workshop items as timeline nodes
- Each node: Date badge + title + description + location

### 7. Contact Section
**Layout**: Two-column split (lg:grid-cols-2) with full-width background treatment
**Structure**:
- Left Column: Contact info cards
  - Email (with icon, clickable mailto:)
  - Phone (with icon, clickable tel:)
  - Location (with icon)
  - Social links row (GitHub, LinkedIn placeholders) - icon-only buttons
- Right Column: "Let's Connect" message with additional CTA or contact form placeholder

**Background**: Subtle gradient or pattern

## Component Library

### Buttons
- Primary: px-8 py-4, rounded-full, font-semibold, text-base
- Secondary: Similar but with border treatment
- Icon Buttons: p-3, rounded-full, icon-only
- Buttons over images: backdrop-blur-md treatment

### Cards
- Project Cards: rounded-2xl, overflow-hidden, shadow-lg with hover:shadow-2xl
- Skill Cards: rounded-xl, p-6, border treatment
- Certificate Cards: rounded-lg, p-4, compact

### Navigation
- Sticky header (sticky top-0, backdrop-blur-lg)
- Desktop: Horizontal nav with smooth scroll anchors
- Mobile: Hamburger menu (slide-in drawer)
- Logo/Name on left, nav items center/right

### Icons
Use Font Awesome via CDN for all icons (envelope, phone, map-pin, github, linkedin, external-link, etc.)

## Animations
**Minimal, purposeful motion:**
- Fade-in on scroll for sections (intersection observer pattern)
- Card hover lifts (translate-y slight shift)
- Button hover states (scale-105)
- Smooth scroll behavior for anchor navigation
- Hero name typing effect or fade-in-up on load

## Images Required
1. **Hero Background**: Modern tech/coding workspace or abstract gradient visualization (full-width, aspect-video or taller)
2. **About Me Photo**: Professional headshot or illustration placeholder
3. **Project Thumbnails**: 3 project screenshots/mockups (16:9 aspect ratio)

**Hero image is prominently featured** - sets the professional yet approachable tone for the entire portfolio.