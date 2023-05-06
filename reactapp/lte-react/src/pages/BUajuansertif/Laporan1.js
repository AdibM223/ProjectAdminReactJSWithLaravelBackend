import axios from 'axios';
import {Link, useParams} from 'react-router-dom';


// export function withRouter(Children){
//     return(props)=>{

//        const match  = {params: useParams()};
//        return <Children {...props}  match = {match}/>
//    }
   
//  }




import React, { Component } from 'react'

export class Laporan1 extends Component {
    state = {
        laporan:[],
        loading:true,
        status: ''
    }

    async componentDidMount (){
        
        const res = axios.get('http://127.0.0.1:8000/api/ajuansertif/laporanku');
        console.log(res);
        if ((await res).data.stt === 200) {
            this.setState({
                laporan: (await res).data.Ajuansertifku,
                loading: false,
                status:'Terverifikasi'
            });
        }
    }

    changestatus = async (e,id) => {
        e.preventDefault();
        const thirdClickedFunda = e.currentTarget;
        thirdClickedFunda.innerText = "Proses Verifikasi";
        const res = await axios.put(`http://127.0.0.1:8000/api/ajuansertif/verifikasilaporan/${id}` , this.state);
        if(res.status ===200)
        {
            
            this.setState({
                status:'Terverifikasi' 
                
            });
            
            thirdClickedFunda.closest("tr").remove();
        }
        console.log(this.status);
    }
    deleteLaporan =  async (e,id) => {
        const thirdClickedFunda = e.currentTarget;
        thirdClickedFunda.innerText = "Deleting";
        const res = await axios.delete(`http://127.0.0.1:8000/api/ajuansertif/deletelaporan/${id}`);
        if( res.data.stt === 200)
        {
            thirdClickedFunda.closest("tr").remove();
            console.log( res.data.message);
        }
    }
  render() {
            var laporan_HTML_TABLE = "";
        if (this.state.loading) {
            laporan_HTML_TABLE = <tr><td colSpan="7"><h2>Loading...</h2></td></tr>;
        }
        else{
            laporan_HTML_TABLE = 
            this.state.laporan.map( (item) => {
                return(
                    <tr key={item.id}>
                        {/* <td>{item.id}</td> */}
                        <td>{item.kode_buterdaftar}</td>
                        <td>{item.no_sertif}</td>
                        <td>{item.periode_sertif}</td>
                        <td>{item.tgl_cetak}</td>
                        <td>{item.keterangan_periode}</td>
                        <td>
                            <Link to={`Editlaporan/${item.id}`} className="btn btn-success btn-sm">Edit</Link>
                
                            <button type="button" onClick={(e) => this.deleteLaporan(e, item.id)} className="btn btn-success btn-sm">Delete</button> 
                        </td>
                        
                    </tr>
                    
                );
            });
        }

        var verifikasi_HTML_TABLE = "";
        if (this.state.loading) {
            verifikasi_HTML_TABLE = <tr><td colSpan="7"><h2>Loading...</h2></td></tr>;
        }
        else{
            verifikasi_HTML_TABLE = 
            this.state.laporan.map( (item) => {
                return(
                    <tr key={item.id}>
                        {/* <td>{item.id}</td> */}
                        <td>{item.kode_buterdaftar}</td>
                        <td>{item.no_sertif}</td>
                        <td>{item.periode_sertif}</td>
                        <td>{item.tgl_cetak}</td>
                        <td>{item.keterangan_periode}</td>
                        <td>{item.status}</td>
                        <td>
                        <input type="hidden" name="status" onChange={this.handleInput} value={item.status} className="form-control" />
                        
                        <button type="button" id='verify' onClick={(e) => this.changestatus(e, item.id)} className="btn btn-danger btn-sm">Verifikasi</button>
                            {/* <Link to={`Verifikasilaporan/${item.id}`} onClick={this.changestatus} className="btn btn-success btn-sm">Verifikasi</Link> */}
                        </td>
                        {/* <td>
                            <button type="button" onClick={(e) => this.deleteLaporan(e, item.id)} className="btn btn-success btn-sm">Delete</button> 
                        </td> */}
                    </tr>
                );
            });
        }
    return (
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header"></div>

                <div class="card-body">
                                {/* CRUD table */}
        <div className='row'>
            <div className='col-ml-12'>
                <div className='card'>
                    <div className='card-header'>
                        <h4> Laporan Pengajuan Setifikat Badan Usaha (BU)
                        </h4>
                        
                    </div>
                    <div className='card-body'>
                    <div >
                        <Link to={'Addlaporan'} className='btn btn-primary btn-sm float-end'>Tambah Laporan</Link>
                        <br/>
                        <br/>
                        </div>
                        <div>
                        <table className='table table-bordered table-striped'>
                            <thead>
                                <tr>
                                    {/* <th>ID</th> */}
                                    <th>Kode BU</th>
                                    <th>Nomor Sertifikat</th>
                                    <th>Tanggal Cetak</th>
                                    <th>Keterangan Periode</th>
                                    <th>Status</th>
                                    <th>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {laporan_HTML_TABLE}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
                        </div>
                        
        <br />

        {/* Verification Table */}
        <div className='row'>
            <div className='col-ml-12'>
                <div className='card'>
                    <div className='card-header'>
                        <h4> Verifikasi Data Laporan Pengajuan Sertifikat Badan Usaha
                        </h4>
                    </div>
                    <div className='card-body'>

                        <table className='table table-bordered table-striped'>
                            <thead>
                                <tr>
                                    {/* <th>ID</th> */}
                                    <th>Kode BU</th>
                                    <th>Nomor Sertifikat</th>
                                    <th>Tanggal Cetak</th>
                                    <th>Keterangan Periode</th>
                                    <th>Status</th>
                                    <th>Verifikator</th>
                                    <th>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {verifikasi_HTML_TABLE}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
                </div>
            </div>
        </div>
    </div>
</div>
    )
  }
}

export default Laporan1

