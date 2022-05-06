<?php

namespace App\Http\Controllers;

use App\Http\Requests\AuthRequest;
use App\Http\Resources\UsersResource;
use PHPOpenSourceSaver\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    /**
     * Return a JWT when given credentials are verified.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(AuthRequest $request)
    {
        $credentials = [
            'email' => $request->email,
            'password' => $request->password
        ];

        // setting the time-to-life of the JWT 
        JWTAuth::factory()->setTTL(120);

        // verifying credentials 
        $token = JWTAuth::attempt($credentials);

        if($token) return $this->respondWithToken($token);
        
        // 401 Unauthorized is the status code to return when the client provides no credentials or invalid credentials.
        return abort(401, "Invalid credentials.");
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        $user = JWTAuth::user();

        if($user) return response()->json(["user" => new UsersResource($user)], 200);

        return abort(401, "Unautherized");
    }


    /**
     * Log the user out (Invalidates the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        JWTAuth::logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in (H)' => JWTAuth::factory()->getTTL()/60
        ]);
    }
}
