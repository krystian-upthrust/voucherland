<?php

namespace App\Policies;

use App\Models\User;
use App\Models\UserVoucher;
use App\Models\Voucher;
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Auth\Access\Response;

class UserVoucherPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any models.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function viewAny(User $user)
    {
        //
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\UserVoucher  $userVoucher
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function view(User $user, UserVoucher $userVoucher)
    {
        //
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  User  $user
     * @return Response
     */
    public function create(User $user) : Response
    {
        return $user->getAttribute('id') === auth()->user()->id
            ? Response::allow()
            : Response::deny();
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\UserVoucher  $userVoucher
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function update(User $user, UserVoucher $userVoucher)
    {
        //
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\UserVoucher  $userVoucher
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function delete(User $user, UserVoucher $userVoucher)
    {
        //
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\UserVoucher  $userVoucher
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function restore(User $user, UserVoucher $userVoucher)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\UserVoucher  $userVoucher
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function forceDelete(User $user, UserVoucher $userVoucher)
    {
        //
    }
}
