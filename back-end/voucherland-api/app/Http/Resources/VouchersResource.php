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
            env('VOUCHER_DB_COLUMN_ID', 'id') => $this->id,
            env('VOUCHER_DB_COLUMN_NAME', 'name') => $this->name,
            env('VOUCHER_DB_DESCRIPTION', 'description')  => $this->description,
            env('VOUCHER_DB_STORE_IMAGE', 'store_image')  => $this->store_image,
            env('VOUCHER_DB_DISCOUNT', 'discount')  => $this->discount,
            env('VOUCHER_DB_DISCOUNT_TYPE', 'discount_type')  => $this->discount_type,
            env('VOUCHER_DB_TAG', 'tag')  => $this->tag,
            env('VOUCHER_DB_DOWNLOADS', 'downloads')  => $this->downloads,
            env('VOUCHER_DB_EXPIRY', 'expiry')  => $this->expiry,
            env('VOUCHER_DB_STATUS', 'status')  => $this->status,
            env('VOUCHER_DB_PRODUCT_IMAGE', 'product_image')  => $this->product_image
        ];
    }
}
