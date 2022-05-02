<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use PHPOpenSourceSaver\JWTAuth\Facades\JWTAuth;

class VouchersRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return JWTAuth::user()->is_admin;
    }

    /**
     * Get the validation rules that apply to the request.
     * 
     * @return array
     */
    public function rules()
    {
        return [
            config('utils.VOUCHER.NAME') => ['required', 'max:255', 'string'],
            config('utils.VOUCHER.DESCRIPTION') => ['required', 'max:255', 'string'],
            config('utils.VOUCHER.STORE_IMAGE') => ['required', 'max:255', 'string'],
            config('utils.VOUCHER.DISCOUNT') => ['required', 'max:255', 'string'],
            config('utils.VOUCHER.DISCOUNT_TYPE') => ['required', 'string', Rule::in(['percentage', 'addition'])],
            config('utils.VOUCHER.TAG') => ['required', 'max:255', 'string'],
            config('utils.VOUCHER.DOWNLOADS') => ['nullable', 'numeric'],
            config('utils.VOUCHER.EXPIRY') => ['required', 'max:255', 'string'],
            config('utils.VOUCHER.STATUS') => ['required', Rule::in(['public', 'private', 'expired'])],
            config('utils.VOUCHER.PRODUCT_IMAGE') => ['required', 'max:255', 'string'],
        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array
    */
    public function messages()
    {
        return [
            'name.required' => "Name is a required.",
            'description.required' => "Description is a required.",
            'store_image.required' => "Store image is a required.",
            'discount.required' => "Discount is a required.",
            'discount_type.required' => "Discount type is a required.",
            'tag.required' => "Tag is a required.",
            'downloads.numeric' => "Downloads must be a number.",
            'expiry.required' => "Expiry is a required.",
            'status.required' => "Status is a required.",
            'product_image.required' => "Product image is a required.",
        ];
    }
}
