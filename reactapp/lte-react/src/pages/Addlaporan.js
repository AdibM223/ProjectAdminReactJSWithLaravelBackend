import axios from 'axios';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class AddLaporan extends Component 
{ 
    state = {
        kode:'',
        nama:'',
        alamat:'',
        notelp:'',
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
        const res = await axios.post('http://127.0.0.1:8000/api/Addlaporan',this.state);
        if (res.data.stt === 200)
        {
            console.log(res.data.message);
            this.setState({
                kode:'',
                nama:'',
                alamat:'',
                notelp:'',
                status:''
            });
            document.getElementById('simpanbtn').disabled = false;
            document.getElementById('simpanbtn').innerText = "Simpan";
        }
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-ml-6'>
                        <div className='card'>
                            <div className='card-header'>
                                <h4> Tambah Laporan
                                <Link to={'/laporanbtn/ajuansertif'} className='btn btn-primary btn-sm float-end'>Kembali</Link>
                                </h4>
                            </div>
                            <div className='card-body'>

                                <form onSubmit={this.Simpanlaporan}>
                                    <div className='form-group mb-3'>
                                        <label>Kode Instansi</label>
                                        <input type="text" onChange={this.handleInput} name="kode" value={this.state.kode} className="from-control" />
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label>Nama Instansi</label>
                                        <input type="text" name="nama" onChange={this.handleInput} value={this.state.nama} className="from-control" />
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label>Alamat</label>
                                        <input type="text" name="alamat" onChange={this.handleInput} value={this.state.alamat} className="from-control" />
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label>Nomor Telepon</label>
                                        <input type="text" name="notelp" onChange={this.handleInput} value={this.state.notelp} className="from-control" />
                                    </div>

                                        <input type="hidden" name="status" onChange={this.handleInput} value={this.state.status} className="from-control" />
                                    

                                    <div className='form-group mb-3'>
                                        <button type='submit' id='simpanbtn' className='btn btn-primary'>Simpan Data</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }

}

export default AddLaporan;