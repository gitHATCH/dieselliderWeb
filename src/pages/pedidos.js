import React from 'react'
import MyOrdersLayout from '../components/orders/MyOrdersLayout'

const Pedidos = () => {
  return (
    <div className=''>
        <div className='text-center mt-5 sm:mt-10'>
            <h1 className='font-mono font-semibold text-xl sm:text-3xl lg:text-4xl'>Mis Pedidos</h1>
        </div>
        <div className=''>
            
            <MyOrdersLayout/>
                     
        </div>
    </div>
  )
}

export default Pedidos