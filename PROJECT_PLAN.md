# Cedrick Opina Portfolio - Project Plan

Status: Version 1 foundation implemented; content and visual review pending
Repository: `Ceddy0410/Cedrick-profolio-1`  
Prepared: August 13, 2026

## 1. Purpose

Build a distinctive, professional portfolio that presents Cedrick Opina as a
quality-focused website developer who can also test, improve, and grow digital
products. The site should make it easy for employers and clients to understand
Cedrick's work, review selected projects, download a public-safe resume, and
send a hiring inquiry.

This document is the planning baseline. Implementation begins only after the
content, visual direction, and open questions are approved.

## 2. Professional Positioning

### Primary title

**Website Developer & Quality Assurance Specialist**

### Supporting specialties

SEO - Test Automation - UI/UX Testing - Technical Support

### Core message

**I build, test, and improve digital experiences.**

This positioning is more memorable than listing several unrelated job titles.
It connects Cedrick's three strongest areas:

1. **Build** - websites and business software.
2. **Test** - web and mobile QA, usability checks, and automation.
3. **Grow** - technical SEO, performance review, and ongoing support.

### Suggested short biography

Cedrick Opina is a BSIT graduate and quality-focused website developer who
combines development, testing, and SEO to create digital experiences that work
as well as they look. His experience includes WordPress and Elementor website
development, mobile and web quality assurance, Maestro test automation, UI/UX
testing, technical support, and search optimization. He approaches each project
with a practical mindset: build carefully, test thoroughly, and improve for
real users.

### Suggested hero copy

**Eyebrow:** Website Developer + QA Specialist  
**Headline:** I build digital experiences - then make sure they work.  
**Supporting copy:** I combine website development, quality assurance,
automation, UI/UX testing, and SEO to create reliable experiences for users and
measurable value for businesses.  
**Primary action:** View my work  
**Secondary action:** Let's work together

## 3. Target Audience

- Companies hiring a junior or early-career website developer or QA specialist.
- Agencies needing WordPress, Elementor, QA, SEO, or technical support.
- Small businesses needing a website or help improving an existing website.
- Product teams needing manual QA, usability testing, or test automation.

## 4. Version 1 Scope

### Included

- Responsive public portfolio for desktop, tablet, and mobile.
- Home, About, Project Detail, and Contact pages.
- Dashboard-inspired navigation without requiring visitor accounts.
- Light and dark themes with saved visitor preference.
- Selected work and case studies with clearly stated roles.
- Skills, experience, education, awards, and certifications.
- Service offerings.
- Contact form for hiring and project inquiries.
- Contact submission persistence in MySQL plus an email notification.
- Downloadable public-safe resume.
- Profile image.
- GitHub, LinkedIn, and email links.
- Search engine metadata, social previews, sitemap, and structured data.
- Accessibility, performance, backend, frontend, and browser testing.

### Not included in Version 1

- Blog or content management system.
- Public registration or visitor accounts.
- Admin dashboard.
- Payments or client portal.
- AI chatbot or paid AI API integration.
- Multilingual content.

These can be added later without blocking the first release.

## 5. Information Architecture

### `/` - Home

- Hero and availability status.
- Build / Test / Grow capability summary.
- Selected project cards.
- Services preview.
- Skills and tools snapshot.
- Short experience timeline.
- Final hiring call to action.

### `/about` - About

- Full professional biography.
- Career journey.
- Work experience.
- Education.
- Certifications and awards.
- Detailed tools and technologies.
- Resume download.

Temporary portrait asset: `public/images/cedrick-opina-profile-v1.png`. It uses
the supplied portrait with a cream-to-sage background and can be replaced later
without changing the page structure.

### `/projects/{slug}` - Project case study

- Project overview and business context.
- Cedrick's verified role and contribution.
- Tools and technologies.
- Challenge, approach, and result.
- Screenshots or approved public visuals.
- Live website or repository link when public.
- Clear note when work was completed as part of a team or agency.

