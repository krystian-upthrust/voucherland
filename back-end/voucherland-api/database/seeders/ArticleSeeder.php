<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ArticleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $description = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don`t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn`t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks.";

        $articles = [
            [
                config('utils.ARTICLE.TITLE') => 'New collaboration with the cola group',
                config('utils.ARTICLE.DESCRIPTION') => $description,
                config('utils.ARTICLE.CONTENT') => $description,
                config('utils.ARTICLE.SUB_TITLE') => 'Just another title to fill the page',
                config('utils.ARTICLE.SUB_CONTENT') => $description,
                config('utils.ARTICLE.IMAGE') => 'article_banner_image.png',
                config('utils.ARTICLE.READ_TIME') => 7,
                config('utils.ARTICLE.STATUS') => 'public',
                'updated_at' => NULL
            ],
            [
                config('utils.ARTICLE.TITLE') => 'New collaboration with the cola group',
                config('utils.ARTICLE.DESCRIPTION') => $description,
                config('utils.ARTICLE.CONTENT') => $description,
                config('utils.ARTICLE.SUB_TITLE') => 'Just another title to fill the page',
                config('utils.ARTICLE.SUB_CONTENT') => $description,
                config('utils.ARTICLE.IMAGE') => 'article_banner_image.png',
                config('utils.ARTICLE.READ_TIME') => 7,
                config('utils.ARTICLE.STATUS') => 'public',
                'updated_at' => NULL
            ],
            [
                config('utils.ARTICLE.TITLE') => 'New collaboration with the cola group',
                config('utils.ARTICLE.DESCRIPTION') => $description,
                config('utils.ARTICLE.CONTENT') => $description,
                config('utils.ARTICLE.SUB_TITLE') => 'Just another title to fill the page',
                config('utils.ARTICLE.SUB_CONTENT') => $description,
                config('utils.ARTICLE.IMAGE') => 'article_banner_image.png',
                config('utils.ARTICLE.READ_TIME') => 7,
                config('utils.ARTICLE.STATUS') => 'public',
                'updated_at' => NULL
            ],
            [
                config('utils.ARTICLE.TITLE') => 'New collaboration with the cola group',
                config('utils.ARTICLE.DESCRIPTION') => $description,
                config('utils.ARTICLE.CONTENT') => $description,
                config('utils.ARTICLE.SUB_TITLE') => 'Just another title to fill the page',
                config('utils.ARTICLE.SUB_CONTENT') => $description,
                config('utils.ARTICLE.IMAGE') => 'article_banner_image.png',
                config('utils.ARTICLE.READ_TIME') => 7,
                config('utils.ARTICLE.STATUS') => 'public',
                'updated_at' => NULL
            ],
            [
                config('utils.ARTICLE.TITLE') => 'New collaboration with the cola group',
                config('utils.ARTICLE.DESCRIPTION') => $description,
                config('utils.ARTICLE.CONTENT') => $description,
                config('utils.ARTICLE.SUB_TITLE') => 'Just another title to fill the page',
                config('utils.ARTICLE.SUB_CONTENT') => $description,
                config('utils.ARTICLE.IMAGE') => 'article_banner_image.png',
                config('utils.ARTICLE.READ_TIME') => 7,
                config('utils.ARTICLE.STATUS') => 'private',
                'updated_at' => NULL
            ],
            [
                config('utils.ARTICLE.TITLE') => 'New collaboration with the cola group',
                config('utils.ARTICLE.DESCRIPTION') => $description,
                config('utils.ARTICLE.CONTENT') => $description,
                config('utils.ARTICLE.SUB_TITLE') => 'Just another title to fill the page',
                config('utils.ARTICLE.SUB_CONTENT') => $description,
                config('utils.ARTICLE.IMAGE') => 'article_banner_image.png',
                config('utils.ARTICLE.READ_TIME') => 7,
                config('utils.ARTICLE.STATUS') => 'private',
                'updated_at' => NULL
            ],
            [
                config('utils.ARTICLE.TITLE') => 'New collaboration with the cola group',
                config('utils.ARTICLE.DESCRIPTION') => $description,
                config('utils.ARTICLE.CONTENT') => $description,
                config('utils.ARTICLE.SUB_TITLE') => 'Just another title to fill the page',
                config('utils.ARTICLE.SUB_CONTENT') => $description,
                config('utils.ARTICLE.IMAGE') => 'article_banner_image.png',
                config('utils.ARTICLE.READ_TIME') => 7,
                config('utils.ARTICLE.STATUS') => 'private',
                'updated_at' => NULL
            ],
            [
                config('utils.ARTICLE.TITLE') => 'New collaboration with the cola group',
                config('utils.ARTICLE.DESCRIPTION') => $description,
                config('utils.ARTICLE.CONTENT') => $description,
                config('utils.ARTICLE.SUB_TITLE') => 'Just another title to fill the page',
                config('utils.ARTICLE.SUB_CONTENT') => $description,
                config('utils.ARTICLE.IMAGE') => 'article_banner_image.png',
                config('utils.ARTICLE.READ_TIME') => 7,
                config('utils.ARTICLE.STATUS') => 'private',
                'updated_at' => NULL
            ],
            [
                config('utils.ARTICLE.TITLE') => 'New collaboration with the cola group',
                config('utils.ARTICLE.DESCRIPTION') => $description,
                config('utils.ARTICLE.CONTENT') => $description,
                config('utils.ARTICLE.SUB_TITLE') => 'Just another title to fill the page',
                config('utils.ARTICLE.SUB_CONTENT') => $description,
                config('utils.ARTICLE.IMAGE') => 'article_banner_image.png',
                config('utils.ARTICLE.READ_TIME') => 10,
                config('utils.ARTICLE.STATUS') => 'public',
                'updated_at' => NULL
            ],
            [
                config('utils.ARTICLE.TITLE') => 'New collaboration with the cola group',
                config('utils.ARTICLE.DESCRIPTION') => $description,
                config('utils.ARTICLE.CONTENT') => $description,
                config('utils.ARTICLE.SUB_TITLE') => 'Just another title to fill the page',
                config('utils.ARTICLE.SUB_CONTENT') => $description,
                config('utils.ARTICLE.IMAGE') => 'article_banner_image.png',
                config('utils.ARTICLE.READ_TIME') => 7,
                config('utils.ARTICLE.STATUS') => 'public',
                'updated_at' => NULL
            ],
            [
                config('utils.ARTICLE.TITLE') => 'New collaboration with the cola group',
                config('utils.ARTICLE.DESCRIPTION') => $description,
                config('utils.ARTICLE.CONTENT') => $description,
                config('utils.ARTICLE.SUB_TITLE') => 'Just another title to fill the page',
                config('utils.ARTICLE.SUB_CONTENT') => $description,
                config('utils.ARTICLE.IMAGE') => 'article_banner_image.png',
                config('utils.ARTICLE.READ_TIME') => 7,
                config('utils.ARTICLE.STATUS') => 'public',
                'updated_at' => NULL
            ],
            [
                config('utils.ARTICLE.TITLE') => 'New collaboration with the cola group',
                config('utils.ARTICLE.DESCRIPTION') => $description,
                config('utils.ARTICLE.CONTENT') => $description,
                config('utils.ARTICLE.SUB_TITLE') => 'Just another title to fill the page',
                config('utils.ARTICLE.SUB_CONTENT') => $description,
                config('utils.ARTICLE.IMAGE') => 'article_banner_image.png',
                config('utils.ARTICLE.READ_TIME') => 7,
                config('utils.ARTICLE.STATUS') => 'public',
                'updated_at' => NULL
            ],
            [
                config('utils.ARTICLE.TITLE') => 'New collaboration with the cola group',
                config('utils.ARTICLE.DESCRIPTION') => $description,
                config('utils.ARTICLE.CONTENT') => $description,
                config('utils.ARTICLE.SUB_TITLE') => 'Just another title to fill the page',
                config('utils.ARTICLE.SUB_CONTENT') => $description,
                config('utils.ARTICLE.IMAGE') => 'article_banner_image.png',
                config('utils.ARTICLE.READ_TIME') => 7,
                config('utils.ARTICLE.STATUS') => 'public',
                'updated_at' => NULL
            ],
            [
                config('utils.ARTICLE.TITLE') => 'New collaboration with the cola group',
                config('utils.ARTICLE.DESCRIPTION') => $description,
                config('utils.ARTICLE.CONTENT') => $description,
                config('utils.ARTICLE.SUB_TITLE') => 'Just another title to fill the page',
                config('utils.ARTICLE.SUB_CONTENT') => $description,
                config('utils.ARTICLE.IMAGE') => 'article_banner_image.png',
                config('utils.ARTICLE.READ_TIME') => 10,
                config('utils.ARTICLE.STATUS') => 'public',
                'updated_at' => NULL
            ],
            [
                config('utils.ARTICLE.TITLE') => 'New collaboration with the cola group',
                config('utils.ARTICLE.DESCRIPTION') => $description,
                config('utils.ARTICLE.CONTENT') => $description,
                config('utils.ARTICLE.SUB_TITLE') => 'Just another title to fill the page',
                config('utils.ARTICLE.SUB_CONTENT') => $description,
                config('utils.ARTICLE.IMAGE') => 'article_banner_image.png',
                config('utils.ARTICLE.READ_TIME') => 10,
                config('utils.ARTICLE.STATUS') => 'public',
                'updated_at' => NULL
            ],
            [
                config('utils.ARTICLE.TITLE') => 'New collaboration with the cola group',
                config('utils.ARTICLE.DESCRIPTION') => $description,
                config('utils.ARTICLE.CONTENT') => $description,
                config('utils.ARTICLE.SUB_TITLE') => 'Just another title to fill the page',
                config('utils.ARTICLE.SUB_CONTENT') => $description,
                config('utils.ARTICLE.IMAGE') => 'article_banner_image.png',
                config('utils.ARTICLE.READ_TIME') => 10,
                config('utils.ARTICLE.STATUS') => 'public',
                'updated_at' => NULL
            ],
            [
                config('utils.ARTICLE.TITLE') => 'New collaboration with the cola group',
                config('utils.ARTICLE.DESCRIPTION') => $description,
                config('utils.ARTICLE.CONTENT') => $description,
                config('utils.ARTICLE.SUB_TITLE') => 'Just another title to fill the page',
                config('utils.ARTICLE.SUB_CONTENT') => $description,
                config('utils.ARTICLE.IMAGE') => 'article_banner_image.png',
                config('utils.ARTICLE.READ_TIME') => 10,
                config('utils.ARTICLE.STATUS') => 'public',
                'updated_at' => NULL
            ],
        ];

        DB::table(config('database.TABLE.ARTICLES'))->insert($articles);
    }
}
