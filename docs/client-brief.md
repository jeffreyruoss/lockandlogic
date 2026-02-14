# Lock & Logic — Client Brief

> Internal developer reference

## Business Info

| Field | Details |
|-------|---------|
| Business name | Lock & Logic |
| Tagline | Unlock the Mystery |
| Type | Escape room |
| Locations | 1 |
| Rooms | 1-3 (exact count TBD) |
| Address | Pottstown, PA — off Route 100 near the Pottstown Diner |
| Phone | TBD |
| Email | TBD |
| Business hours | TBD |
| Social media | TBD |
| Domain | LockandLogic.com |
| Existing website | None (new business) |
| Existing branding | TBD (logo, colors, fonts) |

---

## Budget & Tech Stack Decision

- Budget is flexible — client wanted to see options from low to high
- 4 options were presented (see `tech-stack-options.md`)
- **Option 2 selected:** Astro + Decap CMS + Resova ($44-55/mo ongoing)
- Fixed project price: $4,500-$5,500 (see `project-estimate.md`)

---

## Confirmed Feature Requirements

These features have been discussed and are planned for launch:

| Feature | How it's handled | Status |
|---------|-----------------|--------|
| Online booking | Resova widget embed | Planned |
| Payment processing | Resova (Stripe/Square integration) | Planned |
| Gift cards / vouchers | Resova widget embed | Planned |
| Digital waivers | Resova widget embed | Planned |
| Group / corporate booking | Dedicated page + contact form | Planned |
| Leaderboard | CMS-managed, displayed on site | Planned |
| CMS for owner edits | Decap CMS (rooms, leaderboard, pages) | Planned |
| Contact form | Formspree | Planned |
| Mailing list signup | Mailchimp (or equivalent) embed — client sets up account | Planned |
| SEO / structured data | LocalBusiness JSON-LD, sitemap, Open Graph | Planned |
| Mobile responsive | Mobile-first design | Planned |

---

## Planned Site Pages

| Page | Purpose |
|------|---------|
| Home | Hero, featured rooms, testimonials, about teaser |
| About | Business story, team, what to expect |
| Rooms (overview) | Grid of all rooms |
| Room (detail) | Individual room — description, photos, difficulty, capacity, duration, price, book CTA |
| Book Now | Resova booking calendar embed |
| Gift Cards | Resova gift voucher embed |
| Waivers | Resova digital waiver embed |
| Leaderboard | Top escape times, filterable by room |
| Corporate / Groups | Group booking info, inquiry form |
| Contact | Map, address, hours, phone, email, contact form |

---

## Design Direction

- Developer has full creative control
- Dark, atmospheric theme fitting escape room aesthetic
- Responsive, mobile-first
- High performance (Astro ships zero JS by default)
- CSS-only animations to maintain performance
- Resova widgets will be CSS-customized to match site theme

---

## What's Still Unknown

- [ ] Exact number of rooms at launch
- [ ] Room names, themes, descriptions, difficulty levels, capacity, duration, pricing
- [ ] Full street address (we know Pottstown, PA near Route 100)
- [ ] Phone, email, hours
- [ ] Branding assets (logo, color palette, fonts) — or does this need to be created?
- [ ] Photos (rooms, team, venue) — does the client have these or need photography?
- [ ] Copy/content — does the client have written descriptions or need copywriting?
- [ ] Leaderboard format — manual entry by staff? What data points?
- [ ] Corporate/group pricing tiers or packages
- [ ] Gift card denominations (fixed amounts, custom amounts, or both?)
- [ ] Waiver legal text
- [x] Domain name — LockandLogic.com (registered)
- [x] Timeline — targeting May 2026 opening
- [ ] Future feature wishlist
