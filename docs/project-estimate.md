# Lock & Logic — Website Project Estimate

> Client-facing document

## Project Overview

Custom-designed, high-performance website for Lock & Logic escape rooms with online booking, digital waivers, gift cards, leaderboard, mailing list signup, and a content management system (CMS) so you can update your own content.

**Tech stack:** Astro (static site) + Tailwind CSS + Decap CMS + Resova booking platform
**Hosting:** Vercel (free tier) — $0/mo
**Ongoing platform cost:** Resova Lite at $44/mo (booking, waivers, gift cards included)

---

## What's Included

### Phase 1: Project Setup & Architecture
- Project initialization and deployment pipeline
- Auto-deploys on every update — changes go live within minutes
- Project folder structure and base configuration

### Phase 2: Design System & Site Layout
- Visual design direction — dark, atmospheric escape room aesthetic
- Color palette, typography, and spacing system
- Responsive navigation with mobile menu and prominent "Book Now" button
- Site-wide header and footer (contact info, social links, business hours)
- Base page template with SEO meta tags and structured data

### Phase 3: Homepage
- Hero section with compelling imagery and call-to-action
- Featured rooms preview section
- Testimonials / social proof section
- Newsletter signup
- Brief about teaser with link to full About page
- Responsive design across all screen sizes

### Phase 4: Room Pages
- Rooms overview page with grid of room cards
- Individual room detail pages (generated from CMS content)
  - Description, difficulty rating, group size, duration, pricing
  - Photo gallery
  - "Book This Room" call-to-action
- Dynamic page generation — adding a new room in the CMS automatically creates its page

### Phase 5: Booking Integration (Resova)
- Reusable booking widget component
- **Book Now page** — full Resova booking calendar embed
- **Gift Cards page** — Resova gift voucher purchase embed
- **Waivers page** — Resova digital waiver signing embed
- CSS customization of Resova widgets to match site design

### Phase 6: Leaderboard
- Leaderboard page displaying top escape times
- Filter by room
- CMS-managed entries (you add new records, they appear automatically)

### Phase 7: About Page
- Business story, team introduction, "what to expect" guide
- CMS-editable content blocks

### Phase 8: Corporate/Group Booking & Contact Pages
- Corporate inquiry page with group booking information and pricing tiers
- Contact page with embedded map, address, business hours, phone, email
- Contact forms on both pages
- Form validation and success/error states

### Phase 9: Mailing List Integration
- Newsletter signup form component (styled to match site design)
- Integration with your Mailchimp (or equivalent) account
- Placement in footer and/or homepage (per your preference)

### Phase 10: CMS Setup (Decap CMS)
- Admin panel at `yoursite.com/admin`
- Content schemas for:
  - Rooms (name, description, difficulty, capacity, duration, price, images)
  - Leaderboard entries (team name, room, escape time, date)
  - Editable page content (About, Corporate)
- Authentication setup so only you can access the admin panel
- Training walkthrough on how to use the CMS

### Phase 11: SEO & Performance
- LocalBusiness structured data (helps Google show your business info in search)
- Open Graph tags (controls how links look when shared on social media)
- Auto-generated sitemap
- Performance optimization (target: 90+ Lighthouse scores)

### Phase 12: Testing & Launch
- Cross-device testing (mobile, tablet, desktop)
- Cross-browser testing (Chrome, Safari, Firefox, Edge)
- Accessibility review (contrast, keyboard navigation, screen readers)
- Booking widget end-to-end test
- Domain configuration and SSL
- Final deployment and go-live

---

## Fixed Project Price

**$4,500 - $5,500**

Final price depends on number of rooms and scope of content provided.

**Includes 2 rounds of design revisions.** After the homepage and design system are presented, you get two rounds of feedback and adjustments. Additional revision rounds beyond that are available at $100/hr.

---

## What You're Responsible For

These items are outside the scope of this estimate but required before or during the build:

- **Resova account** — Sign up for Resova Lite ($44/mo), configure your rooms, time slots, pricing, and waiver text
- **Domain purchase** — Register your domain (~$12/yr via Cloudflare or Namecheap)
- **Content** — Room descriptions, about text, team photos, room photos, business hours, contact info
- **Mailchimp account** (or equivalent) — Free tier, for newsletter subscriber management and email sends
- **Google Business Profile** — Create/claim your listing (free)

---

## Ongoing Costs After Launch

| Item | Cost | Notes |
|------|------|-------|
| Resova Lite | $44/mo | Booking, waivers, gift cards — no per-booking fees |
| Mailchimp (or equivalent) | $0/mo | Free up to 500 subscribers; paid plans start ~$13/mo |
| Vercel hosting | $0/mo | Free tier covers this site's traffic |
| Domain renewal | ~$12/yr | Annual renewal |
| Credit card processing | 2.9% + $0.30/transaction | Standard rate, unavoidable on any platform |
| **Total** | **~$45/mo** | Plus standard card processing on bookings |

---

## What's NOT Included

- Logo design or branding (bring your own, or we can discuss separately)
- Professional photography
- Copywriting (I'll need your content — or we can discuss adding this)
- Resova account configuration (room setup, pricing, waiver text)
- Ongoing maintenance or content updates after launch (the CMS lets you handle most of this yourself)
- Google Ads or paid marketing setup
- Email campaign design and copywriting (the signup form is included; creating and sending newsletters is on you)

---

## Timeline

Estimated **3-5 weeks** from kickoff to launch.

This estimate assumes content, photos, and feedback are provided within **5 business days** of each request. Extended delays on content or feedback may push the timeline — we'll communicate proactively if that happens.

---

## Payment Structure

| Milestone | Amount | When |
|-----------|--------|------|
| Deposit | 40% | Project kickoff |
| Design approval | 30% | After homepage + design system approved |
| Launch | 30% | Final delivery and go-live |

---

## Ownership & Deliverables

Upon final payment, you receive **full ownership** of:
- All website source code
- All design assets created for the project
- CMS configuration and content schemas
- Vercel deployment configuration

The site is yours — you're not locked into any ongoing developer relationship. The CMS lets you manage day-to-day content independently.
