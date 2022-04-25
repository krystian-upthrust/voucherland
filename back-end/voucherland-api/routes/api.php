<?php

use App\Http\Controllers\ArticlesController;
use App\Http\Controllers\TagController;
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
    Route::get(config('utils.ROUTES.VOUCHERS'), [VouchersController::class, 'index']);
    Route::get(config('utils.ROUTES.SINGLE_VOUCHER'), [VouchersController::class, 'show']);
    
    // Route::post('/vouchers', [VouchersController::class, 'store']);
});

// Article Routes
Route::prefix('v1')->group(function() {
    Route::get(config('utils.ROUTES.ARTICLES'), [ArticlesController::class, 'index']);
    Route::get(config('utils.ROUTES.SINGLE_ARTICLE'), [ArticlesController::class, 'show']);
});

// Tag Routes
Route::prefix('v1')->group(function() {
    Route::get(config('utils.ROUTES.TAGS'), [TagController::class, 'index']);
});

// Test Route
Route::get('/test', function(){
    return 'api works';
});