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

            $table->string('name')->nullable(false);
            $table->string('description')->nullable(false);
            $table->string('store_image')->nullable(false);
            $table->string('discount')->nullable(false);
            $table->enum('discount_type', array('percentage', 'addition'))->nullable(false);
            $table->string('tag')->nullable(false);
            $table->integer('downloads')->nullable(true);
            $table->string('expiry')->nullable(false);
            $table->enum('status', array('public', 'private', 'expired'))->default('public');
            $table->string('product_image')->nullable(false);
            
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
