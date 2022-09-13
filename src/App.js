import { Route, Routes } from 'react-router-dom';
import './App.css';
import Count from './Pages/Count/Count';
import Exprience from './Pages/Exprience/Exprience';
import Features from './Pages/Features/Features';
import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';

import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>

        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/count' element={<Count></Count>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/exprience' element={<Exprience></Exprience>}></Route>
        <Route path='/features' element={<Features></Features>}></Route>
      </Routes>
    </div>
  );
}

export default App;
