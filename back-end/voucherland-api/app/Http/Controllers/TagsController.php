<?php

namespace App\Http\Controllers;

use App\Http\Requests\TagsRequest;
use App\Http\Resources\ArticlesResource;
use App\Http\Resources\TagsResource;
use App\Models\Tag;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;

class TagsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index() : JsonResponse
    {
        return response()->json(['tags' => TagsResource::collection(Tag::all())]);
    }

    /**
     * Gets all the related article of the given tag
     *
     * @param Tag $tag
     * @return JsonResponse
     */
    public function GetRelatedArticlesByTag (Tag $tag) : JsonResponse {

        return response()->json(["related_articles" => ArticlesResource::collection($tag->related_articles) ]);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  TagsRequest  $request
     * @return JsonResponse
     */
    public function store(TagsRequest $request) : JsonResponse
    {
        $this->authorize('create', Tag::class);

        $tag = Tag::create([
            config('utils.TAG.TITLE') => $request->validated('title'),
            config('utils.TAG.COLOR') => $request->validated('color'),
        ]);

        return response()->json(['tag' => new TagsResource($tag)], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  Tag  $tag
     * @return JsonResponse
     */
    public function show(Tag $tag) : JsonResponse
    {
        return response()->json(["tag" => new TagsResource($tag)]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  TagsRequest  $request
     * @param  Tag $tag
     * @return JsonResponse
     */
    public function update(TagsRequest $request, Tag $tag) : JsonResponse
    {
        $this->authorize('update', Tag::class);

        $tag->update($request->validated());

        return response()->json(["tag" => new TagsResource($tag)]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Tag $tag
     * @return Response
     */
    public function destroy(Tag $tag)
    {
        $this->authorize('delete', $tag);

        $tag->delete();

        return response("Tag was successfully deleted", 200);
    }
}
