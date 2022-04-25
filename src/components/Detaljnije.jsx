import React from 'react'
import { useLocation } from 'react-router-dom';



function Detaljnije(){
    const location = useLocation();
    let opis = location.state;
   // console.log(opis.location.state)
   const newText = opis.split('\n').map(str => <p>{str}</p>);

    return (
        
        <div className="detaljnije-container">
        <div className="detaljnije-card">
        <p>{newText}</p>
        </div>
        </div>
    );
}


export default Detaljnije