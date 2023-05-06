import axios from 'axios';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class AddLaporan5 extends Component 
{ 
    state = {
        kode_buterdaftar:'',
        nama_bu:'',
        Aging_potensi:'',
        bln_menunggak:'',
        besar_tunggakan:'',

        tgl_email:'',
        tgl_telpon:'',
        hasil_telpon:'',
        tgl_kunjungan:'',
        hasil_kunjungan:'',
        upaya_lain:'',
        hasil_upaya_lain:'',

        tgl_bayar_iuran:'',
        jumlah_pembayaran:'',
        keterangan:'',

        tgl_pelimpahan:'',
        dasar_pelimpahan:'',
        status:'belum terverifikasi'

    }

    handleInput = (e)=> {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    

    Simpanlaporan = async (e)=> {
        e.preventDefault();
        document.getElementById('simpanbtn').disabled = true;
        document.getElementById('simpanbtn').innerText = "Menyimpan";
        const res = await axios.post('http://127.0.0.1:8000/api/tunggakiuran/Addlaporan',this.state);
        if (res.data.stt === 200)
        {
            console.log(res.data.message);
            this.setState({
                kode_buterdaftar:'',
                nama_bu:'',
                Aging_potensi:'',
                bln_menunggak:'',
                besar_tunggakan:'',

                tgl_email:'',
                tgl_telpon:'',
                hasil_telpon:'',
                tgl_kunjungan:'',
                hasil_kunjungan:'',
                upaya_lain:'',
                hasil_upaya_lain:'',

                tgl_bayar_iuran:'',
                jumlah_pembayaran:'',
                keterangan:'',

                status:'belum terverifikasi'
            });
            document.getElementById('simpanbtn').disabled = false;
            document.getElementById('simpanbtn').innerText = "Simpan";
        }
    }

    render() {
        return (
            <div className='container col-mb-3'>
                <div className='row justify-content-center'>
                    <div className='col-ml-6'>
                        <div className='card'>
                            <div className='card-header'>
                            <table>
                            <tr>
                                <td>
                                    <h4>TAMBAH LAPORAN</h4>
                                </td>
                                <td>
                                      
                                </td>
                                <td class="col-md-1">
                                    <Link to={'/laporanbtn/butunggakiuran'} className='btn btn-danger btn-sm float-end'>Kembali</Link>
                                </td>
                        </tr>
                    </table>
                            </div>
                            <div className='card-body'>

                                <form onSubmit={this.Simpanlaporan}>
                                <table>
                                        <tr>
                                            <td>
                                            <div className='form-group mb-3'>
                                        <label>Kode Badan Usaha</label>
                                        {/* <input type="text" onChange={this.handleInput} name="kode_bu" value={this.state.kode_bu} className="form-control" /> */}
                                    </div>  
                                            </td>
                                            <td></td>
                                            <td>
                                            <div className='form-group mb-3'>
                                        {/* <label>Kode Badan Usaha</label> */}
                                        <input type="text" onChange={this.handleInput} name="kode_buterdaftar" value={this.state.kode_buterdaftar} className="form-control" />
                                    </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            <div className='form-group mb-3'>
                                        <label>Nama Badan Usaha</label>
                                        {/* <input type="text" onChange={this.handleInput} name="nama_bu" value={this.state.nama_bu} className="form-control" /> */}
                                    </div>  
                                            </td>
                                            <td></td>
                                            <td>
                                            <div className='form-group mb-3'>
                                        {/* <label>Nama Badan Usaha</label> */}
                                        <input type="text" onChange={this.handleInput} name="nama_bu" value={this.state.nama_bu} className="form-control" />
                                    </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            <div className='form-group mb-3'>
                                        <label>Aging Potensi</label>
                                        {/* <input type="text" name="Aging_potensi" onChange={this.handleInput} value={this.state.Aging_potensi} className="form-control" /> */}
                                    </div>  
                                            </td>
                                            <td></td>
                                            <td>
                                            <div className='form-group mb-3'>
                                        {/* <label>Aging Potensi</label> */}
                                        <input type="text" name="Aging_potensi" onChange={this.handleInput} value={this.state.Aging_potensi} className="form-control" />
                                    </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            <div className='form-group mb-3'>
                                        <label>Bulan Menunggak</label>
                                        {/* <input type="text" name="bln_menunggak" onChange={this.handleInput} value={this.state.bln_menunggak} className="form-control" /> */}
                                    </div>
                                            </td>
                                            <td></td>
                                            <td>
                                            <div className='form-group mb-3'>
                                        {/* <label>Bulan Menunggak</label> */}
                                        <input type="text" name="bln_menunggak" onChange={this.handleInput} value={this.state.bln_menunggak} className="form-control" />
                                    </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            <div className='form-group mb-3'>
                                        <label>Besar Tunggakan</label>
                                        {/* <input type="text" name="besar_tunggakan" onChange={this.handleInput} value={this.state.besar_tunggakan} className="form-control" /> */}
                                    </div>  
                                            </td>
                                            <td></td>
                                            <td>
                                            <div className='form-group mb-3'>
                                        {/* <label>Besar Tunggakan</label> */}
                                        <input type="text" name="besar_tunggakan" onChange={this.handleInput} value={this.state.besar_tunggakan} className="form-control" />
                                    </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            <input type="hidden" name="status" onChange={this.handleInput} value={this.state.status} className="form-control" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            <div className='form-group mb-3'>
                                        <button type='submit' id='simpanbtn' className='btn btn-primary'>Simpan Data</button>
                                    </div>
                                            </td>
                                        </tr>
                                    </table>

                                        
                                    

                                    
                                </form>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }

}

export default AddLaporan5;