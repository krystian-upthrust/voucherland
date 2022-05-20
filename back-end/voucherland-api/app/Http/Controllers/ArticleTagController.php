<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\ArticleTag;
use App\Models\Tag;
use Illuminate\Http\Request;

class ArticleTagController extends Controller
{


    public function store(Article $article, Tag $tag)
    {
        ArticleTag::create(

        );
    }
}
