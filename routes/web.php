<?php

use App\Http\Controllers\ContactController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', fn () => Inertia::render('Home'))->name('home');
Route::get('/about', fn () => Inertia::render('About'))->name('about');
Route::get('/projects', fn () => Inertia::render('Projects'))->name('projects.index');

Route::get('/projects/{slug}', function (string $slug) {
    $projects = [
        'finance-tracker' => [
            'slug' => 'finance-tracker', 'type' => 'Personal web app', 'title' => 'Finance Tracker', 'accent' => 'mint',
            'summary' => 'A real-time shared and personal finance hub built with React and Supabase for tracking expenses, budgets, and collaborative financial goals.',
            'contribution' => 'Full-stack application development, Supabase database & auth integration, real-time sync, and UI/UX design.', 'tools' => ['React', 'Supabase', 'Vite', 'Tailwind CSS'], 'status' => 'Built · Live · 2026',
            'heading' => 'Real-time collaborative and personal financial management.',
            'body' => ['Finance Tracker is a full-stack real-time web application designed for both individuals and couples to manage finances, track income and expenses, set category budgets, and monitor savings goals together.', 'Built with React, Vite, and Tailwind CSS, backed by Supabase for real-time relational data and secure authentication, the platform provides instant ledger updates, multi-user shared views, and intuitive financial clarity.'],
            'highlights' => ['Engineered full-stack frontend with React, Vite, and modern responsive UI.', 'Integrated Supabase backend for secure authentication and real-time database subscriptions.', 'Designed shared and personal financial tracking flows with real-time balance calculations.', 'Deployed on Cloudflare Pages for fast worldwide edge delivery.'],
            'liveUrl' => 'https://ced-finance.pages.dev/',
        ],
        'penny-qa-desk' => [
            'slug' => 'penny-qa-desk', 'type' => 'Personal project', 'title' => 'QA Desk', 'accent' => 'mint',
            'summary' => 'Built a QA task-management and tracking workspace for Penny mobile and web testing, organizing checks, bug reports, and completion history.',
            'contribution' => 'Product concept, Flutter development, task workflow, interface direction, and implementation.', 'tools' => ['Flutter', 'Laravel', 'React', 'QA workflows'], 'status' => 'Built · Tested · 2026',
            'heading' => 'Turning active testing into an organized, visible workflow.',
            'body' => ['QA Desk is my personal task-management and quality tracking project. I created it to support the testing work around Penny mobile and web experiences—organizing checks, bug reports, and completion history.', 'Flutter was part of the implementation stack. The workspace gives testing activity a clear home: planned checks, active tasks, bug details, and completion history can be followed without losing context across releases.'],
            'highlights' => ['Implemented parts of the product experience with Flutter.', 'Defined the information structure around real QA work.', 'Designed task and status flows for mobile and web testing.', 'Focused the interface on clarity, traceability, and everyday use.'],
        ],
        'neko-food-house' => [
            'slug' => 'neko-food-house', 'type' => 'Team capstone', 'title' => 'Neko Food House POS & Inventory System', 'accent' => 'cream',
            'summary' => 'Contributed to C# development, UI/UX design, and debugging for a computerized sales and inventory system with automated reporting, alerts, and light/dark login themes.',
            'contribution' => 'C# development, UI/UX design, and debugging as part of the capstone team.', 'tools' => ['C#', 'UI/UX', 'Inventory'], 'status' => 'Designed · Developed · 2023–2024',
            'heading' => 'A practical business system built as a collaborative capstone.',
            'body' => ['Neko Food House POS & Inventory System was developed as a capstone team project for a food business. The application brought sales and inventory tasks into one desktop experience, with automated reporting and stock visibility for day-to-day operations.', 'My contribution covered C# development, user interface design, and debugging, supporting sales and inventory workflows, automated reports, inventory alerts, and theme behavior.'],
            'highlights' => ['Contributed C# application functionality and database interaction.', 'Designed and reviewed user interface behavior and themes.', 'Debugged workflows as part of the capstone development team.', 'Supported automated reporting, inventory alerts, and light/dark themes.'],
        ],
        'godesq-client-work' => [
            'slug' => 'godesq-client-work', 'type' => 'Agency client work', 'title' => 'Web, QA & SEO work', 'accent' => 'forest',
            'summary' => 'WordPress and Elementor development, Shopify updates, functional/responsive/performance QA, and Semrush-supported SEO across agency clients.',
            'contribution' => 'WordPress and Elementor development, responsive QA, troubleshooting, and Semrush-supported SEO.', 'tools' => ['WordPress', 'Elementor', 'Semrush'], 'status' => 'Active client work · 2025–Present',
            'heading' => 'Supporting client websites from implementation through improvement.',
            'body' => ['I joined GodesQ part-time on June 1, 2025 and transitioned to full-time on July 30, 2025. My work crosses website development, QA, SEO, and client support. I develop and maintain WordPress and Elementor experiences, contribute to Shopify updates, perform functional, responsive, UI/UX, and performance QA, and support technical and on-page SEO with Semrush.', 'I handle Bemunchie and Freedom Family Investments as GodesQ client work, alongside projects including Maria and I, Go To SHOUT, and ProAge Beauty.'],
            'highlights' => ['Develop and maintain WordPress and Elementor pages, with Shopify updates.', 'Test functionality, responsiveness, usability, and performance across releases.', 'Use Semrush for audits, keyword checks, issue diagnosis, and content recommendations.', 'Handle client engagements for Bemunchie, Freedom Family Investments, Maria and I, Go To SHOUT, and ProAge Beauty.'],
        ],
    ];

    abort_unless(isset($projects[$slug]), 404);

    return Inertia::render('ProjectShow', ['project' => $projects[$slug]]);
})->name('projects.show');

Route::get('/contact', [ContactController::class, 'create'])->name('contact.create');
Route::post('/contact', [ContactController::class, 'store'])->middleware('throttle:5,1')->name('contact.store');

Route::get('/resume', fn () => response()->download(public_path('files/cedrick-opina-resume.pdf'), 'Cedrick-Opina-Resume.pdf'))
    ->name('resume');

Route::get('/sitemap.xml', function () {
    $urls = [
        route('home'),
        route('about'),
        route('projects.index'),
        route('projects.show', 'penny-qa-desk'),
        route('projects.show', 'neko-food-house'),
        route('projects.show', 'godesq-client-work'),
        route('contact.create'),
    ];

    return response()
        ->view('sitemap', compact('urls'))
        ->header('Content-Type', 'application/xml');
})->name('sitemap');
