import React from 'react';
import Contact from './components/Contact';
import './components/Chatstyle.css';

const john = {
name: "Johny Doe",
avatar: "https://laughingsquid.com/wp-content/uploads/tumblr_m3kqhs4OHy1qf8rjmo1_1280.jpg",
isOnline: true
}
const sara = {
name: "Sara Conner",
avatar: "https://www.itsonlyamovie.nl/wp-content/uploads/2019/06/Sarah-Conner.jpg",
isOnline: true
  }
  const T2 = {
    name: "The Terminator",
    avatar: "https://townsquare.media/site/295/files/2019/10/Terminator-Orion.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89",
  
    }


function App() {
  return (
    <div className="App">
      <Contact{...john}/>
      <Contact{...sara}/>
      <Contact{...T2}/>
     
    </div>
  );
}

export default App;
