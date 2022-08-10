
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './Component/Header/Header';
import NotFound from './Component/NotFound/NotFound';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Component/Home';
import Footer from './Component/Footer';
import Projects1 from './Component/Projects/Projects1';
import Projects2 from './Component/Projects/Projects2';
import Projects3 from './Component/Projects/Projects3';
import Blogs from './Component/Blogs';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/projects1' element={<Projects1></Projects1>}></Route>
        <Route path='/projects2' element={<Projects2></Projects2>}></Route>
        <Route path='/projects3' element={<Projects3></Projects3>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>

      <ToastContainer />
    </div>
  );
}

export default App;
