<?php

use App\Http\Controllers\ArticlesController;
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

// Voucher Routes
Route::prefix('v1')->group(function(){
    //route -> /api/v1/vouchers
    Route::get(env('ROUTE_GET_ALL_VOUCHERS'), [VouchersController::class, 'index']);
    Route::get(env('ROUTE_GET_SINGLE_VOUCHER'), [VouchersController::class, 'show']);
    // Route::post('/vouchers', [VouchersController::class, 'store']);
});

// Article Routes
Route::prefix('v1')->group(function() {
    Route::get(env('ROUTE_GET_ALL_ARTICLES'), [ArticlesController::class, 'index']);
});

Route::get('/test', function(){
    return 'api works';
});