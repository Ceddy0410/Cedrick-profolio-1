<?php

use App\Http\Controllers\ContactController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', fn () => Inertia::render('Home'))->name('home');
Route::get('/about', fn () => Inertia::render('About'))->name('about');
Route::get('/projects', fn () => Inertia::render('Projects'))->name('projects.index');

Route::get('/projects/{slug}', function (string $slug) {
    $projects = [
        'penny-qa-desk' => [
            'slug' => 'penny-qa-desk', 'type' => 'Personal product', 'title' => 'Penny QA Desk', 'accent' => 'mint',
            'summary' => 'A focused QA workspace for planning tests, tracking issues, and keeping Penny mobile and web checks visible from start to finish.',
            'contribution' => 'Product concept, Flutter development, task workflow, interface direction, and implementation.', 'tools' => ['Flutter', 'Laravel', 'React', 'QA workflows'], 'status' => 'Built · Tested',
            'heading' => 'Turning active testing into an organized, visible workflow.',
            'body' => ['Penny QA Desk is my personal task-management and quality tracking project. I created it to support the testing work around Penny mobile and web experiences—not as the finance product itself.', 'Flutter was part of the implementation stack. The workspace gives testing activity a clear home: planned checks, active tasks, bug details, and completion history can be followed without losing context across releases.'],
            'highlights' => ['Implemented parts of the product experience with Flutter.', 'Defined the information structure around real QA work.', 'Designed task and status flows for mobile and web testing.', 'Focused the interface on clarity, traceability, and everyday use.'],
        ],
        'neko-food-house' => [
            'slug' => 'neko-food-house', 'type' => 'Team capstone', 'title' => 'Neko Food House', 'accent' => 'cream',
            'summary' => 'A computerized POS and inventory system supporting sales, stock visibility, automated reports, alerts, and light/dark login themes.',
            'contribution' => 'C# development, UI/UX design, and debugging as part of the capstone team.', 'tools' => ['C#', 'UI/UX', 'Inventory'], 'status' => 'Designed · Developed',
            'heading' => 'A practical business system built as a collaborative capstone.',
            'body' => ['Neko Food House was developed as a team project for a food business. The application brought sales and inventory tasks into one desktop experience, with automated reporting and stock visibility for day-to-day operations.', 'My contribution covered software development, interface design, and debugging. The surviving demonstration shows the branded login experience and its light and dark theme control.'],
            'highlights' => ['Contributed C# application functionality.', 'Designed and reviewed user interface behavior.', 'Debugged workflows as part of the development team.', 'Supported reporting, inventory alerts, and theme behavior.'],
        ],
        'godesq-client-work' => [
            'slug' => 'godesq-client-work', 'type' => 'Agency client work', 'title' => 'Web, QA & SEO work', 'accent' => 'forest',
            'summary' => 'Website development, quality reviews, technical support, and search improvements for client businesses through GodesQ.',
            'contribution' => 'WordPress and Elementor development, responsive QA, troubleshooting, and Semrush-supported SEO.', 'tools' => ['WordPress', 'Elementor', 'Semrush'], 'status' => 'Built · Improved',
            'heading' => 'Supporting client websites from implementation through improvement.',
            'body' => ['At GodesQ, my work crosses website development, QA, SEO, and client support. I build and maintain WordPress and Elementor experiences, troubleshoot frontend issues, test responsive behavior, and support technical and on-page SEO.', 'Bemunchie and Freedom Family Investments are GodesQ clients I handle; this work is presented as agency contribution, not separate employment or sole ownership.'],
            'highlights' => ['Develop and maintain WordPress and Elementor pages.', 'Test functionality, responsiveness, usability, and performance.', 'Use Semrush for audits, keyword checks, and issue diagnosis.', 'Support client work for Bemunchie and Freedom Family Investments.'],
            'liveUrl' => 'https://freedomfamilyinvestments.com/',
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
