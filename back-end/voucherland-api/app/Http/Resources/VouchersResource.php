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
            config('utils.VOUCHER.ID') => $this->id,
            config('utils.VOUCHER.NAME') => $this->name,
            config('utils.VOUCHER.DESCRIPTION') => $this->description,
            config('utils.VOUCHER.STORE_IMAGE') => $this->store_image,
            config('utils.VOUCHER.DISCOUNT') => $this->discount,
            config('utils.VOUCHER.DISCOUNT_IMAGE') => $this->discount_type,
            config('utils.VOUCHER.TAG') => $this->tag,
            config('utils.VOUCHER.DOWNLOADS') => $this->downloads,
            config('utils.VOUCHER.EXPIRY') => $this->expiry,
            config('utils.VOUCHER.STATUS') => $this->status,
            config('utils.VOUCHER.PRODUCT_IMAGE') => $this->product_image
        ];
    }
}
