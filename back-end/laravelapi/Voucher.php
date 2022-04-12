<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Voucher extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'discount',
        'description'
    ];

    protected $casts = [
        'name' => 'string',
        'discount' => 'string',
        'description' => 'string',
    ];
}
