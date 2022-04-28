<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ArticleTagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $articleTagRelations = [
            [
                config('utils.ARTICLE_TAG.ARTICLE_ID') => 1,
                config('utils.ARTICLE_TAG.TAG_ID') => 1
            ],
            [
                config('utils.ARTICLE_TAG.ARTICLE_ID') => 1,
                config('utils.ARTICLE_TAG.TAG_ID') => 2
            ],
            [
                config('utils.ARTICLE_TAG.ARTICLE_ID') => 1,
                config('utils.ARTICLE_TAG.TAG_ID') => 3
            ],
            [
                config('utils.ARTICLE_TAG.ARTICLE_ID') => 2,
                config('utils.ARTICLE_TAG.TAG_ID') => 1
            ],
            [
                config('utils.ARTICLE_TAG.ARTICLE_ID') => 2,
                config('utils.ARTICLE_TAG.TAG_ID') => 2
            ],
            [
                config('utils.ARTICLE_TAG.ARTICLE_ID') => 3,
                config('utils.ARTICLE_TAG.TAG_ID') => 1
            ],
            [
                config('utils.ARTICLE_TAG.ARTICLE_ID') => 3,
                config('utils.ARTICLE_TAG.TAG_ID') => 2
            ],
            [
                config('utils.ARTICLE_TAG.ARTICLE_ID') => 4,
                config('utils.ARTICLE_TAG.TAG_ID') => 1
            ],
            [
                config('utils.ARTICLE_TAG.ARTICLE_ID') => 4,
                config('utils.ARTICLE_TAG.TAG_ID') => 2
            ],
            [
                config('utils.ARTICLE_TAG.ARTICLE_ID') => 5,
                config('utils.ARTICLE_TAG.TAG_ID') => 1
            ],
            [
                config('utils.ARTICLE_TAG.ARTICLE_ID') => 5,
                config('utils.ARTICLE_TAG.TAG_ID') => 2
            ],
            [
                config('utils.ARTICLE_TAG.ARTICLE_ID') => 6,
                config('utils.ARTICLE_TAG.TAG_ID') => 1
            ],
            [
                config('utils.ARTICLE_TAG.ARTICLE_ID') => 6,
                config('utils.ARTICLE_TAG.TAG_ID') => 2
            ],
            [
                config('utils.ARTICLE_TAG.ARTICLE_ID') => 7,
                config('utils.ARTICLE_TAG.TAG_ID') => 1
            ],
            [
                config('utils.ARTICLE_TAG.ARTICLE_ID') => 7,
                config('utils.ARTICLE_TAG.TAG_ID') => 2
            ],
            [
                config('utils.ARTICLE_TAG.ARTICLE_ID') => 8,
                config('utils.ARTICLE_TAG.TAG_ID') => 1
            ],
            [
                config('utils.ARTICLE_TAG.ARTICLE_ID') => 8,
                config('utils.ARTICLE_TAG.TAG_ID') => 2
            ]
        ];

        DB::table(config('database.TABLE.ARTICLE_TAG'))->insert($articleTagRelations);
    }
}
