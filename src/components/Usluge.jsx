import React from 'react'
import Usluga from "./Usluga"
//precica rafce
const Usluge = ({usluge, dodajRezervaciju}) => {

  return (
    
    <div className="sve-usluge">
         {usluge.map((usl)=>{
             return <Usluga usluga={usl} key={usl.id} dodajRezervaciju={dodajRezervaciju} zakazano={1}/>
       })}
        
     </div>

  )

};

export default Usluge;