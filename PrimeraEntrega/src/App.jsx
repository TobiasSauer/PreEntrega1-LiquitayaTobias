import React from 'react';
import ItemListComponent from './components/ItemListComponent';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <div>
      <NavBar/>
      <ItemListComponent text='WELCOME'/>
    </div>
  )
}

export default App