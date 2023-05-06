<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Ajuansertif;
use Illuminate\Http\Request;

class AjuansertifController extends Controller
{
    public function index(){
        $Ajuansertif = Ajuansertif::all();

        return response()->json([
            'stt'=>200,
            'Ajuansertifku'=>$Ajuansertif
        ]);
    }

    public function simpan(Request $request)
    {
        $Ajuansertif = new Ajuansertif;
        
        $Ajuansertif->kode_BUterdaftar = $request->input('kode_BUterdaftar');
        $Ajuansertif->no_sertif = $request->input('no_sertif');
        $Ajuansertif->periode_sertif = $request->input('periode_sertif');
        $Ajuansertif->tgl_cetak = $request->input('tgl_cetak');
        $Ajuansertif->keterangan_periode = $request->input('keterangan_periode');
        $Ajuansertif->status = $request->input('status');
        $Ajuansertif->save();

        return response()->json([
            'stt' =>200,
            'message' => 'Simpan Berhasil'
        ]);
    }

    public function edit($id)
    {
        $Ajuansertif = Ajuansertif::find($id);

        return response()->json([
            'stt' => 200,
            'Ajuansertifku' => $Ajuansertif
        ]);
    }

    public function update(Request $request, $id)
    {
        $Ajuansertif = Ajuansertif::find($id);

        $Ajuansertif->kode_BUterdaftar = $request->input('kode_BUterdaftar');
        $Ajuansertif->no_sertif = $request->input('no_sertif');
        $Ajuansertif->periode_sertif = $request->input('periode_sertif');
        $Ajuansertif->tgl_cetak = $request->input('tgl_cetak');
        $Ajuansertif->keterangan_periode = $request->input('keterangan_periode');
        $Ajuansertif->status = $request->input('status');
        $Ajuansertif->save();

        return response()->json([
            'stt' =>200,
            'message' => 'Update Berhasil'
        ]);
    }

    public function destroy($id)
    {
        $Ajuansertif = Ajuansertif::find($id);
        $Ajuansertif->delete();
        return response()->json([
            'stt' =>200,
            'message' => 'Hapus Berhasil'
        ]);
    }

    public function verify (Request $request,$id)
    {
        $Ajuansertif = Ajuansertif::find($id);
        $Ajuansertif->status = $request->input('status');
        $Ajuansertif->save();

        return response()->json([
            'stt' =>200,
            'message' => 'Update Berhasil'
        ]);
    }
}
