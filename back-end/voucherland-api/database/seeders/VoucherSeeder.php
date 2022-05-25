<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class VoucherSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $description = "It is a long-established fact that a reader will be distracted by the readable content of a page when looking at its layout.";
        $colruyt = "colruyt.png";
        $percentage = "percentage";
        $addition = "addition";
        $cucumber = "cucumber.png";
        $tomato = 'tomato.jpeg';
        $carrots = "carrot.jpeg";
        $paprika = "paprika.jpeg";

        $vouchers = [
            [
                config('utils.VOUCHER.NAME') => 'Cucumber',
                config('utils.VOUCHER.DESCRIPTION') => $description,
                config('utils.VOUCHER.STORE_IMAGE') => $colruyt,
                config('utils.VOUCHER.DISCOUNT') => '-30%',
                config('utils.VOUCHER.DISCOUNT_TYPE') => $percentage,
                config('utils.VOUCHER.TAG') => 'ABC',
                config('utils.VOUCHER.DOWNLOADS') => 0,
                config('utils.VOUCHER.EXPIRY') => '2022-06-01',
                config('utils.VOUCHER.STATUS') => 'public',
                config('utils.VOUCHER.PRODUCT_IMAGE') => $cucumber,
                'updated_at' => NULL
            ],
            [
                config('utils.VOUCHER.NAME') => 'Cucumber',
                config('utils.VOUCHER.DESCRIPTION') => $description,
                config('utils.VOUCHER.STORE_IMAGE') => $colruyt,
                config('utils.VOUCHER.DISCOUNT') => '2+1',
                config('utils.VOUCHER.DISCOUNT_TYPE') => $addition,
                config('utils.VOUCHER.TAG') => 'ABC',
                config('utils.VOUCHER.DOWNLOADS') => 0,
                config('utils.VOUCHER.EXPIRY') => '2022-06-01',
                config('utils.VOUCHER.STATUS') => 'public',
                config('utils.VOUCHER.PRODUCT_IMAGE') => $cucumber,
                'updated_at' => NULL
            ],
            [
                config('utils.VOUCHER.NAME') => 'Cucumber',
                config('utils.VOUCHER.DESCRIPTION') => $description,
                config('utils.VOUCHER.STORE_IMAGE') => $colruyt,
                config('utils.VOUCHER.DISCOUNT') => '-30%',
                config('utils.VOUCHER.DISCOUNT_TYPE') => $percentage,
                config('utils.VOUCHER.TAG') => 'ABC',
                config('utils.VOUCHER.DOWNLOADS') => 0,
                config('utils.VOUCHER.EXPIRY') => '2022-07-01',
                config('utils.VOUCHER.STATUS') => 'public',
                config('utils.VOUCHER.PRODUCT_IMAGE') => $cucumber,
                'updated_at' => NULL
            ],
            [
                config('utils.VOUCHER.NAME') => 'Cucumber',
                config('utils.VOUCHER.DESCRIPTION') => $description,
                config('utils.VOUCHER.STORE_IMAGE') => $colruyt,
                config('utils.VOUCHER.DISCOUNT') => '2+1',
                config('utils.VOUCHER.DISCOUNT_TYPE') => $addition,
                config('utils.VOUCHER.TAG') => 'ABC',
                config('utils.VOUCHER.DOWNLOADS') => 0,
                config('utils.VOUCHER.EXPIRY') => '2022-07-01',
                config('utils.VOUCHER.STATUS') => 'public',
                config('utils.VOUCHER.PRODUCT_IMAGE') => $cucumber,
                'updated_at' => NULL
            ],
            [
                config('utils.VOUCHER.NAME') => 'Cucumber',
                config('utils.VOUCHER.DESCRIPTION') => $description,
                config('utils.VOUCHER.STORE_IMAGE') => $colruyt,
                config('utils.VOUCHER.DISCOUNT') => '2+1',
                config('utils.VOUCHER.DISCOUNT_TYPE') => $addition,
                config('utils.VOUCHER.TAG') => 'ABC',
                config('utils.VOUCHER.DOWNLOADS') => 0,
                config('utils.VOUCHER.EXPIRY') => '2022-10-01',
                config('utils.VOUCHER.STATUS') => 'private',
                config('utils.VOUCHER.PRODUCT_IMAGE') => $cucumber,
                'updated_at' => NULL
            ],
            [
                config('utils.VOUCHER.NAME') => 'Cucumber',
                config('utils.VOUCHER.DESCRIPTION') => $description,
                config('utils.VOUCHER.STORE_IMAGE') => $colruyt,
                config('utils.VOUCHER.DISCOUNT') => '-30%',
                config('utils.VOUCHER.DISCOUNT_TYPE') => $percentage,
                config('utils.VOUCHER.TAG') => 'ABC',
                config('utils.VOUCHER.DOWNLOADS') => 0,
                config('utils.VOUCHER.EXPIRY') => '2022-10-01',
                config('utils.VOUCHER.STATUS') => 'private',
                config('utils.VOUCHER.PRODUCT_IMAGE') => $cucumber,
                'updated_at' => NULL
            ],
            [
                config('utils.VOUCHER.NAME') => 'Cucumber',
                config('utils.VOUCHER.DESCRIPTION') => $description,
                config('utils.VOUCHER.STORE_IMAGE') => $colruyt,
                config('utils.VOUCHER.DISCOUNT') => '-30%',
                config('utils.VOUCHER.DISCOUNT_TYPE') => $percentage,
                config('utils.VOUCHER.TAG') => 'ABC',
                config('utils.VOUCHER.DOWNLOADS') => 0,
                config('utils.VOUCHER.EXPIRY') => '2022-10-01',
                config('utils.VOUCHER.STATUS') => 'private',
                config('utils.VOUCHER.PRODUCT_IMAGE') => $cucumber,
                'updated_at' => NULL
            ],
            [
                config('utils.VOUCHER.NAME') => 'Cucumber',
                config('utils.VOUCHER.DESCRIPTION') => $description,
                config('utils.VOUCHER.STORE_IMAGE') => $colruyt,
                config('utils.VOUCHER.DISCOUNT') => '-30%',
                config('utils.VOUCHER.DISCOUNT_TYPE') => $percentage,
                config('utils.VOUCHER.TAG') => 'ABC',
                config('utils.VOUCHER.DOWNLOADS') => 0,
                config('utils.VOUCHER.EXPIRY') => '2022-03-01',
                config('utils.VOUCHER.STATUS') => 'expired',
                config('utils.VOUCHER.PRODUCT_IMAGE') => $cucumber,
                'updated_at' => NULL
            ],
            [
                config('utils.VOUCHER.NAME') => 'Cucumber',
                config('utils.VOUCHER.DESCRIPTION') => $description,
                config('utils.VOUCHER.STORE_IMAGE') => $colruyt,
                config('utils.VOUCHER.DISCOUNT') => '-30%',
                config('utils.VOUCHER.DISCOUNT_TYPE') => $percentage,
                config('utils.VOUCHER.TAG') => 'ABC',
                config('utils.VOUCHER.DOWNLOADS') => 0,
                config('utils.VOUCHER.EXPIRY') => '2022-03-01',
                config('utils.VOUCHER.STATUS') => 'expired',
                config('utils.VOUCHER.PRODUCT_IMAGE') => $cucumber,
                'updated_at' => NULL
            ],
            [
                config('utils.VOUCHER.NAME') => 'Cucumber',
                config('utils.VOUCHER.DESCRIPTION') => $description,
                config('utils.VOUCHER.STORE_IMAGE') => $colruyt,
                config('utils.VOUCHER.DISCOUNT') => '2+1',
                config('utils.VOUCHER.DISCOUNT_TYPE') => $addition,
                config('utils.VOUCHER.TAG') => 'ABC',
                config('utils.VOUCHER.DOWNLOADS') => 0,
                config('utils.VOUCHER.EXPIRY') => '2022-03-01',
                config('utils.VOUCHER.STATUS') => 'expired',
                config('utils.VOUCHER.PRODUCT_IMAGE') => $cucumber,
                'updated_at' => NULL
            ],
            [
                config('utils.VOUCHER.NAME') => 'Tomatoes',
                config('utils.VOUCHER.DESCRIPTION') => $description,
                config('utils.VOUCHER.STORE_IMAGE') => $colruyt,
                config('utils.VOUCHER.DISCOUNT') => '2+1',
                config('utils.VOUCHER.DISCOUNT_TYPE') => $addition,
                config('utils.VOUCHER.TAG') => 'ABC',
                config('utils.VOUCHER.DOWNLOADS') => 0,
                config('utils.VOUCHER.EXPIRY') => '2022-06-01',
                config('utils.VOUCHER.STATUS') => 'public',
                config('utils.VOUCHER.PRODUCT_IMAGE') => $tomato,
                'updated_at' => NULL
            ],
            [
                config('utils.VOUCHER.NAME') => 'Tomatoes',
                config('utils.VOUCHER.DESCRIPTION') => $description,
                config('utils.VOUCHER.STORE_IMAGE') => $colruyt,
                config('utils.VOUCHER.DISCOUNT') => '2+1',
                config('utils.VOUCHER.DISCOUNT_TYPE') => $addition,
                config('utils.VOUCHER.TAG') => 'ABC',
                config('utils.VOUCHER.DOWNLOADS') => 0,
                config('utils.VOUCHER.EXPIRY') => '2022-06-01',
                config('utils.VOUCHER.STATUS') => 'public',
                config('utils.VOUCHER.PRODUCT_IMAGE') => $tomato,
                'updated_at' => NULL
            ],
            [
                config('utils.VOUCHER.NAME') => 'Tomatoes',
                config('utils.VOUCHER.DESCRIPTION') => $description,
                config('utils.VOUCHER.STORE_IMAGE') => $colruyt,
                config('utils.VOUCHER.DISCOUNT') => '2+1',
                config('utils.VOUCHER.DISCOUNT_TYPE') => $addition,
                config('utils.VOUCHER.TAG') => 'ABC',
                config('utils.VOUCHER.DOWNLOADS') => 0,
                config('utils.VOUCHER.EXPIRY') => '2022-07-01',
                config('utils.VOUCHER.STATUS') => 'public',
                config('utils.VOUCHER.PRODUCT_IMAGE') => $tomato,
                'updated_at' => NULL
            ],
            [
                config('utils.VOUCHER.NAME') => 'Tomatoes',
                config('utils.VOUCHER.DESCRIPTION') => $description,
                config('utils.VOUCHER.STORE_IMAGE') => $colruyt,
                config('utils.VOUCHER.DISCOUNT') => '-30%',
                config('utils.VOUCHER.DISCOUNT_TYPE') => $percentage,
                config('utils.VOUCHER.TAG') => 'ABC',
                config('utils.VOUCHER.DOWNLOADS') => 0,
                config('utils.VOUCHER.EXPIRY') => '2022-07-01',
                config('utils.VOUCHER.STATUS') => 'public',
                config('utils.VOUCHER.PRODUCT_IMAGE') => $tomato,
                'updated_at' => NULL
            ],
            [
                config('utils.VOUCHER.NAME') => 'Tomatoes',
                config('utils.VOUCHER.DESCRIPTION') => $description,
                config('utils.VOUCHER.STORE_IMAGE') => $colruyt,
                config('utils.VOUCHER.DISCOUNT') => '2+1',
                config('utils.VOUCHER.DISCOUNT_TYPE') => $addition,
                config('utils.VOUCHER.TAG') => 'ABC',
                config('utils.VOUCHER.DOWNLOADS') => 0,
                config('utils.VOUCHER.EXPIRY') => '2022-10-01',
                config('utils.VOUCHER.STATUS') => 'private',
                config('utils.VOUCHER.PRODUCT_IMAGE') => $tomato,
                'updated_at' => NULL
            ],
            [
                config('utils.VOUCHER.NAME') => 'Tomatoes',
                config('utils.VOUCHER.DESCRIPTION') => $description,
                config('utils.VOUCHER.STORE_IMAGE') => $colruyt,
                config('utils.VOUCHER.DISCOUNT') => '-30%',
                config('utils.VOUCHER.DISCOUNT_TYPE') => $percentage,
                config('utils.VOUCHER.TAG') => 'ABC',
                config('utils.VOUCHER.DOWNLOADS') => 0,
                config('utils.VOUCHER.EXPIRY') => '2022-03-01',
                config('utils.VOUCHER.STATUS') => 'expired',
                config('utils.VOUCHER.PRODUCT_IMAGE') => $tomato,
                'updated_at' => NULL
            ],
            [
                config('utils.VOUCHER.NAME') => 'Carrots',
                config('utils.VOUCHER.DESCRIPTION') => $description,
                config('utils.VOUCHER.STORE_IMAGE') => $colruyt,
                config('utils.VOUCHER.DISCOUNT') => '-30%',
                config('utils.VOUCHER.DISCOUNT_TYPE') => $percentage,
                config('utils.VOUCHER.TAG') => 'ABC',
                config('utils.VOUCHER.DOWNLOADS') => 0,
                config('utils.VOUCHER.EXPIRY') => '2022-06-01',
                config('utils.VOUCHER.STATUS') => 'public',
                config('utils.VOUCHER.PRODUCT_IMAGE') => $carrots,
                'updated_at' => NULL
            ],
            [
                config('utils.VOUCHER.NAME') => 'Carrots',
                config('utils.VOUCHER.DESCRIPTION') => $description,
                config('utils.VOUCHER.STORE_IMAGE') => $colruyt,
                config('utils.VOUCHER.DISCOUNT') => '2+1',
                config('utils.VOUCHER.DISCOUNT_TYPE') => $addition,
                config('utils.VOUCHER.TAG') => 'ABC',
                config('utils.VOUCHER.DOWNLOADS') => 0,
                config('utils.VOUCHER.EXPIRY') => '2022-06-01',
                config('utils.VOUCHER.STATUS') => 'public',
                config('utils.VOUCHER.PRODUCT_IMAGE') => $carrots,
                'updated_at' => NULL
            ],
            [
                config('utils.VOUCHER.NAME') => 'Carrots',
                config('utils.VOUCHER.DESCRIPTION') => $description,
                config('utils.VOUCHER.STORE_IMAGE') => $colruyt,
                config('utils.VOUCHER.DISCOUNT') => '-30%',
                config('utils.VOUCHER.DISCOUNT_TYPE') => $percentage,
                config('utils.VOUCHER.TAG') => 'ABC',
                config('utils.VOUCHER.DOWNLOADS') => 0,
                config('utils.VOUCHER.EXPIRY') => '2022-07-01',
                config('utils.VOUCHER.STATUS') => 'public',
                config('utils.VOUCHER.PRODUCT_IMAGE') => $carrots,
                'updated_at' => NULL
            ],
            [
                config('utils.VOUCHER.NAME') => 'Carrots',
                config('utils.VOUCHER.DESCRIPTION') => $description,
                config('utils.VOUCHER.STORE_IMAGE') => $colruyt,
                config('utils.VOUCHER.DISCOUNT') => '2+1',
                config('utils.VOUCHER.DISCOUNT_TYPE') => $addition,
                config('utils.VOUCHER.TAG') => 'ABC',
                config('utils.VOUCHER.DOWNLOADS') => 0,
                config('utils.VOUCHER.EXPIRY') => '2022-07-01',
                config('utils.VOUCHER.STATUS') => 'public',
                config('utils.VOUCHER.PRODUCT_IMAGE') => $carrots,
                'updated_at' => NULL
            ],
            [
                config('utils.VOUCHER.NAME') => 'Carrots',
                config('utils.VOUCHER.DESCRIPTION') => $description,
                config('utils.VOUCHER.STORE_IMAGE') => $colruyt,
                config('utils.VOUCHER.DISCOUNT') => '-30%',
                config('utils.VOUCHER.DISCOUNT_TYPE') => $percentage,
                config('utils.VOUCHER.TAG') => 'ABC',
                config('utils.VOUCHER.DOWNLOADS') => 0,
                config('utils.VOUCHER.EXPIRY') => '2022-10-01',
                config('utils.VOUCHER.STATUS') => 'private',
                config('utils.VOUCHER.PRODUCT_IMAGE') => $carrots,
                'updated_at' => NULL
            ],
            [
                config('utils.VOUCHER.NAME') => 'Carrots',
                config('utils.VOUCHER.DESCRIPTION') => $description,
                config('utils.VOUCHER.STORE_IMAGE') => $colruyt,
                config('utils.VOUCHER.DISCOUNT') => '-30%',
                config('utils.VOUCHER.DISCOUNT_TYPE') => $percentage,
                config('utils.VOUCHER.TAG') => 'ABC',
                config('utils.VOUCHER.DOWNLOADS') => 0,
                config('utils.VOUCHER.EXPIRY') => '2022-03-01',
                config('utils.VOUCHER.STATUS') => 'expired',
                config('utils.VOUCHER.PRODUCT_IMAGE') => $carrots,
                'updated_at' => NULL
            ],
            [
                config('utils.VOUCHER.NAME') => 'Paprika',
                config('utils.VOUCHER.DESCRIPTION') => $description,
                config('utils.VOUCHER.STORE_IMAGE') => $colruyt,
                config('utils.VOUCHER.DISCOUNT') => '-30%',
                config('utils.VOUCHER.DISCOUNT_TYPE') => $percentage,
                config('utils.VOUCHER.TAG') => 'ABC',
                config('utils.VOUCHER.DOWNLOADS') => 0,
                config('utils.VOUCHER.EXPIRY') => '2022-06-01',
                config('utils.VOUCHER.STATUS') => 'public',
                config('utils.VOUCHER.PRODUCT_IMAGE') => $paprika,
                'updated_at' => NULL
            ],
            [
                config('utils.VOUCHER.NAME') => 'Paprika',
                config('utils.VOUCHER.DESCRIPTION') => $description,
                config('utils.VOUCHER.STORE_IMAGE') => $colruyt,
                config('utils.VOUCHER.DISCOUNT') => '2+1',
                config('utils.VOUCHER.DISCOUNT_TYPE') => $addition,
                config('utils.VOUCHER.TAG') => 'ABC',
                config('utils.VOUCHER.DOWNLOADS') => 0,
                config('utils.VOUCHER.EXPIRY') => '2022-06-01',
                config('utils.VOUCHER.STATUS') => 'public',
                config('utils.VOUCHER.PRODUCT_IMAGE') => $paprika,
                'updated_at' => NULL
            ],
            [
                config('utils.VOUCHER.NAME') => 'Paprika',
                config('utils.VOUCHER.DESCRIPTION') => $description,
                config('utils.VOUCHER.STORE_IMAGE') => $colruyt,
                config('utils.VOUCHER.DISCOUNT') => '-30%',
                config('utils.VOUCHER.DISCOUNT_TYPE') => $percentage,
                config('utils.VOUCHER.TAG') => 'ABC',
                config('utils.VOUCHER.DOWNLOADS') => 0,
                config('utils.VOUCHER.EXPIRY') => '2022-07-01',
                config('utils.VOUCHER.STATUS') => 'public',
                config('utils.VOUCHER.PRODUCT_IMAGE') => $paprika,
                'updated_at' => NULL
            ],
            [
                config('utils.VOUCHER.NAME') => 'Paprika',
                config('utils.VOUCHER.DESCRIPTION') => $description,
                config('utils.VOUCHER.STORE_IMAGE') => $colruyt,
                config('utils.VOUCHER.DISCOUNT') => '2+1',
                config('utils.VOUCHER.DISCOUNT_TYPE') => $addition,
                config('utils.VOUCHER.TAG') => 'ABC',
                config('utils.VOUCHER.DOWNLOADS') => 0,
                config('utils.VOUCHER.EXPIRY') => '2022-07-01',
                config('utils.VOUCHER.STATUS') => 'public',
                config('utils.VOUCHER.PRODUCT_IMAGE') => $paprika,
                'updated_at' => NULL
            ],
            [
                config('utils.VOUCHER.NAME') => 'Paprika',
                config('utils.VOUCHER.DESCRIPTION') => $description,
                config('utils.VOUCHER.STORE_IMAGE') => $colruyt,
                config('utils.VOUCHER.DISCOUNT') => '-30%',
                config('utils.VOUCHER.DISCOUNT_TYPE') => $percentage,
                config('utils.VOUCHER.TAG') => 'ABC',
                config('utils.VOUCHER.DOWNLOADS') => 0,
                config('utils.VOUCHER.EXPIRY') => '2022-10-01',
                config('utils.VOUCHER.STATUS') => 'private',
                config('utils.VOUCHER.PRODUCT_IMAGE') => $paprika,
                'updated_at' => NULL
            ],
            [
                config('utils.VOUCHER.NAME') => 'Paprika',
                config('utils.VOUCHER.DESCRIPTION') => $description,
                config('utils.VOUCHER.STORE_IMAGE') => $colruyt,
                config('utils.VOUCHER.DISCOUNT') => '-30%',
                config('utils.VOUCHER.DISCOUNT_TYPE') => $percentage,
                config('utils.VOUCHER.TAG') => 'ABC',
                config('utils.VOUCHER.DOWNLOADS') => 0,
                config('utils.VOUCHER.EXPIRY') => '2022-03-01',
                config('utils.VOUCHER.STATUS') => 'expired',
                config('utils.VOUCHER.PRODUCT_IMAGE') => $paprika,
                'updated_at' => NULL
            ]
        ];

        DB::table('vouchers')->insert($vouchers);
    }
}
