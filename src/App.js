import logo from './logo.svg';
import './App.css';
import './Component/form.css';
import React from 'react';
import Formm from './Component/Form';
import Nava from './Component/Navbar';
import Intro from './Component/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
   <Nava/>
   <Intro/>
    <Formm/>

    

    </div>
  );
}

export default App;
