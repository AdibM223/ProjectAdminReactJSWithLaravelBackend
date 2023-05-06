<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Belumdaftar;
use App\Models\detail_BUBelumDaftar;
use App\Models\Pelimpahan_bubelumdaftar;
use Illuminate\Http\Request;

class BelumdaftarController extends Controller
{
    public function index(){
        // $Belumdaftar = Belumdaftar::all();

        $databelumdaftar = Belumdaftar::join('detail_bu_belum_daftar', 'bubelumdaftar.id', '=', 'detail_bu_belum_daftar.kodeBUbelumdaftar')
        // ->join('pelimpahan_bubelumdaftar', 'bubelumdaftar.kode_BUbelumdaftar', '=', 'pelimpahan_bubelumdaftar.kode_BU_belumdaftar')      		
        ->get(['bubelumdaftar.id as code',
        'detail_bu_belum_daftar.id',
         'bubelumdaftar.nama_BUbelumdaftar',
          'detail_bu_belum_daftar.tanggal_canvasing',
          'detail_bu_belum_daftar.hasil_canvasing',
          'detail_bu_belum_daftar.status']);


        return response()->json([
            'stt'=>200,
            'Belumdaftarku'=>$databelumdaftar
        ]);
    }

    public function simpan(Request $request)
    {
        
        $detailbelumdaftar = new detail_BUBelumDaftar;

        $detailbelumdaftar->kodeBUbelumdaftar = $request->input('kodeBUbelumdaftar');
        $detailbelumdaftar->nama_BUbelumdaftar = $request->input('nama_BUbelumdaftar');
        $detailbelumdaftar->tanggal_canvasing = $request->input('tanggal_canvasing');
        $detailbelumdaftar->hasil_canvasing = $request->input('hasil_canvasing');
        $detailbelumdaftar->status = $request->input('status');
        $detailbelumdaftar->save();

        return response()->json([
            'stt' =>200,
            'message' => 'Simpan Berhasil'
        ]);
    }

    public function pelimpahan(Request $request, $id)
    {
        $pelimpahanbelumdaftar = new Pelimpahan_bubelumdaftar;
        $Belumdaftar = Belumdaftar::find($id);
        $pelimpahanbelumdaftar->kode_bu_belumdaftar = $request->input('kode_bu_belumdaftar');
        $pelimpahanbelumdaftar->tgl_pelimpahan = $request->input('tgl_pelimpahan');
        $pelimpahanbelumdaftar->tgl_SP = $request->input('tgl_SP');
        $pelimpahanbelumdaftar->nomor_SP = $request->input('nomor_SP');
        $pelimpahanbelumdaftar->dasar_pelimpahan = $request->input('dasar_pelimpahan');
        $pelimpahanbelumdaftar->save();

        return response()->json([
            'stt' =>200,
            'message' => 'Pelimpahan Berhasil'
        ]);
    }

    public function edit($id)
    {
        $Belumdaftar = Belumdaftar::find($id);
        $detailbelumdaftar =detail_BUBelumDaftar::find($id);
        return response()->json([
            'stt' => 200,
            'Belumdaftarku' => $Belumdaftar,
            'detailbelumdaftarku' => $detailbelumdaftar
        ]);
    }

    public function editlimpah($id)
    {
        $Belumdaftar = Belumdaftar::find($id);
        return response()->json([
            'stt' => 200,
            'Belumdaftarku' => $Belumdaftar,
        ]);
    }




    public function update(Request $request, $id)
    {
        $detailbelumdaftar = detail_BUBelumDaftar::find($id);

        $detailbelumdaftar->kodeBUbelumdaftar = $request->input('kodeBUbelumdaftar');
        $detailbelumdaftar->nama_BUBelumdaftar = $request->input('nama_BUBelumDaftar');
        $detailbelumdaftar->tanggal_canvasing = $request->input('tanggal_canvasing');
        $detailbelumdaftar->hasil_canvasing = $request->input('hasil_canvasing');
        $detailbelumdaftar->save();

        return response()->json([
            'stt' =>200,
            'message' => 'Update Berhasil'
        ]);
    }

    public function destroy($id)
    {
        $Belumdaftar = Belumdaftar::find($id);
        // $pelimpahanbelumdaftar =Pelimpahan_bubelumdaftar::find($id);
        $detailbelumdaftar =detail_BUBelumDaftar::find($id);
        
        // $pelimpahanbelumdaftar->delete();
        $detailbelumdaftar->delete();
        return response()->json([
            'stt' =>200,
            'message' => 'Hapus Berhasil'
        ]);
    }

    public function verify (Request $request,$id)
    {
        $detailbelumdaftar = detail_BUBelumDaftar::find($id);
        $detailbelumdaftar->status = $request->input('status');
        $detailbelumdaftar->save();

        return response()->json([
            'stt' =>200,
            'message' => 'Update Berhasil'
        ]);
    }
}
