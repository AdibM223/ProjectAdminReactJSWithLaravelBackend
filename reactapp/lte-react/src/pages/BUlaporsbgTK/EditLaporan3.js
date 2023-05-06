import axios from 'axios';
import React from 'react';
import {Link, useParams} from 'react-router-dom';


export function withRouter(Children){
    return(props)=>{

       const match  = {params: useParams()};
       return <Children {...props}  match = {match}/>
   }
 }
class EditLaporan3 extends React.Component 
{ 
    
      state = {
                kode_BUterdaftar:'',
                nama_bu:'',
                sumber_data_pembanding:'',
                besar_data_pembanding:'',
                bulan_rujukan_MF:'',
                data_MF:'',
                selisih:'',
                tanggal_canvasing_PTSDK:'',
                hasil_canvasing:'',

                tgl_pelimpahan:'',
                dasar_pelimpahan:'',
        
    }

    handleInput = (e)=> {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    

    async componentDidMount ()
    {
        
        // const idlaporan = useParams(this.props.match.param.id);
        // const idlaporan = this.props.match.params.id;
        // console.log(idlaporan);
        // const res2  = axios.get('http://127.0.0.1:8000/api/laporanku');
        const idlaporan = this.props.match.params.id;
        const res = axios.get(`http://127.0.0.1:8000/api/laporsbgtk/Editlaporan/${idlaporan}`);
        // console.log(res);
        if((await res).data.stt === 200)
        {
            this.setState({
                kode_BUterdaftar:(await res).data.LaporsbgTKku.kode_buterdaftar,
                nama_bu:(await res).data.LaporsbgTKku.nama_bu,
                sumber_data_pembanding:(await res).data.LaporsbgTKku.sumber_data_pembanding,
                besar_data_pembanding:(await res).data.LaporsbgTKku.besar_data_pembanding,
                bulan_rujukan_MF:(await res).data.LaporsbgTKku.bulan_rujukan_MF,
                data_MF:(await res).data.LaporsbgTKku.data_MF,
                selisih:(await res).data.LaporsbgTKku.selisih,
                tanggal_canvasing_PTSDK:(await res).data.LaporsbgTKku.tanggal_canvasing_PTSDK,
                hasil_canvasing:(await res).data.LaporsbgTKku.hasil_canvasing,

                // tgl_pelimpahan:(await res).data.laporanku.tgl_pelimpahan,
                // dasar_pelimpahan:(await res).data.laporanku.dasar_pelimpahan

            });
        }
    }
    
    updatelaporan = async (e)=> {
        e.preventDefault();
        // const idlaporan = useParams(this.props.match.param.id);
        const idlaporan = this.props.match.params.id;
        document.getElementById('updatebtn').disabled = true;
        document.getElementById('updatebtn').innerText = "Updating";
        const res = await axios.put(`http://127.0.0.1:8000/api/laporsbgtk/Updatelaporan/${idlaporan}` , this.state);
        
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
                                    <Link to={'/laporanbtn/bulaporsbgtk'} className='btn btn-danger btn-sm float-end'>Kembali</Link>
                                </td>
                        </tr>
                    </table>
                            </div>
                            <div className='card-body'>

                                <form onSubmit={this.updatelaporan}>
                                <table>
                                    <tr>
                                        <td>
                                        <tr>
                                        <td>
                                        <div className='form-group mb-3'>
                                        <label>Kode Badan Usaha</label>
                                       </div>
                                        </td>
                                        <td>
                                        <div className='form-group mb-3'>
                                        <input type="text" onChange={this.handleInput} name="kode_BUterdaftar" value={this.state.kode_BUterdaftar} className="form-control" disabled='true' />
                                       </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        <div className='form-group mb-3'>
                                        <label>Sumber Data Pembanding</label>
                                       </div>
                                        </td>
                                        <td>
                                        <div className='form-group mb-3'>
                                        <input type="text" name="sumber_data_pembanding" onChange={this.handleInput} value={this.state.sumber_data_pembanding} className="form-control" /> 
                                       </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        <div className='form-group mb-3'>
                                        <label>Besar Data Pembanding</label>
                                       </div>
                                        </td>
                                        <td>
                                        <div className='form-group mb-3'>
                                        <input type="text" name="besar_data_pembanding" onChange={this.handleInput} value={this.state.besar_data_pembanding} className="form-control" /> 
                                       </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        <div className='form-group mb-3'>
                                        <label>Bulan Rujukan MF</label>
                                       </div>
                                        </td>
                                        <td>
                                        <div className='form-group mb-3'>
                                        <input type="text" name="bulan_rujukan_MF" onChange={this.handleInput} value={this.state.bulan_rujukan_MF} className="form-control" />   
                                       </div>
                                        </td>
                                    </tr>
                                        </td>
                                        <td width={20}></td>
                                        <td>
                                        <tr>
                                        <td>
                                        <div className='form-group mb-3'>
                                        <label>Data MF</label>
                                       </div>
                                        </td>
                                        <td>
                                        <div className='form-group mb-3'>
                                        <input type="text" onChange={this.handleInput} name="data_MF" value={this.state.data_MF} className="form-control" />  
                                       </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        <div className='form-group mb-3'>
                                        <label>Selisih</label>
                                       </div>
                                        </td>
                                        <td>
                                        <div className='form-group mb-3'>
                                        <input type="text" name="selisih" onChange={this.handleInput} value={this.state.selisih} className="form-control" /> 
                                       </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        <div className='form-group mb-3'>
                                        <label>Tanggal Canvasing PTSDK</label>
                                       </div>
                                        </td>
                                        <td>
                                        <div className='form-group mb-3'>
                                        <input type="text" name="tanggal_canvasing_PTSDK" onChange={this.handleInput} value={this.state.tanggal_canvasing_PTSDK} className="form-control" />
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
                                        </td>
                                    </tr>
                                   
                                    

                                    <tr>
                                        <td>
                                        <div className='form-group mb-3'>
                                        <button type='submit' id="updatebtn" className='btn btn-primary '>Update Laporan</button>
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

export default withRouter(EditLaporan3);