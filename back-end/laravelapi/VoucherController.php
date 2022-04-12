<?php

namespace App\Http\Controllers;

use App\Models\Voucher;
use Illuminate\Http\Request;

class VoucherController extends Controller
{
    /**
     * Gets all vouchers from the storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        error_log(Voucher::all());
        return Voucher::all();
    }

    /**
     * Creates and stores a new voucher in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $request->validate([
            'name' => 'required'
        ]);

        

        return Voucher::create($request->all());
    }

    /**
     * Gets the specified voucher from the storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        Voucher::find($id);
    }

    /**
     * Updates the specified voucher in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $post = Voucher::find($id);
        $post->update($request->all());

        return $post;
    }

    /**
     * Removes/deletes the specified voucher from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return Voucher::destroy($id);
    }
}
