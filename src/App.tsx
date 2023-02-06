import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Search from './Pages/Search';
import Watch from './Pages/Watch';


function App() {
  return (
    <BrowserRouter>
   < Routes>
  <Route path='/' element={<Home/>}/>

  <Route path='/search' element={<Search/>}/>

 
 <Route path='/watch/:id' element={<Watch/>}/>
   
    </Routes>
    </BrowserRouter>
  );
}

export default App;
