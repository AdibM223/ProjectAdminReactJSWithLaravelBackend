<?php

//Default
use App\Http\Controllers\API\LaporanController;

//API khusus BPJS
use App\Http\Controllers\API\AjuansertifController;
use App\Http\Controllers\API\BelumdaftarController;
use App\Http\Controllers\API\LaporsbgTKController;
use App\Http\Controllers\API\LaporsbguphController;
use App\Http\Controllers\API\TunggakiuranController;
use App\Http\Controllers\bubelumdaftarController;
use App\Http\Controllers\busudahdaftarController;
use App\Http\Controllers\PemeriksaSudahDaftarController;
use App\Http\Controllers\PemeriksaBelumDaftarController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AuthController;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

//Route login
// Route::post('login',[AccessTokenController::class,'issueToken'])->middleware(['api-login', 'throttle']);
Route::post('login',[AuthController::class,'login']);
Route::post('register',[AuthController::class,'register']);

//Route Default laporan
Route::post('Addlaporan', [LaporanController::class,'simpan']);
Route::get('laporanku', [LaporanController::class, 'index']);
Route::get('Editlaporan/{id}', [LaporanController::class, 'edit']);
Route::post('tampildata', [LaporanController::class, 'tampil']);
Route::put('Updatelaporan/{id}', [LaporanController::class, 'update']);
Route::put('verifikasilaporan/{id}', [LaporanController::class, 'verify']);
Route::delete('deletelaporan/{id}', [LaporanController::class, 'destroy']);

//Route BU Pengajuan Sertifikat
Route::post('ajuansertif/Addlaporan', [AjuansertifController::class,'simpan']);
Route::get('ajuansertif/laporanku', [AjuansertifController::class, 'index']);
Route::get('ajuansertif/Editlaporan/{id}', [AjuansertifController::class, 'edit']);
Route::put('ajuansertif/Updatelaporan/{id}', [AjuansertifController::class, 'update']);
Route::put('ajuansertif/verifikasilaporan/{id}', [AjuansertifController::class, 'verify']);
Route::delete('ajuansertif/deletelaporan/{id}', [AjuansertifController::class, 'destroy']);

//Route BU Belum Daftar
Route::post('belumdaftar/Addlaporan', [BelumdaftarController::class,'simpan']);
Route::put('belumdaftar/limpahlaporan/{id}', [BelumdaftarController::class,'pelimpahan']);
Route::get('belumdaftar/limpahkan/{id}', [BelumdaftarController::class, 'editlimpah']);
Route::get('belumdaftar/laporanku', [BelumdaftarController::class, 'index']);
Route::get('belumdaftar/Editlaporan/{id}', [BelumdaftarController::class, 'edit']);
Route::put('belumdaftar/Updatelaporan/{id}', [BelumdaftarController::class, 'update']);
Route::put('belumdaftar/verifikasilaporan/{id}', [BelumdaftarController::class, 'verify']);
Route::delete('belumdaftar/deletelaporan/{id}', [BelumdaftarController::class, 'destroy']);

//Route BU Menunggak Iuran
Route::post('tunggakiuran/Addlaporan', [TunggakiuranController::class,'simpan']);
Route::put('tunggakiuran/limpahlaporan/{id}', [TunggakiuranController::class,'pelimpahan']);
Route::get('tunggakiuran/limpahkan/{id}', [TunggakiuranController::class, 'editlimpah']);
Route::get('tunggakiuran/laporanku', [TunggakiuranController::class, 'index']);
Route::get('tunggakiuran/Editlaporan/{id}', [TunggakiuranController::class, 'edit']);
Route::put('tunggakiuran/Updatelaporan/{id}', [TunggakiuranController::class, 'update']);
Route::put('tunggakiuran/verifikasilaporan/{id}', [TunggakiuranController::class, 'verify']);
Route::delete('tunggakiuran/deletelaporan/{id}', [TunggakiuranController::class, 'destroy']);

//Route BU Lapor Sebagian Upah
Route::post('laporsbguph/Addlaporan', [LaporsbguphController::class,'simpan']);
Route::put('laporsbguph/limpahlaporan/{id}', [LaporsbguphController::class,'pelimpahan']);
Route::get('laporsbguph/limpahkan/{id}', [LaporsbguphController::class, 'editlimpah']);
Route::get('laporsbguph/laporanku', [LaporsbguphController::class, 'index']);
Route::get('laporsbguph/Editlaporan/{id}', [LaporsbguphController::class, 'edit']);
Route::put('laporsbguph/Updatelaporan/{id}', [LaporsbguphController::class, 'update']);
Route::put('laporsbguph/verifikasilaporan/{id}', [LaporsbguphController::class, 'verify']);
Route::delete('laporsbguph/deletelaporan/{id}', [LaporsbguphController::class, 'destroy']);

//Route BU Lapor Sebagian TK
Route::post('laporsbgtk/Addlaporan', [LaporsbgTKController::class,'simpan']);
Route::put('laporsbgtk/limpahlaporan/{id}', [LaporsbgTKController::class,'pelimpahan']);
Route::get('laporsbgtk/limpahkan/{id}', [LaporsbgTKController::class, 'editlimpah']);
Route::get('laporsbgtk/laporanku', [LaporsbgTKController::class, 'index']);
Route::get('laporsbgtk/Editlaporan/{id}', [LaporsbgTKController::class, 'edit']);
Route::put('laporsbgtk/Updatelaporan/{id}', [LaporsbgTKController::class, 'update']);
Route::put('laporsbgtk/verifikasilaporan/{id}', [LaporsbgTKController::class, 'verify']);
Route::delete('laporsbgtk/deletelaporan/{id}', [LaporsbgTKController::class, 'destroy']);

//Route Pelimpahan
Route::get('pemeriksa/laporanku', [bubelumdaftarController::class, 'index']);
Route::post('pemeriksa/Addlaporan', [bubelumdaftarController::class,'simpan']);
Route::get('pemeriksa/Editlaporan/{id}', [bubelumdaftarController::class, 'edit']);
Route::put('pemeriksa/Updatelaporan/{id}', [bubelumdaftarController::class, 'update']);
Route::delete('pemeriksa/deletelaporan/{id}', [bubelumdaftarController::class, 'destroy']);

Route::get('pemeriksa/laporanku2', [busudahdaftarController::class, 'index2']);
Route::post('pemeriksa/Addlaporan2', [busudahdaftarController::class,'simpan']);
Route::get('pemeriksa/Editlaporan2/{id}', [busudahdaftarController::class, 'edit']);
Route::put('pemeriksa/Updatelaporan2/{id}', [busudahdaftarController::class, 'update']);
Route::delete('pemeriksa/deletelaporan2/{id}', [busudahdaftarController::class, 'destroy']);

//Route Pemeriksa BU sudah Daftar
Route::get('pemeriksa/laporanku4', [PemeriksaSudahDaftarController::class, 'index4']);


//Route Pemeriksa BU belum Daftar
Route::get('pemeriksa/laporanku3', [PemeriksaBelumDaftarController::class, 'index3']);
