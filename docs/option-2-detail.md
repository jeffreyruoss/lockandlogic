# Lock & Logic - Option 2: Astro + Decap CMS + Resova

> Internal developer reference

## Tech Stack

| Component | Choice | Cost | Role |
|-----------|--------|------|------|
| Website framework | Astro + Tailwind CSS | Free | Static site with full design control |
| CMS | Decap CMS (open source, git-based) | $0 | Owner can edit rooms, leaderboard, content without developer |
| Hosting | Vercel (free tier) | $0/mo | Fast global CDN, auto-deploys on git push |
| Booking platform | Resova Lite | $40/mo (annual) or $50/mo (monthly) | Booking, gift cards, room management. Waivers require Premium ($108/mo annual). |
| Contact form | Formspree (free tier) | $0 | Corporate inquiry + contact forms |
| Mailing list | Mailchimp or equivalent (free tier) | $0 | Newsletter signup — client sets up account, we integrate the form |
| Domain | Cloudflare/Namecheap | ~$12/yr | Custom domain |

**Total fixed:** ~$41/mo (annual) or ~$51/mo (monthly) + standard credit card processing (2.9% + $0.30)

---

## How Resova Integrates with the Astro Site

Resova uses a **JavaScript widget embed** — not an iframe, not an API. A small JS snippet from the Resova dashboard renders the booking UI directly into a `<div>` on your page.

### Embed pattern

```html
<div id="resova-wrapper"></div>
<script>
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://your-account.resova.com/...";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'resova-jssdk'));
</script>
```

### Separate modules, separate pages

Each Resova module can be embedded independently:

| Module | Page on our site | What it does |
|--------|-----------------|--------------|
| Booking calendar | `/book` | Select room, date, time, pay |
| Gift vouchers | `/gift-cards` | Purchase gift cards |
| Waivers | `/waivers` | Sign digital waivers |
| Customer accounts | (optional) | Returning customer login |

### CSS customization

The Resova widget is **fully customizable with CSS** at two levels:

1. **Built-in dashboard settings** (no code needed):
   - Brand/link colors
   - Background color
   - Button fill + text colors
   - Header background + link colors
   - Border colors
   - Logo selection (main or light variant)
   - Transparent header toggle for hero images

2. **Custom CSS** (Settings > Booking Site Settings > Advanced Customization):
   - Full CSS access to internal classes (`.header__menu-link`, `.button--primary`, etc.)
   - Match the widget exactly to the site's dark/atmospheric theme
   - Resova recommends a developer handle this (which we are)

---

## Site Architecture

```
src/
  layouts/
    BaseLayout.astro           # HTML head, nav, footer, structured data
  pages/
    index.astro                # Landing/Home
    about.astro                # About the business
    rooms/
      index.astro              # All rooms overview
      [slug].astro             # Individual room detail (dynamic)
    book.astro                 # Resova booking widget embed
    gift-cards.astro           # Resova gift voucher widget embed
    waivers.astro              # Resova waiver widget embed
    leaderboard.astro          # Leaderboard page
    corporate.astro            # Group/corporate inquiry + contact form
    contact.astro              # Location, hours, map, contact form
  components/
    Header.astro               # Responsive nav + "Book Now" CTA
    Footer.astro               # Contact info, social links, hours
    Hero.astro                 # Landing hero section
    RoomCard.astro             # Room preview card
    LeaderboardTable.astro     # Leaderboard component
    ContactForm.astro          # Formspree-powered form
    NewsletterSignup.astro     # Mailing list subscribe form (Mailchimp/etc.)
    ResovaEmbed.astro          # Reusable Resova widget wrapper
  content/
    rooms/                     # Markdown files per room (CMS-managed)
    leaderboard/               # Leaderboard entries (CMS-managed)
  styles/
    global.css                 # Tailwind base + custom styles
public/
  admin/
    index.html                 # Decap CMS admin panel
    config.yml                 # CMS content schemas
  images/                      # Static assets
```

---

## Decap CMS — What the Owner Can Edit

The owner logs in at `yoursite.com/admin` and can edit:

| Content type | Fields | Where it appears |
|-------------|--------|-----------------|
| Rooms | Name, description, difficulty, capacity, duration, price, images, featured flag | Rooms page + individual room pages |
| Leaderboard | Team name, room, escape time, date, photo | Leaderboard page |
| Pages | Editable text blocks for About, Corporate pages | Respective pages |

Decap CMS is git-based — edits create commits to the repo, which triggers Vercel to auto-rebuild and deploy. No database needed.

---

## Implementation Sequence

1. Initialize Astro project with Tailwind CSS
2. Build layout (BaseLayout, Header, Footer) with responsive nav
3. Build all pages (Home, About, Rooms, Book, Gift Cards, Waivers, Leaderboard, Corporate, Contact)
4. Create ResovaEmbed component (placeholder — actual widget code comes from Resova dashboard after account setup)
5. Set up Decap CMS with content schemas for rooms, leaderboard, pages
6. Build contact form with Formspree
7. Build newsletter signup form (integrates with client's Mailchimp or equivalent)
8. Add structured data (LocalBusiness JSON-LD) and SEO meta tags
9. Style everything — dark atmospheric theme, mobile-first, accessible
10. Configure Vercel deployment
11. End-to-end testing
