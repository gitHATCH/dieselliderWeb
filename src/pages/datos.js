import React, { useContext, useState } from 'react'
import DataMenuHeader from '../components/subheaders/DataMenuHeader'
import DataGeneralForm from '../components/forms/data/DataGeneralForm'
import DataShippingForm from '../components/forms/data/DataShippingForm'
import DataTaxForm from '../components/forms/data/DataTaxForm'
import { HeaderContext } from '../hooks/HeaderContext'

const Datos = () => {
  const {dataPage,handleDataPage} = useContext(HeaderContext)

  return (
    <div className=''>
     
      <div className='flex justify-center'>
        <div className='w-3/4 bg-sec rounded-xl mt-10 p-10'>
          <div className='text-center'>
            <h1 className='font-mono font-semibold text-4xl text-slate-900'>
              {dataPage == 0 ? "Datos Generales y de Contacto" : dataPage == 1 ? "Domicilios de Envío" : "Inscripciones impositivas"}
            </h1>
          </div>
          <div className='mt-10 flex justify-center'>
            <div className='flex justify-center w-full'>
              {dataPage == 0 ? <DataGeneralForm/> : dataPage == 1 ? <DataShippingForm/> : <DataTaxForm/>}
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Datos