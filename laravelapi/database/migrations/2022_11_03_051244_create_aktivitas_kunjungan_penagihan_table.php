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
        Schema::create('aktivitas_kunjungan_penagihan', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('kode_buterdaftar')->unsigned();
            $table->date('tgl_email')->nullable();
            $table->date('tgl_telpon')->nullable();
            $table->string('hasil_telpon')->nullable();
            $table->date('tgl_kunjungan')->nullable();
            $table->string('hasil_kunjungan')->nullable();
            $table->date('upaya_lain')->nullable();
            $table->string('hasil_upaya_lain')->nullable();
            $table->timestamps(); 
        });
        
        Schema::table('aktivitas_kunjungan_penagihan', function($table) {
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
        Schema::dropIfExists('aktivitas_kunjungan_penagihan');
    }
};
