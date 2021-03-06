import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import '../../App.css';
import g1 from '../../img/g1.jpg';
import g2 from '../../img/g2.jpg';
import g3 from '../../img/g3.jpg';
import { animes, genres, anime_tagger } from "../../data/export.js"
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import "./recco.css"

function RecommendView() {
  const [data, setData] = useState()

  const establishData = ({option}) => {
    setData()
  }

    return (
      <div className="main">
        <Navbar />
       <div className="trending">
      <div><h1>Your results</h1></div>
      <div>
        
          <a href="#"><h2>Kakegurui</h2><img title="Kakegurui" src={g1} /></a>
          <button>Agregar a la lista</button>
        
        
        <a href="#"><h2>No Game No Life</h2><img title="No Game No Life" src={g2} /></a>
        <button>Agregar a la lista</button>
        
        <a href="#"><h2>Naruto</h2><img title="Naruto" src={g3} /></a>
        <button>Agregar a la lista</button>
      </div>
      </div>
      </div>
    );
  }
  
export default RecommendView;