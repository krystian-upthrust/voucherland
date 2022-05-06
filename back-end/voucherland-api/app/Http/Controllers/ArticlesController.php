<?php

namespace App\Http\Controllers;

use App\Http\Requests\ArticlesRequest;
use App\Http\Resources\ArticlesResource;
use App\Models\Article;

class ArticlesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        return response()->json(["articles" => ArticlesResource::collection(Article::all())], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ArticlesRequest $request)
    {
        $article = Article::create([
            config('utils.ARTICLE.TITLE') => $request->title,
            config('utils.ARTICLE.DESCRIPTION') => $request->description,
            config('utils.ARTICLE.CONTENT') => $request->content,
            config('utils.ARTICLE.SUB_TITLE') => $request->sub_title,
            config('utils.ARTICLE.SUB_CONTENT') => $request->sub_content,
            config('utils.ARTICLE.IMAGE') => $request->article_image,
            config('utils.ARTICLE.READ_TIME') => $request->read_time,
            config('utils.ARTICLE.STATUS') => $request->status,
            'updated_at' => NULL
        ]);

        return response()->json(["article" => new ArticlesResource($article)], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function show($article_id)
    {
        $article = Article::find($article_id);

        if($article) return response()->json(["article" => new ArticlesResource($article)], 200);

        return abort(404, "Article was not found.");
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function update(ArticlesRequest $request, $article_id)
    {
        $article = Article::find($article_id);

        if($article){
            $article->update($request->all());

            return response()->json([
                "article" => new ArticlesResource(Article::find($article_id))
            ], 200);
        }

        return abort(404, "Article was not found");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function destroy($article_id)
    {
        $article = Article::find($article_id);

        if($article){
            $article->delete();
            return response('Article was deleted', 200);
        }

        return abort(404, "Article was not found.");
    }
}
