<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserVoucherRequest;
use App\Models\UserVoucher;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class UserVoucherController extends Controller
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
     * @param  UserVoucherRequest $request
     * @return JsonResponse
     */
    public function store(UserVoucherRequest $request) : JsonResponse
    {
        return response()->json();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\UserVoucher  $userVoucher
     * @return \Illuminate\Http\Response
     */
    public function show(UserVoucher $userVoucher)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\UserVoucher  $userVoucher
     * @return \Illuminate\Http\Response
     */
    public function edit(UserVoucher $userVoucher)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\UserVoucher  $userVoucher
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, UserVoucher $userVoucher)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\UserVoucher  $userVoucher
     * @return \Illuminate\Http\Response
     */
    public function destroy(UserVoucher $userVoucher)
    {
        //
    }
}
