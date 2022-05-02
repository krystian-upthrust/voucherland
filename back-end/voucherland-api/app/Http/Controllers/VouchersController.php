<?php

namespace App\Http\Controllers;

use App\Http\Requests\VouchersRequest;
use App\Http\Resources\VouchersResource;
use App\Models\Voucher;

class VouchersController extends Controller
{
    /**
     * Display a listing of the vouchers.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(["vouchers" =>  VouchersResource::collection(Voucher::all())], 200);
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
     * @param  \App\Http\Requests\StoreVoucherRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(VouchersRequest $request)
    {
        $voucher = Voucher::create([
            config('utils.VOUCHER.NAME') => $request->name,
            config('utils.VOUCHER.DESCRIPTION') => $request->description,
            config('utils.VOUCHER.STORE_IMAGE') => $request->store_image,
            config('utils.VOUCHER.DISCOUNT') => $request->discount,
            config('utils.VOUCHER.DISCOUNT_TYPE') => $request->discount_type,
            config('utils.VOUCHER.TAG') => $request->tag,
            config('utils.VOUCHER.DOWNLOADS') => $request->downloads === null ? 0 : $request->downloads ,
            config('utils.VOUCHER.EXPIRY') => $request->expiry,
            config('utils.VOUCHER.STATUS') => $request->status,
            config('utils.VOUCHER.PRODUCT_IMAGE') => $request->product_image,
            'updated_at' => null,
        ]);

        return response()->json(['voucher' => new VouchersResource($voucher)], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Voucher  $voucher
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $voucher = Voucher::find($id);

        if($voucher) return response()->json(["voucher" => new VouchersResource($voucher)], 200);

        return abort(404, "Voucher was not found.");
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Voucher  $voucher
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     * 
     * @param  \App\Http\Requests\UpdateVoucherRequest  $request
     * @param  \App\Models\Voucher  $voucher
     * @return \Illuminate\Http\Response
     */
    public function update(VouchersRequest $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Voucher  $voucher
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $voucher = Voucher::find($id);

        if($voucher) {
            $voucher->delete();
            return response("Voucher was successfully deleted", 200);
        }

        return abort(404, "Voucher was not found");
    }
}
