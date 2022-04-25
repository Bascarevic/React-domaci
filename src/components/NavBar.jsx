import React from 'react';
import {GrSchedules} from "react-icons/gr";
import {Link} from "react-router-dom";

function NavBar({brojTermina}) {
 
  return (
    <div className='navBar'>
      <Link to='/'>Salon lepote</Link>
      <Link className='zakazani-termini' to='/appointments'>
        <GrSchedules/>
        <p className="broj-termina">{brojTermina}</p>
      </Link>
      </div>
  )
}

export default NavBar;