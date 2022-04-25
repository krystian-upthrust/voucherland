<?php

namespace App\Providers;

use App\Models\Article;
use App\Models\Tag;
use App\Models\Voucher;
use App\Policies\ArticlePolicy;
use App\Policies\TagPolicy;
use App\Policies\VoucherPolicy;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        // 'App\Models\Model' => 'App\Policies\ModelPolicy',
        Voucher::class => VoucherPolicy::class,
        Article::class => ArticlePolicy::class,
        Tag::class => TagPolicy::class
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        //
    }
}
