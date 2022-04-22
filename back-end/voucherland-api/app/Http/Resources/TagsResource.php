<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TagsResource extends JsonResource
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
            env('ARTICLE_TAG_ID') => $this->id,
            env('ARTICLE_TAG_TITLE') => $this->title,
            env('ARTICLE_TAG_COLOR') => $this->color,
        ];
    }
}
