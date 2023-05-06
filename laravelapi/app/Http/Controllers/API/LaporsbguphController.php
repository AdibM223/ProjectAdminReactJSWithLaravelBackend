<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\potensi_selisih_upah;
use App\Models\pelimpahan_buterdaftar;
use App\Models\tindak_lanjut_penagihan;
use Illuminate\Http\Request;

class LaporsbguphController extends Controller
{
    public function index(){
        $Laporsbguph = potensi_selisih_upah::join('busudahdaftar', 'potensi_slisih_iuran_lapor_sbg_upah.kode_buterdaftar', '=', 'busudahdaftar.id')
        ->join('tindak_lanjut_penagihan', 'tindak_lanjut_penagihan.kode_buterdaftar', '=', 'busudahdaftar.id')
        // ->join('pelimpahan_buterdaftar', 'pelimpahan_buterdaftar.kode_buterdaftar', '=', 'busudahdaftar.kode_bu')
        ->get(['busudahdaftar.id as code', 
        'busudahdaftar.nama_BUterdaftar', 
        'potensi_slisih_iuran_lapor_sbg_upah.id', 
        'potensi_slisih_iuran_lapor_sbg_upah.status', 
        'potensi_slisih_iuran_lapor_sbg_upah.kode_buterdaftar',
        'potensi_slisih_iuran_lapor_sbg_upah.sumber_data_pembanding',
        'potensi_slisih_iuran_lapor_sbg_upah.total_potensi_iuran',
        'potensi_slisih_iuran_lapor_sbg_upah.total_iuran_MF',
        'potensi_slisih_iuran_lapor_sbg_upah.selisih',
        'tindak_lanjut_penagihan.tgl_pemeriksaan',
        'tindak_lanjut_penagihan.nomor_spt',
        'tindak_lanjut_penagihan.tgl_surat',
        'tindak_lanjut_penagihan.upaya_surat_kedua',
        'tindak_lanjut_penagihan.upaya_lain_by_phone',
        'tindak_lanjut_penagihan.upaya_lain_by_wa',
        'tindak_lanjut_penagihan.nomor_SKK'
    ]);

        return response()->json([
            'stt'=>200,
            'Laporsbguphku'=>$Laporsbguph
        ]);
    }

    public function simpan(Request $request)
    {
        $Laporsbguph = new potensi_selisih_upah;
        $tindakpenagihan = new tindak_lanjut_penagihan;

        $Laporsbguph->kode_buterdaftar = $request->input('kode_buterdaftar');
        $Laporsbguph->sumber_data_pembanding = $request->input('sumber_data_pembanding');
        $Laporsbguph->total_potensi_iuran = $request->input('total_potensi_iuran');
        $Laporsbguph->total_iuran_MF = $request->input('total_iuran_MF');
        $Laporsbguph->selisih = $request->input('selisih');
        $Laporsbguph->status = $request->input('status');

        $tindakpenagihan->kode_buterdaftar = $request->input('kode_buterdaftar');
        $tindakpenagihan->tgl_pemeriksaan = $request->input('tgl_pemeriksaan');
        $tindakpenagihan->nomor_spt = $request->input('nomor_spt');
        $tindakpenagihan->tgl_surat = $request->input('tgl_surat');
        $tindakpenagihan->upaya_surat_kedua = $request->input('upaya_surat_kedua');
        $tindakpenagihan->upaya_lain_by_phone = $request->input('upaya_lain_by_phone');
        $tindakpenagihan->upaya_lain_by_wa = $request->input('upaya_lain_by_wa');
        $tindakpenagihan->nomor_SKK = $request->input('nomor_SKK');
        
        $Laporsbguph->save();
        $tindakpenagihan->save();

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
        $Laporsbguph = potensi_selisih_upah::find($id);

        return response()->json([
            'stt' => 200,
            'Laporsbguphku' => $Laporsbguph
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
        $Laporsbguph = potensi_selisih_upah::find($id);
        $tindakpenagihan =tindak_lanjut_penagihan::find($id);

        $Laporsbguph->kode_buterdaftar = $request->input('kode_buterdaftar');
        $Laporsbguph->sumber_data_pembanding = $request->input('sumber_data_pembanding');
        $Laporsbguph->total_potensi_iuran = $request->input('total_potensi_iuran');
        $Laporsbguph->total_iuran_MF = $request->input('total_iuran_MF');
        $Laporsbguph->selisih = $request->input('selisih');

        $tindakpenagihan->kode_buterdaftar = $request->input('kode_buterdaftar');
        $tindakpenagihan->tgl_pemeriksaan = $request->input('tgl_pemeriksaan');
        $tindakpenagihan->nomor_spt = $request->input('nomor_spt');
        $tindakpenagihan->tgl_surat = $request->input('tgl_surat');
        $tindakpenagihan->upaya_surat_kedua = $request->input('upaya_surat_kedua');
        $tindakpenagihan->upaya_lain_by_phone = $request->input('upaya_lain_by_phone');
        $tindakpenagihan->upaya_lain_by_wa = $request->input('upaya_lain_by_wa');
        $tindakpenagihan->nomor_SKK = $request->input('nomor_SKK');

        $Laporsbguph->save();
        $tindakpenagihan->save();

        return response()->json([
            'stt' =>200,
            'message' => 'Update Berhasil'
        ]);
    }

    public function destroy($id)
    {
        $Laporsbguph = potensi_selisih_upah::find($id);
        $tindakpenagihan =tindak_lanjut_penagihan::find($id);
        $Laporsbguph->delete();
        $tindakpenagihan->delete();
        return response()->json([
            'stt' =>200,
            'message' => 'Hapus Berhasil'
        ]);
    }

    public function verify (Request $request,$id)
    {
        $Laporsbguph = potensi_selisih_upah::find($id);

        $Laporsbguph->status = $request->input('status');
        $Laporsbguph->save();

        return response()->json([
            'stt' =>200,
            'message' => 'Update Berhasil'
        ]);
    }
}
