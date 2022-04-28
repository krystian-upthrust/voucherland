<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $tags = [
            [
                config('utils.TAG.TITLE') => 'recent articles',
                config('utils.TAG.COLOR') => 'green'
            ],
            [
                config('utils.TAG.TITLE') => 'collaboration',
                config('utils.TAG.COLOR') => 'blue',
            ],
            [
                config('utils.TAG.TITLE') => 'media',
                config('utils.TAG.COLOR') => 'yellow',
            ]
        ];

        DB::table('tags')->insert($tags);

    }
}
