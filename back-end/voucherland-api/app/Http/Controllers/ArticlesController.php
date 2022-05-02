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
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(["articles" => ArticlesResource::collection(Article::all())], 200);
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
    public function show(Article $id)
    {
        $article = Article::find($id);

        if($article) return response()->json(["article" => new ArticlesResource($article)], 200);

        return abort(404, "Article was not found.");
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function edit(Article $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function update(ArticlesRequest $request, Article $article)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $article = Article::find($id);

        if($article){
            $article->delete();
            return response('Article was deleted', 200);
        }

        return abort(404, "Article was not found.");
    }
}
