<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserVoucherRequest;
use App\Models\UserVoucher;
use App\Models\Voucher;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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
     * @param UserVoucherRequest $request
     * @return JsonResponse
     *
     * @throws AuthorizationException
     */
    public function store(UserVoucherRequest $request) : JsonResponse
    {
        $this->authorize('create', UserVoucher::class);

        $user_id = $request->validated('user_id');
        $voucher_id = $request->validated('voucher_id');

        if (!Voucher::find($voucher_id))
            return response()->json(["message" => "Resource can not be created. Voucher does not exists."], 409);

        $user_voucher_exists = DB::table(config('database.TABLE.USER_VOUCHER'))
            ->where(function($query) use ($user_id, $voucher_id)
                {
                    $query
                        ->where(config('utils.USER_VOUCHER.USER_ID'), '=', $user_id)
                        ->where(config('utils.USER_VOUCHER.VOUCHER_ID'), '=', $voucher_id);
                })
            ->get();

        if ($user_voucher_exists->count() !== 0)
            return response()->json([
                "message" => "Resource already exists.",
                "data" => $user_voucher_exists
            ], 422);

//        $result = UserVoucher::create([
//            config('utils.USER_VOUCHER.USER_ID') => $user_id,
//            config('utils.USER_VOUCHER.VOUCHER_ID') => $voucher_id
//        ]);

        return response()->json(["data" => "hi"], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  UserVoucher $userVoucher
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
