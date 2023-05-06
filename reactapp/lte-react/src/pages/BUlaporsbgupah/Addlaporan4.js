import axios from 'axios';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class AddLaporan4 extends Component 
{ 
    state = {
        kode_buterdaftar:'',
        nama_bu:'',
        sumber_data_pembanding:'',
        total_potensi_iuran:'',
        total_iuran_MF:'',
        selisih:'',

        tgl_pemeriksaan:'',
        nomor_spt:'',
        tgl_surat:'',
        upaya_surat_kedua:'',
        upaya_lain_by_phone:'',
        upaya_lain_by_wa:'',
        nomor_SKK:'',

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
        const res = await axios.post('http://127.0.0.1:8000/api/laporsbguph/Addlaporan',this.state);
        if (res.data.stt === 200)
        {
            console.log(res.data.message);
            this.setState({
                kode_buterdaftar:'',
                nama_bu:'',
                sumber_data_pembanding:'',
                total_potensi_iuran:'',
                total_iuran_MF:'',
                selisih:'',

                tgl_pemeriksaan:'',
                nomor_spt:'',
                tgl_surat:'',
                upaya_surat_kedua:'',
                upaya_lain_by_phone:'',
                upaya_lain_by_wa:'',
                nomor_SKK:'',
                status:'belum terverifikasi'
            });
            document.getElementById('simpanbtn').disabled = false;
            document.getElementById('simpanbtn').innerText = "Simpan";
        }
    }

    render() {
        return (
            <div className='container'>
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
                                    <Link to={'/laporanbtn/bulaporsbgupah'} className='btn btn-danger btn-sm float-end'>Kembali</Link>
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
                                        {/* <input type="text" onChange={this.handleInput} name="kode_BU_terdaftar" value={this.state.kode} className="form-control" /> */}
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
                                        <label>Sumber Data Pembanding</label>
                                        {/* <input type="text" name="sumber_data_pembanding" onChange={this.handleInput} value={this.state.nama} className="form-control" /> */}
                                    </div>
                                            </td>
                                            <td></td>
                                            <td>
                                            <div className='form-group mb-3'>
                                        {/* <label>Sumber Data Pembanding</label> */}
                                        <select class="form-control" onChange={this.handleInput} value={this.state.sumber_data_pembanding} name="sumber_data_pembanding"> 
                                            <option>JKN</option>
                                            <option>PPU</option>
                                        </select>
                                        {/* <input type="text" name="sumber_data_pembanding" onChange={this.handleInput} value={this.state.nama} className="form-control" /> */}
                                    </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            <div className='form-group mb-3'>
                                        <label>Total Potensi Iuran</label>
                                        {/* <input type="text" name="total_potensi_iuran" onChange={this.handleInput} value={this.state.alamat} className="form-control" /> */}
                                    </div>
                                            </td>
                                            <td></td>
                                            <td>
                                            <div className='form-group mb-3'>
                                        {/* <label>Total Potensi Iuran</label> */}
                                        <input type="text" name="total_potensi_iuran" onChange={this.handleInput} value={this.state.alamat} className="form-control" />
                                    </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            <div className='form-group mb-3'>
                                        <label>Total Iuran MF</label>
                                        {/* <input type="text" name="total_iuran_MF" onChange={this.handleInput} value={this.state.notelp} className="form-control" /> */}
                                    </div>
                                            </td>
                                            <td></td>
                                            <td>
                                            <div className='form-group mb-3'>
                                        {/* <label>Total Iuran MF</label> */}
                                        <input type="text" name="total_iuran_MF" onChange={this.handleInput} value={this.state.notelp} className="form-control" />
                                    </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            <div className='form-group mb-3'>
                                        <label>Selisih</label>
                                        {/* <input type="text" name="selisih" onChange={this.handleInput} value={this.state.notelp} className="form-control" /> */}
                                    </div>
                                            </td>
                                            <td></td>
                                            <td>
                                            <div className='form-group mb-3'>
                                        {/* <label>Selisih</label> */}
                                        <input type="text" name="selisih" onChange={this.handleInput} value={this.state.notelp} className="form-control" />
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

export default AddLaporan4;