### `/contact` - Contact

- Hiring-focused introduction.
- Contact form.
- Service selector.
- Email, GitHub, and LinkedIn links.
- Expected response statement.
- Privacy note explaining how inquiry data is used.

### Supporting endpoints

- `POST /contact` - validate, protect, save, and notify.
- `/resume` - redirect to or download the public-safe resume.
- `/sitemap.xml` and `/robots.txt`.

## 6. Visual Concept: The Quality Workspace

The design will be original rather than based on another person's portfolio.
It will feel like a calm professional workspace where development, QA, and
growth signals come together.

### Signature idea

The home page behaves like a public project dashboard with three connected
signals:

- **Build** - development and implementation.
- **Test** - quality, automation, and usability.
- **Grow** - SEO, performance, and support.

Cards can use small status markers such as `Built`, `Tested`, `Improved`, and
`Live`. These reinforce Cedrick's quality-first story without turning the site
into a generic code-terminal design.

### Layout

- Desktop: compact left navigation rail with a `CO` monogram, current section,
  theme control, and availability indicator.
- Mobile: concise top bar and accessible navigation drawer.
- Main content: an editorial grid with dashboard-like cards, generous spacing,
  strong headings, and restrained motion.
- Project pages: case-study layout rather than simple image galleries.

### Color system

The supplied green palette is the foundation. The palette image itself will
not be published; only the color values will be used.

| Token | Color | Planned use |
|---|---:|---|
| Deepest green | `#051F20` | Dark background and high-contrast text |
| Forest green | `#0B2B26` | Dark surfaces and navigation |
| Pine green | `#163832` | Secondary dark surfaces |
| Growth green | `#235347` | Primary brand color and actions |
| Soft sage | `#8EB69B` | Accents, borders, and charts |
| Pale mint | `#DAF1DE` | Light accents and dark-theme text |
| Warm cream | `#F5F0E6` | Main light-theme background |
| Paper cream | `#FFFDF7` | Elevated light-theme surfaces |

Final combinations must pass WCAG AA contrast checks. Color will never be the
only way to communicate state.

### Theme behavior

- Respect the visitor's operating-system preference on the first visit.
- Provide a visible light/dark toggle.
- Save preference locally.
- Avoid a flash of the incorrect theme while loading.
- Use cream and deep green instead of pure white and pure black.

### Typography

- **Manrope** for UI, body text, and technical details.
- **Fraunces** for selected editorial headings and personal accents.
- Fonts should be self-hosted for privacy and predictable performance.
- Final font choice remains subject to visual prototype review.

### Motion

- Short, subtle transitions for route changes, cards, and status indicators.
- No heavy parallax or animation that interferes with reading.
- Fully support `prefers-reduced-motion`.

## 7. Services

### Website Development

Responsive business and portfolio websites, including WordPress and Elementor
implementation, page building, content updates, and frontend improvements.

### Website and Mobile QA

Functional, responsive, cross-device, and regression testing to find issues
before they reach users.

### Test Automation

Repeatable automation flows using Maestro for supported product workflows and
Playwright for modern browser testing.

### UI/UX and Usability Review

Practical interface reviews focused on navigation, clarity, consistency,
accessibility, and user friction.

### SEO and Website Improvement

Technical and on-page SEO review, keyword and site-health work using Semrush,
performance checks, and recommendations intended to improve discoverability.

### Technical Support and Maintenance

Troubleshooting, content fixes, website updates, and ongoing support for client
sites.

## 8. Experience Content

Only verified and approved claims will be published.

### HeyPenny - Quality Assurance Tester (Part-time)

**November 2025 to present**

- Test the Penny finance mobile application and web platform.
- Perform functional, regression, responsive, UI/UX, and usability testing.
- Create repeatable automation flows with Maestro.
- Document defects with reproducible steps and maintain structured test
  coverage.

### GodesQ Digital Marketing Services

**Website Developer, QA & SEO Specialist - June 2025 to present**

