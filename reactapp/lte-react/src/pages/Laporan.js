import axios from 'axios';
import React, { Component } from 'react';
import {Link, useParams} from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import ViewModal from '../components/Modals/ViewModal';

export function withRouter(Children){
    return(props)=>{

       const match  = {params: useParams()};
       return <Children {...props}  match = {match}/>
   }
 }


class Laporan extends React.Component 
{ 
    


    state = {
        laporan:[],
        loading:true,
        statusnew: '',
        kode:'',
        nama:'',
        alamat:'',
        notelp:''
    }

    async componentDidMount (){
        const res = axios.get('http://127.0.0.1:8000/api/laporanku');
        console.log(res);

        if ((await res).data.stt === 200) {
            this.setState({
                laporan: (await res).data.laporanku,
                loading: false,
            });
        }
    }

    tampildata = async (id)=> {
        const res = axios.post('http://127.0.0.1:8000/api/tampildata', {goid:id});
        if((await res).data.stt === 200)
        {
            this.setState({
                kode:this.state.laporan.kode,
                nama:this.state.laporan.nama,
                alamat:this.state.laporan.alamat,
                notelp:this.state.laporan.notelp
                
            });
            console.log(res);
        }
            
    }

    changestatus = async (e,id) => {
        e.preventDefault();
        // const thirdClickedFunda1 = e.currentTarget;
        // thirdClickedFunda1.innerText = "Proses Verifikasi";

        
        // document.getElementById('verifybtn').disabled = true;
        // document.getElementById('verifybtn').innerText = "Proses Verifikasi";
        const res = await axios.put(`http://127.0.0.1:8000/api/verifikasilaporan/${id}` , this.state);
        if(res.status ===200)
        {
            // thirdClickedFunda1.closest("tr").remove();
            this.setState({
                statusnew:'Terverifikasi' 
            });
            
            // document.getElementById('verifybtn').disabled = true;
            // document.getElementById('verifybtn').innerText = "Verifikasi";
        }
    }
    deleteLaporan =  async (e,id) => {
        const thirdClickedFunda = e.currentTarget;
        thirdClickedFunda.innerText = "Deleting";
        const res = await axios.delete(`http://127.0.0.1:8000/api/deletelaporan/${id}`);
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
                        <td>{item.kode}</td>
                        <td>{item.nama}</td>
                        <td>{item.alamat}</td>
                        <td>{item.notelp}</td>
                        <td>{item.status}</td>
                        <td>
                        
                        
                        {/* <button type='button'
                        className='btn btn-primary'
                        data-bs-toggle='modal'
                        data-bs-target={'#viewModal'+item.id} 
                        onClick={() =>{ this.tampildata(item.id)}}  >View</button>
                         <ViewModal modid={item.id} datalap= {this.state} /> */}

                            <Link to={`Editlaporan/${item.id}`} className="btn btn-success btn-sm">Edit</Link>
                        </td>
                        <td>
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
                        <td>{item.id}</td>
                        <td>{item.kode}</td>
                        <td>{item.nama}</td>
                        <td>{item.alamat}</td>
                        <td>{item.notelp}</td>
                        <td>{item.status}</td>
                        <td>
                        
                        <button type="button" id='verifybtn' onClick={(e) => this.changestatus(e, item.id)} className="btn btn-danger btn-sm">Verifikasi</button>
                        <input type="hidden" name="statusnew" onChange={this.handleInput} value={this.state.notelp} className="from-control" />
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
            <div className='body'>
                <Sidebar />
                
                <div className='container'>
                    {/* CRUD table */}
                <div className='row'>
                    
                    <div className='col-ml-12'>
                        <div className='card'>
                            <div className='card-header'>
                                <h4> Data Laporan
                                
                                <Link to={'Addlaporan'} className='btn btn-primary btn-sm float-end'>Tambah Laporan</Link>
                                </h4>
                            </div>
                            <div className='card-body'>
                           
                                <table className='table table-bordered table-striped'>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Kode</th>
                                            <th>Nama</th>
                                            <th>Alamat</th>
                                            <th>Nomor</th>
                                            <th>Status</th>
                                            <th>Edit</th>
                                            <th>Delete</th>
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
                <br />
                <br />
                {/* Verification Table */}
                <div className='row'>
                    <div className='col-ml-12'>
                        <div className='card'>
                            <div className='card-header'>
                                <h4> Verifikasi Data
                                {/* <Link to={'Addlaporan'} className='btn btn-primary btn-sm float-end'>Tambah Laporan</Link> */}
                                </h4>
                            </div>
                            <div className='card-body'>

                                <table className='table table-bordered table-striped'>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Kode</th>
                                            <th>Nama</th>
                                            <th>Alamat</th>
                                            <th>Nomor</th>
                                            {/* <th>Edit</th> */}
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
           
            
        );
        
    }

}

export default withRouter(Laporan);