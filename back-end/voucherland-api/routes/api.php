<?php

use App\Http\Controllers\ArticlesController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\TagsController;
use App\Http\Controllers\UsersController;
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

// middleware cors?
// ::middleware([Cors::class])->
Route::controller(AuthController::class)->prefix('auth')->group(function () {
    Route::post(config('utils.ROUTES.AUTH_LOGIN'), 'login');

    Route::get(config('utils.ROUTES.AUTH_ME'), 'me');

    Route::get(config('utils.ROUTES.AUTH_LOGOUT'), 'logout');
});

Route::middleware(['auth'])->prefix('v1')->group(function(){

    // Voucher Routes 
    Route::controller(VouchersController::class)->group(function(){
        Route::get(config('utils.ROUTES.VOUCHERS'), 'index');
        Route::get(config('utils.ROUTES.VOUCHER'), 'show');

        Route::post(config('utils.ROUTES.VOUCHERS'), 'store');

        Route::put(config('utils.ROUTES.VOUCHER'), 'update');

        Route::delete(config('utils.ROUTES.VOUCHER'), 'destroy');
    });

    // Articles Routes
    Route::controller(ArticlesController::class)->group(function() {
        Route::get(config('utils.ROUTES.ARTICLES'), 'index');
        Route::get(config('utils.ROUTES.ARTICLE'), 'show');
    
        Route::post(config('utils.ROUTES.ARTICLES'), 'store');

        Route::put(config('utils.ROUTES.ARTICLE'), 'update');
    
        Route::delete(config('utils.ROUTES.ARTICLE'), 'destroy');
    });

    // Tags Routes
    Route::controller(TagsController::class)->group(function(){
        Route::get(config('utils.ROUTES.TAGS'), 'index');
        Route::get(config('utils.ROUTES.TAG'), 'show');
    
        Route::post(config('utils.ROUTES.TAGS'), 'store');

        Route::put(config('utils.ROUTES.TAGS'), 'update');
    
        // Route::delete(config('utils.ROUTES.TAG'), 'destroy');
    });

});

//todo
// * add middleware to each route
// - make special routes acces only to admin
// - authorize method in exp. tagrequest check user is_admin
// - check if middleware IsAdmin works with jwtauth
