import React from 'react';
// import ProductForm from './components/ProductForm';
import Main from './views/Main';
import Detail from './components/Detail';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      {/* <ProductForm/> */}
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path="/home"/>
          <Route element={<Detail/>} path="/product/:id"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
