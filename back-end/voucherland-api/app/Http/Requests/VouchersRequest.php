<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class VouchersRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            env('VOUCHER_NAME') => ['required', 'max:255', 'string'],
            env('VOUCHER_DESCRIPTION') => ['required', 'max:255', 'string'],
            env('VOUCHER_STORE_IMAGE') => ['required', 'max:255', 'string'],
            env('VOUCHER_DISCOUNT') => ['required', 'max:255', 'string'],
            env('VOUCHER_DISCOUNT_TYPE')  => ['required', 'string', Rule::in(['percentage', 'addition'])],
            env('VOUCHER_TAG') => ['required', 'max:255', 'string'],
            env('VOUCHER_DOWNLOADS')  => ['nullable', 'numeric'],
            env('VOUCHER_EXPIRY') => ['required', 'max:255', 'string'],
            env('VOUCHER_STATUS') => ['required', Rule::in(['public', 'private', 'expired'])],
            env('VOUCHER_PRODUCT_IMAGE')  => ['required', 'max:255', 'string'],
        ];
    }
}
