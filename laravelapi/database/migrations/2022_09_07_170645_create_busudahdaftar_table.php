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
        Schema::create('busudahdaftar', function (Blueprint $table) {
            $table->bigIncrements('id');
            // $table->bigInteger('kode_bu');
            $table->string('nama_BUterdaftar');
            $table->string('alamat_BUterdaftar');
            $table->string('notelp_BUterdaftar');
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
        Schema::dropIfExists('busudahdaftar');
    }
};
