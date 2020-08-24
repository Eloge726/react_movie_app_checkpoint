import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieList from './Components/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddMovie from './Components/AddMovie';

function App() {
  const [Movie,setMovie]=useState([{titre:"Avengers: Endgame", rate:4 , image:"https://images-na.ssl-images-amazon.com/images/I/81%2BNup8-8NL._SY445_.jpg"},{titre:"Extraction", rate:4, image:"https://m.media-amazon.com/images/I/91RXcLR7DSL._SS500_.jpg"}])
  const AjoutMovie =(a,b,c)=>{
    setMovie([...Movie,{titre:a,rate:b,image:c}])
  }
  return (
    <div>
      <MovieList movie={Movie}/>
      <AddMovie AjoutMovie={AjoutMovie}/>
    </div>
  );
}

export default App;
