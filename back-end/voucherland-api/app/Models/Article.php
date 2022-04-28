<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    use HasFactory;

    protected $table = 'articles';

    /**
     * The attributes that are assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'title',
        'description',
        'content',
        'sub_title',
        'sub_content',
        'read_time',
        'status'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts =[
        'title' => "string",
        'description' => "string",
        'content' => "string",
        'sub_title' => "string",
        'sub_content' => "string",
        'read_time' => "string",
        'status' => "string"
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    public function tags() {
        return $this->hasManyThrough(
            Tag::class,
            ArticleTag::class,
            'tag_id',
            'id',
            'id',
            'article_id'
        );
    }
    
}
