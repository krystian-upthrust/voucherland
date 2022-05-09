<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Voucher;
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Auth\Access\Response;

class VoucherPolicy
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
     * @param  \App\Models\Voucher  $voucher
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function view(User $user, Voucher $voucher)
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
        return $user->getAttribute('is_admin')
            ? Response::allow()
            : Response::deny("You are not authorized to create resources!");
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  User  $user
     * @param  Voucher  $voucher
     * @return Response
     */
    public function update(User $user, Voucher $voucher) : Response
    {
        return $user->getAttribute('is_admin')
            ? Response::allow()
            : Response::deny("You are not authorized to update resources!");
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  User  $user
     * @return Response
     */
    public function delete(User $user) : Response
    {
        return $user->getAttribute('is_admin')
            ? Response::allow()
            : Response::deny("You are not authorized to delete resources!");
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Voucher  $voucher
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function restore(User $user, Voucher $voucher)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Voucher  $voucher
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function forceDelete(User $user, Voucher $voucher)
    {
        //
    }
}
