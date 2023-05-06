<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\nilai_materi_tunggakan;
use App\Models\pelimpahan_buterdaftar;
use App\Models\kunjungan_penagihan;
use App\Models\tindak_lanjut_pembayaran;
use Illuminate\Http\Request;

class TunggakiuranController extends Controller
{
    public function index(){
        $Tunggakiuran = nilai_materi_tunggakan::join('busudahdaftar', 'nilai_materi_tunggakan_iuran.kode_buterdaftar', '=', 'busudahdaftar.id')
        ->join('aktivitas_kunjungan_penagihan', 'aktivitas_kunjungan_penagihan.kode_buterdaftar', '=', 'busudahdaftar.id')
        ->join('tindak_lanjut_pembayaran', 'tindak_lanjut_pembayaran.kode_buterdaftar', '=', 'busudahdaftar.id')
        // ->join('pelimpahan_buterdaftar', 'pelimpahan_buterdaftar.kode_buterdaftar', '=', 'busudahdaftar.kode_bu')
        ->get(['busudahdaftar.id as code', 
        'busudahdaftar.nama_BUterdaftar', 
        'nilai_materi_tunggakan_iuran.id',
        'nilai_materi_tunggakan_iuran.status',
        'nilai_materi_tunggakan_iuran.aging_potensi',
        'nilai_materi_tunggakan_iuran.bln_menunggak',
        'nilai_materi_tunggakan_iuran.besar_tunggakan',
        'aktivitas_kunjungan_penagihan.tgl_email',
        'aktivitas_kunjungan_penagihan.tgl_telpon',
        'aktivitas_kunjungan_penagihan.hasil_telpon',
        'aktivitas_kunjungan_penagihan.tgl_kunjungan',
        'aktivitas_kunjungan_penagihan.hasil_kunjungan',
        'aktivitas_kunjungan_penagihan.upaya_lain',
        'aktivitas_kunjungan_penagihan.hasil_upaya_lain',
        'tindak_lanjut_pembayaran.tgl_bayar_iuran',
        'tindak_lanjut_pembayaran.jumlah_pembayaran',
        'tindak_lanjut_pembayaran.keterangan',
    ]);

        return response()->json([
            'stt'=>200,
            'Tunggakiuranku'=>$Tunggakiuran
        ]);
    }

    public function simpan(Request $request)
    {
        $Tunggakiuran = new nilai_materi_tunggakan;
        $kunjunganpenagihan = new kunjungan_penagihan;
        $tindakpembayaran = new tindak_lanjut_pembayaran;

        $Tunggakiuran->kode_buterdaftar = $request->input('kode_buterdaftar');
        $Tunggakiuran->Aging_potensi = $request->input('Aging_potensi');
        $Tunggakiuran->bln_menunggak = $request->input('bln_menunggak');
        $Tunggakiuran->besar_tunggakan = $request->input('besar_tunggakan');
        $Tunggakiuran->status = $request->input('status');

        $kunjunganpenagihan->kode_buterdaftar = $request->input('kode_buterdaftar');
        $kunjunganpenagihan->tgl_email = $request->input('tgl_email');
        $kunjunganpenagihan->tgl_telpon = $request->input('tgl_telpon');
        $kunjunganpenagihan->hasil_telpon = $request->input('hasil_telpon');
        $kunjunganpenagihan->tgl_kunjungan = $request->input('tgl_kunjungan');
        $kunjunganpenagihan->hasil_kunjungan = $request->input('hasil_kunjungan');
        $kunjunganpenagihan->upaya_lain = $request->input('upaya_lain');
        $kunjunganpenagihan->hasil_upaya_lain = $request->input('hasil_upaya_lain');

        $tindakpembayaran->kode_buterdaftar = $request->input('kode_buterdaftar');
        $tindakpembayaran->tgl_bayar_iuran = $request->input('tgl_bayar_iuran');
        $tindakpembayaran->jumlah_pembayaran = $request->input('jumlah_pembayaran');
        $tindakpembayaran->keterangan = $request->input('keterangan');

        $Tunggakiuran->save();
        $kunjunganpenagihan->save();
        $tindakpembayaran->save();

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
        $Tunggakiuran = nilai_materi_tunggakan::find($id);

        return response()->json([
            'stt' => 200,
            'Tunggakiuranku' => $Tunggakiuran
        ]);
    }

    public function update(Request $request, $id)
    {
        $Tunggakiuran = nilai_materi_tunggakan::find($id);
        $kunjunganpenagihan =kunjungan_penagihan::find($id);
        $tindakpembayaran =tindak_lanjut_pembayaran::find($id);
        
        $Tunggakiuran->kode_buterdaftar = $request->input('kode_buterdaftar');
        $Tunggakiuran->Aging_potensi = $request->input('Aging_potensi');
        $Tunggakiuran->bln_menunggak = $request->input('bln_menunggak');
        $Tunggakiuran->besar_tunggakan = $request->input('besar_tunggakan');
        

        $kunjunganpenagihan->kode_buterdaftar = $request->input('kode_buterdaftar');
        $kunjunganpenagihan->tgl_email = $request->input('tgl_email');
        $kunjunganpenagihan->tgl_telpon = $request->input('tgl_telpon');
        $kunjunganpenagihan->hasil_telpon = $request->input('hasil_telpon');
        $kunjunganpenagihan->tgl_kunjungan = $request->input('tgl_kunjungan');
        $kunjunganpenagihan->hasil_kunjungan = $request->input('hasil_kunjungan');
        $kunjunganpenagihan->upaya_lain = $request->input('upaya_lain');
        $kunjunganpenagihan->hasil_upaya_lain = $request->input('hasil_upaya_lain');

        $tindakpembayaran->kode_buterdaftar = $request->input('kode_buterdaftar');
        $tindakpembayaran->tgl_bayar_iuran = $request->input('tgl_bayar_iuran');
        $tindakpembayaran->jumlah_pembayaran = $request->input('jumlah_pembayaran');
        $tindakpembayaran->keterangan = $request->input('keterangan');

        $Tunggakiuran->save();
        $kunjunganpenagihan->save();
        $tindakpembayaran->save();
        
        return response()->json([
            'stt' =>200,
            'message' => 'Update Berhasil'
        ]);
    }

    public function destroy($id)
    {
        $Tunggakiuran = nilai_materi_tunggakan::find($id);
        $kunjunganpenagihan =kunjungan_penagihan::find($id);
        $tindakpembayaran =tindak_lanjut_pembayaran::find($id);

        $Tunggakiuran->delete();
        $kunjunganpenagihan->delete();
        $tindakpembayaran->delete();
        return response()->json([
            'stt' =>200,
            'message' => 'Hapus Berhasil'
        ]);
    }

    public function verify (Request $request,$id)
    {
        $Tunggakiuran = nilai_materi_tunggakan::find($id);
        $Tunggakiuran->status = $request->input('status');
        $Tunggakiuran->save();

        return response()->json([
            'stt' =>200,
            'message' => 'Update Berhasil'
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
}
