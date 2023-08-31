import React, { useState } from 'react'
import DataMenuHeader from '../components/DataMenuHeader'
import DataGeneralForm from '../components/Forms/DataGeneralForm'
import DataShippingForm from '../components/Forms/DataShippingForm'
import DataTaxForm from '../components/Forms/DataTaxForm'

const Datos = () => {
  const [dataOption, setDataOption] = useState(0)

  return (
    <div className=''>
      <DataMenuHeader option={dataOption} change={setDataOption}/>
      <div className='flex justify-center'>
        <div className='w-3/4 bg-sec rounded-xl mt-10 p-10'>
          <div className='text-center'>
            <h1 className='font-mono font-semibold text-4xl text-slate-900'>
              {dataOption == 0 ? "Datos Generales y de Contacto" : dataOption == 1 ? "Domicilios de Envío" : "Inscripciones impositivas"}
            </h1>
          </div>
          <div className='mt-10 flex justify-center'>
            <div className='flex justify-center w-full'>
              {dataOption == 0 ? <DataGeneralForm/> : dataOption == 1 ? <DataShippingForm/> : <DataTaxForm/>}
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Datos