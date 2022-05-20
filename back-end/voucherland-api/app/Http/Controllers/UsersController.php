<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\Http\Resources\UsersResource;
use App\Models\User;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use PHPOpenSourceSaver\JWTAuth\Facades\JWTAuth;

use function PHPSTORM_META\map;

class UsersController extends Controller
{
    /**
     * Display a listing of all admins.
     *
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function GetAdmins() : JsonResponse
    {
        $this->authorize('GetAdmins', User::class);

        $admins = DB::table(config('database.TABLE.USERS'))
            ->where(config('utils.USER.IS_ADMIN'), "=", 1)
            ->get();

        return response()->json(["admins" => UsersResource::collection($admins)]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  UserRequest $request
     * @return JsonResponse
     */
    public function store(UserRequest $request) : JsonResponse
    {
        $user = User::create([
            config('utils.USER.FIRST_NAME') => $request->validated('firstname'),
            config('utils.USER.LAST_NAME') => $request->validated('lastname'),
            config('utils.USER.EMAIL') => $request->validated('email'),
            config('utils.USER.PASSWORD') => Hash::make($request->validated('password')),
            config('utils.USER.IS_ADMIN') => $request->validated('is_admin'),
            'remember_token' => null,
            'updated_at' => null,
        ]);

        return response()->json(["user" => new UsersResource($user)], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Voucher  $voucher
     * @return \Illuminate\Http\Response
     */
    public function show($user_id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  UserRequest $request
     * @param  User $user
     * @return JsonResponse
     */
    public function update(UserRequest $request, User $user) : JsonResponse
    {
        $this->authorize('update', $user);

        $user->updateOrFail([
            config('utils.USER.FIRST_NAME') => $request->validated('firstname'),
            config('utils.USER.PASSWORD') => Hash::make($request->validated('password')),
        ]);

        return response()->json(["user" => new UsersResource($user)]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Voucher  $voucher
     * @return \Illuminate\Http\Response
     */
    public function destroy($user_id)
    {
        //
    }
}
