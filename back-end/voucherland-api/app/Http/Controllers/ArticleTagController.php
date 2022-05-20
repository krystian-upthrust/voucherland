<?php

namespace App\Http\Controllers;

use App\Http\Requests\ArticleTagRequest;
use App\Models\Article;
use App\Models\ArticleTag;
use App\Models\Tag;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ArticleTagController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  ArticleTagRequest  $request
     * @return JsonResponse
     */
    public function store(ArticleTagRequest $request) : JsonResponse
    {
        $this->authorize('create', ArticleTag::class);

        $article_id = $request->validated('article_id');
        $tag_id = $request->validated('tag_id');

        $article = Article::find($article_id);
        $tag   = Tag::find($tag_id);

        if (!$article && !$tag) return response()->json(["message" => "Resource can not be created."]);

        $article_tag_exists = DB::table(config('database.TABLE.ARTICLE_TAG'))
            ->where(function($query) use ($article_id, $tag_id)
                {
                    $query
                        ->where('article_id', '=', $article_id)
                        ->where('tag_id', '=', $tag_id);
                })
            ->get();

        if ($article_tag_exists) return response()->json(["message" => "Resource already exists."], 422);

        $result = ArticleTag::create([
            config('utils.ARTICLE_TAG.ARTICLE_ID') => $article_id,
            config('utils.ARTICLE_TAG.TAG_ID') => $tag_id
        ]);

        return response()->json(["message" => $result], 201);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ArticleTag  $articleTag
     * @return \Illuminate\Http\Response
     */
    public function show(ArticleTag $articleTag)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ArticleTag  $articleTag
     * @return \Illuminate\Http\Response
     */
    public function edit(ArticleTag $articleTag)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ArticleTag  $articleTag
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ArticleTag $articleTag)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ArticleTag  $articleTag
     * @return \Illuminate\Http\Response
     */
    public function destroy(ArticleTag $articleTag)
    {
        //
    }
}
