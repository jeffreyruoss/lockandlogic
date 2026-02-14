# Lock & Logic - Tech Stack Options

> Client-facing document

## Context

Lock & Logic is a new escape room business (1 location, 1-3 rooms) that needs a website with online booking, payments, gift cards, digital waivers, group/corporate booking, and a leaderboard.

**Key industry insight:** Nearly every successful escape room uses a **dedicated booking platform** (not generic scheduling tools like Fresha/Calendly/Acuity). These platforms handle booking, payments, waivers, gift cards, and room capacity management as a bundle. Building booking from scratch is not viable at this scale. The real decision is which booking platform + which website approach.

---

## Why a Dedicated Escape Room Booking Platform?

General scheduling tools (Calendly, Acuity, Fresha, etc.) are built for salons and 1-on-1 appointments. Escape rooms have unique requirements that only dedicated platforms handle well:

- **Room capacity management** — multiple groups booking the same time slot for different rooms
- **Game master assignment** — assigning staff to specific sessions
- **Time-slot scheduling with buffer times** — allowing reset time between sessions
- **Built-in waivers and gift vouchers** — designed for group experiences, not individual appointments
- **Group split-pay** — letting multiple people pay for the same booking

---

## The 4 Options

### Option 1: Budget Starter — $0-8/mo fixed

| Component | Choice | Cost |
|-----------|--------|------|
| Website | Astro + Tailwind CSS | Free |
| Hosting | Vercel (free tier) | $0/mo |
| Booking | **Xola** (no subscription) | 1.9% + $0.30/booking |
| Waivers | Included in Xola | $0 |
| Gift cards | Included in Xola | $0 |
| Domain | Cloudflare/Namecheap | ~$12/yr |

**Total fixed:** ~$1/mo + per-booking fees
**Per-booking fee example:** $120 booking = ~$2.58 fee. At 100 bookings/mo = ~$258/mo in Xola fees (on top of standard credit card processing)

**Pros:** Lowest fixed cost, full design control, zero commitment, free 24/7 Xola support
**Cons:** Transaction fees add up fast (crossover vs Option 2 at ~50-80 bookings/mo), owner can't edit content without developer, no CMS
**Best for:** Brand new business testing the waters, minimal bookings initially

---

### Option 2: Smart Mid-Range (RECOMMENDED) — ~$45-55/mo fixed

| Component | Choice | Cost |
|-----------|--------|------|
| Website | Astro + Tailwind CSS | Free |
| CMS | Decap CMS (open source, git-based) | $0 |
| Hosting | Vercel (free tier) | $0/mo |
| Booking | **Resova** Lite (escape-room leader, 1,300+ clients) | $44/mo, no per-booking fees |
| Waivers | Included in Resova | $0 |
| Gift cards | Included in Resova | $0 |
| Domain | Cloudflare/Namecheap | ~$12/yr |
| Contact form | Formspree (free tier) | $0 |
| Mailing list | Mailchimp or equivalent (free tier) | $0 |

**Total fixed:** ~$45/mo + standard credit card processing (2.9% + $0.30 — unavoidable on any platform)

**Pros:**
- No per-booking fees — predictable cost, gets cheaper per-booking as volume grows
- Full creative control (Astro = complete design freedom)
- Owner can update content via CMS admin panel (rooms, leaderboard, photos, blog) without developer
- Resova is purpose-built for escape rooms — game master assignment, room capacity, time slots, waivers, vouchers all native
- $0 hosting cost, excellent performance/SEO (Astro ships zero JS by default)
- Zapier integration for automation (review requests, email sequences)
- Scales to more rooms/locations by upgrading Resova plan

**Cons:** $44/mo regardless of volume (unfavorable if <50 bookings/mo), CMS requires upfront setup time

**Best for:** Most single-location escape rooms with steady bookings

---

### Option 3: Non-Technical Owner — ~$73-75/mo fixed

