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
    <div className='w-full bg-slate-300 rounded-xl shadow-md shadow-black p-3'>
        <div className='flex flex-row w-full'>
            <div className='w-full p-2 px-5'>
                <p className='text-lg font-semibold'>Estado de Cuenta: 
                    <span className='font-normal ml-5'>{data.state}</span> 
                </p>
                <p className='text-lg font-semibold'>Condición de Pago:
                    <span className='font-normal ml-5'>{data.condition}</span> 
                </p>
                <p className='text-lg font-semibold'>Moneda:
                    <span className={`${data.currency === "ARS" ? "fi fi-ar ml-5" : ""}`}></span>
                    <span className='font-normal ml-1'>{data.currency}</span> 
                </p>

            </div>
            <div className='w-2/3'>
                <div className='flex flex-row w-full p-2'>
                    <div className='w-1/2'>
                        <p className='text-lg font-semibold'>Límite Crédito:</p>
                        <p className='text-lg font-semibold'>Disponible:</p>
                    </div>
                    <div className='w-1/2'>
                        <p className='font-normal shadow-black shadow-inner p-1 rounded-sm'>{data.limit}</p>
                        <p className='font-normal shadow-black shadow-inner p-1 rounded-sm'>{data.available}</p>
                    </div>
                </div>
                
            </div>
            <div className='w-2/3'>
                <div className='flex flex-row w-full p-2'>
                    <div className='w-1/2'>
                        <p className='text-lg font-semibold'>Total Vencido:</p>
                        <p className='text-lg font-semibold'>Total a Vencer:</p>
                        <p className='text-lg font-semibold'>Total Deuda:</p>
                    </div>
                    <div className='w-1/2'>
                        <p className='font-normal shadow-black shadow-inner p-1 rounded-sm bg-red-400'>{data.overdue}</p>
                        <p className='font-normal shadow-black shadow-inner p-1 rounded-sm bg-green-400'>{data.toOverdue}</p>
                        <p className='font-normal shadow-black shadow-inner p-1 rounded-sm'>{data.debt}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AccountConditionCard