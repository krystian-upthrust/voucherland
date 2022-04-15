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
            env('VOUCHER_ID') => $this->id,
            env('VOUCHER_NAME') => $this->name,
            env('VOUCHER_DESCRIPTION')  => $this->description,
            env('VOUCHER_STORE_IMAGE')  => $this->store_image,
            env('VOUCHER_DISCOUNT')  => $this->discount,
            env('VOUCHER_DISCOUNT_TYPE')  => $this->discount_type,
            env('VOUCHER_TAG')  => $this->tag,
            env('VOUCHER_DOWNLOADS')  => $this->downloads,
            env('VOUCHER_EXPIRY')  => $this->expiry,
            env('VOUCHER_STATUS')  => $this->status,
            env('VOUCHER_PRODUCT_IMAGE')  => $this->product_image
        ];
    }
}