- Started part-time on June 1, 2025.
- Transitioned to full-time employment on July 30, 2025.
- Develop and maintain client websites using WordPress and Elementor, support
  Shopify updates, and troubleshoot frontend issues.
- Perform functional, responsive, UI/UX, and performance QA.
- Support technical and on-page SEO with Semrush, including site audits,
  keyword checks, issue diagnosis, and content recommendations.
- Handle website and support work for Bemunchie as a GodesQ client.
- Perform web development and SEO work for Freedom Family Investments as a
  GodesQ client.

Bemunchie and Freedom Family Investments must be presented as client work
completed through GodesQ, not as separate employment.

### Selected client work through GodesQ

- Maria and I: <https://mariaandi.com/>
- Go To SHOUT: <https://gotoshout.com/>
- Freedom Family Investments: <https://freedomfamilyinvestments.com/>
- ProAge Beauty: <https://proagebeauty.ph/>

The case studies must identify Cedrick's contribution without implying sole
ownership of an agency or team project.

## 9. Education, Awards, and Certifications

### Education

- Bachelor of Science in Information Technology, STI College Fairview,
  2021-2025.
- Senior High School, Our Lady of Fatima University, 2019-2021.

### Featured recognition

- STI Programmer of the Year, 2024.
- Best Thesis, 2024 - Neko Food House computerized sales and inventory system.

### Certifications and coursework from the resume

- System Administration, 2022.
- Java Foundation, 2022.
- SAP Business, 2022.
- SAP Advanced, 2023.
- Foundations of Usability Testing, 2025.
- Mastering Usability Testing: Techniques and Best Practices, 2025.

Certificate issuers and exact certificate titles should be verified before
final publication.

## 10. Skills and Technologies

### Development

- PHP, Laravel, JavaScript, HTML, CSS, React.
- WordPress, Elementor, Shopify.
- C#, Java.

### QA and automation

- Manual web and mobile testing.
- UI/UX and usability testing.
- Regression and responsive testing.
- Maestro and Playwright.
- Jira and structured bug reporting.

### SEO and design

- Semrush and search engine optimization.
- Canva, Figma, and Photoshop.

### Data and local tools

- MySQL, Supabase, XAMPP.
- Notion and SAP Business One.
- AI-assisted workflows, with final work reviewed and validated by Cedrick.

The portfolio should describe AI as a productivity tool, not as a replacement
for Cedrick's professional judgment or skills.

## 11. Initial Project Case Studies

### Penny QA Desk

Cedrick's personal QA task-management and tracking project for Penny mobile and
web testing. It organizes testing tasks, checks, bug reports, and completion
history. Before publication, confirm which screenshots, repository details,
and finance-product information are safe to show.

### Neko Food House POS and Inventory System

Academic capstone project created during 2023-2024. The resume verifies a C#
sales and inventory application with automated daily, weekly, monthly, and
annual reporting, inventory notifications, sound, and dark mode. Cedrick's
roles included software development, UI/UX design, and debugging. Payment
features and the exact UI library should be confirmed before publication.

Available project assets include a short login/theme demonstration video and a
historical team presentation image. A cleaned logo recreation is stored at
`public/images/neko-food-house-logo-recreated-v1.png`. It must be labeled as a
recreated project asset rather than an original surviving production file.

### Maria and I

- Live site: <https://mariaandi.com/>
- Resume-verified work: website development as part of GodesQ.
- Confirm exact pages, WordPress/Shopify responsibilities, and whether client
  approval is needed for screenshots.

### Go To SHOUT

- Live site: <https://gotoshout.com/>
- Resume-verified work: QA and SEO as part of GodesQ.
- Do not describe the full site as solely designed or developed by Cedrick.

### ProAge Beauty

- Live site: <https://proagebeauty.ph/>
- Resume-verified work: QA and SEO as part of GodesQ.
- Confirm specific improvements and approved metrics before stating results.

### Freedom Family Investments

