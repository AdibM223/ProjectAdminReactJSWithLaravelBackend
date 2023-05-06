import axios from 'axios';
import React, { Component } from 'react';
import {Link, useParams} from 'react-router-dom';


export function withRouter(Children){
    return(props)=>{

       const match  = {params: useParams()};
       return <Children {...props}  match = {match}/>
   }
 }
class EditLaporan extends React.Component 
{ 
    
      state = {
        kode:'',
        nama:'',
        alamat:'',
        notelp:''
        
    }

    handleInput = (e)=> {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    

    async componentDidMount ()
    {
        
        const idlaporan = this.props.match.params.id;
        const res = axios.get(`http://127.0.0.1:8000/api/Editlaporan/${idlaporan}`);
        if((await res).data.stt === 200)
        {
            this.setState({
                kode:(await res).data.laporanku.kode,
                nama:(await res).data.laporanku.nama,
                alamat:(await res).data.laporanku.alamat,
                notelp:(await res).data.laporanku.notelp
            });
        }
    }
    
    updatelaporan = async (e)=> {
        e.preventDefault();
        // const idlaporan = useParams(this.props.match.param.id);
        const idlaporan = this.props.match.params.id;
        document.getElementById('updatebtn').disabled = true;
        document.getElementById('updatebtn').innerText = "Updating";
        const res = await axios.put(`http://127.0.0.1:8000/api/Updatelaporan/${idlaporan}` , this.state);
        
        if (res.data.stt === 200)
        {
            console.log(res.data.message);
            
            document.getElementById('updatebtn').disabled = false;
            document.getElementById('updatebtn').innerText = "Update Laporan";
        }
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-ml-6'>
                        <div className='card'>
                            <div className='card-header'>
                                <h4> Edit Laporan
                                <Link to={'/laporanbtn/ajuansertif'} className='btn btn-primary btn-sm float-end'>Kembali</Link>
                                </h4>
                            </div>
                            <div className='card-body'>

                                <form onSubmit={this.updatelaporan}>
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
                                        <input type="text" name="nomor" onChange={this.handleInput} value={this.state.notelp} className="from-control" />
                                    </div>

                                    <div className='form-group mb-3'>
                                        <button type='submit' id="updatebtn" className='btn btn-primary'>Update Laporan</button>
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

export default withRouter(EditLaporan);