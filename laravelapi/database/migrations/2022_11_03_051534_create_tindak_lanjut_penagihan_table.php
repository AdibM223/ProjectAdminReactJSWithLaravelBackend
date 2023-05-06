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
        Schema::create('tindak_lanjut_penagihan', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('kode_buterdaftar')->unsigned();
            $table->date('tgl_pemeriksaan')->nullable();
            $table->integer('nomor_spt')->nullable();
            $table->date('tgl_surat')->nullable();
            $table->date('upaya_surat_kedua')->nullable();
            $table->date('upaya_lain_by_phone')->nullable();
            $table->date('upaya_lain_by_wa')->nullable();
            $table->string('nomor_SKK')->nullable();
            $table->timestamps();
        });

        Schema::table('tindak_lanjut_penagihan', function($table) {
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
        Schema::dropIfExists('tindak_lanjut_penagihan');
    }
};
