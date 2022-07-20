import React, { ChangeEvent } from 'react';
import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';

function App() {
  const [name,setname] = useState('');
  const [lastname,setlastname] = useState('')
  const [fullname,setfullname]= useState('')
  useEffect(
    ()=>
    {
      setfullname(`${name} ${lastname}`);
    },
    [name,lastname]
  )
  const handlenamechange = ( e : ChangeEvent<HTMLInputElement> ) =>
  {
    setname(e.target.value);
  }
  const handlelastnamechange = ( e : ChangeEvent<HTMLInputElement> ) =>
  {
    setlastname(e.target.value);
  }
  return (
    <div className="App">
      <header className="App-header " >
        <h1>Formulario instantâneo</h1>
        <input type="text" placeholder='digite seu nome' value={name} onChange={handlenamechange}/>
        <input type="text" placeholder='digite seu sobrenome' value={lastname} onChange={handlelastnamechange}/>
        <p> Nome Completo : {fullname} </p>
      </header>
    </div>
  );
}

export default App;
