<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Voucher extends Model
{
    use HasFactory;

    protected $table = 'vouchers';

    protected $fillable = [
        'name',
        'description',
        'store_image',
        'discount',
        'discount_type',
        'tag',
        'downloads',
        'expiry',
        'status',
        'product_image'
    ];

    protected $casts = [
        'name' => 'string',
        'description' => 'string',
        'store_image' => 'string',
        'discount' => 'string',
        'discount_type' => 'string',
        'tag' => 'string',
        'downloads' => 'integer',
        'expiry' => 'string',
        'status' => 'string',
        'product_image' => 'string'
    ];

    protected $hidden = [
        'created_at',
        'updated_at'
    ];
}
