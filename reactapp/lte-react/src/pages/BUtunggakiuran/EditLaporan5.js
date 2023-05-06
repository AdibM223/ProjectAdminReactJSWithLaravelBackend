import axios from 'axios';
import React from 'react';
import {Link, useParams} from 'react-router-dom';


export function withRouter(Children){
    return(props)=>{

       const match  = {params: useParams()};
       return <Children {...props}  match = {match}/>
   }
 }
class EditLaporan5 extends React.Component 
{ 
    
      state = {
        kode_buterdaftar:'',
        nama_bu:'',
        Aging_potensi:'',
        bln_menunggak:'',
        besar_tunggakan:'',

        tgl_email:'',
        tgl_telpon:'',
        hasil_telpon:'',
        tgl_kunjungan:'',
        hasil_kunjungan:'',
        upaya_lain:'',
        hasil_upaya_lain:'',

        tgl_bayar_iuran:'',
        jumlah_pembayaran:'',
        keterangan:'',

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
        const res = axios.get(`http://127.0.0.1:8000/api/tunggakiuran/Editlaporan/${idlaporan}`);
        // console.log(res);
        if((await res).data.stt === 200)
        {
            this.setState({
                kode_buterdaftar:(await res).data.Tunggakiuranku.kode_buterdaftar,
                nama_bu:(await res).data.Tunggakiuranku.nama_bu,
                Aging_potensi:(await res).data.Tunggakiuranku.aging_potensi,
                bln_menunggak:(await res).data.Tunggakiuranku.bln_menunggak,
                besar_tunggakan:(await res).data.Tunggakiuranku.besar_tunggakan,

                tgl_email:(await res).data.Tunggakiuranku.tgl_email,
                tgl_telpon:(await res).data.Tunggakiuranku.tgl_telpon,
                hasil_telpon:(await res).data.Tunggakiuranku.hasil_telpon,
                tgl_kunjungan:(await res).data.Tunggakiuranku.tgl_kunjungan,
                hasil_kunjungan:(await res).data.Tunggakiuranku.hasil_kunjungan,
                upaya_lain:(await res).data.Tunggakiuranku.upaya_lain,
                hasil_upaya_lain:(await res).data.Tunggakiuranku.hasil_upaya_lain,

                tgl_bayar_iuran:(await res).data.Tunggakiuranku.tgl_bayar_iuran,
                jumlah_pembayaran:(await res).data.Tunggakiuranku.jumlah_pembayaran,
                keterangan:(await res).data.Tunggakiuranku.keterangan,

                // tgl_pelimpahan:(await res).data.Tunggakiuranku.tgl_pelimpahan,
                // dasar_pelimpahan:(await res).data.Tunggakiuranku.dasar_pelimpahan

            });
        }
    }
    
