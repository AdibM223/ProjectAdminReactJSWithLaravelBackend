<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Laporan;
use Illuminate\Http\Request;

class LaporanController extends Controller
{
    public function tampil(Request $request)
    {
        $laporan = Laporan::findOrFail($request->get('goid'));

        return response()->json([
            'stt'=>200,
            'laporanku'=>$laporan
        ]);
    }

    public function index(){
        $laporan = Laporan::all();

        return response()->json([
            'stt'=>200,
            'laporanku'=>$laporan
        ]);
    }

    public function simpan(Request $request)
    {
        $laporan = new Laporan;

        $laporan->kode = $request->input('kode');
        $laporan->nama = $request->input('nama');
        $laporan->alamat = $request->input('alamat');
        $laporan->notelp = $request->input('notelp');
        $laporan->status = $request->input('status');
        $laporan->save();

        return response()->json([
            'stt' =>200,
            'message' => 'Simpan Berhasil'
        ]);
    }

    public function edit($id)
    {
        $laporan = Laporan::find($id);

        return response()->json([
            'stt' => 200,
            'laporanku' => $laporan
        ]);
    }

    public function update(Request $request, $id)
    {
        $laporan = Laporan::find($id);

        $laporan->kode = $request->input('kode');
        $laporan->nama = $request->input('nama');
        $laporan->alamat = $request->input('alamat');
        $laporan->notelp = $request->input('notelp');
        $laporan->save();

        return response()->json([
            'stt' =>200,
            'message' => 'Update Berhasil'
        ]);
    }

    public function destroy($id)
    {
        $laporan = Laporan::find($id);
        $laporan->delete();
        return response()->json([
            'stt' =>200,
            'message' => 'Hapus Berhasil'
        ]);
    }

    public function verify (Request $request,$id)
    {
        $laporan = Laporan::find($id);
        $laporan->status = $request->input('statusnew');
        $laporan->save();

        return response()->json([
            'stt' =>200,
            'message' => 'Update Berhasil'
        ]);
    }
}
