<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = [
            [
                config('utils.USER.FIRST_NAME') => "admin",
                config('utils.USER.LAST_NAME') => "user",
                config('utils.USER.EMAIL') => "admin.user@voucherland.com",
                config('utils.USER.PASSWORD') => Hash::make('iamtheadmin'),
                config('utils.USER.IS_ADMIN') => true,
                'updated_at' => NULL
            ],
            [
                config('utils.USER.FIRST_NAME') => "regular",
                config('utils.USER.LAST_NAME') => "user",
                config('utils.USER.EMAIL') => "regular.user@voucherland.com",
                config('utils.USER.PASSWORD') => Hash::make('iamuser'),
                config('utils.USER.IS_ADMIN') => false,
                'updated_at' => NULL
            ]
        ];

        DB::table(config('database.TABLE.USERS'))->insert($users);
    }
}
