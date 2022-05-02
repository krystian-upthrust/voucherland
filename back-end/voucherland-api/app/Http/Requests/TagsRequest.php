<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use PHPOpenSourceSaver\JWTAuth\Facades\JWTAuth;

class TagsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        // return $this->route()->parameter('access') == 'new';

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
            config('utils.TAG.TITLE') => ['string', 'required', 'max:255', 'unique:tags'],
            config('utils.TAG.COLOR') => ['string', 'required', 'max:255']
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
            'title.required' => "Title is a required field.",
            'title.unique' => "Title must have a unique title.",
            'color.required' => "Color is a required field."
        ];
    }
}
