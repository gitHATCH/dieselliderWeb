import React from 'react'
import AccountConditionCard from '../components/AccountConditionCard'

const Pedido = () => {

  return (
    <div className=''>
      <div className='text-center mt-10'>
        <h1 className='font-mono font-semibold text-4xl'>Estado de Cuenta</h1>
      </div>
      <div className='flex w-full justify-center'>
        <div className='w-4/5 h-40 bg-slate-300 rounded-xl mt-10 shadow-xl shadow-black'>
          <AccountConditionCard/>
        </div>
      </div>
      <div className='text-center mt-10'>
        <h1 className='font-mono font-semibold text-4xl'>Su Pedido Actual</h1>
      </div>
      <div className='flex w-full justify-center'>
        <div className='w-4/5 h-40 bg-slate-300 rounded-xl mt-10 shadow-xl shadow-black'>


        </div>
      </div>
    </div>
  )
}

export default Pedido