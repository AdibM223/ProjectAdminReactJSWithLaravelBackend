import logo from './logo.svg';
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Menu from './Menu';

import Laporan1 from './pages/BUajuansertif/Laporan1';
import Laporan2 from './pages/BUbelumdaftar/Laporan2';
import Laporan3 from './pages/BUlaporsbgTK/Laporan3';
import Laporan4 from './pages/BUlaporsbgupah/Laporan4';
import Laporan5 from './pages/BUtunggakiuran/Laporan5';
import Laporan6 from './pages/Pemeriksa/Laporan6';

// import Addlaporan from './pages/Addlaporan';

import Addlaporan1 from './pages/BUajuansertif/Addlaporan1';
import Addlaporan2 from './pages/BUbelumdaftar/Addlaporan2';
import Addlaporan3 from './pages/BUlaporsbgTK/Addlaporan3';
import Addlaporan4 from './pages/BUlaporsbgupah/Addlaporan4';
import Addlaporan5 from './pages/BUtunggakiuran/Addlaporan5';
import Addlaporan6 from './pages/Pemeriksa/Addlaporan6';
import Addlaporan7 from './pages/Pemeriksa/Addlaporan7';

// import EditLaporan from './pages/EditLaporan';

import EditLaporan1 from './pages/BUajuansertif/EditLaporan1';
import EditLaporan2 from './pages/BUbelumdaftar/EditLaporan2';
import EditLaporan3 from './pages/BUlaporsbgTK/EditLaporan3';
import EditLaporan4 from './pages/BUlaporsbgupah/EditLaporan4';
import EditLaporan5 from './pages/BUtunggakiuran/EditLaporan5';
import EditLaporan6 from './pages/Pemeriksa/EditLaporan6';
import EditLaporan7 from './pages/Pemeriksa/EditLaporan7';

import LimpahanLaporan2 from './pages/BUbelumdaftar/LimpahanLaporan2';
import LimpahanLaporan3 from './pages/BUlaporsbgTK/LimpahanLaporan3';
import LimpahanLaporan4 from './pages/BUlaporsbgupah/LimpahanLaporan4';
import LimpahanLaporan5 from './pages/BUtunggakiuran/LimpahanLaporan5';

// import Sidebar from './components/Sidebar';
// import Login from './pages/Login';
import Login from './pages/LoginForm';
import Register from './pages/Register';
// import Default from './pages/Default';
import Protected from './Protected';
import Dashboard from './Dashboard';

function App() {
  return (
    <>
    
    <div class='logreg'>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={< Login  />} />
      <Route path="/dashboard" element={< Dashboard  />} />
    <Route  exact path="/register" element={< Register  />} />
      </Routes>
      </BrowserRouter>

    </div>

    <div class="wrapper">
      
      <Header />
      <Menu />
      
       
        
      <BrowserRouter>
        <Routes> 
        
        {/* <Route path='/Default' element={<Default />} /> */}


        <Route path='/laporanbtn/ajuansertif' element={< Protected cmp={Laporan1} />} /> 
        <Route path="/laporanbtn/ajuansertif/Addlaporan" element={< Protected cmp={Addlaporan1}/>} />
        <Route path="/laporanbtn/ajuansertif/Editlaporan/:id" element={<Protected cmp={EditLaporan1}/>} />

        <Route path='/laporanbtn/bubelumdaftar' element={< Protected cmp={Laporan2}/>} /> 
        <Route path="/laporanbtn/bubelumdaftar/Addlaporan" element={< Protected cmp={Addlaporan2}/>} />
        <Route path="/laporanbtn/bubelumdaftar/limpahkan/:id" element={< Protected cmp={LimpahanLaporan2}/>} />
        <Route path="/laporanbtn/bubelumdaftar/Editlaporan/:id" element={<Protected cmp={EditLaporan2}/>} />

        <Route path='/laporanbtn/bulaporsbgtk' element={< Protected cmp={Laporan3}/>} /> 
        <Route path="/laporanbtn/bulaporsbgtk/Addlaporan" element={< Protected cmp={Addlaporan3}/>} />
        <Route path="/laporanbtn/bulaporsbgtk/limpahkan/:id" element={< Protected cmp={LimpahanLaporan3}/>} />
        <Route path="/laporanbtn/bulaporsbgtk/Editlaporan/:id" element={<Protected cmp={EditLaporan3}/>} />

        <Route path='/laporanbtn/bulaporsbgupah' element={< Protected cmp={Laporan4}/>} /> 
        <Route path="/laporanbtn/bulaporsbgupah/Addlaporan" element={< Protected cmp={Addlaporan4}/>} />
        <Route path="/laporanbtn/bulaporsbgupah/limpahkan/:id" element={< Protected cmp={LimpahanLaporan4}/>} />
        <Route path="/laporanbtn/bulaporsbgupah/Editlaporan/:id" element={<Protected cmp={EditLaporan4}/>} />

        <Route path='/laporanbtn/butunggakiuran' element={< Protected cmp={Laporan5}/>} />
        <Route path="/laporanbtn/butunggakiuran/Addlaporan" element={< Protected cmp={Addlaporan5}/>} />
        <Route path="/laporanbtn/butunggakiuran/limpahkan/:id" element={< Protected cmp={LimpahanLaporan5}/>} />
        <Route path="/laporanbtn/butunggakiuran/Editlaporan/:id" element={<Protected cmp={EditLaporan5}/>} />

        <Route path='/laporanbtn/pemeriksa' element={< Protected cmp={Laporan6}/>} />
        <Route path="/laporanbtn/pemeriksa/Addlaporan" element={< Protected cmp={Addlaporan6}/>} />
        <Route path="/laporanbtn/pemeriksa/Editlaporan/:id" element={<Protected cmp={EditLaporan6}/>} />

        <Route path="/laporanbtn/pemeriksa/Addlaporan2" element={< Protected cmp={Addlaporan7}/>} />
        <Route path="/laporanbtn/pemeriksa/Editlaporan2/:id" element={<Protected cmp={EditLaporan7}/>} />
        
        {/* <Route path="/laporanbtn/pemeriksa/limpahkan/:id" element={<Protected cmp={EditLaporan6}/>} /> */}

        </Routes>
    </BrowserRouter>
    <Footer />
    </div>
    </>
    
  );
}

export default App;
