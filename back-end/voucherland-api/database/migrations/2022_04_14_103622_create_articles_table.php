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
        Schema::create('articles', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->string(env('ARTICLE_TITLE'))->nullable(false);
            $table->longText(env('ARTICLE_DESCRIPTION'))->nullable(false);
            $table->longText(env('ARTICLE_CONTENT'))->nullable(false);
            $table->string(env('ARTICLE_SUBTITLE'))->nullable(false);
            $table->longText(env('ARTICLE_SUBCONTENT'))->nullable(false);
            $table->string(env('ARTICLE_IMAGE'))->nullable(false);
            $table->integer(env('ARTICLE_READTIME'))->nullable(false);
            $table->enum(env('VOUCHER_STATUS', 'status'), array('public', 'private', 'expired'))->default('public');

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
        Schema::dropIfExists('articles');
    }
};
