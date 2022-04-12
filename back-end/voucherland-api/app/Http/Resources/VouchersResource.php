<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class VouchersResource extends JsonResource
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
            env('VOUCHER_DB_COLUMN_ID') => $this->id,
            env('VOUCHER_DB_COLUMN_NAME') => $this->name,
            'description'  => $this->description,
            'store_image'  => $this->store_image,
            'discount'  => $this->discount,
            'discount_type'  => $this->discount_type,
            'tag'  => $this->tag,
            'downloads'  => $this->downloads,
            'expiry'  => $this->expiry,
            'status'  => $this->status,
            'product_image'  => $this->product_image
        ];
    }
}
