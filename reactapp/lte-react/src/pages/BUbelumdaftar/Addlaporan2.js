import axios from 'axios';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class AddLaporan2 extends Component 
{ 
    state = {
        
        kodeBUbelumdaftar:'',
        nama_BUbelumdaftar:'',
        tanggal_canvasing:'',
        data_canvasing:'',
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
        const res = await axios.post('http://127.0.0.1:8000/api/belumdaftar/Addlaporan',this.state);
        if (res.data.stt === 200)
        {
            console.log(res.data.message);
            this.setState({
                kodeBUbelumdaftar:'',
                nama_BUbelumdaftar:'',
                tanggal_canvasing:'',
                data_canvasing:'',
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
                                    <Link to={'/laporanbtn/bubelumdaftar'} className='btn btn-danger btn-sm float-end'>Kembali</Link>
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
                                            </div>
                                            
                                            </td>
                                            <td>
                                      
                                            </td>
                                            <td>
                                            <div className='form-group mb-3'>
                                            <input type="text" onChange={this.handleInput} name="kodeBUbelumdaftar" value={this.state.kodeBUbelumdaftar} className="form-control" />   
                                            </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            <div className='form-group mb-3'>
                                            <label>Nama Badan Usaha</label>
                                            </div>
                                            
                                            </td>
                                            <td>
                                      
                                            </td>
                                            <td>
                                            <div className='form-group mb-3'>
                                            <input type="text" name="nama_BUbelumdaftar" onChange={this.handleInput} value={this.state.nama_BUbelumdaftar} className="form-control" />    
                                            </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            <div className='form-group mb-3'>
                                            <label>Tanggal Canvasing</label>
                                            </div>
                                            
                                            </td>
                                            <td>
                                      
                                            </td>
                                            <td>
                                            <div className='form-group mb-3'>
                                            <input type="date" name="tanggal_canvasing" onChange={this.handleInput} value={this.state.tgl_canvasing} className="form-control" />
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
                                      
                                            </td>
                                            <td>
                                            <div className='form-group mb-3'>
                                            <input type="text" name="hasil_canvasing" onChange={this.handleInput} value={this.state.hasil_canvasing} className="form-control" />
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

export default AddLaporan2;