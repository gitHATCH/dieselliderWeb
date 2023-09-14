import React from 'react'
import AccountConditionCard from '../components/AccountConditionCard'
import AccoountConditionForm from '../components/Forms/AccountConditionForm'

const CuentaCorriente = () => {
  return (
    <div className=''>
        <div className='text-center mt-10'>
            <h1 className='font-mono font-semibold text-5xl'>Cuenta Corriente</h1>
        </div>
        <div className='mt-10 flex justify-center'>
            <div className='w-4/5'>
                <AccountConditionCard/>
            </div>
        </div>
        <div className='mt-10 flex justify-center'>
            <div className='w-4/5'>
            
                <AccoountConditionForm/>
                     
            </div>
        </div>
    </div>
  )
}

export default CuentaCorriente