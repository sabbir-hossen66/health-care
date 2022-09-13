import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Pages/Blog/Blog';
import Contact from './Pages/Contact/Contact';
import Count from './Pages/Count/Count';
import Exprience from './Pages/Exprience/Exprience';
import Features from './Pages/Features/Features';
import Home from './Pages/Home/Home';
import Questions from './Pages/Questions/Questions';
import Services from './Pages/Services/Services';
import Footer from './Pages/Shared/Footer';

import Navbar from './Pages/Shared/Navbar';
import Testmonial from './Pages/Testmonial/Testmonial';

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
        <Route path='/questions' element={<Questions></Questions>}></Route>
        <Route path='/testmonial' element={<Testmonial></Testmonial>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
