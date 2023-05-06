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

class Laporan6 extends React.Component 
{ 

    state = {
        laporan:[],
        laporan2:[],
        laporan3:[],
        laporan4:[],
        loading:true,
        statusnew: ''
    }

    async componentDidMount (){
        const res = axios.get('http://127.0.0.1:8000/api/pemeriksa/laporanku');
        const res2 = axios.get('http://127.0.0.1:8000/api/pemeriksa/laporanku2');
        const res3 = axios.get('http://127.0.0.1:8000/api/pemeriksa/laporanku3');
        const res4 = axios.get('http://127.0.0.1:8000/api/pemeriksa/laporanku4');
        console.log(res);
        console.log(res2);
        console.log(res3);
        console.log(res4);
        if ((await res).data.stt === 200) {
            this.setState({
                laporan: (await res).data.belumdaftarku,
                loading: false
            });

            
        }

        if ((await res2).data.stt === 200) {
            this.setState({
                laporan2: (await res2).data.sudahdftrku,
                loading: false
            });

        }

        if ((await res3).data.stt === 200) {
            this.setState({
                laporan3: (await res3).data.pemeriksablmku,
                loading: false
            });
   
        }

        if ((await res4).data.stt === 200) {
            this.setState({
                laporan4: (await res4).data.pemeriksasudahku,
                loading: false
            });
        }
   
    }

    deleteLaporan =  async (e,id) => {
        const thirdClickedFunda = e.currentTarget;
        thirdClickedFunda.innerText = "Deleting";
        const res = await axios.delete(`http://127.0.0.1:8000/api/pemeriksa/deletelaporan/${id}`);
        if( res.data.stt === 200)
        {
            thirdClickedFunda.closest("tr").remove();
            console.log( res.data.message);
        }
    }

    deleteLaporan2 =  async (e,id) => {
        const thirdClickedFunda = e.currentTarget;
        thirdClickedFunda.innerText = "Deleting";
        const res = await axios.delete(`http://127.0.0.1:8000/api/pemeriksa/deletelaporan2/${id}`);
        if( res.data.stt === 200)
        {
            thirdClickedFunda.closest("tr").remove();
            console.log( res.data.message);
        }
    }

    render() {
        var badanbelum_HTML_TABLE = "";
        if (this.state.loading) {
            badanbelum_HTML_TABLE = <tr><td colSpan="7"><h2>Loading...</h2></td></tr>;
        }
        else{
            badanbelum_HTML_TABLE = 
            this.state.laporan.map( (item) => {
                return(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.id}</td>
                        <td>{item.nama_BUbelumdaftar}</td>
                        <td>{item.alamat_bubelumdaftar}</td>
                        <td>{item.notelp_bubelumdaftar}</td>
                        <td>
                            <Link to={`Editlaporan/${item.id}`} className="btn btn-success btn-sm">Edit</Link>
                        </td>
                        <td>
                            <button type="button" onClick={(e) => this.deleteLaporan(e, item.id)} className="btn btn-success btn-sm">Delete</button> 
                        </td>
                        
                    </tr>
                    
                );
            });
        };

