<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ArticlesResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            env('ARTICLE_ID') => $this->id,
            env('ARTICLE_TITLE') => $this->title,
            env('ARTICLE_DESCRIPTION') => $this->description,
            env('ARTICLE_CONTENT') => $this->content,
            env('ARTICLE_SUBTITLE') => $this->sub_title,
            env('ARTICLE_SUBCONTENT') => $this->sub_content,
            env('ARTICLE_IMAGE') => $this->article_image,
            env('ARTICLE_READTIME') => $this->read_time,
            env('ARTICLE_STATUS') => $this->status,
            'tags' => $this->tags
        ];
    }
}
