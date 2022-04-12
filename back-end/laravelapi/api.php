<?php

use App\Http\Controllers\VoucherController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Hash;

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

// longer way to step up api links 
// Route::get('/voucher', [VoucherController::class, 'index']);
// Route::post('/voucher', [VoucherController::class, 'store']);
// Route::put('/voucher', [VoucherController::class, 'update']);
// Route::delete('/voucher', [VoucherController::class, 'destroy']); 

// shorter way to set up api link 
// route -> /api/voucher
Route::resource('voucher', VoucherController::class);

//route -> /api/v1/voucher
Route::prefix('v1')->group(function() {
    Route::apiResource('voucher', VoucherController::class);
});

// CRUD 
// [GET]
    // get all ... /api/vouchers
// [GET]
    // get 1  ... /api/voucher/{id}
// [POST]
    // create a voucher ... /api/voucher
// [PUT/PATCH]
    // update a voucher ... /api/voucher/{id}
// [DELETE]
    // delete voucher ... /api/voucher/{id}

//DATABASE 
// 1. create a db 
// 2. create model to connect to db
// 2.5 create a service? Eloquent -> it will map out all the statements  
// 3. create controller to go get data from the datebase 
// 4. returnt the info 


//every request to this route need to be auth. using the auth:api guard in config -> auth.php 
// only when the default in auth.php is set to api you can use only auth keyword 
Route::middleware('auth')->get('/user', function (Request $request) {
    return $request->user();
});


/**

* SERVER SIDE AUTHENTICATION WAY
* - user visits browser
* - user logs  in with from from  browser
* - laravel keep user auth info 

* the main reason why we want to change the auth to api side way 
* is to avoid saving to much session info on 1 server 
* which always allows of to span over an multiple server and work globale with api auth 


* API SIDE WAY
* - user visits website 
* - user logs in wit form
* 
* laravel auths user and give a token (JWT)
* user requests  info  from api with JWT-token 

* overall JWT is very secure 
* the only down side is where you store the token which is the browser ("users") responibility 
* in cookie, localstorage, some storage in the frontend 
* whenever a user would come back you would give the token in header of HTTP

* HTTP header Authorization

*/ 

// create a user route 
Route::get('/user/create', function(Request $request) {
    User::create([
        'name' => 'Chris learning',
        'email' => 'krystiansen3@gmail.com',
        'password' => Hash::make('iamtesting')
    ]);
});


// login a user 
Route::get('/login', function() { 
    $credentials = [
        'email' => 'krystiansen3@gmail.com',
        'password' => 'iamtesting'
    ];

    // from the api request -> request() is a helper function
    // $credentials = request()->only(['email', 'password']);

    return auth()->attempt($credentials); // should return JWT token 
});

// get the auth user
Route::middleware('auth')->get('/me', function(){
    return auth()->user();
});


// logout a user 
