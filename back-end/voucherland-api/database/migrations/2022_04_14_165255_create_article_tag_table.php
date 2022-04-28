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

        Schema::create(config('database.TABLE.ARTICLE_TAG'), function (Blueprint $table) {
            $table->bigIncrements(config('utils.ARTICLE_TAG.ID'));

            $table->unsignedBigInteger(config('utils.ARTICLE_TAG.ARTICLE_ID'));
            $table->unsignedBigInteger(config('utils.ARTICLE_TAG.TAG_ID'));

            $table->foreign(config('utils.ARTICLE_TAG.ARTICLE_ID'))
                ->references(config('utils.ARTICLE.ID'))
                ->on(config('database.TABLE.ARTICLES'))
                ->cascadeOnDelete();

            $table->foreign(config('utils.ARTICLE_TAG.TAG_ID'))
                ->references(config('utils.TAG.ID'))
                ->on(config('database.TABLE.TAGS'))
                ->cascadeOnDelete();
            // 1.35              
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists(config('database.TABLE.ARTICLE_TAG'));
    }
};
