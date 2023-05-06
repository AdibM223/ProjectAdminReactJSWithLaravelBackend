import React, { Component } from 'react'
import { useNavigate } from 'react-router-dom'



export default class Menu extends Component {  
  render() {
    
    return (
      <div>
  <aside className="main-sidebar sidebar-dark-primary elevation-4">
    {/* Brand Logo */}
    <a href="index3.html" className="brand-link">
      {/* <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} /> */}
      <span className="brand-text font-weight-light">BPJS KESEHATAN</span>
    </a>
    {/* Sidebar */}
    <div className="sidebar">
      {/* Sidebar user panel (optional) */}
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <img  className="img-circle elevation-2" alt="User Image" />
        </div>
        <div className="info">
          <a href="#" className="d-block">ADMIN BPJS</a>
        </div>
      </div>
      {/* SidebarSearch Form */}
      <div className="form-inline">
        <div className="input-group" data-widget="sidebar-search">
          <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
          <div className="input-group-append">
            <button className="btn btn-sidebar">
              <i className="fas fa-search fa-fw" />
            </button>
          </div>
        </div>
      </div>
      {/* Sidebar Menu */}
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

          <li className="nav-item">
            <a href="/laporanbtn/ajuansertif" className="nav-link">
              <i className="nav-icon fas fa-table" />
              <p>
                BU Ajuan Sertif
              </p>
            </a>
          </li>

          <li className="nav-item">
            <a href="/laporanbtn/bubelumdaftar" className="nav-link">
              <i className="nav-icon fas fa-table" />
              <p>
                BU Belum Daftar
              </p>
            </a>
          </li>

          <li className="nav-item">
            <a href="/laporanbtn/bulaporsbgtk" className="nav-link">
              <i className="nav-icon fas fa-table" />
              <p>
                BU Laporan Sebagian TK
              </p>
            </a>
          </li>

          <li className="nav-item">
            <a href="/laporanbtn/bulaporsbgupah" className="nav-link">
              <i className="nav-icon fas fa-table" />
              <p>
                BU Laporan Sebagian Upah
              </p>
            </a>
          </li>

          <li className="nav-item">
            <a href="/laporanbtn/butunggakiuran" className="nav-link">
              <i className="nav-icon fas fa-table" />
              <p>
                BU Menunggak Iuran
              </p>
            </a>
          </li>
          ----------------------------------------
          <li className="nav-item">
            <a href="/laporanbtn/pemeriksa" className="nav-link">
              <i className="nav-icon fas fa-table" />
              <p>
                Pemeriksa
              </p>
            </a>
          </li>


          
        </ul>

        
      </nav>
      {/* /.sidebar-menu */}
    </div>
    {/* /.sidebar */}
  </aside>
  
</div>

    )
  }
}
