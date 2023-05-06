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

    

    async componentDidMount ()
    {
        
        const idlaporan = this.props.match.params.id;
        const res = axios.get(`http://127.0.0.1:8000/api/pemeriksa/Editlaporan/${idlaporan}`);
        console.log(res);
        if((await res).data.stt === 200)
        {
            this.setState({
                id:(await res).data.belumdaftarku.id,
                nama_BUbelumdaftar:(await res).data.belumdaftarku.nama_BUbelumdaftar,
                alamat_bubelumdaftar:(await res).data.belumdaftarku.alamat_bubelumdaftar,
                notelp_bubelumdaftar:(await res).data.belumdaftarku.notelp_bubelumdaftar,
                
            });
        }
    }
    
    updatelaporan = async (e)=> {
        e.preventDefault();
        // const idlaporan = useParams(this.props.match.param.id);
        const idlaporan = this.props.match.params.id;
        document.getElementById('updatebtn').disabled = true;
        document.getElementById('updatebtn').innerText = "Updating";
        const res = await axios.put(`http://127.0.0.1:8000/api/pemeriksa/Updatelaporan/${idlaporan}` , this.state);
        
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
                                    <Link to={'/laporanbtn/pemeriksa'} className='btn btn-danger btn-sm float-end'>Kembali</Link>
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