        var badansudah_HTML_TABLE = "";
        if (this.state.loading) {
            badansudah_HTML_TABLE = <tr><td colSpan="7"><h2>Loading...</h2></td></tr>;
        }
        else{
            badansudah_HTML_TABLE = 
            this.state.laporan2?.map( (item) => {
                return(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.id}</td>
                        <td>{item.nama_BUterdaftar}</td>
                        <td>{item.alamat_BUterdaftar}</td>
                        <td>{item.notelp_BUterdaftar}</td>
                        <td>
                            <Link to={`Editlaporan2/${item.id}`} className="btn btn-success btn-sm">Edit</Link>
                        </td>
                        <td>
                            <button type="button" onClick={(e) => this.deleteLaporan2(e, item.id)} className="btn btn-success btn-sm">Delete</button> 
                        </td>
                        
                    </tr>
                );
            });
        }

        var limpahbelum_HTML_TABLE = "";
        if (this.state.loading) {
            limpahbelum_HTML_TABLE = <tr><td colSpan="7"><h2>Loading...</h2></td></tr>;
        }
        else{
            limpahbelum_HTML_TABLE = 
            this.state.laporan3?.map( (item) => {
                return(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.id}</td>
                        <td>{item.tgl_pelimpahan}</td>
                        <td>{item.tgl_SP}</td>
                        <td>{item.nomor_SP}</td>
                        <td>{item.dasar_pelimpahan}</td>
                    </tr>
                );
            });
        }

        var limpahsudah_HTML_TABLE = "";
        if (this.state.loading) {
            limpahsudah_HTML_TABLE = <tr><td colSpan="7"><h2>Loading...</h2></td></tr>;
        }
        else{
            limpahsudah_HTML_TABLE = 
            this.state.laporan4?.map( (item) => {
                return(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.id}</td>
                        <td>{item.tgl_pelimpahan}</td>
                        <td>{item.badan_pelimpah}</td>
                        <td>{item.dasar_pelimpahan}</td>
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
                    {/*  table Badan Usaha Belum Daftar */}
                <div className='row'>
                    <div className='col-ml-12'>
                        <div className='card'>
                            <div className='card-header'>
                                <h4> Data BU Belum Daftar
                                </h4>
                            </div>
                            <div className='card-body'>
                            <Link to={'Addlaporan'} className='btn btn-primary btn-sm float-end'>Tambah Badan Usaha</Link>
                            <br/>
                            <br/>
                                <table className='table table-bordered table-striped'>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Kode Badan Usaha</th>
                                            <th>Nama Badan Usaha</th>
                                            <th>Alamat Badan Usaha</th>
                                            <th>Nomor Telepon Badan Usaha</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {badanbelum_HTML_TABLE}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <br />
                {/* Table Badan Usaha Sudah Daftar */}
                <div className='row'>
                    <div className='col-ml-12'>
                        <div className='card'>
                            <div className='card-header'>
                                <h4> Data BU Sudah Daftar
                                </h4>
                                <div className='card-body'>
                            <Link to={'Addlaporan2'} className='btn btn-primary btn-sm float-end'>Tambah Badan Usaha</Link>
                            <br/>
                            </div>
                                <table className='table table-bordered table-striped'>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Kode Badan Usaha</th>
                                            <th>Nama Badan Usaha</th>
                                            <th>Alamat Badan Usaha</th>
                                            <th>Nomor Telepon Badan Usaha</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {badansudah_HTML_TABLE}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Table Pelimpahan Badan Usaha Belum Daftar */}
                <div className='row'>
                    <div className='col-ml-12'>
                        <div className='card'>
                            <div className='card-header'>
                                <h4> Data Pelimpahan BU Belum Daftar
                                </h4>
                                <div className='card-body'>
                            </div>
                                <table className='table table-bordered table-striped'>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Kode Badan Usaha</th>
                                            <th>Tanggal Pelimpahan</th>
                                            <th>Tanggal Surat Perintah</th>
                                            <th>Nomor Surat Perintah</th>
                                            <th>Dasar Pelimpahan</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {limpahbelum_HTML_TABLE}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Table Pelimpahan Badan Usaha Sudah Daftar */}
                <div className='row'>
                    <div className='col-ml-12'>
                        <div className='card'>
                            <div className='card-header'>
                                <h4> Data Pelimpahan BU Sudah Daftar
                                </h4>
                                <div className='card-body'>

                            </div>
                                <table className='table table-bordered table-striped'>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Kode Badan Usaha</th>
                                            <th>Tanggal Pelimpahan</th>
                                            <th>Badan Pelimpah</th>
                                            <th>Dasar Pelimpahan</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {limpahsudah_HTML_TABLE}
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

export default withRouter(Laporan6);