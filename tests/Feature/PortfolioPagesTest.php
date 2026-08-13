<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class PortfolioPagesTest extends TestCase
{
    use RefreshDatabase;

    public function test_public_portfolio_pages_are_available(): void
    {
        foreach (['/', '/about', '/projects', '/contact'] as $path) {
            $this->get($path)->assertOk();
        }
    }

    public function test_known_project_pages_are_available_and_unknown_projects_return_404(): void
    {
        foreach (['penny-qa-desk', 'neko-food-house', 'godesq-client-work'] as $slug) {
            $this->get("/projects/{$slug}")->assertOk();
        }

        $this->get('/projects/not-a-project')->assertNotFound();
    }

    public function test_resume_can_be_downloaded(): void
    {
        $this->get('/resume')
            ->assertOk()
            ->assertDownload('Cedrick-Opina-Resume.pdf');
    }

    public function test_sitemap_lists_the_public_portfolio_pages(): void
    {
        $this->get('/sitemap.xml')
            ->assertOk()
            ->assertHeader('Content-Type', 'application/xml')
            ->assertSee('/projects/penny-qa-desk')
            ->assertSee('/contact');
    }
}
