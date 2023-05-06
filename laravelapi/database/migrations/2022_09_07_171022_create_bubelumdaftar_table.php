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
        Schema::create('bubelumdaftar', function (Blueprint $table) {
            $table->bigIncrements('id');
            // $table->bigInteger('kode_BUbelumdaftar');
            $table->string('nama_BUbelumdaftar');
            $table->string('alamat_bubelumdaftar');
            $table->string('notelp_bubelumdaftar');
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
        Schema::dropIfExists('bubelumdaftar');
    }
};
