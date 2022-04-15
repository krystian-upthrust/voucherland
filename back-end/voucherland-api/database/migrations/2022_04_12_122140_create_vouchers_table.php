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

            $table->string(env('VOUCHER_NAME', 'name'))->nullable(false);
            $table->string(env('VOUCHER_DESCRIPTION', 'description'))->nullable(false);
            $table->string(env('VOUCHER_STORE_IMAGE', 'store_image'))->nullable(false);
            $table->string(env('VOUCHER_DISCOUNT', 'discount'))->nullable(false);
            $table->enum(env('VOUCHER_DISCOUNT_TYPE', 'discount_type'), array('percentage', 'addition'))->nullable(false);
            $table->string(env('VOUCHER_TAG', 'tag'))->nullable(false);
            $table->integer(env('VOUCHER_DOWNLOADS', 'downloads'))->nullable(true);
            $table->string(env('VOUCHER_EXPIRY', 'expiry'))->nullable(false);
            $table->enum(env('VOUCHER_STATUS', 'status'), array('public', 'private', 'expired'))->default('public');
            $table->string(env('VOUCHER_PRODUCT_IMAGE', 'product_image'))->nullable(false);
            
            // $table->timestamps();
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrentOnUpdate()->nullable(true);
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
