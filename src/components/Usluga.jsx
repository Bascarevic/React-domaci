import React, { useState } from 'react';
import {AiOutlineSchedule} from "react-icons/ai";
import {AiOutlineHeart} from "react-icons/ai";
import {AiOutlinePlusSquare} from "react-icons/ai";
import {Link} from "react-router-dom";

function Usluga({usluga, dodajRezervaciju, zakazano}) {
  const[btnColor, setBtnColor]=useState("btn");
  // const changeStyle = () => {
  //   console.log("you just clicked");
  
  //   setBtnColor("btn2");
  // };
  return (
     <div className={zakazano===1? "card" : "card-termini"} >
       <h3 className="card-title">{usluga.naziv}</h3>
         <img className={zakazano===1? "card-img-top" : "card-img-left"} src= {usluga.slika} alt='Prva slika'/>
        <div className="card-body">
            
            <p className="card-text">{usluga.kratak_opis}</p>
         </div> 
      {zakazano===1 ? ( <>
       <button className="btn" onClick={() => dodajRezervaciju(usluga.naziv, usluga.id)}><AiOutlineSchedule/></button>
      <button className={btnColor} onClick={()=>setBtnColor((btnColor)=>(btnColor==="btn" ? "btn2" : "btn"))}><AiOutlineHeart/></button>
      <Link className='btn' to='/detaljnije' state={usluga.opis}><AiOutlinePlusSquare/></Link>
       </>) : (
         <h4>Broj zakazanih termina:{usluga.kolicina}</h4>
       )}
     </div>
    
  )
}

export default Usluga