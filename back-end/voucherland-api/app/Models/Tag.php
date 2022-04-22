<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    use HasFactory;

    protected $table = 'tags';

    protected $fillable = [
        'title',
        'color'
    ];

    protected $casts = [
        'title' => 'string',
        'color' => 'string'
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
        'laravel_through_key'
    ];
}
