import React, { useContext, useState } from 'react'
import AccountConditionCard from '../components/cards/AccountConditionCard'
import { OrderContext } from '../hooks/OrderContext'
import OrderTable from '../components/tables/OrderTable'
import SpinnerProducts from '../components/spinners/SpinnerProducts'
import OrderForm from '../components/forms/OrderForm'
import SubTotal from '../components/order/SubTotal'
import { useRouter } from 'next/router'
import { ModalContext } from '../hooks/ModalContext'
import { Modal } from '@mui/material'
import ModalVerify from '../components/modals/ModalVerify'

const Pedido = () => {
  const {order,deleteProducts} = useContext(OrderContext)
  const {modalVerify,handleModalVerify} = useContext(ModalContext)

  const [loading, setLoading] = useState(true)
  const [showTable, setShowTable] = useState(false)
  const router = useRouter()

  setTimeout(() => {
      setLoading(false)
      setShowTable(true)
  }, 2000);

  const handleContinue = () => {
    router.push("/")
  }
  const handleDiscard = () => {
    handleModalVerify()
  }

  

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

        
      <div className='mt-10 flex w-5/6 flex-row bg-slate-300 rounded-xl shadow-md shadow-black p-10'>
        <div className='w-1/2'>
            <OrderForm/>
        </div>
        
        <div className='w-1/2 '>
            <SubTotal/>
        </div>
      </div>
      </div>
      <div className='w-full flex justify-center mb-20'>
        <div className='w-5/6'>
          <div className='flex items-center w-1/3 h-14 mt-5'>
              <button type="button" className="bg-blue-700 hover:bg-blue-800 rounded-md h-4/5 w-full text-white font-mono text-lg cursor-pointer uppercase py-2" onClick={handleContinue}>
                  Continuar Comprando
              </button>
          </div>
          <div className='flex 2xl:mt-2 px-1 mt-2'>
            <p className='forgot text-lg 2xl:text-lg font-medium opacity-80 cursor-pointer text-black' onClick={handleDiscard}>Descartar Pedido Actual</p>
          </div>
        </div>
      </div>
            {modalVerify && <ModalVerify/>}
    </div>
  )
}

export default Pedido