    updatelaporan = async (e)=> {
        e.preventDefault();
        // const idlaporan = useParams(this.props.match.param.id);
        const idlaporan = this.props.match.params.id;
        document.getElementById('updatebtn').disabled = true;
        document.getElementById('updatebtn').innerText = "Updating";
        const res = await axios.put(`http://127.0.0.1:8000/api/tunggakiuran/Updatelaporan/${idlaporan}` , this.state);
        
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
                                    <h4>TAMBAH LAPORAN</h4>
                                </td>
                                <td>
                                      
                                </td>
                                <td class="col-md-1">
                                    <Link to={'/laporanbtn/butunggakiuran'} className='btn btn-danger btn-sm float-end'>Kembali</Link>
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
                                        {/* <input type="text" onChange={this.handleInput} name="kode_bu" value={this.state.kode_bu} className="form-control" /> */}
                                    </div>  
                                            </td>
                                            <td></td>
                                            <td>
                                            <div className='form-group mb-3'>
                                        {/* <label>Kode Badan Usaha</label> */}
                                        <input type="text" onChange={this.handleInput} name="kode_buterdaftar" value={this.state.kode_buterdaftar} className="form-control" disabled="true"/>
                                    </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            <div className='form-group mb-3'>
                                        <label>Nama Badan Usaha</label>
                                        {/* <input type="text" onChange={this.handleInput} name="nama_bu" value={this.state.nama_bu} className="form-control" /> */}
                                    </div>  
                                            </td>
                                            <td></td>
                                            <td>
                                            <div className='form-group mb-3'>
                                        {/* <label>Nama Badan Usaha</label> */}
                                        <input type="text" onChange={this.handleInput} name="nama_bu" value={this.state.nama_bu} className="form-control" />
                                    </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            <div className='form-group mb-3'>
                                        <label>Aging Potensi</label>
                                        {/* <input type="text" name="Aging_potensi" onChange={this.handleInput} value={this.state.Aging_potensi} className="form-control" /> */}
                                    </div>  
                                            </td>
                                            <td></td>
                                            <td>
                                            <div className='form-group mb-3'>
                                        {/* <label>Aging Potensi</label> */}
                                        <input type="text" name="Aging_potensi" onChange={this.handleInput} value={this.state.Aging_potensi} className="form-control" />
                                    </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            <div className='form-group mb-3'>
                                        <label>Bulan Menunggak</label>
                                        {/* <input type="text" name="bln_menunggak" onChange={this.handleInput} value={this.state.bln_menunggak} className="form-control" /> */}
                                    </div>
                                            </td>
                                            <td></td>
                                            <td>
                                            <div className='form-group mb-3'>
                                        {/* <label>Bulan Menunggak</label> */}
                                        <input type="text" name="bln_menunggak" onChange={this.handleInput} value={this.state.bln_menunggak} className="form-control" />
                                    </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            <div className='form-group mb-3'>
                                        <label>Besar Tunggakan</label>
                                        {/* <input type="text" name="besar_tunggakan" onChange={this.handleInput} value={this.state.besar_tunggakan} className="form-control" /> */}
                                    </div>  
                                            </td>
                                            <td></td>
                                            <td>
                                            <div className='form-group mb-3'>
                                        {/* <label>Besar Tunggakan</label> */}
                                        <input type="text" name="besar_tunggakan" onChange={this.handleInput} value={this.state.besar_tunggakan} className="form-control" />
                                    </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            <div className='form-group mb-3'>
                                        <label>Tanggal Email</label>
                                        {/* <input type="text" onChange={this.handleInput} name="tgl_email" value={this.state.tgl_email} className="form-control" /> */}
                                    </div>
                                            </td>
                                            <td></td>
                                            <td>
                                            <div className='form-group mb-3'>
                                        {/* <label>Tanggal Email</label> */}
                                        <input type="date" onChange={this.handleInput} name="tgl_email" value={this.state.tgl_email} className="form-control" />
                                    </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            <div className='form-group mb-3'>
                                        <label>Tanggal Telpon</label>
                                        {/* <input type="text" onChange={this.handleInput} name="tgl_telpon" value={this.state.tgl_telpon} className="form-control" /> */}
                                    </div>  
                                            </td>
                                            <td></td>
                                            <td>
                                            <div className='form-group mb-3'>
                                        {/* <label>Tanggal Telpon</label> */}
                                        <input type="date" onChange={this.handleInput} name="tgl_telpon" value={this.state.tgl_telpon} className="form-control" />
                                    </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            <div className='form-group mb-3'>
                                        <label>Hasil Telpon</label>
                                        {/* <input type="text" name="hasil_telpon" onChange={this.handleInput} value={this.state.hasil_telpon} className="form-control" /> */}
                                    </div>  
                                            </td>
                                            <td></td>
                                            <td>
                                            <div className='form-group mb-3'>
                                        {/* <label>Hasil Telpon</label> */}
                                        <input type="text" name="hasil_telpon" onChange={this.handleInput} value={this.state.hasil_telpon} className="form-control" />
                                    </div>
                                            </td>
                                        </tr>
                                            </td>
                                            <td width={20}></td>
                                            <td>
                                            <tr>
                                            <td>
                                            <div className='form-group mb-3'>
                                        <label>Tanggal Kunjungan</label>
                                        {/* <input type="text" name="tgl_kunjungan" onChange={this.handleInput} value={this.state.tgl_kunjungan} className="form-control" /> */}
                                    </div>   
                                            </td>
                                            <td></td>
                                            <td>
                                            <div className='form-group mb-3'>
                                        {/* <label>Tanggal Kunjungan</label> */}
                                        <input type="date" name="tgl_kunjungan" onChange={this.handleInput} value={this.state.tgl_kunjungan} className="form-control" />
                                    </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            <div className='form-group mb-3'>
                                        <label>Hasil Kunjungan</label>
                                        {/* <input type="text" name="hasil_kunjungan" onChange={this.handleInput} value={this.state.hasil_kunjungan} className="form-control" /> */}
                                    </div>  
                                            </td>
                                            <td></td>
                                            <td>
                                            <div className='form-group mb-3'>
                                        {/* <label>Hasil Kunjungan</label> */}
                                        <input type="text" name="hasil_kunjungan" onChange={this.handleInput} value={this.state.hasil_kunjungan} className="form-control" />
                                    </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            <div className='form-group mb-3'>
                                        <label>Upaya Lain</label>
                                        {/* <input type="text" name="upaya_lain" onChange={this.handleInput} value={this.state.upaya_lain} className="form-control" /> */}
                                    </div>  
                                            </td>
                                            <td></td>
                                            <td>
                                            <div className='form-group mb-3'>
                                        {/* <label>Upaya Lain</label> */}
                                        <input type="date" name="upaya_lain" onChange={this.handleInput} value={this.state.upaya_lain} className="form-control" />
                                    </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            <div className='form-group mb-3'>
                                        <label>Hasil Upaya Lain</label>
                                        {/* <input type="text" name="hasil_upaya_lain" onChange={this.handleInput} value={this.state.hasil_upaya_lain} className="form-control" /> */}
                                    </div>  
                                            </td>
                                            <td></td>
                                            <td>
                                            <div className='form-group mb-3'>
                                        {/* <label>Hasil Upaya Lain</label> */}
                                        <input type="text" name="hasil_upaya_lain" onChange={this.handleInput} value={this.state.hasil_upaya_lain} className="form-control" />
                                    </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            <div className='form-group mb-3'>
                                        <label>Tanggal Bayar Iuran</label>
                                        {/* <input type="text" name="tgl_bayar_iuran" onChange={this.handleInput} value={this.state.tgl_bayar_iuran} className="form-control" /> */}
                                    </div> 
                                            </td>
                                            <td></td>
                                            <td>
                                            <div className='form-group mb-3'>
                                        {/* <label>Tanggal Bayar Iuran</label> */}
                                        <input type="date" name="tgl_bayar_iuran" onChange={this.handleInput} value={this.state.tgl_bayar_iuran} className="form-control" />
                                    </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            <div className='form-group mb-3'>
                                        <label>Jumlah Pembayaran</label>
                                        {/* <input type="text" name="jumlah_pembayaran" onChange={this.handleInput} value={this.state.jumlah_pembayaran} className="form-control" /> */}
                                    </div> 
                                            </td>
                                            <td></td>
                                            <td>
                                            <div className='form-group mb-3'>
                                        {/* <label>Jumlah Pembayaran</label> */}
                                        <input type="text" name="jumlah_pembayaran" onChange={this.handleInput} value={this.state.jumlah_pembayaran} className="form-control" />
                                    </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            <div className='form-group mb-3'>
                                        <label>Keterangan</label>
                                        {/* <input type="text" name="keterangan" onChange={this.handleInput} value={this.state.keterangan} className="form-control" /> */}
                                    </div>  
                                            </td>
                                            <td></td>
                                            <td>
                                            <div className='form-group mb-3'>
                                        {/* <label>Keterangan</label> */}
                                        <input type="text" name="keterangan" onChange={this.handleInput} value={this.state.keterangan} className="form-control" />
                                    </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            <div className='form-group mb-3'>
                                        <button type='submit' id="updatebtn" className='btn btn-primary '>Update Laporan</button>
                                    </div>
                                            </td>
                                        </tr>
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

export default withRouter(EditLaporan5);