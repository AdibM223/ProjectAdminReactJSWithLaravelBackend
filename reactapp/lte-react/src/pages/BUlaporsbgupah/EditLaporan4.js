import axios from 'axios';
import React from 'react';
import {Link, useParams} from 'react-router-dom';


export function withRouter(Children){
    return(props)=>{

       const match  = {params: useParams()};
       return <Children {...props}  match = {match}/>
   }
 }
class EditLaporan4 extends React.Component 
{ 
    
      state = {
        kode_buterdaftar:'',
        nama_bu:'',
        sumber_data_pembanding:'',
        total_potensi_iuran:'',
        total_iuran_MF:'',
        selisih:'',

        tgl_pemeriksaan:'',
        nomor_spt:'',
        tgl_surat:'',
        upaya_surat_kedua:'',
        upaya_lain_by_phone:'',
        upaya_lain_by_wa:'',
        nomor_SKK:'',

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
        const res = axios.get(`http://127.0.0.1:8000/api/laporsbguph/Editlaporan/${idlaporan}`);
        // console.log(res);
        if((await res).data.stt === 200)
        {
            this.setState({
                kode_buterdaftar:(await res).data.Laporsbguphku.kode_buterdaftar,
                nama_bu:(await res).data.Laporsbguphku.nama_bu,
                sumber_data_pembanding:(await res).data.Laporsbguphku.sumber_data_pembanding,
                total_potensi_iuran:(await res).data.Laporsbguphku.total_potensi_iuran,
                total_iuran_MF:(await res).data.Laporsbguphku.total_iuran_MF,
                selisih:(await res).data.Laporsbguphku.selisih,

                tgl_pemeriksaan:(await res).data.Laporsbguphku.tgl_pemeriksaan,
                nomor_spt:(await res).data.Laporsbguphku.nomor_spt,
                tgl_surat:(await res).data.Laporsbguphku.tgl_surat,
                upaya_surat_kedua:(await res).data.Laporsbguphku.upaya_lain_by_phone,
                upaya_lain_by_phone:(await res).data.Laporsbguphku.upaya_lain_by_phone,
                upaya_lain_by_wa:(await res).data.Laporsbguphku.upaya_lain_by_wa,
                nomor_SKK:(await res).data.Laporsbguphku.nomor_SKK,

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
        const res = await axios.put(`http://127.0.0.1:8000/api/laporsbguph/Updatelaporan/${idlaporan}` , this.state);
        
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
                <div className='row justify-content-center'>
                    <div className='col-ml-6'>
                        <div className='card'>
                            <div className='card-header'>
                            <table>
                            <tr>
                                <td>
                                    <h4>EDIT LAPORAN</h4>
                                </td>
                                <td>
                                      
                                </td>
                                <td class="col-md-1">
                                    <Link to={'/laporanbtn/bulaporsbgupah'} className='btn btn-danger btn-sm float-end'>Kembali</Link>
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
                                        {/* <input type="text" onChange={this.handleInput} name="kode_BU_terdaftar" value={this.state.kode} className="form-control" /> */}
                                    </div>
                                            </td>
                                            <td></td>
                                            <td>
                                            <div className='form-group mb-3'>
                                        {/* <label>Kode Badan Usaha</label> */}
                                        <input type="text" onChange={this.handleInput} name="kode_buterdaftar" value={this.state.kode_buterdaftar} className="form-control" disabled="true" />
                                    </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            <div className='form-group mb-3'>
                                        <label>Sumber Data Pembanding</label>
                                        {/* <input type="text" name="sumber_data_pembanding" onChange={this.handleInput} value={this.state.nama} className="form-control" /> */}
                                    </div>
                                            </td>
                                            <td></td>
                                            <td>
                                            <div className='form-group mb-3'>
                                        {/* <label>Sumber Data Pembanding</label> */}
                                        <select class="form-control" onChange={this.handleInput} value={this.state.sumber_data_pembanding} name="sumber_data_pembanding"> 
                                            <option>JKN</option>
                                            <option>PPU</option>
                                        </select>
                                        {/* <input type="text" name="sumber_data_pembanding" onChange={this.handleInput} value={this.state.nama} className="form-control" /> */}
                                    </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            <div className='form-group mb-3'>
                                        <label>Total Potensi Iuran</label>
                                        {/* <input type="text" name="total_potensi_iuran" onChange={this.handleInput} value={this.state.alamat} className="form-control" /> */}
                                    </div>
                                            </td>
                                            <td></td>
                                            <td>
                                            <div className='form-group mb-3'>
                                        {/* <label>Total Potensi Iuran</label> */}
                                        <input type="text" name="total_potensi_iuran" onChange={this.handleInput} value={this.state.total_potensi_iuran} className="form-control" />
                                    </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            <div className='form-group mb-3'>
                                        <label>Total Iuran MF</label>
                                        {/* <input type="text" name="total_iuran_MF" onChange={this.handleInput} value={this.state.notelp} className="form-control" /> */}
                                    </div>
                                            </td>
                                            <td></td>
                                            <td>
                                            <div className='form-group mb-3'>
                                        {/* <label>Total Iuran MF</label> */}
                                        <input type="text" name="total_iuran_MF" onChange={this.handleInput} value={this.state.total_iuran_MF} className="form-control" />
                                    </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            <div className='form-group mb-3'>
                                        <label>Selisih</label>
                                        {/* <input type="text" name="selisih" onChange={this.handleInput} value={this.state.notelp} className="form-control" /> */}
                                    </div>
                                            </td>
                                            <td></td>
                                            <td>
                                            <div className='form-group mb-3'>
                                        {/* <label>Selisih</label> */}
                                        <input type="text" name="selisih" onChange={this.handleInput} value={this.state.selisih} className="form-control" />
                                    </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            <div className='form-group mb-3'>
                                        <label>Tanggal Pemeriksaan</label>
                                        {/* <input type="text" onChange={this.handleInput} name="tgl_pemeriksaan" value={this.state.tgl_pemeriksaan} className="form-control" /> */}
                                    </div>
                                            </td>
                                            <td></td>
                                            <td>
                                            <div className='form-group mb-3'>
                                        {/* <label>Tanggal Pemeriksaan</label> */}
                                        <input type="date" onChange={this.handleInput} name="tgl_pemeriksaan" value={this.state.tgl_pemeriksaan} className="form-control" />
                                    </div>
                                            </td>
                                        </tr>
                                            </td>
                                            <td width={20}></td>
                                            <td>
                                            <tr>
                                            <td>
                                            <div className='form-group mb-3'>
                                        <label>Nomor Surat Perintah Tugas</label>
                                        {/* <input type="text" name="nomor_spt" onChange={this.handleInput} value={this.state.nomor_spt} className="form-control" /> */}
                                    </div>
                                            </td>
                                            <td></td>
                                            <td>
                                            <div className='form-group mb-3'>
                                        {/* <label>Nomor Surat Perintah Tugas</label> */}
                                        <input type="text" name="nomor_spt" onChange={this.handleInput} value={this.state.nomor_spt} className="form-control" />
                                    </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            <div className='form-group mb-3'>
                                        <label>Tanggal Surat</label>
                                        {/* <input type="text" onChange={this.handleInput} name="tgl_surat" value={this.state.tgl_surat} className="form-control" /> */}
                                    </div>
                                            </td>
                                            <td></td>
                                            <td>
                                            <div className='form-group mb-3'>
                                        {/* <label>Tanggal Surat</label> */}
                                        <input type="date" onChange={this.handleInput} name="tgl_surat" value={this.state.tgl_surat} className="form-control" />
                                    </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            <div className='form-group mb-3'>
                                        <label>Upaya Surat Kedua</label>
                                        {/* <input type="text" name="upaya_surat_kedua" onChange={this.handleInput} value={this.state.upaya_surat_kedua} className="form-control" /> */}
                                    </div>
                                            </td>
                                            <td></td>
                                            <td>
                                            <div className='form-group mb-3'>
                                        {/* <label>Upaya Surat Kedua</label> */}
                                        <input type="date" name="upaya_surat_kedua" onChange={this.handleInput} value={this.state.upaya_surat_kedua} className="form-control" />
                                    </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            <div className='form-group mb-3'>
                                        <label>Upaya Lain By Phone</label>
                                        {/* <input type="text" name="upaya_lain_by_phone" onChange={this.handleInput} value={this.state.upaya_lain_by_phone} className="form-control" /> */}
                                    </div>
                                            </td>
                                            <td></td>
                                            <td>
                                            <div className='form-group mb-3'>
                                        {/* <label>Upaya Lain By Phone</label> */}
                                        <input type="date" name="upaya_lain_by_phone" onChange={this.handleInput} value={this.state.upaya_lain_by_phone} className="form-control" />
                                    </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            <div className='form-group mb-3'>
                                        <label>Upaya Lain By WA</label>
                                        {/* <input type="text" name="upaya_lain_by_wa" onChange={this.handleInput} value={this.state.upaya_lain_by_wa} className="form-control" /> */}
                                    </div>
                                            </td>
                                            <td></td>
                                            <td>
                                            <div className='form-group mb-3'>
                                        {/* <label>Upaya Lain By WA</label> */}
                                        <input type="date" name="upaya_lain_by_wa" onChange={this.handleInput} value={this.state.upaya_lain_by_wa} className="form-control" />
                                    </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            <div className='form-group mb-3'>
                                        <label>Nomor SKK</label>
                                        {/* <input type="text" name="nomor_SKK" onChange={this.handleInput} value={this.state.nomor_SKK} className="form-control" /> */}
                                    </div>
                                            </td>
                                            <td></td>
                                            <td>
                                            <div className='form-group mb-3'>
                                        {/* <label>Nomor SKK</label> */}
                                        <input type="text" name="nomor_SKK" onChange={this.handleInput} value={this.state.nomor_SKK} className="form-control" />
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

export default withRouter(EditLaporan4);