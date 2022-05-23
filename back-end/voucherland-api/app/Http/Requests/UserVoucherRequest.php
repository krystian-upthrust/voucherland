<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserVoucherRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(): array
    {
        return [
            config('utils.USER_VOUCHER.USER_ID') => ['required', 'numeric'],
            config('utils.USER_VOUCHER.VOUCHER_ID') => ['required', 'numeric']
        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array
     */
    public function messages(): array
    {
        return [
            "user_id.required" => "Article id is required.",
            "user_id.numeric" => "Article id must have a numeric value.",
            "voucher_id.required" => "Tag id is required.",
            "voucher_id.numeric" => "Tag id must have a numeric value."
        ];
    }
}