| Component | Choice | Cost |
|-----------|--------|------|
| Website | **Squarespace** Business | $33/mo |
| Booking | **Bookeo** Standard | $39.95/mo |
| Waivers | Included in Bookeo (online + kiosk + QR code) | $0 |
| Gift cards | Included in Bookeo | $0 |
| Domain | Included 1st year with Squarespace | $0 initially |

**Total fixed:** ~$73/mo

**Pros:** Owner is fully self-sufficient (visual editor for website + Bookeo dashboard for bookings), professional templates, fast to launch, Bookeo has excellent kiosk/QR waiver modes for in-venue use
**Cons:** Less design control (template-based), higher monthly cost, underutilizes developer's design skills, harder to migrate away later, slightly worse performance/SEO vs static site
**Best for:** Client who wants to manage everything solo after launch

---

### Option 4: Premium Full-Control — ~$91-104/mo fixed

| Component | Choice | Cost |
|-----------|--------|------|
| Website | **Next.js** (App Router) + React | $0 |
| CMS | **Sanity** (free tier) | $0 |
| Hosting | Vercel Pro | $20/mo |
| Booking | **Resova** Pro | $65/mo |
| Waivers | Included in Resova | $0 |
| Gift cards | Included in Resova + custom gift card page | $0 |
| Review aggregation | Elfsight (Google Reviews widget) | ~$5/mo |
| Domain | Cloudflare/Namecheap | ~$12/yr |

**Total fixed:** ~$91-104/mo

**Pros:** Maximum design quality (GSAP animations, 3D room previews, cinematic transitions), dynamic features (real-time leaderboard, availability indicators), Sanity is a superior CMS experience, future-proof for multiple locations/mobile app
**Cons:** Highest cost, significantly more dev time to build, more complex to maintain, overkill for 1-3 rooms
**Best for:** Premium brand positioning, growth-focused business with budget to invest

---

## Comparison Matrix

| Factor | Option 1 | Option 2 (REC) | Option 3 | Option 4 |
|--------|----------|-----------------|----------|----------|
| Fixed monthly | $0-8 | $44-55 | $73-75 | $91-104 |
| Per-booking fees | Yes (1.9%+$0.30) | None | None | None |
| Design control | Full | Full | Limited | Full |
| Owner edits content | No | Yes (CMS) | Yes (visual) | Yes (CMS) |
| Performance/SEO | Excellent | Excellent | Good | Very Good |
| Dev time to build | Low-Med | Medium | Low | High |
| Booking platform | Xola | Resova | Bookeo | Resova |
| All features included | Yes | Yes | Yes | Yes + extras |

---

## Booking Platform Comparison

| Platform | Pricing | Waivers | Gift Cards | Group Booking | Escape Room Specific |
|----------|---------|---------|------------|---------------|---------------------|
| **Resova** | $44-65/mo flat | Built-in | Built-in | Yes | Yes (1,300+ clients) |
| **Xola** | 1.9%+$0.30/booking | Built-in | Built-in | Yes + split-pay | Yes |
| **Bookeo** | $39.95/mo flat | Built-in + kiosk + QR | Built-in | Yes | Partially |
| **FareHarbor** | Transaction-based | Limited | Limited | Yes | Partially |
| **Checkfront** | 3% per reservation | Built-in | Built-in | Yes | Partially |

---

## Recommendation

**Option 2 (Astro + Decap CMS + Resova)** is the best value:

1. **No per-booking fees** — cheaper than commission-based platforms once you hit ~50-80 bookings/month
2. **Full creative control** — Astro gives complete design freedom for the atmospheric escape room aesthetic
3. **Owner independence** — CMS means client can update rooms, leaderboard, photos without calling you
4. **Purpose-built booking** — Resova handles all the escape-room-specific complexity
5. **$0 hosting** — entire fixed cost is just Resova's $44/mo

**Migration path:** Start with Option 1 (Xola, no CMS) if ultra-budget-conscious, then migrate to Option 2 when volume justifies it. The Astro site architecture is identical — just swap the booking widget and add CMS.
