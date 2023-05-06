<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\potensi_selisih_tk;
use App\Models\pelimpahan_buterdaftar;
use Illuminate\Http\Request;

class LaporsbgTKController extends Controller
{
    public function index(){

        $LaporsbgTK = potensi_selisih_tk::join('busudahdaftar', 'potensi_slisih_iuran_lapor_sbg_tk.kode_buterdaftar', '=', 'busudahdaftar.id')
        // ->join('pelimpahan_buterdaftar', 'pelimpahan_buterdaftar.kode_buterdaftar', '=', 'busudahdaftar.kode_bu')
        ->get(['busudahdaftar.id as code', 
        'potensi_slisih_iuran_lapor_sbg_tk.id',
        'potensi_slisih_iuran_lapor_sbg_tk.kode_buterdaftar',
        'busudahdaftar.nama_BUterdaftar', 
        'potensi_slisih_iuran_lapor_sbg_tk.sumber_data_pembanding',
        'potensi_slisih_iuran_lapor_sbg_tk.besar_data_pembanding',
        'potensi_slisih_iuran_lapor_sbg_tk.bulan_rujukan_MF',
        'potensi_slisih_iuran_lapor_sbg_tk.data_MF',
        'potensi_slisih_iuran_lapor_sbg_tk.selisih',
        'potensi_slisih_iuran_lapor_sbg_tk.tanggal_canvasing_PTSDK',
        'potensi_slisih_iuran_lapor_sbg_tk.hasil_canvasing',
        'potensi_slisih_iuran_lapor_sbg_tk.status',
        // 'pelimpahan_buterdaftar.tgl_pelimpahan',
        // 'pelimpahan_buterdaftar.dasar_pelimpahan'
    ]);

        return response()->json([
            'stt'=>200,
            'LaporsbgTKku'=>$LaporsbgTK
        ]);
    }

    public function simpan(Request $request)
    {
        $LaporsbgTK = new potensi_selisih_tk;

        $LaporsbgTK->kode_BUterdaftar = $request->input('kode_BUterdaftar');
        $LaporsbgTK->sumber_data_pembanding = $request->input('sumber_data_pembanding');
        $LaporsbgTK->besar_data_pembanding = $request->input('besar_data_pembanding');
        $LaporsbgTK->bulan_rujukan_MF = $request->input('bulan_rujukan_MF');
        $LaporsbgTK->data_MF = $request->input('data_MF');
        $LaporsbgTK->selisih = $request->input('selisih');
        $LaporsbgTK->tanggal_canvasing_PTSDK = $request->input('tanggal_canvasing_PTSDK');
        $LaporsbgTK->hasil_canvasing = $request->input('hasil_canvasing');
        $LaporsbgTK->status = $request->input('status');
        $LaporsbgTK->save();

        return response()->json([
            'stt' =>200,
            'message' => 'Simpan Berhasil'
        ]);
    }

    public function pelimpahan(Request $request)
    {
        $pelimpahan = new pelimpahan_buterdaftar;

        $pelimpahan->kode_buterdaftar = $request->input('kode_buterdaftar');
        $pelimpahan->tgl_pelimpahan = $request->input('tgl_pelimpahan');
        $pelimpahan->badan_pelimpah = $request->input('badan_pelimpah');
        $pelimpahan->dasar_pelimpahan = $request->input('dasar_pelimpahan');
        $pelimpahan->save();

        return response()->json([
            'stt' =>200,
            'message' => 'Pelimpahan Berhasil'
        ]);
    }

    public function edit($id)
    {
        $LaporsbgTK = potensi_selisih_tk::find($id);

        return response()->json([
            'stt' => 200,
            'LaporsbgTKku' => $LaporsbgTK
        ]);
    }

    public function editlimpah($id)
    {
        $sdhdaftar = busudahdaftar::find($id);

        return response()->json([
            'stt' => 200,
            'sudahdftrku' => $sdhdaftar
        ]);
    }

    public function update(Request $request, $id)
    {
        $LaporsbgTK = potensi_selisih_tk::find($id);

        $LaporsbgTK->kode_BUterdaftar = $request->input('kode_BUterdaftar');
        $LaporsbgTK->sumber_data_pembanding = $request->input('sumber_data_pembanding');
        $LaporsbgTK->besar_data_pembanding = $request->input('besar_data_pembanding');
        $LaporsbgTK->bulan_rujukan_MF = $request->input('bulan_rujukan_MF');
        $LaporsbgTK->data_MF = $request->input('data_MF');
        $LaporsbgTK->selisih = $request->input('selisih');
        $LaporsbgTK->tanggal_canvasing_PTSDK = $request->input('tanggal_canvasing_PTSDK');
        $LaporsbgTK->hasil_canvasing = $request->input('hasil_canvasing');
        $LaporsbgTK->save();

        return response()->json([
            'stt' =>200,
            'message' => 'Update Berhasil'
        ]);
    }

    public function destroy($id)
    {
        $LaporsbgTK = potensi_selisih_tk::find($id);
        $LaporsbgTK->delete();
        return response()->json([
            'stt' =>200,
            'message' => 'Hapus Berhasil'
        ]);
    }

    public function verify (Request $request,$id)
    {
        $LaporsbgTK = potensi_selisih_tk::find($id);
        $LaporsbgTK->status = $request->input('status');
        $LaporsbgTK->save();

        return response()->json([
            'stt' =>200,
            'message' => 'Update Berhasil'
        ]);
    }
}
