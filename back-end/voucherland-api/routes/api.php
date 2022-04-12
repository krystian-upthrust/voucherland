<?php

use App\Http\Controllers\VouchersController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('v1')->group(function(){
    //route -> /api/v1/vouchers
    Route::get('/vouchers', [VouchersController::class, 'index']);
    Route::get('/vouchers/{id}', [VouchersController::class, 'show']);
    Route::post('/vouchers', [VouchersController::class, 'store']);

    Route::get('/test', function(){return 'works';});

});