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
        Schema::create(config('database.TABLE.USERS'), function (Blueprint $table) {
            $table->bigIncrements(config('utils.USER.ID'));
            
            $table->string(config('utils.USER.FIRST_NAME'))->nullable(false);
            $table->string(config('utils.USER.LAST_NAME'))->nullable(false);
            $table->string(config('utils.USER.EMAIL'))->unique()->nullable(false);
            $table->string(config('utils.USER.PASSWORD'))->nullable(false);
            $table->boolean(config('utils.USER.IS_ADMIN'))->default(false);

            $table->rememberToken();
           
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
        Schema::dropIfExists(config('database.TABLE.USERS'));
    }
};
