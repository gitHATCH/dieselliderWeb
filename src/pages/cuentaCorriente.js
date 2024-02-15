import React from 'react'
import AccountConditionCard from '../components/cards/AccountConditionCard'
import AccountConditionLayout from '../components/accountCondition/AccountConditionLayout'

//TODO: Responsive design AccountConditionCard, luego carrito y data
//TODO: Hacer Responsive la tabla
//TODO: Hacer Responsive los modales

const CuentaCorriente = () => {
  return (
    <div className=''>
        <div className='text-center mt-5 sm:mt-10'>
            <h1 className='font-mono font-semibold text-xl sm:text-3xl lg:text-4xl'>Cuenta Corriente</h1>
        </div>
        <div className='mt-5 flex justify-center'>
            <div className='w-4/5'>
                <AccountConditionCard/>
            </div>
        </div>
        <div className=' flex justify-center'>
            <div className='w-full'>
            
                <AccountConditionLayout/>
                     
            </div>
        </div>
    </div>
  )
}

export default CuentaCorriente