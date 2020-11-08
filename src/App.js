import React from 'react';
import Contact from './components/Contact';
import './components/Chatstyle.css';
import users from './components/ContactList';

const Users = users.map(e =>{return <Contact {...e}/>})



function App() {
  return (
    <div className="App">
  {Users}
     
    </div>
  );
}

export default App;
