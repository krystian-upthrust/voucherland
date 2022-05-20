<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ArticleTagRequest extends FormRequest
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
            config('utils.ARTICLE_TAG.ARTICLE_ID') => ['required', 'numeric'],
            config('utils.ARTICLE_TAG.TAG_ID') => ['required', 'numeric']
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
            "article_id.required" => "Article id is required.",
            "article_id.numeric" => "Article id must have a numeric value.",
            "tag_id.required" => "Tag id is required.",
            "tag_id.numeric" => "Tag id must have a numeric value."
        ];
    }
}
