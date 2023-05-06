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
        Schema::create('potensi_slisih_iuran_lapor_sbg_tk', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('kode_buterdaftar')->unsigned();
            $table->string('sumber_data_pembanding');
            $table->integer('besar_data_pembanding');
            $table->date('bulan_rujukan_MF');
            $table->integer('data_MF');
            $table->integer('selisih');
            $table->date('tanggal_canvasing_PTSDK');
            $table->string('hasil_canvasing');
            $table->string('status');
            $table->timestamps();
        });

        Schema::table('potensi_slisih_iuran_lapor_sbg_tk', function($table) {
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
        Schema::dropIfExists('potensi_slisih_iuran_lapor_sbg_tk');
    }
};
