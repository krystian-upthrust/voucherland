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

Route::controller(AuthController::class)->prefix('auth')->group(function () {
    Route::post('/login', 'login');

    Route::get('/me', 'me');
    Route::post('/refresh', 'refresh');

    Route::get('/logout', 'logout');
});

// User Routes
Route::controller(UsersController::class)->group(function(){
    Route::post('/users', 'store');
});

Route::middleware(['auth'])->controller(AuthController::class)->prefix('auth')->group(function (){
    Route::get('/me', 'me');
});

Route::middleware(['auth'])->prefix('v1')->group(function(){

    Route::controller(VouchersController::class)->group(function(){
        Route::get('/vouchers', 'index');
        Route::get('/vouchers/{voucher:id}', 'show');

        Route::post('/vouchers', 'store');

        Route::put('/vouchers/{voucher}', 'update');

        Route::delete('/vouchers/{voucher}', 'destroy');
    });

    Route::controller(ArticlesController::class)->group(function() {
        Route::get('/articles', 'index');
        Route::get('/articles/{article:id}', 'show');

        Route::post('/articles', 'store');

        Route::put('/articles/{article}', 'update');

        Route::delete('/articles/{article}', 'destroy');
    });

    Route::controller(TagsController::class)->group(function(){
        Route::get('/tags', 'index');
        Route::get('/tags/{tag:id}', 'show');

        Route::post('/tags', 'store');

        Route::put('/tags/{tag}', 'update');

        // Route::delete('/tags/{tag}', 'destroy');
    });

    // User Routes
    Route::controller(UsersController::class)->group(function(){
        Route::put('/users/{user:id}', 'update');
    });

});

//todo
// * add middleware to each route
// - make special routes acces only to admin
// - authorize method in exp. tagrequest check user is_admin
// - check if middleware IsAdmin works with jwtauth
