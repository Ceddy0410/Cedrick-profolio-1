<?php

namespace Tests\Feature;

use App\Models\ContactMessage;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ContactMessageTest extends TestCase
{
    use RefreshDatabase;

    public function test_a_valid_hiring_inquiry_is_stored(): void
    {
        $response = $this->post('/contact', [
            'name' => 'Example Client',
            'email' => 'client@example.com',
            'company' => 'Example Company',
            'service' => 'Website development',
            'message' => 'I would like to discuss a responsive business website project.',
            'consent' => true,
            'website' => '',
        ]);

        $response->assertRedirect('/contact');
        $response->assertSessionHas('success');
        $this->assertDatabaseHas('contact_messages', [
            'email' => 'client@example.com',
            'status' => 'new',
            'mail_status' => 'sent',
        ]);
    }

    public function test_contact_form_rejects_invalid_or_suspicious_submissions(): void
    {
        $response = $this->from('/contact')->post('/contact', [
            'name' => '',
            'email' => 'invalid-email',
            'service' => 'Unknown service',
            'message' => 'Too short',
            'consent' => false,
            'website' => 'spam.example',
        ]);

        $response->assertRedirect('/contact');
        $response->assertSessionHasErrors(['name', 'email', 'service', 'message', 'consent', 'website']);
        $this->assertSame(0, ContactMessage::count());
    }
}
