import React from 'react';
// import ProductForm from './components/ProductForm';
import Main from './views/Main';
import Detail from './components/Detail';
import Update from './components/Update';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      {/* <ProductForm/> */}
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path="/home"/>
          <Route element={<Navigate to="/home" />} path="/" />
          <Route element={<Detail/>} path="/product/:id"/>
          <Route element={<Update/>} path="/product/edit/:id"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
