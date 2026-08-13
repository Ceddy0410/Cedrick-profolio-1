<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreContactMessageRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:100'],
            'email' => ['required', 'email:rfc', 'max:190'],
            'company' => ['nullable', 'string', 'max:150'],
            'service' => ['required', 'string', 'in:Website development,Website or mobile QA,Test automation,UI/UX review,SEO and website improvement,Technical support,Something else'],
            'message' => ['required', 'string', 'min:20', 'max:3000'],
            'consent' => ['accepted'],
            'website' => ['nullable', 'max:0'],
        ];
    }
}
