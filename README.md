# Cedrick Opina Portfolio

A responsive portfolio for Cedrick Opina, positioning him as a website
developer and quality assurance specialist with supporting SEO experience.

## Stack

- Laravel 13 and PHP 8.3+
- React 19 with JavaScript and JSX
- Inertia.js 3
- Vite and Tailwind CSS 4
- MySQL in production; SQLite is supported for local tests

## Local setup

1. Copy `.env.example` to `.env` and configure the database.
2. Run `composer install`.
3. Run `php artisan key:generate` and `php artisan migrate`.
4. Run `npm install`.
5. Start the application with `composer dev` or run Laravel and Vite
   separately.

Use `npm run build` for the production frontend bundle and `php artisan test`
for the backend feature suite.

## Public routes

- `/` — Home
- `/about` — Biography, experience, education, and skills
- `/projects` — Selected work
- `/projects/{slug}` — Project case study
- `/contact` — Protected hiring inquiry form
- `/resume` — Public-safe résumé download

The contact form stores submissions in `contact_messages` and sends a
notification through Laravel's configured mailer. Production email credentials
must be supplied through environment variables before deployment.
