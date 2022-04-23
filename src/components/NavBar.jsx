import React from 'react';
import {GrSchedules} from "react-icons/gr";
import {Link} from "react-router-dom";

function NavBar({cartNum}) {
  //const cartNum=0;
  return (
    <div className='navBar'>
      <Link to='/'>Salon lepote</Link>
      <Link className='cart-items' to='/appointments'>
        <GrSchedules/>
        <p className="cart-num">{cartNum}</p>
      </Link>
      </div>
  )
}

export default NavBar;