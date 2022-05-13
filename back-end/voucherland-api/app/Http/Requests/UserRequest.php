<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            config('utils.USER.FIRST_NAME') => ['required'],
            config('utils.USER.LAST_NAME') => ['required'],
            config('utils.USER.EMAIL') => ['required', 'email',
                Rule::unique('users', 'email')->ignore($this->user)
            ],
            config('utils.USER.PASSWORD') => ['required'],
            config('utils.USER.IS_ADMIN') => ['required', 'boolean']
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
            'firstname.required' => "Firstname is required.",
            'lastname.required' => "Lastname is required.",
            'email.required' => "Email is required.",
            'email.unique' => "Email must be unique.",
            'password.required' => "Password is required.",
            'is_admin.required' => 'Is admin is required',
            'is_admin.boolean' => 'Is Admin must be a boolean.',
        ];
    }
}
