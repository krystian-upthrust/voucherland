<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UsersResource extends JsonResource
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
            config('utils.USER.ID') => $this->id,
            config('utils.USER.FIRST_NAME') => $this->firstname,
            config('utils.USER.LAST_NAME') => $this->lastname,
            config('utils.USER.EMAIL') => $this->email,
            config('utils.USER.IS_ADMIN') => $this->is_admin == 1 ? true : false,
        ];
    }
}
