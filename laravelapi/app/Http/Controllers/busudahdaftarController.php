<?php

namespace App\Http\Controllers;

use App\Models\busudahdaftar;
use Illuminate\Http\Request;

class busudahdaftarController extends Controller
{
    public function index2(){
        $sdhdaftar = busudahdaftar::all();

        return response()->json([
            'stt'=>200,
            'sudahdftrku'=>$sdhdaftar
        ]);
    }

    public function simpan(Request $request)
    {
        $sdhdaftar = new busudahdaftar;
        $sdhdaftar->id = $request->input('id');
        $sdhdaftar->nama_buterdaftar = $request->input('nama_BUterdaftar');
        $sdhdaftar->alamat_BUterdaftar = $request->input('alamat_BUterdaftar');
        $sdhdaftar->notelp_BUterdaftar = $request->input('notelp_BUterdaftar');
        $sdhdaftar->save();

        return response()->json([
            'stt' =>200,
            'message' => 'Simpan Berhasil'
        ]);
    }

    public function edit($id)
    {
        $sdhdaftar = busudahdaftar::find($id);

        return response()->json([
            'stt' => 200,
            'sudahdftrku' => $sdhdaftar
        ]);
    }

    public function update(Request $request, $id)
    {
        $sdhdaftar = busudahdaftar::find($id);

        $sdhdaftar->id = $request->input('id');
        $sdhdaftar->nama_buterdaftar = $request->input('nama_BUterdaftar');
        $sdhdaftar->alamat_BUterdaftar = $request->input('alamat_BUterdaftar');
        $sdhdaftar->notelp_BUterdaftar = $request->input('notelp_BUterdaftar');
        $sdhdaftar->save();

        return response()->json([
            'stt' =>200,
            'message' => 'Update Berhasil'
        ]);
    }

    public function destroy($id)
    {
        $sdhdaftar = busudahdaftar::find($id);
        $sdhdaftar->delete();
        return response()->json([
            'stt' =>200,
            'message' => 'Hapus Berhasil'
        ]);
    }
}
