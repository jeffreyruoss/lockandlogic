# Lock & Logic — Pre-Engagement Checklist

> Internal developer reference

Things to research, prepare, or resolve **before** sending the questionnaire and estimate to the client.

---

## Critical — Do Before Sending

### 1. Write a Service Contract
The estimate is not a legally binding agreement. Need a proper contract covering:
- Scope of work (reference estimate as attachment)
- Payment schedule with late payment terms
- Change order process and hourly rate for out-of-scope work
- IP transfer clause (upon final payment)
- Limitation of liability (cap at contract value)
- Termination clause (kill fee, who keeps what)
- Warranty period (e.g., 30 days of bug fixes post-launch)
- What constitutes "project completion"
- Force majeure / client delay consequences
- Third-party embed disclaimer (Resova accessibility/uptime is outside our control)

**Templates:** PandaDoc, Bonsai, LegalZoom all have web dev contract templates.

**Effort:** 2-4 hours using a template

---

### 2. Verify Resova Pricing
Our estimate quotes Resova Lite at $44/mo. Some sources show it at **$30/mo** (Lite) and **$60/mo** (Pro). Need to verify at [get.resova.com/pricing](https://get.resova.com/pricing/) and update our docs if wrong.

Also check the **Lite plan caps:**
- 100 bookings/month (3 rooms x 3 sessions/day = could exceed this quickly)
- 2 team members
- No in-person card processing (walk-in friction)

**Action:** Verify pricing, update estimate if needed, add a note about when to upgrade to Pro.

**Effort:** 15 minutes

---

### 3. Test Decap CMS Auth on Vercel
Decap CMS traditionally uses Netlify Identity for auth, but we're deploying to Vercel. Need to confirm our auth strategy works:
- **Option A:** GitHub OAuth with a small serverless function on Vercel
- **Option B:** PKCE client-side flow (no server, but limitations)

This directly affects whether the CMS works as promised. Should do a quick proof-of-concept.

**Effort:** 1-3 hours

---

### 4. Set Up Invoicing & Payment Collection
Need infrastructure to collect the 40/30/30 payments:
- Invoicing tool (Wave, Stripe Invoicing, PayPal)
- Payment method (bank transfer, credit card, etc.)
- Business entity consideration (sole proprietor vs LLC)

**Effort:** 30-60 minutes

---

## Recommended — Have Ready for the Scoping Conversation

### 5. Resova Plan Limitations Disclosure
Add a note to the estimate or discuss during scoping:
- Lite caps at 100 bookings/mo — when to upgrade to Pro
- Walk-in payment limitations
- Frame proactively: "Lite is perfect to start; here's when you'd upgrade"

---

### 6. Define Post-Launch Boundaries
Clarify in the contract:
- How many days/weeks of post-launch bug fixes (warranty period)
- What's a "bug" vs a "new feature request"
- Whether you help with initial Resova configuration
- What happens when the client emails 3 months later

---

### 7. Prepare an Onboarding Document
One-pager for after the client says yes:
- What happens next (sign contract, pay deposit, fill out content questionnaire)
- Account setup checklist with deadlines
- Communication preferences and response times
- How feedback/revisions work (what a "round" means)
- Expected turnaround per phase

---

### 8. ADA / Accessibility Awareness
ADA website lawsuits surged 37% in 2025. Consider:
- Whether Resova's widget is accessible (third-party embeds are the weak link)
- Adding an accessibility statement page
- Targeting WCAG 2.1 AA compliance
- Contract clause: accessibility of third-party embeds is outside our control

---

## Nice-to-Have — Before Design Phase

### 9. Competitor Website Screenshots
Audit 3-5 local competitor websites for:
- Design patterns that work in escape room space
- Features they have/don't have
- Mobile experience quality
- Booking flow UX

Useful for design phase and client conversations.

---

### 10. Repo & Hosting Ownership Plan
Since we promise "the site is yours," clarify:
- Who owns the GitHub repo? (Our account → transfer? Or client's account?)
- Vercel project under whose account?
- Documented handoff process for another developer

---

### 11. Formspree Free Tier Limits
Free tier is typically 50 submissions/month. If corporate inquiry + contact form get moderate traffic, could hit this. Verify current limits and have a backup plan.

---

## Summary

| Priority | Action | Effort | When |
|----------|--------|--------|------|
| Critical | Write service contract | 2-4 hrs | Before sending estimate |
| Critical | Verify Resova pricing | 15 min | Before sending estimate |
| Critical | Test Decap CMS auth on Vercel | 1-3 hrs | Before sending estimate |
| Critical | Set up invoicing | 30-60 min | Before sending estimate |
| Recommended | Resova plan limitations note | 15 min | Before scoping call |
| Recommended | Define post-launch terms | In contract | Before scoping call |
| Recommended | Onboarding document | 1-2 hrs | Before client signs |
| Recommended | ADA/accessibility plan | 30 min | Before client signs |
| Nice-to-have | Competitor website audit | 1-2 hrs | Before design phase |
| Nice-to-have | Repo/hosting ownership plan | 30 min | Before project kickoff |
| Nice-to-have | Formspree limits check | 15 min | Before estimate |
