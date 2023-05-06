<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PemeriksaController extends Controller
{
    public function index(){
        $blmdaftar = Belumdaftar::all();

        return response()->json([
            'stt'=>200,
            'belumdaftarku'=>$blmdaftar
        ]);
    }

    public function simpan(Request $request)
    {
        $blmdaftar = new Belumdaftar;
        
        $blmdaftar->kode_BUbelumdaftar = $request->input('kode_BUbelumdaftar');
        $blmdaftar->nama_BUbelumdaftar = $request->input('nama_BUbelumdaftar');
        $blmdaftar->alamat_BUbelumdaftar = $request->input('alamat_BUbelumdaftar');
        $blmdaftar->notelp_BUblumdaftar = $request->input('notelp_BUblumdaftar');
        $blmdaftar->save();

        return response()->json([
            'stt' =>200,
            'message' => 'Simpan Berhasil'
        ]);
    }

    public function edit($id)
    {
        $blmdaftar = Belumdaftar::find($id);

        return response()->json([
            'stt' => 200,
            'belumdaftarku' => $blmdaftar
        ]);
    }

    public function update(Request $request, $id)
    {
        $blmdaftar = Belumdaftar::find($id);

        $blmdaftar->kode_BUbelumdaftar = $request->input('kode_BUbelumdaftar');
        $blmdaftar->nama_BUbelumdaftar = $request->input('nama_BUbelumdaftar');
        $blmdaftar->alamat_BUbelumdaftar = $request->input('alamat_BUbelumdaftar');
        $blmdaftar->notelp_BUblumdaftar = $request->input('notelp_BUblumdaftar');
        $blmdaftar->save();

        return response()->json([
            'stt' =>200,
            'message' => 'Update Berhasil'
        ]);
    }

    public function destroy($id)
    {
        $blmdaftar = Belumdaftar::find($id);
        $blmdaftar->delete();
        return response()->json([
            'stt' =>200,
            'message' => 'Hapus Berhasil'
        ]);
    }

    public function index2(){
        $sdhdaftar = busudahdaftar::all();

        return response()->json([
            'stt'=>200,
            'sudahdaftarku'=>$sdhdaftar
        ]);
    }

    public function simpan2(Request $request)
    {
        $sdhdaftar = new busudahdaftar;
        
        $sdhdaftar->kode_BUterdaftar = $request->input('kode_BUterdaftar');
        $sdhdaftar->nama_BUterdaftar = $request->input('nama_BUterdaftar');
        $sdhdaftar->alamat_BUterdaftar = $request->input('alamat_BUterdaftar');
        $sdhdaftar->notelp_BUterdaftar = $request->input('notelp_BUterdaftar');
        $sdhdaftar->save();

        return response()->json([
            'stt' =>200,
            'message' => 'Simpan Berhasil'
        ]);
    }

    public function edit2($id)
    {
        $sdhdaftar = busudahdaftar::find($id);

        return response()->json([
            'stt' => 200,
            'sudahdaftarku' => $sdhdaftar
        ]);
    }

    public function update2(Request $request, $id)
    {
        $sdhdaftar = busudahdaftar::find($id);

        $sdhdaftar->kode_BUterdaftar = $request->input('kode_BUterdaftar');
        $sdhdaftar->nama_BUterdaftar = $request->input('nama_BUterdaftar');
        $sdhdaftar->alamat_BUterdaftar = $request->input('alamat_BUterdaftar');
        $sdhdaftar->notelp_BUterdaftar = $request->input('notelp_BUterdaftar');
        $sdhdaftar->save();

        return response()->json([
            'stt' =>200,
            'message' => 'Update Berhasil'
        ]);
    }

    public function destroy2($id)
    {
        $sdhdaftar = busudahdaftar::find($id);
        $sdhdaftar->delete();
        return response()->json([
            'stt' =>200,
            'message' => 'Hapus Berhasil'
        ]);
    }



    public function index3(){
        $Pemeriksablm = Pelimpahan_bubelumdaftar::all();

        return response()->json([
            'stt'=>200,
            'pemeriksablmku'=>$Pemeriksablm
        ]);
    }

    public function index4(){
        $Pemeriksasdh = Pelimpahan_buterdaftar::all();

        return response()->json([
            'stt'=>200,
            'pemeriksasudahku'=>$Pemeriksasdh
        ]);
    }
}
