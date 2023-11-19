import React, { useContext, useState } from 'react'
import AccountConditionCard from '../components/cards/AccountConditionCard'
import { OrderContext } from '../hooks/OrderContext'
import OrderTable from '../components/orders/OrderTable'
import SpinnerProducts from '../components/spinners/SpinnerProducts'
import OrderForm from '../components/forms/OrderForm'
import SubTotal from '../components/order/SubTotal'

const Pedido = () => {
  const {order} = useContext(OrderContext)
  const [loading, setLoading] = useState(true)
  const [showTable, setShowTable] = useState(false)
  setTimeout(() => {
      setLoading(false)
      setShowTable(true)
  }, 2000);
  return (
    <div className=''>
      <div className='text-center mt-10'>
        <h1 className='font-mono font-semibold text-4xl'>Estado de Cuenta</h1>
      </div>
      <div className='flex w-full justify-center'>
        <div className='w-4/5 h-40 bg-slate-300 rounded-xl mt-10 shadow-md shadow-black'>
          <AccountConditionCard/>
        </div>
      </div>
      <div className='text-center mt-10'>
        <h1 className='font-mono font-semibold text-4xl'>Su Pedido Actual</h1>
      </div>
      <div className='flex justify-center w-full'>
        {loading && (
            <div className='flex items-center justify-center mt-5'>
                <SpinnerProducts/>
            </div>
        )}
        {showTable && (
          order?.length > 0 ? (
            <div className='mt-10 w-6/7'>
              <OrderTable/>
            </div>
          ) : (
            <div className='mt-5'>
              <h3 className='text-orange-700'>Nada en el carrito aún.</h3>
            </div>
          )
        )}
        </div>
        <div className='w-full flex justify-center'>

        
      <div className='mt-10 flex w-5/6 flex-row mb-20 bg-slate-200 rounded-xl shadow-md shadow-black p-10'>
        <div className='w-1/2 '>
            <OrderForm/>
        </div>
        
        <div className='w-1/2 '>
            <SubTotal/>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Pedido