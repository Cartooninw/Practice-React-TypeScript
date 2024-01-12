import React from 'react';
import './App.css';
import Greet from './components/Greet';
import Person from './components/Person'
import { PersonList } from './components/PersonList';
import Status from './components/Status'
import Stick from './components/Stick'
import StickBox from './components/StickBox';
const App = () =>  {
  const personname = {
    first : 'YOLO' ,
    last : 'OHOH'
  };
  const personList = [
    {
      first : 'MEYOU' ,
      last : 'OHIOH'
    },{
      first : 'YAMAHA' ,
      last : 'VIOS'
    },{
      first : 'INDEX' ,
      last : 'SUPERGAMWE'
    }
  ]
  
  return (
    <div>
      <Greet name="Martin"/>
      <Person name={personname}/>
      <PersonList names={personList}/>
      <Status status='success'/>
      <StickBox>
      <Stick>Stick1</Stick>
      <Stick>Stick2</Stick>
      </StickBox>
      
    </div>
  );
};

export default App;
