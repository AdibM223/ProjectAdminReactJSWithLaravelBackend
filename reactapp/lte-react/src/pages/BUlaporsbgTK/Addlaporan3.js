import axios from 'axios';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class AddLaporan3 extends Component 
{ 
    state = {
        kode_BUterdaftar:'',
        nama_bu:'',
        sumber_data_pembanding:'',
        besar_data_pembanding:'',
        bulan_rujukan_MF:'',
        data_MF:'',
        selisih:'',
        tanggal_canvasing_PTSDK:'',
        hasil_canvasing:'',

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
        const res = await axios.post('http://127.0.0.1:8000/api/laporsbgtk/Addlaporan',this.state);
        if (res.data.stt === 200)
        {
            console.log(res.data.message);
            this.setState({
                kode_BUterdaftar:'',
                nama_bu:'',
                sumber_data_pembanding:'',
                besar_data_pembanding:'',
                bulan_rujukan_MF:'',
                data_MF:'',
                selisih:'',
                tanggal_canvasing_PTSDK:'',
                hasil_canvasing:'',
                status:'belum terverifikasi'
            });
            document.getElementById('simpanbtn').disabled = false;
            document.getElementById('simpanbtn').innerText = "Simpan";
        }
    }

    render() {
        return (
            <div class="container col-mb-3">
            <div class="row justify-content-center ">
                <div class="col-md-4.5">
                    <div class="card">
                        <div class="card-header">
                            <table>
                            <tr>
                                <td>
                                    <h4>TAMBAH LAPORAN</h4>
                                </td>
                                <td>
                                      
                                </td>
                                <td class="col-md-1">
                                    <Link to={'/laporanbtn/bulaporsbgtk'} className='btn btn-danger btn-sm float-end'>Kembali</Link>
                                </td>
                        </tr>
                    </table>
                            </div>
                            <div className='card-body'>

                                <form onSubmit={this.Simpanlaporan}>
                                <table>
                                    <tr>
                                        <td>
                                        <tr>
                                        <td>
                                        <div className='form-group mb-3'>
                                        <label>Kode Badan Usaha</label>
                                       </div>
                                        </td>
                                        <td>
                                        <div className='form-group mb-3'>
                                        <input type="text" onChange={this.handleInput} name="kode_BUterdaftar" value={this.state.kode_BUterdaftar} className="form-control" />
                                       </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        <div className='form-group mb-3'>
                                        <label>Sumber Data Pembanding</label>
                                       </div>
                                        </td>
                                        <td>
                                            
                                        <div className='form-group mb-3'>
                                        <select class="form-control" onChange={this.handleInput} value={this.state.sumber_data_pembanding} name="sumber_data_pembanding"> 
                                            <option>JKN</option>
                                            <option>PPU</option>
                                        </select>
                                        {/* <input type="text" name="sumber_data_pembanding" onChange={this.handleInput} value={this.state.sumber_data_pembanding} className="form-control" />  */}
                                       </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        <div className='form-group mb-3'>
                                        <label>Besar Data Pembanding</label>
                                       </div>
                                        </td>
                                        <td>
                                        <div className='form-group mb-3'>
                                        <input type="text" name="besar_data_pembanding" onChange={this.handleInput} value={this.state.besar_data_pembanding} className="form-control" /> 
                                       </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        <div className='form-group mb-3'>
                                        <label>Bulan Rujukan MF</label>
                                       </div>
                                        </td>
                                        <td>
                                        <div className='form-group mb-3'>
                                        <input type="date" name="bulan_rujukan_MF" onChange={this.handleInput} value={this.state.bulan_rujukan_MF} className="form-control" />   
                                       </div>
                                        </td>
                                    </tr>
                                        </td>
                                        <td width={20}></td>
                                        <td>
                                        <tr>
                                        <td>
                                        <div className='form-group mb-3'>
                                        <label>Data MF</label>
                                       </div>
                                        </td>
                                        <td>
                                        <div className='form-group mb-3'>
                                        <input type="text" onChange={this.handleInput} name="data_MF" value={this.state.data_MF} className="form-control" />  
                                       </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        <div className='form-group mb-3'>
                                        <label>Selisih</label>
                                       </div>
                                        </td>
                                        <td>
                                        <div className='form-group mb-3'>
                                        <input type="text" name="selisih" onChange={this.handleInput} value={this.state.selisih} className="form-control" /> 
                                       </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        <div className='form-group mb-3'>
                                        <label>Tanggal Canvasing PTSDK</label>
                                       </div>
                                        </td>
                                        <td>
                                        <div className='form-group mb-3'>
                                        <input type="date" name="tanggal_canvasing_PTSDK" onChange={this.handleInput} value={this.state.tanggal_canvasing_PTSDK} className="form-control" />
                                       </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        <div className='form-group mb-3'>
                                        <label>Hasil Canvasing</label>
                                       </div>
                                        </td>
                                        <td>
                                        <div className='form-group mb-3'>
                                        <input type="text" name="hasil_canvasing" onChange={this.handleInput} value={this.state.hasil_canvasing} className="form-control" />
                                       </div>
                                        </td>
                                    </tr>
                                    
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

export default AddLaporan3;