import { Route, Routes } from 'react-router-dom';
import './App.css';
import Count from './Pages/Count/Count';
import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';

import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>

        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/' element={<Count></Count>}></Route>
        <Route path='/' element={<Services></Services>}></Route>
      </Routes>
    </div>
  );
}

export default App;
