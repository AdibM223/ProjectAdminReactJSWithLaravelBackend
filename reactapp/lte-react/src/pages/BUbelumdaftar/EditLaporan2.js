import axios from 'axios';
import React from 'react';
import {Link, useParams} from 'react-router-dom';


export function withRouter(Children){
    return(props)=>{

       const match  = {params: useParams()};
       return <Children {...props}  match = {match}/>
   }
 }
class EditLaporan2 extends React.Component 
{ 
    
      state = {
        kodeBUbelumdaftar:'',
        nama_BUbelumdaftar:'',
        tanggal_canvasing:'',
        hasil_canvasing:'',
  
    }

    handleInput = (e)=> {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    

    async componentDidMount ()
    {

        const idlaporan = this.props.match.params.id;
        const res = axios.get(`http://127.0.0.1:8000/api/belumdaftar/Editlaporan/${idlaporan}`);
        console.log(res);
        if((await res).data.stt === 200)
        {
            this.setState({
                kodeBUbelumdaftar:(await res).data.detailbelumdaftarku.kodeBUbelumdaftar,
                nama_BUBelumDaftar:(await res).data.detailbelumdaftarku.nama_BUBelumDaftar,
                tanggal_canvasing:(await res).data.detailbelumdaftarku.tanggal_canvasing,
                hasil_canvasing:(await res).data.detailbelumdaftarku.hasil_canvasing,
            });
        }
    }
    
    updatelaporan = async (e)=> {
        e.preventDefault();
        // const idlaporan = useParams(this.props.match.param.id);
        const idlaporan = this.props.match.params.id;
        document.getElementById('updatebtn').disabled = true;
        document.getElementById('updatebtn').innerText = "Updating";
        const res = await axios.put(`http://127.0.0.1:8000/api/belumdaftar/Updatelaporan/${idlaporan}` , this.state);
        
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
        <div class="col-md-4.5">
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
                                    <Link to={'/laporanbtn/bubelumdaftar'} className='btn btn-danger btn-sm float-end'>Kembali</Link>
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
                                            <label>Kode Badan Usaha</label>
                                            </div>
                                            
                                            </td>
                                            <td>
                                            <div className='form-group mb-3'>
                                            <input type="text" onChange={this.handleInput} name="kodeBUbelumdaftar" value={this.state.kodeBUbelumdaftar} className="form-control" disabled='true' />   
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
                                            <div className='form-group mb-3'>
                                            <input type="text" name="nama_BUBelumDaftar" onChange={this.handleInput} value={this.state.nama_BUBelumDaftar} className="form-control" />    
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
                                            <div className='form-group mb-3'>
                                            <input type="date" name="tanggal_canvasing" onChange={this.handleInput} value={this.state.tanggal_canvasing} className="form-control" />
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

                                        <tr>
                                            <td>
                                            <div className='form-group mb-3'>
                                            <label>Tanggal Pelimpahan</label>
                                            </div>
                                            
                                            </td>
                                            <td>
                                            <div className='form-group mb-3'>
                                            <input type="date" onChange={this.handleInput} name="tgl_pelimpahan" value={this.state.tgl_pelimpahan} className="form-control" />
                                            </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            <div className='form-group mb-3'>
                                            <label>Tanggal Surat Perintah</label>
                                            </div>
                                            
                                            </td>
                                            <td>
                                            <div className='form-group mb-3'>
                                            <input type="date" name="tgl_SP" onChange={this.handleInput} value={this.state.tgl_SP} className="form-control" />
                                            </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            <div className='form-group mb-3'>
                                            <label>Nomor Surat Perintah</label>
                                            </div>
                                            
                                            </td>
                                            <td>
                                            <div className='form-group mb-3'>
                                            <input type="text" name="nomor_SP" onChange={this.handleInput} value={this.state.nomor_SP} className="form-control" />
                                            </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            <div className='form-group mb-3'>
                                            <label>Dasar Pelimpahan</label>
                                            </div>
                                            
                                            </td>
                                            <td>
                                            <div className='form-group mb-3'>
                                            <input type="text" name="dasar_pelimpahan" onChange={this.handleInput} value={this.state.dasar_pelimpahan} className="form-control" />
                                            </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            <div className='form-group mb-3'>
                                            <button type='submit' id="updatebtn" className='btn btn-primary'>Update Laporan</button>
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

export default withRouter(EditLaporan2);