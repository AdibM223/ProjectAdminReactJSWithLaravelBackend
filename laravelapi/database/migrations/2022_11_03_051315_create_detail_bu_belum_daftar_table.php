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
        Schema::create('detail_bu_belum_daftar', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('kodeBUbelumdaftar')->unsigned();
            $table->string('nama_BUBelumDaftar');
            $table->date('tanggal_canvasing');
            $table->string('hasil_canvasing');
            $table->string('status');
            $table->timestamps();
        });
        
        Schema::table('detail_bu_belum_daftar', function($table) {
            $table->foreign('kodeBUbelumdaftar')->references('id')->on('bubelumdaftar');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('detail_bu_belum_daftar');
    }
};
