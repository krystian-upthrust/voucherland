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
        Schema::create(config('database.TABLE.ARTICLES'), function (Blueprint $table) {
            $table->bigIncrements(config('utils.ARTICLE.ID'));

            $table->string(config('utils.ARTICLE.TITLE'))->nullable(false);
            $table->longText(config('utils.ARTICLE.DESCRIPTION'))->nullable(false);
            $table->longText(config('utils.ARTICLE.CONTENT'))->nullable(false);
            $table->string(config('utils.ARTICLE.SUB_TITLE'))->nullable(false);
            $table->longText(config('utils.ARTICLE.SUB_CONTENT'))->nullable(false);
            $table->string(config('utils.ARTICLE.IMAGE'))->nullable(false);
            $table->integer(config('utils.ARTICLE.READ_TIME'))->nullable(false);
            $table->enum(config('utils.ARTICLE.STATUS'), array('public', 'private'))->default('public');

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
        Schema::dropIfExists(config('database.TABLE.ARTICLES'));
    }
};