- Live site: <https://freedomfamilyinvestments.com/>
- Cedrick's verified contribution: web development and SEO through GodesQ.
- Confirm which specific pages, changes, results, and client-approved visuals
  can be published.

## 12. Public Contact Information

- GitHub: <https://github.com/Ceddy0410>
- LinkedIn: <https://www.linkedin.com/in/cedrick-opina-53b10a343>
- Email: <mailto:opinacedrickr@gmail.com>
- Phone: `+63 969 180 5714`

The physical home address will not appear on the website or public resume.

## 13. Technical Architecture

### Application stack

- **Backend:** Laravel 13 on PHP 8.3 or newer.
- **Frontend:** React 19 components written in JavaScript and JSX.
- **Application bridge:** Inertia.js 3.
- **Bundler:** Vite.
- **Styling:** Tailwind CSS 4 plus custom CSS design tokens.
- **Database:** MySQL.
- **Server rendering:** Inertia SSR should be evaluated during implementation
  for production SEO; metadata and crawlability must work even if SSR is not
  enabled initially.

### Why MySQL

MySQL is appropriate because the contact form needs reliable submission
storage, it works naturally with Laravel migrations and Eloquent, and it aligns
with Cedrick's existing XAMPP/MySQL experience. Supabase would add another
platform and authentication model that Version 1 does not need.

### Planned data model

`contact_messages`

- `id`
- `name`
- `email`
- `company` - nullable
- `service` - nullable controlled value
- `message`
- `consent_at`
- `status` - `new`, `read`, `replied`, or `archived`
- `mail_status` - delivery state without exposing mail credentials
- `created_at` and `updated_at`

No raw IP address should be stored. If abuse controls need a per-origin key,
use a short-lived salted hash through the cache/rate limiter rather than a
permanent database field.

### Content strategy

Version 1 project and profile content can live in reviewed PHP/JavaScript data
files because Cedrick is the only editor. This keeps the build simple and
version-controlled. MySQL is reserved for contact messages. A CMS can be added
later if frequent editing becomes necessary.

## 14. Contact Form Workflow and Security

1. Visitor submits name, email, optional company, service, message, and consent.
2. React provides helpful client-side feedback.
3. Laravel performs authoritative server-side validation.
4. CSRF protection, a honeypot, and route rate limiting reduce abuse.
5. A valid inquiry is stored in MySQL.
6. Laravel sends an email notification to Cedrick.
7. The visitor sees a generic success response that reveals no system details.

Additional requirements:

- Escape all rendered content.
- Never commit `.env` or email/database credentials.
- Use a transactional email provider in production rather than personal SMTP
  credentials where possible.
- Add a short privacy notice and a retention policy for inquiry data.
- Use an external anti-bot challenge only if spam makes it necessary.

## 15. SEO Plan

- Unique title and description for every page.
- Canonical URLs.
- Open Graph and social sharing images.
- `Person` and `WebSite` structured data using only accurate public facts.
- XML sitemap and `robots.txt`.
- Semantic headings and descriptive link text.
- Meaningful image alternative text.
- Optimized responsive images and lazy loading below the fold.
- Fast font loading and minimal client JavaScript.
- Search Console connection after deployment.
- No invented traffic, ranking, or conversion metrics.

## 16. Accessibility and Quality Requirements

- Target WCAG 2.2 AA.
- Complete keyboard navigation and visible focus states.
- Correct landmarks, headings, labels, and error summaries.
- Accessible theme toggle and mobile navigation.
- Minimum 44-by-44-pixel touch targets where appropriate.
- No information communicated by color alone.
- Reduced-motion support.
- Test at common phone, tablet, laptop, and large desktop widths.
- Verify Chrome, Edge, Firefox, and Safari behavior before release.

## 17. Testing Strategy

### Laravel

- Feature tests for every public route.
- Contact validation, CSRF, rate-limit, persistence, and mail tests.
- Tests that private configuration and sensitive resume data are not exposed.

### React

- Component tests for navigation, theme switching, project cards, and the
  contact form.
