
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import NavBar from './components/NavBar/NavBar';
import React from 'react';


function App() {
  return (
    <React.Fragment>
    <NavBar/>
    <ItemListContainer greeting="Bienvenidos!"/>
    </React.Fragment>
  );
}

export default App;
