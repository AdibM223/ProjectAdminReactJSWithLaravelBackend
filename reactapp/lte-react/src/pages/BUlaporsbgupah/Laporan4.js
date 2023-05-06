import axios from 'axios';
import React from 'react';
import {Link, useParams} from 'react-router-dom';
// import Sidebar from '../../components/Sidebar';


export function withRouter(Children){
    return(props)=>{

       const match  = {params: useParams()};
       return <Children {...props}  match = {match}/>
   }
 }

class Laporan4 extends React.Component 
{ 

    state = {
        laporan:[],
        loading:true,
        status: ''
    }

    async componentDidMount (){
        const res = axios.get('http://127.0.0.1:8000/api/laporsbguph/laporanku');
        console.log(res);
        if ((await res).data.stt === 200) {
            this.setState({
                laporan: (await res).data.Laporsbguphku,
                loading: false,
                status:'Terverifikasi'
            });
        }
    }

    changestatus = async (e,id) => {
        e.preventDefault();
        const thirdClickedFunda1 = e.currentTarget;
        thirdClickedFunda1.innerText = "Proses Verifikasi";

        
        // document.getElementById('verifybtn').disabled = true;
        // document.getElementById('verifybtn').innerText = "Proses Verifikasi";
        const res = await axios.put(`http://127.0.0.1:8000/api/laporsbguph/verifikasilaporan/${id}` , this.state);
        if(res.status ===200)
        {
            thirdClickedFunda1.closest("tr").remove();
            // this.setState({
            //     status:'Terverifikasi' 
            // });
            
            // document.getElementById('verifybtn').disabled = true;
            // document.getElementById('verifybtn').innerText = "Verifikasi";
        }
    }
    deleteLaporan =  async (e,id) => {
        const thirdClickedFunda = e.currentTarget;
        thirdClickedFunda.innerText = "Deleting";
        const res = await axios.delete(`http://127.0.0.1:8000/api/laporsbguph/deletelaporan/${id}`);
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
                        <td>{item.id}</td>
                        <td>{item.code}</td>
                        <td>{item.sumber_data_pembanding}</td>
                        <td>{item.total_potensi_iuran}</td>
                        <td>{item.total_iuran_MF}</td>
                        <td>{item.selisih}</td>

                        <td>{item.tgl_pemeriksaan}</td>
                        <td>{item.nomor_spt}</td>
                        <td>{item.tgl_surat}</td>
                        <td>{item.upaya_surat_kedua}</td>
                        <td>{item.upaya_lain_by_phone}</td>

                        <td>{item.upaya_lain_by_wa}</td>
                        <td>{item.nomor_SKK}</td>
                        <td>
                            <tr>
                            <td>
                                                    <Link to={`Editlaporan/${item.id}`} className="btn btn-success btn-sm">Edit</Link>
                                                </td>
                                                <td>
                                                    <button type="button" onClick={(e) => this.deleteLaporan(e, item.id)} className="btn btn-success btn-sm">Delete</button> 
                                                </td>
                                                <td>
                                                    <Link to={`limpahkan/${item.id}`} className="btn btn-warning btn-sm">Limpahkan</Link>
                                                </td>
                            </tr>
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
                        <td>{item.id}</td>
                        <td>{item.code}</td>
                        {/* <td>{item.nama_bu}</td> */}
                        <td>{item.sumber_data_pembanding}</td>
                        <td>{item.total_potensi_iuran}</td>
                        <td>{item.total_iuran_MF}</td>
                        <td>{item.selisih}</td>

                        <td>{item.tgl_pemeriksaan}</td>
                        <td>{item.nomor_spt}</td>
                        <td>{item.tgl_surat}</td>
                        <td>{item.upaya_surat_kedua}</td>
                        <td>{item.upaya_lain_by_phone}</td>

                        <td>{item.upaya_lain_by_wa}</td>
                        <td>{item.nomor_SKK}</td>
                        <td>{item.status}</td>
                        <td>
                        <button type="button" id='verifybtn' onClick={(e) => this.changestatus(e, item.id)} className="btn btn-danger btn-sm">Verifikasi</button>
                        <input type="hidden" name="status" onChange={this.handleInput} value={item.status} className="form-control" />
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
                    <div className='col'>
                        <div className='card'>
                            <div className='card-header'>
                                <h4> Data Laporan
                                
                                </h4>
                            </div>
                            <div className='card-body'>
                            <Link to={'Addlaporan'} className='btn btn-primary btn-sm float-end'>Tambah Laporan</Link>
                            <br/>
                            <br/>
                                <table className='table table-bordered table-striped table-fixed table-responsive'>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Kode Badan Usaha</th>
                                            <th>Sumber Data Pembanding</th>
                                            <th>Total Potensi Iuran</th>
                                            <th>Total Iuran MF</th>
                                            <th>Selisih</th>
                                            <th>Tanggal Pemeriksaan</th>
                                            <th>Nomor SPT</th>
                                            <th>Upaya Surat Pertama</th>
                                            <th>Upaya Surat Kedua</th>
                                            <th>Upaya lain (By Phone)</th>
                                            <th>Upaya Lain (By WA)</th>
                                            <th>nomor SKK</th>
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
                <br />

                {/* Verification Table */}
                <div className='row'>
                    <div className='col'>
                        <div className='card'>
                            <div className='card-header'>
                                <h4> Verifikasi Data
                                {/* <Link to={'Addlaporan'} className='btn btn-primary btn-sm float-end'>Tambah Laporan</Link> */}
                                </h4>
                            </div>
                            <div className='card-body'>

                                <table className='table table-bordered table-striped table-fixed table-responsive'>
                                    <thead>
                                        <tr>
                                        <th>ID</th>
                                            <th>Kode Badan Usaha</th>
                                            <th>Sumber Data Pembanding</th>
                                            <th>Total Potensi Iuran</th>
                                            <th>Total Iuran MF</th>
                                            <th>Selisih</th>
                                            <th>Tanggal Pemeriksaan</th>
                                            <th>Nomor SPT</th>
                                            <th>Upaya Surat Pertama</th>
                                            <th>Upaya Surat Kedua</th>
                                            <th>Upaya lain (By Phone)</th>
                                            <th>Upaya Lain (By WA)</th>
                                            <th>nomor SKK</th>
                                            <th>Status</th>
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
        );
    }

}

export default withRouter(Laporan4);