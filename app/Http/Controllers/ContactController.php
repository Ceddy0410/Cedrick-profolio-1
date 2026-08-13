<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreContactMessageRequest;
use App\Models\ContactMessage;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use Inertia\Response;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Throwable;

class ContactController extends Controller
{
    public function create(): Response
    {
        return Inertia::render('Contact', [
            'success' => session('success'),
        ]);
    }

    public function store(StoreContactMessageRequest $request): RedirectResponse
    {
        $data = $request->safe()->except(['consent', 'website']);

        $contactMessage = ContactMessage::create([
            ...$data,
            'consent_at' => now(),
            'status' => 'new',
            'mail_status' => 'pending',
        ]);

        try {
            Mail::raw(
                "New portfolio inquiry from {$contactMessage->name} ({$contactMessage->email})\n\n".
                "Service: {$contactMessage->service}\n".
                'Company: '.($contactMessage->company ?: 'Not provided')."\n\n".
                $contactMessage->message,
                fn ($mail) => $mail
                    ->to(config('portfolio.contact_email'))
                    ->replyTo($contactMessage->email, $contactMessage->name)
                    ->subject("Portfolio inquiry: {$contactMessage->service}"),
            );

            $contactMessage->update(['mail_status' => 'sent']);
        } catch (Throwable $exception) {
            report($exception);
            $contactMessage->update(['mail_status' => 'failed']);
        }

        return to_route('contact.create')->with('success', 'Thanks—your inquiry has been received. I’ll get back to you by email.');
    }
}
