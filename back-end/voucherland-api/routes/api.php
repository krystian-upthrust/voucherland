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

    Route::post('/refresh', 'refresh');

});

// User Routes
Route::controller(UsersController::class)->group(function(){
    Route::post('/register', 'store');
});

Route::middleware(['auth'])->controller(AuthController::class)->prefix('auth')->group(function (){
    Route::get('/me', 'me');
    Route::get('/logout', 'logout');
});

Route::middleware(['auth'])->prefix('v1')->group(function(){

    Route::controller(VouchersController::class)->group(function(){
        Route::get('/vouchers/{voucher:id}', 'show');

        Route::post('/vouchers', 'store');

        Route::put('/vouchers/{voucher}', 'update');

        Route::delete('/vouchers/{voucher}', 'destroy');
    });

    Route::controller(ArticlesController::class)->group(function() {

//        Route::get('/articles/{article:id}', 'show');

        Route::post('/articles', 'store');

        Route::put('/articles/{article}', 'update');

        Route::delete('/articles/{article}', 'destroy');
    });

    Route::controller(TagsController::class)->group(function(){
//        Route::get('/tags', 'index');
        Route::get('/tags/{tag:id}', 'show');

        Route::post('/tags', 'store');

        Route::put('/tags/{tag}', 'update');

        // Route::delete('/tags/{tag}', 'destroy');
    });

    Route::controller(UsersController::class)->group(function(){

        Route::get("/admins", "GetAdmins");

        Route::put('/users/{user:id}', 'update');
    });

});

// Public routes
Route::middleware('cors')->prefix('public')->group(function (){

    Route::get("/vouchers/{voucher_status}", [VouchersController::class, 'GetAllVouchersByStatus']);

    Route::controller(ArticlesController::class)->group(function () {
        Route::get('/article/{article:id}', "show");
        Route::get('/articles/{article_status}', "GetArticlesByStatus");
    });

    Route::get('/articles/related/{tag:id}', [TagsController::class, "GetRelatedArticlesByTag"]);

    Route::get('/tags', [TagsController::class, "index"]);

});
