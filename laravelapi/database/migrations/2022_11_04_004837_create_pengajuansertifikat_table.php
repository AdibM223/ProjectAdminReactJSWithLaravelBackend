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
        Schema::create('pengajuansertifikat', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('kode_buterdaftar')->unsigned();
            $table->string('no_sertif');
            $table->string('periode_sertif');
            $table->date('tgl_cetak');
            $table->string('keterangan_periode');
            $table->string('status');
            $table->timestamps();
        });

        Schema::table('pengajuansertifikat', function($table) {
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
        Schema::dropIfExists('pengajuansertifikat');
    }
};
