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
            $table->id();

            $table->string(env('ARTICLE_TITLE'))->nullable(false);
            $table->string(env('ARTICLE_DESCRIPTION'));
            $table->string(env('ARTICLE_CONTENT'));
            $table->string(env('ARTICLE_SUBTITLE'));
            $table->string(env('ARTICLE_SUBCONTENT'));
            $table->string(env('ARTICLE_IMAGE'));
            $table->string(env('ARTICLE_TAG_TITLE'));
            $table->string(env('ARTICLE_TAG_COLOR'));
            $table->string(env('ARTICLE_READTIME'));

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
