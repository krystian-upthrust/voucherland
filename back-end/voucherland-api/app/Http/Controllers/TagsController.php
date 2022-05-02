<?php

namespace App\Http\Controllers;

use App\Http\Requests\TagsRequest;
use App\Http\Resources\TagsResource;
use App\Models\Tag;

class TagsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(['tags' => TagsResource::collection(Tag::all())], 200);
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
    public function store(TagsRequest $request)
    {
        $tag = Tag::create([
            config('utils.TAG.TITLE') => $request->title,
            config('utils.TAG.COLOR') => $request->color,
        ]);

        return response()->json(['tag' => new TagsResource($tag)], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Tag  $tag
     * @return \Illuminate\Http\Response
     */
    public function show($tag_title)
    {
        $result = Tag::query()->where(config('utils.TAG.TITLE'), "=", $tag_title)->first();

        if ($result) return response()->json(['tag' => new TagsResource($result)], 200);

        return abort(404, "Tag was not found"); // 404: Not Found
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Tag  $tag
     * @return \Illuminate\Http\Response
     */
    public function edit(Tag $tag)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Tag  $tag
     * @return \Illuminate\Http\Response
     */
    public function update(TagsRequest $request, Tag $tag)
    {
        return $request;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Tag  $tag
     * @return \Illuminate\Http\Response
     */
    public function destroy($tag_title)
    {
        $result = Tag::query()->where(config('utils.TAG.TITLE'), "=", $tag_title)->first();

        if ($result) {
            $result->delete();
            return response("Tag has been deleted.", 204); // 204: No Content
        }

        return abort(404, "Tag was not found.");
    }
}
