import React from 'react'
import Usluga from './Usluga'

const MyAppointments = ({usluge}) => {
  return (
    <div className='termini-container'>
        <h3>Svi termini koje ste zakazali:</h3>
       {usluge.map((usl)=><Usluga usluga={usl} key={usl.id} zakazano={0}/>)}
    </div>
  )
}

export default MyAppointments