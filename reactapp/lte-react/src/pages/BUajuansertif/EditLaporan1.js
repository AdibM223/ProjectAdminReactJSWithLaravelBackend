import axios from 'axios';
import React from 'react';
import {Link, useParams} from 'react-router-dom';


export function withRouter(Children){
    return(props)=>{

       const match  = {params: useParams()};
       return <Children {...props}  match = {match}/>
   }
 }
class EditLaporan1 extends React.Component 
{ 
    
      state = {
        kode_BUterdaftar:'',
        no_sertif:'',
        periode_sertif:'',
        tgl_cetak:'',
        keterangan_periode:'',
        status:''
        
    }

    handleInput = (e)=> {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    

    async componentDidMount ()
    {
        
        const idlaporan = this.props.match.params.id;
        const res = axios.get(`http://127.0.0.1:8000/api/ajuansertif/Editlaporan/${idlaporan}`);
        // console.log(res);
        if((await res).data.stt === 200)
        {
            this.setState({
                kode_BUterdaftar:(await res).data.Ajuansertifku.kode_buterdaftar,
                no_sertif:(await res).data.Ajuansertifku.no_sertif,
                periode_sertif:(await res).data.Ajuansertifku.periode_sertif,
                tgl_cetak:(await res).data.Ajuansertifku.tgl_cetak,
                keterangan_periode:(await res).data.Ajuansertifku.keterangan_periode,
                status:'belum terverifikasi'
                
            });
        }
    }
    
    updatelaporan = async (e)=> {
        e.preventDefault();
        // const idlaporan = useParams(this.props.match.param.id);
        const idlaporan = this.props.match.params.id;
        document.getElementById('updatebtn').disabled = true;
        document.getElementById('updatebtn').innerText = "Updating";
        const res = await axios.put(`http://127.0.0.1:8000/api/ajuansertif/Updatelaporan/${idlaporan}` , this.state);
        
        if (res.data.stt === 200)
        {
            console.log(res.data.message);
            
            document.getElementById('updatebtn').disabled = false;
            document.getElementById('updatebtn').innerText = "Update Laporan";
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
                                    <h4>EDIT LAPORAN</h4>
                                </td>
                                <td>
                                      
                                </td>
                                <td class="col-md-1">
                                    <Link to={'/laporanbtn/ajuansertif'} className='btn btn-danger btn-sm float-end'>Kembali</Link>
                                </td>
                        </tr>
                    </table>
                            </div>
                            <div className='card-body'>

                                <form onSubmit={this.updatelaporan}>
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
                                        {/* <label>Kode Badan Usaha</label> */}
                                        <input type="text" onChange={this.handleInput} name="kode_BUterdaftar" value={this.state.kode_BUterdaftar} className="form-control" disabled='true' />
                                    </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            <div className='form-group mb-3'>
                                        Nomor Sertifikat
                                        {/* <input type="text" name="no_sertif" onChange={this.handleInput} value={this.state.nama} className="form-control" /> */}
                                    </div>
                                            </td>
                                            <td></td>
                                            <td>
                                            <div className='form-group mb-3'>
                                        {/* <label>Nomor Sertifikat</label> */}
                                        <input type="text" name="no_sertif" onChange={this.handleInput} value={this.state.no_sertif} className="form-control" />
                                    </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            <div className='form-group mb-3'>
                                        Periode Sertifikat
                                        {/* <input type="text" name="periode_sertif" onChange={this.handleInput} value={this.state.alamat} className="form-control" /> */}
                                    </div>
                                            </td>
                                            <td></td>
                                            <td>
                                            <div className='form-group mb-3'>
                                        {/* <label>Periode Sertifikat</label> */}
                                        <input type="text" name="periode_sertif" onChange={this.handleInput} value={this.state.periode_sertif} className="form-control" />
                                    </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            <div className='form-group mb-3'>
                                        Tanggal Cetak
                                        {/* <input type="text" name="tgl_cetak" onChange={this.handleInput} value={this.state.notelp} className="form-control" /> */}
                                    </div>
                                            </td>
                                            <td></td>
                                            <td>
                                            <div className='form-group mb-3'>
                                        {/* <label>Tanggal Cetak</label> */}
                                        <input type="date" name="tgl_cetak" onChange={this.handleInput} value={this.state.tgl_cetak} className="form-control" />
                                    </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            <div className='form-group mb-3'>
                                        Keterangan Periode
                                        {/* <input type="text" name="keterangan_periode" onChange={this.handleInput} value={this.state.notelp} className="form-control" /> */}
                                    </div>
                                            </td>
                                            <td></td>
                                            <td><div className='form-group mb-3'>
                                        {/* <label>Keterangan Periode</label> */}
                                        <input type="text" name="keterangan_periode" onChange={this.handleInput} value={this.state.keterangan_periode} className="form-control" />
                                    </div></td>
                                        </tr>

                                        <tr>
                                            <td>
                                            <input type="hidden" name="status" onChange={this.handleInput} value={this.state.status} className="form-control" />
                                            </td>
                                        </tr>

                                        
                                    </table>
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

export default withRouter(EditLaporan1);