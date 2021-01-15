import logo from './logo.svg';
import './App.css';
import './Component/form.css';
import React from 'react';
import Formm from './Component/Form';
import Nava from './Component/Navbar';
import Intro from './Component/Main';
import Appi from './Component/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Test from './Component/Main2';
function App() {
  return (
    <div className="App">
   <Nava/>
   <Intro/>
    <Formm/>
    <Test/>
   <Appi/> 
  
    </div>
  );
}

export default App;
