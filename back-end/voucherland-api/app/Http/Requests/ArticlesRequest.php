<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use PHPOpenSourceSaver\JWTAuth\Facades\JWTAuth;

class ArticlesRequest extends FormRequest
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
            config('utils.ARTICLE.TITLE') => ['required', 'string'],
            config('utils.ARTICLE.DESCRIPTION') => ['required'],
            config('utils.ARTICLE.CONTENT') => ['required'],
            config('utils.ARTICLE.SUB_TITLE') => ['required', 'string'],
            config('utils.ARTICLE.SUB_CONTENT') => ['required'],
            config('utils.ARTICLE.IMAGE') => ['required', 'string'],
            config('utils.ARTICLE.READ_TIME') => ['required', 'numeric'],
            config('utils.ARTICLE.STATUS') => ['required', 'string', Rule::in('public', 'private')],
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
            'title.required' => "Main title is a required.",
            'description.required' => "Description is a required.",
            'content.required' => "Main content is a required.",
            'sub_title.required' => "Sub title is a required.",
            'sub_content.required' => "Sub content is a required.",
            'article_image.required' => "Article image is a required.",
            'read_time.numeric' => "Read time must be a number.",
            'read_time.required' => "Read time is a required.",
            'status.required' => "Status is a required.",
        ];
    }

}