- Loading, success, validation, and server-error states.

### Browser testing

- Playwright journeys for navigation, theme persistence, resume download,
  project viewing, and successful/failed contact submission.
- Accessibility scans as part of browser tests.
- Manual usability and visual QA before approval.

### Release quality targets

- No known critical or high-severity defects.
- No horizontal overflow at supported widths.
- No broken links or missing assets.
- Production build, migrations, and automated tests pass.
- Strong Lighthouse results, with exact thresholds finalized after the first
  visual prototype.

## 18. Resume and Image Safety

A new public-safe resume has been created from the updated information. It
includes Cedrick's approved phone number and omits his street address and all
reference persons' private contact details.

- Editable resume: `output/resume/Cedrick_Opina_Resume.docx`
- Review PDF: `output/pdf/Cedrick_Opina_Resume.pdf`
- Website download copy: `public/files/cedrick-opina-resume.pdf`
- Profile asset: `public/images/cedrick-opina-profile-v1.png`

The profile portrait uses a cream-to-sage background and can be replaced later
with a higher-resolution source without changing the page structure.

## 19. Delivery Phases

### Phase 0 - Approval and content confirmation

- Approve this plan.
- Resolve the open questions below.
- Collect additional approved project screenshots.
- Review the prepared profile portrait and public-safe resume.

### Phase 1 - Project foundation

- Scaffold Laravel, PHP, React/JSX, Inertia, Vite, and Tailwind.
- Configure MySQL environment examples and migrations.
- Add code formatting, linting, and CI.

### Phase 2 - Design system and shell

- Implement color tokens, typography, responsive navigation, theme handling,
  shared components, and accessibility foundations.
- Review the visual prototype before building every page.

### Phase 3 - Portfolio content

- Build Home, About, and project case studies.
- Add approved images, verified roles, metadata, and public resume.

### Phase 4 - Contact backend

- Add migration, model, validation, rate limits, mail notification, privacy
  copy, and full test coverage.

### Phase 5 - QA and refinement

- Run automated and manual tests.
- Perform responsive, accessibility, content, SEO, and performance review.
- Fix issues and complete final visual review.

### Phase 6 - Deployment

- Select hosting and domain based on Cedrick's budget.
- Configure production MySQL, email, HTTPS, backups, monitoring, and deployment
  checks.
- Deploy only after final approval.

## 20. Approval Questions

The remaining details should be confirmed before or during Phase 0:

1. Should the repository remain `Cedrick-profolio-1`, or should the spelling be
   corrected to `Cedrick-portfolio-1` before more links are shared?
2. Which pages or features did Cedrick personally build for Maria and I and SM
   Home?
3. Which Penny QA Desk screenshots and repository details can be public?
4. Is the edited cream-and-sage portrait approved for Version 1, or should its
   background/crop be adjusted?
5. Does Cedrick already own a domain, and what is the monthly hosting budget?

## 21. Definition of Done

Version 1 is complete when:

- Approved content is accurate and clearly distinguishes personal work from
  agency/team work.
- The site is responsive, accessible, and polished in light and dark themes.
- Home, About, project details, Contact, and resume download work correctly.
- Contact inquiries are validated, protected, stored, and emailed.
- SEO metadata and social previews are present.
- Automated tests and production builds pass.
- Sensitive resume and credential data are not exposed.
- Cedrick approves the final visual and content review.

## 22. Planning Sources

- Cedrick Opina's supplied resume and project brief.
- Supplied green palette: `#051F20`, `#0B2B26`, `#163832`, `#235347`,
  `#8EB69B`, and `#DAF1DE`.
- Laravel 13 documentation: <https://laravel.com/docs/13.x/starter-kits>
- Laravel frontend documentation: <https://laravel.com/docs/13.x/frontend>
- Laravel installation and MySQL configuration:
  <https://laravel.com/docs/13.x/installation>
- Laravel rate limiting: <https://laravel.com/docs/13.x/rate-limiting>
