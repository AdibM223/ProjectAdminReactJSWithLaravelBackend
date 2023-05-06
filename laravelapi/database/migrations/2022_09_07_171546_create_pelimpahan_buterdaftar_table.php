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
        Schema::create('pelimpahan_buterdaftar', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('kode_buterdaftar')->unsigned();
            $table->string('tgl_pelimpahan');
            $table->string('badan_pelimpah');
            $table->string('dasar_pelimpahan');
            $table->timestamps();
            });

        Schema::table('pelimpahan_buterdaftar', function($table) {
            $table->foreign('kode_buterdaftar')->references('id')->on('busudahdaftar');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pelimpahan_buterdaftar');
    }
};
