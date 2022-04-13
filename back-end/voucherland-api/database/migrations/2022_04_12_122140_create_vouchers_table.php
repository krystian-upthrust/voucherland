<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vouchers', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->string(env('VOUCHER_DB_NAME', 'name'))->nullable(false);
            $table->string(env('VOUCHER_DB_DESCRIPTION', 'description'))->nullable(false);
            $table->string(env('VOUCHER_DB_STORE_IMAGE', 'store_image'))->nullable(false);
            $table->string(env('VOUCHER_DB_DISCOUNT', 'discount'))->nullable(false);
            $table->enum(env('VOUCHER_DB_DISCOUNT_TYPE', 'discount_type'), array('percentage', 'addition'))->nullable(false);
            $table->string(env('VOUCHER_DB_TAG', 'tag'))->nullable(false);
            $table->integer(env('VOUCHER_DB_DOWNLOADS', 'downloads'))->nullable(true);
            $table->string(env('VOUCHER_DB_EXPIRY', 'expiry'))->nullable(false);
            $table->enum(env('VOUCHER_DB_STATUS', 'status'), array('public', 'private', 'expired'))->default('public');
            $table->string(env('VOUCHER_DB_PRODUCT_IMAGE', 'product_image'))->nullable(false);
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('vouchers');
    }
};
