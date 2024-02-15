import React, { useContext, useState } from 'react'
import DataMenuHeader from '../components/subheaders/DataMenuHeader'
import DataGeneralForm from '../components/forms/data/DataGeneralForm'
import DataShippingForm from '../components/forms/data/DataShippingForm'
import DataTaxForm from '../components/forms/data/DataTaxForm'
import { HeaderContext } from '../hooks/HeaderContext'

const Datos = () => {
  const {dataPage,handleDataPage} = useContext(HeaderContext)

  return (
    <div className='mb-20'>
     <div className='text-center mt-5 sm:mt-10'>
            <h1 className='font-mono font-semibold text-xl sm:text-3xl lg:text-4xl'>
              {dataPage == 0 ? "Datos Generales y de Contacto" : dataPage == 1 ? "Domicilios de Envío" : "Inscripciones impositivas"}
            </h1>
          </div>
      <div className='flex justify-center'>
        
        <div className='flex justify-center w-4/5 mt-5 bg-slate-200 rounded-xl shadow-md shadow-black'>
          <div className='mt-5 flex justify-center p-5'>
            <div className='flex justify-center w-full flex-col lg:flex-row lg:justify-between'>
              {dataPage == 0 ? <DataGeneralForm/> : dataPage == 1 ? <DataShippingForm/> : <DataTaxForm/>}
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Datos