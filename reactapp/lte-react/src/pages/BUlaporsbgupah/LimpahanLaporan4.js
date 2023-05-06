import axios from 'axios';
import React, { Component } from 'react';
import {Link, useParams} from 'react-router-dom';


export function withRouter(Children){
    return(props)=>{

       const match  = {params: useParams()};
       return <Children {...props}  match = {match}/>
   }
 }
class LimpahanLaporan4 extends Component 
{ 
    state = {
        kode_buterdaftar:'',
        tgl_pelimpahan:'',
        badan_pelimpah:'BU Lapor Sebagian Upah',
        dasar_pelimpahan:'',
    }

    handleInput = (e)=> {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    
    async componentDidMount ()
    {
        const idlaporan = this.props.match.params.id;
        const res = axios.get(`http://127.0.0.1:8000/api/laporsbguph/limpahkan/${idlaporan}`);
        console.log(res);
        if((await res).data.stt === 200)
        {
            this.setState({
                // id:(await res).data.Belumdaftarku.id,
            });
        }
    }

    Simpanlaporan = async (e)=> {
        e.preventDefault();
        document.getElementById('simpanbtn').disabled = true;
        document.getElementById('simpanbtn').innerText = "Menyimpan";
        const idlaporan = this.props.match.params.id;
        const res = await axios.put(`http://127.0.0.1:8000/api/laporsbguph/limpahlaporan/${idlaporan}`,this.state);
        if (res.data.stt === 200)
        {
            console.log(res.data.message);
            this.setState({
                kode_buterdaftar:'',
                tgl_pelimpahan:'',
                badan_pelimpah:'BU Lapor Sebagian Upah',
                dasar_pelimpahan:'',
            });
            document.getElementById('simpanbtn').disabled = false;
            document.getElementById('simpanbtn').innerText = "Simpan";
        }
    }

    render() {
        return (
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-ml-6'>
                        <div className='card'>
                            <div className='card-header'>
                            <table>
                            <tr>
                                <td>
                                    <h4>PELIMPAHAN LAPORAN</h4>
                                </td>
                                <td>
                                      
                                </td>
                                <td class="col-md-1">
                                    <Link to={'/laporanbtn/bulaporsbguph'} className='btn btn-danger btn-sm float-end'>Kembali</Link>
                                </td>
                        </tr>
                    </table>
                            </div>
                            <div className='card-body'>

                                <form onSubmit={this.Simpanlaporan}>
                                    <table>
                                        <tr>
                                            <td>
                                            <div className='form-group mb-3'>
                                        <label>Kode Badan Usaha</label>
                                        {/* <input type="text" onChange={this.handleInput} name="kodeBUbelumdaftar" value={this.state.kodeBUbelumdaftar} className="form-control" /> */}
                                    </div>
                                            </td>
                                            <td></td>
                                            <td>
                                            <div className='form-group mb-3'>
                                        {/* <label>Kode Badan Usaha</label> */}
                                        <input type="text" onChange={this.handleInput} name="kode_buterdaftar" value={this.state.kode_buterdaftar} className="form-control" />
                                    </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            <div className='form-group mb-3'>
                                        <label>Tanggal Pelimpahan</label>
                                        {/* <input type="text" name="tgl_pelimpahan" onChange={this.handleInput} value={this.state.tgl_pelimpahan} className="form-control" /> */}
                                    </div>
                                            </td>
                                            <td></td>
                                            <td>
                                            <div className='form-group mb-3'>
                                        {/* <label>tgl_pelimpahan</label> */}
                                        <input type="date" name="tgl_pelimpahan" onChange={this.handleInput} value={this.state.tgl_pelimpahan} className="form-control" />
                                    </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            <div className='form-group mb-3'>
                                        <label>Dasar Pelimpahan</label>
                                        {/* <input type="text" name="dasar_pelimpahan" onChange={this.handleInput} value={this.state.dasar_pelimpahan} className="form-control" /> */}
                                    </div>
                                            </td>
                                            <td></td>
                                            <td>
                                            <div className='form-group mb-3'>
                                        {/* <label>dasar_pelimpahan</label> */}
                                        <input type="text" name="dasar_pelimpahan" onChange={this.handleInput} value={this.state.dasar_pelimpahan} className="form-control" />
                                    </div>   
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            <div className='form-group mb-3'>
                                        <button type='submit' id='simpanbtn' className='btn btn-primary'>Simpan Data</button>
                                    </div>
                                            </td>
                                        </tr>
                                        <tr>
                                        <td>
                                            </td>
                                            <td></td>
                                            <td>
                                            <div className='form-group mb-3'>
                                        {/* <label>dasar_pelimpahan</label> */}
                                        <input type="hidden" name="badan_pelimpah" onChange={this.handleInput} value={this.state.badan_pelimpah} className="form-control" />
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

export default  withRouter(LimpahanLaporan4);