import React from 'react'
import Usluga from './Usluga'

const MyAppointments = ({usluge}) => {
  return (
    <div className='cart-container'>
        <h3>This is your appointments.</h3>
       {usluge.map((usl)=><Usluga usluga={usl} key={usl.id} inCart={0}/>)}
    </div>
  )
}

export default MyAppointments