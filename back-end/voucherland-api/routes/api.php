<?php

use App\Http\Controllers\ArticlesController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\TagsController;
use App\Http\Controllers\VouchersController;
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

// Voucher Routes
Route::middleware(['auth'])->controller(VouchersController::class)->prefix('v1')->group(function () {
    Route::get(config('utils.ROUTES.VOUCHERS'), 'index');
    Route::get(config('utils.ROUTES.VOUCHER'), 'show');

    Route::post(config('utils.ROUTES.VOUCHERS'), 'store');

    Route::delete(config('utils.ROUTES.VOUCHER'), 'destroy');
});

// Article Routes
Route::middleware(['auth'])->controller(ArticlesController::class)->prefix('v1')->group(function () {
    Route::get(config('utils.ROUTES.ARTICLES'), 'index');
    Route::get(config('utils.ROUTES.ARTICLE'), 'show');

    Route::post(config('utils.ROUTES.ARTICLES'), 'store');

    Route::delete(config('utils.ROUTES.ARTICLE'), 'destroy');
});

// Tag Routes
Route::middleware(['auth'])->controller(TagsController::class)->prefix('v1')->group(function () {
    Route::get(config('utils.ROUTES.TAGS'), 'index');
    Route::get(config('utils.ROUTES.TAG'), 'show');

    Route::post(config('utils.ROUTES.TAGS'), 'store');

    Route::delete(config('utils.ROUTES.TAG'), 'destroy');

    // test autherize method in Request class
    Route::post('/tag/update', 'update');

});

Route::controller(AuthController::class)->prefix('auth')->group(function () {
    Route::post(config('utils.ROUTES.AUTH_LOGIN'), 'login');

    Route::get(config('utils.ROUTES.AUTH_ME'), 'me');

    Route::post(config('utils.ROUTES.AUTH_LOGOUT'), 'logout');
});


//todo
// * add middleware to each route
// - make special routes acces only to admin
// - authorize method in exp. tagrequest check user is_admin
// - check if middleware IsAdmin works with jwtauth
