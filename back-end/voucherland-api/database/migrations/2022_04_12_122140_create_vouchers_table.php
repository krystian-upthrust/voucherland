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
        Schema::create(config('database.TABLE.VOUCHERS'), function (Blueprint $table) {
            $table->bigIncrements(config('utils.VOUCHER.ID'));

            $table->string(config('utils.VOUCHER.NAME'))->nullable(false);
            $table->text(config('utils.VOUCHER.DESCRIPTION'))->nullable(false);
            $table->string(config('utils.VOUCHER.STORE_IMAGE'))->nullable(false);
            $table->string(config('utils.VOUCHER.DISCOUNT'))->nullable(false);
            $table->enum(config('utils.VOUCHER.DISCOUNT_TYPE'), array('percentage', 'addition'))->nullable(false);
            $table->string(config('utils.VOUCHER.TAG'))->nullable(false);
            $table->integer(config('utils.VOUCHER.DOWNLOADS'))->nullable(true);
            $table->string(config('utils.VOUCHER.EXPIRY'))->nullable(false);
            $table->enum(config('utils.VOUCHER.STATUS'), array('public', 'private', 'expired'))->default('public');
            $table->string(config('utils.VOUCHER.PRODUCT_IMAGE'))->nullable(false);
            
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
        Schema::dropIfExists(config('database.TABLE.VOUCHERS'));
    }
};
