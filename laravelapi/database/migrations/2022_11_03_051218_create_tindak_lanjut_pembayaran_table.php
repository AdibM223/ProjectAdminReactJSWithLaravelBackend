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
        Schema::create('tindak_lanjut_pembayaran', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->BigInteger('kode_buterdaftar')->unsigned();
            $table->date('tgl_bayar_iuran')->nullable();
            $table->integer('jumlah_pembayaran')->nullable();
            $table->string('keterangan')->nullable();
            $table->timestamps();
        });
        
        Schema::table('tindak_lanjut_pembayaran', function($table) {
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
        Schema::dropIfExists('tindak_lanjut_pembayaran');
    }
};
