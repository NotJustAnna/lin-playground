import React, { useState } from 'react';
import './App.css';
import Navbar from '../Navbar';
import Editor from '../Editor';
import RunWindow from '../RunWindow';
import FlexContainer from '../FlexContainer';

function App() {
  const [code, setCode] = useState('');

  return <div className="App">
    <FlexContainer>
      <Navbar/>
      <Editor code={code} setCode={setCode}/>
      <RunWindow code={code}/>
    </FlexContainer>
  </div>;
}

export default App;
