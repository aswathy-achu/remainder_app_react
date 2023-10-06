import Header from './header';
import logo from './logo.svg';
import React,{useState} from 'react';
import './style.css'
import Counter from './Counter';
import Remainder from './components/Remainder';

function App() {
  return (
    // <div style={{display:"flex",justifyContent:'center',flexDirection:"column",alignItems:'center'}}>
    //  <h1>Counter App</h1>
    // <Counter/>
    // </div>

    <div>
      <Remainder/>
      </div>
  )
}

export default App;
