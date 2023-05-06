<?php

namespace App\Http\Controllers;

use App\Models\Belumdaftar;
use Illuminate\Http\Request;

class bubelumdaftarController extends Controller
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
        
        $blmdaftar->id = $request->input('id');
        $blmdaftar->nama_BUbelumdaftar = $request->input('nama_BUbelumdaftar');
        $blmdaftar->alamat_bubelumdaftar = $request->input('alamat_bubelumdaftar');
        $blmdaftar->notelp_bubelumdaftar = $request->input('notelp_bubelumdaftar');
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

        $blmdaftar->id = $request->input('id');
        $blmdaftar->nama_BUbelumdaftar = $request->input('nama_BUbelumdaftar');
        $blmdaftar->alamat_bubelumdaftar = $request->input('alamat_bubelumdaftar');
        $blmdaftar->notelp_bubelumdaftar = $request->input('notelp_bubelumdaftar');
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


}
