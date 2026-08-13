<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="theme-color" content="#f5f0e6" media="(prefers-color-scheme: light)">
        <meta name="theme-color" content="#051f20" media="(prefers-color-scheme: dark)">
        <meta name="description" content="Cedrick Opina builds, tests, and improves reliable websites and digital experiences.">
        <meta name="author" content="Cedrick Opina">
        <meta property="og:type" content="website">
        <meta property="og:title" content="Cedrick Opina | Website Developer & QA Specialist">
        <meta property="og:description" content="Website development, quality assurance, automation, UI/UX testing, and SEO—with a focus on reliable digital experiences.">
        <meta property="og:url" content="{{ url()->current() }}">
        <link rel="canonical" href="{{ url()->current() }}">
        <script type="application/ld+json">
            {!! json_encode([
                '@context' => 'https://schema.org',
                '@type' => 'Person',
                'name' => 'Cedrick Opina',
                'jobTitle' => 'Website Developer & Quality Assurance Specialist',
                'email' => 'mailto:opinacedrickr@gmail.com',
                'url' => config('app.url'),
                'sameAs' => [
                    'https://github.com/Ceddy0410',
                    'https://www.linkedin.com/in/cedrick-opina-53b10a343',
                ],
            ], JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT) !!}
        </script>
        <script>
            (() => {
                const savedTheme = localStorage.getItem('cedrick-theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                document.documentElement.dataset.theme = savedTheme || (prefersDark ? 'dark' : 'light');
            })();
        </script>
        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/app.jsx'])
        @inertiaHead
    </head>
    <body>
        @inertia
    </body>
</html>
