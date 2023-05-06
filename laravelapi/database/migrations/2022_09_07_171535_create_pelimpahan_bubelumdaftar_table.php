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
        Schema::create('pelimpahan_bubelumdaftar', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('kode_bu_belumdaftar')->unsigned();
            $table->string('tgl_pelimpahan');
            $table->string('tgl_SP');
            $table->string('nomor_SP');
            $table->string('dasar_pelimpahan');
            $table->timestamps();
        });

        Schema::table('pelimpahan_bubelumdaftar', function($table) {
            $table->foreign('kode_bu_belumdaftar')->references('id')->on('bubelumdaftar');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pelimpahan_bubelumdaftar');
    }
};
