# Vercel deployment

This Laravel and React portfolio uses the community `vercel-php` runtime. During
deployment, the Composer `vercel` script builds the Vite assets and the Blade
layout embeds the generated CSS and JavaScript in the response. Small local font
files are embedded in the CSS too. This avoids relying on generated files that
Vercel's separate static builder cannot access.

## Required Vercel environment variables

Set these in Project Settings > Environment Variables for Production, Preview,
and Development as appropriate. Never commit their real values.

```text
APP_KEY=
APP_URL=https://your-project.vercel.app

DB_CONNECTION=pgsql
DB_HOST=
DB_PORT=5432
DB_DATABASE=
DB_USERNAME=
DB_PASSWORD=
DB_SSLMODE=require

MAIL_MAILER=
MAIL_HOST=
MAIL_PORT=
MAIL_USERNAME=
MAIL_PASSWORD=
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=opinacedrickr@gmail.com
MAIL_FROM_NAME="Cedrick Opina Portfolio"
PORTFOLIO_CONTACT_EMAIL=opinacedrickr@gmail.com
```

The public pages work before a database is connected, but the contact form
requires a hosted database with the migrations applied. Email notifications
also require a transactional mail provider. Laravel's local SQLite database is
not persistent on Vercel.

## Database migration

After adding the hosted database credentials, run the migrations against that
database from a trusted local terminal:

```powershell
php artisan migrate --force
```

Do not run migrations until the production database variables are loaded in the
local terminal and the destination database has been verified.
