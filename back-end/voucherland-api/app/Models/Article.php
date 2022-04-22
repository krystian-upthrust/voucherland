<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    use HasFactory;

    protected $table = 'articles';

    protected $fillable = [
        'title',
        'description',
        'content',
        'sub_title',
        'sub_content',
        'read_time',
        'status'
    ];

    protected $casts =[
        'title' => "string",
        'description' => "string",
        'content' => "string",
        'sub_title' => "string",
        'sub_content' => "string",
        'read_time' => "interger",
        'status' => "string"
    ];

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
