import axios from 'axios';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class AddLaporan1 extends Component 
{ 
    state = {
        id:'',
                nama_BUbelumdaftar:'',
                alamat_bubelumdaftar:'',
                notelp_bubelumdaftar:'',
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
        const res = await axios.post('http://127.0.0.1:8000/api/pemeriksa/Addlaporan',this.state);
        if (res.data.stt === 200)
        {
            console.log(res.data.message);
            this.setState({
                id:'',
                nama_BUbelumdaftar:'',
                alamat_bubelumdaftar:'',
                notelp_bubelumdaftar:'',
            });
            document.getElementById('simpanbtn').disabled = false;
            document.getElementById('simpanbtn').innerText = "Simpan";
        }
    }

    render() {
        return (  
                <div class="container col-mb-3">
    <div class="row justify-content-center ">
        <div class="col-md-4">
            <div class="card">
                <div class="card-header">
                    <table>
                        <tr>
                            <td>
                            <h4>TAMBAH BADAN USAHA</h4>
                            </td>
                            <td class="col-md-1">
                            <Link to={'/laporanbtn/pemeriksa'} className='btn btn-danger btn-sm float-end'>Kembali</Link>
                            </td>
                            
                        </tr>
                    </table>
                                
                            </div>
                            <div className='card-body'>
                            <div className='row'>
                            <div className='col-ml-12'>
                                <form onSubmit={this.Simpanlaporan}>
                                    <table>
                                        <tr>
                                            <td>
                                            <div className='form-group mb-3'>
                                                Kode Badan Usaha
                                                {/* <input type="text" onChange={this.handleInput} name="kode_BU_terdaftar" value={this.state.kode} className="form-control" /> */}
                                            </div>
                                            </td>
                                            <td></td>
                                            <td>
                                            <div className='form-group mb-3'>
                                        {/* <label>Kode Badan Usaha</label>
                                        <select class="form-control" id="position-option" name="position_id">
                                            @foreach ($positions as $position)
                                            <option value="{{$position->id}}">{{$position->position_name}}</option>
                                            @endforeach
                                        </select> */}
                                        <input type="text" onChange={this.handleInput} name="id" value={this.state.id} className="form-control" />
                                    </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            <div className='form-group mb-3'>
                                        Nama Badan Usaha
                                        {/* <input type="text" name="no_sertif" onChange={this.handleInput} value={this.state.nama} className="form-control" /> */}
                                    </div>
                                            </td>
                                            <td></td>
                                            <td>
                                            <div className='form-group mb-3'>
                                        {/* <label>Nomor Sertifikat</label> */}
                                        <input type="text" name="nama_BUbelumdaftar" onChange={this.handleInput} value={this.state.nama_BUbelumdaftar} className="form-control" />
                                    </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            <div className='form-group mb-3'>
                                        Alamat
                                        {/* <input type="text" name="periode_sertif" onChange={this.handleInput} value={this.state.alamat} className="form-control" /> */}
                                    </div>
                                            </td>
                                            <td></td>
                                            <td>
                                            <div className='form-group mb-3'>
                                        {/* <label>Periode Sertifikat</label> */}
                                        <input type="text" name="alamat_bubelumdaftar" onChange={this.handleInput} value={this.state.alamat_bubelumdaftar} className="form-control" />
                                    </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            <div className='form-group mb-3'>
                                        Nomor Telepon
                                        {/* <input type="text" name="tgl_cetak" onChange={this.handleInput} value={this.state.notelp} className="form-control" /> */}
                                    </div>
                                            </td>
                                            <td></td>
                                            <td>
                                            <div className='form-group mb-3'>
                                        {/* <label>Tanggal Cetak</label> */}
                                        <input type="text" name="notelp_bubelumdaftar" onChange={this.handleInput} value={this.state.notelp_bubelumdaftar} className="form-control" />
                                    </div>
                                            </td>
                                        </tr>
                                        
                                    </table>
                                    
                                        

                                    <div className='form-group mb-3'>
                                        <button type='submit' id='simpanbtn' className='btn btn-primary'>Simpan Data</button>
                                    </div>
                                </form>
                            
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
            </div>
        );
    }

}

export default AddLaporan1;