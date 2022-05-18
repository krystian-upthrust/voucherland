<?php

namespace App\Http\Controllers;

use App\Http\Requests\AuthRequest;
use App\Http\Resources\UsersResource;
use Illuminate\Http\JsonResponse;
use PHPOpenSourceSaver\JWTAuth\Facades\JWTAuth;
use PHPOpenSourceSaver\JWTAuth\Facades\JWTFactory;
use PHPOpenSourceSaver\JWTAuth\JWTGuard;

class AuthController extends Controller
{
    /**
     * Return a JWT when given credentials are verified.
     *
     * @return JsonResponse
     */
    public function login(AuthRequest $request) : JsonResponse
    {
        $credentials = [
            'email' => $request->validated('email'),
            'password' => $request->validated('password')
        ];

        //setting the time-to-life of the JWT (12h=720m)
        auth()->setTTL(10080);

        // verifying credentials
        $token = auth()->attempt($credentials);

        if($token) return $this->respondWithToken($token);

        // 401 Unauthorized is the status code to return when the client provides no credentials or invalid credentials.
        return abort(401, "Invalid credentials.");
    }

    /**
     * Get the authenticated User.
     *
     * @return JsonResponse
     */
    public function me() : JsonResponse
    {
        return response()->json(["user" => new UsersResource(auth()->user())]);
    }

    /**
     * Refresh a token.
     *
     * @return JsonResponse
     */
    public function refresh() : JsonResponse
    {
        return response()->json(["refresh_token" => auth()->refresh() ]);
    }

    /**
     * Log the user out (Invalidates the token).
     *
     * @return JsonResponse
     */
    public function logout() : JsonResponse
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return JsonResponse
     */
    protected function respondWithToken(string $token) : JsonResponse
    {
        return response()->json([
            'token_type' => 'bearer',
            'access_token' => $token,
            'expires_in (H)' => JWTAuth::factory()->getTTL()/60
        ]);
    }
}
