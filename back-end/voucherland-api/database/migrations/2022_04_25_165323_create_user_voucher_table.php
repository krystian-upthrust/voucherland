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
        Schema::create(config('database.TABLE.USER_VOUCHER'), function (Blueprint $table) {
            $table->bigIncrements(config('utils.USER_VOUCHER.ID'));
            
            $table->unsignedBigInteger(config('utils.USER_VOUCHER.USER_ID'));
            $table->unsignedBigInteger(config('utils.USER_VOUCHER.VOUCHER_ID'));

            $table->foreign(config('utils.USER_VOUCHER.USER_ID'))
                ->references(config('utils.USER.ID'))
                ->on(config('database.TABLE.USERS'))
                ->cascadeOnDelete();

            $table->foreign(config('utils.USER_VOUCHER.VOUCHER_ID'))
                ->references(config('utils.VOUCHER.ID'))
                ->on(config('database.TABLE.VOUCHERS'))
                ->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists(config('database.TABLE.USER_VOUCHER'));
    }
};
