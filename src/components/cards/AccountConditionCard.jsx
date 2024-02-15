import React from 'react'
import "/node_modules/flag-icons/css/flag-icons.min.css";

const AccountConditionCard = () => {
    const data = {
        state:"HAB. CONDICIONADO ADM",
        condition:"0 DÍAS FECHA DE FACTURA",
        currency:"ARS",
        limit:"$ 3,600,000.00",
        available:"$ 0.00",
        overdue:"$ 0.00",
        toOverdue:"$ 0.00",
        debt:"$ 0.00"
    }

  return (
    <div className='w-full flex bg-slate-300 rounded-xl shadow-md shadow-black p-3'>
        <div className='flex flex-col sm:flex-row justify-center text-center sm:text-start sm:flex-wrap w-full gap-5 gap-y-5 sm:px-10 p-2'>   
             <div className='w-fit hidden sm:block'>
                <p className='text-lg font-semibold' style={{ whiteSpace: 'nowrap' }}>Estado de Cuenta: 
                    <span className='font-normal ml-4'>{data.state}</span> 
                </p>
                <p className='text-lg font-semibold ' style={{ whiteSpace: 'nowrap' }}>Condición de Pago:
                    <span className='font-normal ml-4'>{data.condition}</span> 
                </p>
                <p className='text-lg font-semibold'>Moneda:
                    <span className={`${data.currency === "ARS" ? "fi fi-ar ml-5" : ""}`}></span>
                    <span className='font-normal ml-1'>{data.currency}</span> 
                </p>
            </div>
            <div className='w-full flex flex-col justify-center text-center sm:hidden'>
                <p className='text-lg font-semibold' style={{ whiteSpace: 'nowrap' }}>Estado de Cuenta</p>
                <p className='font-normal ml-4'>{data.state}</p>
                <p className='text-lg font-semibold ' style={{ whiteSpace: 'nowrap' }}>Condición de Pago</p>
                <p className='font-normal ml-4'>{data.condition}</p> 
                <p className='text-lg font-semibold'>Moneda
                    <span className={`${data.currency === "ARS" ? "fi fi-ar ml-5" : ""}`}></span>
                    <span className='font-normal ml-1'>{data.currency}</span> 
                </p>
                <p className='text-lg font-semibold mb-4' style={{ whiteSpace: 'nowrap' }}>Límite Crédito</p>
                <div className='flex justify-center'>
                    <p className='w-1/2 font-normal shadow-black shadow-inner p-1 rounded-sm'>{data.limit}</p>
                </div>
                <p className='text-lg font-semibold mb-4 mt-4' style={{ whiteSpace: 'nowrap' }}>Disponible</p>
                <div className='flex justify-center'>
                    <p className='w-1/2 font-normal shadow-black shadow-inner p-1 rounded-sm'>{data.available}</p>
                </div>

            </div>

            

            <div className='ml-5 mr-5 gap-10 justify-between w-fit hidden sm:flex'>
                <div className='w-1/2'>
                    <p className='text-lg font-semibold' style={{ whiteSpace: 'nowrap' }}>Límite Crédito:</p>
                    <p className='text-lg font-semibold'>Disponible:</p>
                </div>
                <div className='w-1/2'>
                    <p className='font-normal shadow-black shadow-inner p-1 rounded-sm'>{data.limit}</p>
                    <p className='font-normal shadow-black shadow-inner p-1 rounded-sm'>{data.available}</p>
                </div>
            </div>
                
                <div className=' justify-between gap-10 items-center w-fit hidden sm:flex'>
                    <div className='w-1/2'>
                        <p className='text-lg font-semibold' style={{ whiteSpace: 'nowrap' }}>Total Vencido:</p>
                        <p className='text-lg font-semibold' style={{ whiteSpace: 'nowrap' }}>Total a Vencer:</p>
                        <p className='text-lg font-semibold' style={{ whiteSpace: 'nowrap' }}>Total Deuda:</p>
                    </div>
                    <div className='w-1/2'>
                        <p className='font-normal shadow-black shadow-inner p-1 rounded-sm bg-red-400'>{data.overdue}</p>
                        <p className='font-normal shadow-black shadow-inner p-1 rounded-sm bg-green-400'>{data.toOverdue}</p>
                        <p className='font-normal shadow-black shadow-inner p-1 rounded-sm'>{data.debt}</p>
                    </div>
                </div>


        </div>
     </div>
  )
}

export default AccountConditionCard