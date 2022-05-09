<?php

namespace App\Policies;

use App\Models\Article;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Auth\Access\Response;

class ArticlePolicy
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
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function view(User $user, Article $article)
    {
        //
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  User $user
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
     * @param  User $user
     * @param  Article $article
     * @return Response
     */
    public function update(User $user, Article $article) : Response
    {
        return $user->getAttribute('is_admin')
            ? Response::allow()
            : Response::deny("You are not authorized to update resources!");
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  User $user
     * @param  Article $article
     * @return Response
     */
    public function delete(User $user, Article $article) : Response
    {
        return $user->getAttribute('is_admin')
            ? Response::allow()
            : Response::deny("You are not authorized to delete resources!");
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function restore(User $user, Article $article)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function forceDelete(User $user, Article $article)
    {
        //
    }
}
