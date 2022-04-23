import React from 'react'
import Usluga from "./Usluga"
//ista stvar samo je ovo arrow funkcija, precica rafce
const Usluge = ({usluge, onAdd}) => {
  //  const naziv = "Naziv usluge";
  //  const opis = "Opis usluge";
  /*
    const usl = {
        naziv :"Naziv usluge",
        opis : "Ova usluga sadrzi..."
    }
    */
  return (
    
    <div className="all-products">
         {usluge.map((usl)=>{
             return <Usluga usluga={usl} key={usl.id} onAdd={onAdd} inCart={1}/>
       })}
         {/* <Usluga usluga={usluge[0]}/>
         <Usluga usluga={usluge[1]}/>
         <Usluga usluga={usluge[2]}/> */}
     </div>

//     <section className="section-products">
//     <div className="container">
//         <div className="row justify-content-center text-center">
//             <div className="col-md-8 col-lg-6">
//                 <div className="header">
//                     <h3>Mali naslov</h3>
//                     <h2>Veliki naslov</h2>
//                 </div>
//             </div>
//         </div>
//         <div className="row">
   
//         {usluge.map((usl)=>{
//              return <Usluga usluga={usl} key={usl.id} onAdd={onAdd} inCart={1}/>
//          })}
//         </div>
//     </div>
// </section>
  )

};


export default Usluge;