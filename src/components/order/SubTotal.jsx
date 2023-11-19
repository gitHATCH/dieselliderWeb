import React from 'react'

const SubTotal = () => {
  const handleSubmit = () => {}
  return (
    <div className='p-5'>
      <div className='flex flex-row'>
        <div className='flex-1'>
          <h2 className='text-2xl font-bold'>Total en Productos</h2>
        </div>
        <div className='flex-1 text-right'>
          <h2 className='text-2xl font-bold'>$0.00</h2>
        </div>
      </div>
      <div className='mt-10 flex flex-row'>
        <div className='flex-1'>
          <h2 className='text-2xl font-bold'>Otros Impuestos</h2>
        </div>
        <div className='flex-1 text-right'>
          <h2 className='text-2xl font-bold'>$0.00</h2>
        </div>
      </div>
      <hr className='border-black mt-2' />

      <div className='mt-2 flex flex-row'>
        <div className='flex-1'>
          <h2 className='text-2xl font-bold'>Total del Pedido</h2>
        </div>
        <div className='flex-1 text-right'>
          <h2 className='text-2xl font-bold'>$0.00</h2>
        </div>
      </div>

      <div className='mt-10 flex justify-center'>
          <div className='flex items-center w-2/3 h-14 mt-5'>
              <button type="button" className="bg-orange-700 hover:bg-orange-800 rounded-md h-4/5 w-full text-white font-mono text-lg cursor-pointer uppercase py-2" onClick={handleSubmit}>
                  CONFIRMAR PEDIDO
              </button>
          </div>
      </div>
      <div className='flex 2xl:mt-2 px-1 mt-2'>
        <p className='forgot text-md 2xl:text-lg font-medium opacity-80 cursor-pointer'>Actualizar disponibilidad y precios del pedido</p>
      </div>
    </div>
  )
}

export default SubTotal