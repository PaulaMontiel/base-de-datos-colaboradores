import { BaseColaboradores } from './components/BaseColaboradores';
import InputColaboradores from './components/InputColaboradores';
import React, { useState } from 'react';
import './App.css';
import ListColaboradores from './components/ListColaboradores';

function App() {

  const [colaboradores, setColaboradores] = useState(BaseColaboradores);

  return (
    <div className='myContainer'>
      <div className='d-flex flex-row my-nav'>
        <ListColaboradores  colaboradores = {[colaboradores, setColaboradores]} />
      </div>
      <div>
        <InputColaboradores colaboradores = {[colaboradores, setColaboradores]}/>
      </div>
  
    </div>
  )

}


export default App;
