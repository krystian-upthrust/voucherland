<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ArticlesRequest extends FormRequest
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
            env('ARTICLE_TITLE') => ['required', 'string'],
            env('ARTICLE_DESCRIPTION') => ['required', 'string'],
            env('ARTICLE_CONTENT') => ['required', 'string'],
            env('ARTICLE_SUBTITLE') => ['required', 'string'],
            env('ARTICLE_SUBCONTENT') => ['required', 'string'],
            env('ARTICLE_IMAGE') => ['required','string'],
            env('ARTICLE_READTIME') => ['required', 'numeric'],
            env('ARTICLE_STATUS') => ['required', Rule::in('public', 'private')]
        ];
    }
}
