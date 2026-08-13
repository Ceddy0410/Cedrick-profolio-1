<?php

/**
 * Vercel's function filesystem is read-only except for /tmp. Point Laravel's
 * runtime-generated files there before bootstrapping the normal web entry.
 */
$storagePath = '/tmp/storage';

foreach ([
    $storagePath,
    $storagePath.'/app',
    $storagePath.'/framework',
    $storagePath.'/framework/cache',
    $storagePath.'/framework/cache/data',
    $storagePath.'/framework/sessions',
    $storagePath.'/framework/views',
    $storagePath.'/logs',
] as $directory) {
    if (! is_dir($directory)) {
        mkdir($directory, 0755, true);
    }
}

$_ENV['LARAVEL_STORAGE_PATH'] = $storagePath;
$_SERVER['LARAVEL_STORAGE_PATH'] = $storagePath;
putenv("LARAVEL_STORAGE_PATH={$storagePath}");

require __DIR__.'/../public/index.php';
