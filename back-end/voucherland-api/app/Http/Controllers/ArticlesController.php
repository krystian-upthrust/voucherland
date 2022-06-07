<?php

namespace App\Http\Controllers;

use App\Http\Requests\ArticlesRequest;
use App\Http\Resources\ArticlesResource;
use App\Models\Article;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;

class ArticlesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        return response()->json(["articles" => ArticlesResource::collection(Article::all())]);
    }


    /**
     * Displays a listing of the articles with a public status
     *
     * @return JsonResponse
     */
    public function GetPublicArticles(): JsonResponse
    {
        $articles = Article::all()
            ->where(config('utils.ARTICLE.STATUS'), "=", "public");

        return response()->json(["public_articles" => ArticlesResource::collection($articles)]);
    }

    /**
     * Displays a listing of the articles with a private status
     *
     * @return JsonResponse
     */
    public function GetPrivateArticles() : JsonResponse
    {
        $articles = Article::all()
            ->where(config('utils.ARTICLE.STATUS'), "=", "private");

        return response()->json([ "private_articles" => ArticlesResource::collection($articles) ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param ArticlesRequest $request
     * @return JsonResponse
     *
     * @throws AuthorizationException
     */
    public function store(ArticlesRequest $request): JsonResponse
    {
        $this->authorize('create', Article::class);

        $article = Article::create([
            config('utils.ARTICLE.TITLE') => $request->validated('title'),
            config('utils.ARTICLE.DESCRIPTION') => $request->validated('description'),
            config('utils.ARTICLE.CONTENT') => $request->validated('content'),
            config('utils.ARTICLE.SUB_TITLE') => $request->validated('sub_title'),
            config('utils.ARTICLE.SUB_CONTENT') => $request->validated('sub_content'),
            config('utils.ARTICLE.IMAGE') => $request->validated('article_image'),
            config('utils.ARTICLE.READ_TIME') => $request->validated('read_time'),
            config('utils.ARTICLE.STATUS') => $request->validated('status'),
            'updated_at' => NULL
        ]);

        return response()->json(["article" => new ArticlesResource($article)], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  Article $article
     * @return JsonResponse
     */
    public function show(Article $article): JsonResponse
    {
        return response()->json(["article" => new ArticlesResource($article)]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  ArticlesRequest $request
     * @param  Article $article
     * @return JsonResponse
     */
    public function update(ArticlesRequest $request, Article $article) : JsonResponse
    {
        $this->authorize('update', $article);

        $article->update($request->validated());

        return response()->json(["article" => new ArticlesResource($article)]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Article $article
     * @return Response
     */
    public function destroy(Article $article) : Response
    {
        $this->authorize('delete', $article);

        $article->delete();

        return response('Article was successfully deleted', 200);
    }
}
