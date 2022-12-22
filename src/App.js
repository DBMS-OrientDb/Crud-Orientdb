import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Mahlist from './Mahlist';
import Mahcreate from './Mahcreate';
import Mahedit from './Mahedit';

function App() {
  return (
    <div className="App">
      <h1>Manajemen Basis Data</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Mahlist />}></Route>
          <Route path='/mbd/create' element={<Mahcreate />}></Route>
          <Route path='/mbd/edit/:mahid' element={<Mahedit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
