import React from 'react';
import {AiOutlineSchedule} from "react-icons/ai";
import {AiOutlineHeart} from "react-icons/ai";
import {AiOutlinePlusSquare} from "react-icons/ai";




//za CSS koristimo ovako borderStyle!!! malo pa veliko
//function Usluga(props) {
//destrukturiranje props
function Usluga({usluga, onAdd, inCart}) {
  //  console.log(props);
//   function onAdd(naziv){
//       console.log("Zakazan termin!" + naziv)
//   }
  return (
    
     <div className={inCart===1? "card" : "card-cart"} >
       <h3 className="card-title">{usluga.naziv}</h3>
         <img className={inCart===1? "card-img-top" : "card-img-left"} src= {usluga.slika} alt='Prva slika'/>
        <div className="card-body">
            
            <p className="card-text">{usluga.opis}</p>
         </div> {/*Pisemo f-ju ovako da bismo mogli da prosledimo naslov */}
         {/* <button className="btn" onClick={()=>onAdd(usluga.naziv)}><AiOutlineSchedule/></button> */}
      {inCart===1 ? ( <>
       <button className="btn" onClick={() => onAdd(usluga.naziv, usluga.id)}><AiOutlineSchedule/></button>
      <button className="btn"><AiOutlineHeart/></button>
      <button className="btn"><AiOutlinePlusSquare/></button>
     </>) : (
         <h4>Amount:{usluga.kolicina}</h4>
       )}
       
  
     </div>

    // <div className="col-md-6 col-lg-4 col-xl-3">
    //             <div className="single-product">
    //                 <div className="part-1">

    //                     <ul>
    //                         <li><a href='#'><AiOutlineSchedule/></a></li>
    //                         <li><a href='#'><AiOutlineHeart/></a></li>
    //                         <li><a href='#'><AiOutlinePlusSquare/></a></li>
    //                     </ul>
    //                 </div>
    //                 <div className="part-2">
    //                     <h3 className="product-title">{usluga.naziv}</h3>
    //                     <h4 className="product-price">{usluga.opis}</h4>
    //                 </div>
    //             </div>
    //         </div>
    
  )
}

export default Usluga