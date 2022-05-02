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
            config('utils.TAG.ID') => $this->id,
            config('utils.TAG.TITLE') => $this->title,
            config('utils.TAG.COLOR') => $this->color,
        ];
    }
}
