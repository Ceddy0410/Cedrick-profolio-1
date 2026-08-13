<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ContactMessage extends Model
{
    protected $fillable = [
        'name', 'email', 'company', 'service', 'message', 'consent_at', 'status', 'mail_status',
    ];

    protected function casts(): array
    {
        return ['consent_at' => 'datetime'];
    }
}
